"""
Python script to do extract a particular csv (i.e. letterboxd list) from letterboxd export, and convert it to JSON file...
====================================================================
    1) find letterboxd zip export
    2) extract zip automatically (if not done already)
    3) locate csv file of interest
    4) iterate over each row (i.e. each film) in csv file:
        4.1) append data about 1st film to a JSON array
        4.2) append data about 2nd film to a JSON array
        4.3) append data about 3rd film to a JSON array
        ...
    5) store final result in JSON file
"""

import os
import zipfile
import csv
import json
import glob
import requests
from bs4 import BeautifulSoup
from urllib3.exceptions import InsecurePlatformWarning, InsecureRequestWarning
from urllib3 import disable_warnings

# ignore annoying warnings...
disable_warnings(InsecurePlatformWarning)
disable_warnings(InsecureRequestWarning)


# filepaths...
dir_export = f"C:\\Users\\{os.getlogin()}\\Downloads"
list_name = 'my-favourite-films.csv'
json_output_filename = 'reviews_web_data.json'
path_to_rootreducer = f'D:\\Programming-Projects\\nathansteele\\src\\reducers\\RootReducer.js';
path_to_json_output = f'D:\\Programming-Projects\\nathansteele\\src\\components\\films\\{json_output_filename}'


# 1) find letterboxd zip export...
prefix = 'letterboxd'
postfix = 'utc.zip'
zip_file_name = ""
download_folder = sorted(glob.glob(f"{dir_export}/*.zip"), key=os.path.getmtime)
download_folder.reverse()   # reversing the list means most recent downloads are first in the list...
for filepath in download_folder:
    filename = filepath.split('\\')[-1]
    if filename.split('-')[0] == prefix and filename.split('-')[-1] == postfix:
        zip_file_name = filename
        print(f"Found zip file! -> {zip_file_name}")
        break
    else:
        continue

path_to_zip_file = f"{dir_export}\\{zip_file_name}"     # path to zip file we downlodaded from letterboxd...
path_to_extracted_zip = f"{dir_export}\\{zip_file_name[:-4]}"   # path to extracted zip (which we are about to do)...


# 2) extract zip automatically (if not done already)...
if os.path.exists(path=path_to_zip_file):
    if not os.path.exists(path=path_to_extracted_zip):
        with zipfile.ZipFile(file=path_to_zip_file , mode='r') as z:
            z.extractall(path_to_extracted_zip)
            print(f"Extract complete! -> {path_to_extracted_zip}")
    else:
        print(f'Zip file already exists... No need to extract again... -> ({path_to_extracted_zip})')
else:
    print(f'Zip file could not be found... -> ({path_to_zip_file})')


# local version of letterboxd data list
letterboxd_list = []

# 3) locate the csv file of interest
if os.path.exists(path_to_extracted_zip):    
    # open csv file...
    path_to_list = f'{path_to_extracted_zip}\\lists\\{list_name}'
    with open(path_to_list, 'r') as f:
        # csv reader object
        csv_reader = csv.reader(f)
        
        # skip header in the csv file...
        rows_to_skip = 5
        for i in range(0, rows_to_skip):
            next(csv_reader)
               
        # 4) iterate over each row (i.e. each film) in csv file...
        for csv_row in csv_reader:
            pos = csv_row[0]
            year = csv_row[2]
            letterboxd_url = csv_row[3]
            letterboxd_film_id = letterboxd_url.split('/')[-1]
            genres = []
            directors = []
            duration = 0
            language = ""
            imdb_url = ""
            imdb_avg_rating = ""
            imdb_num_votes = ""
            poster_url = ""
            
            # parse data from letterboxd web page... (this takes ~1.21s)
            page = requests.get(url=letterboxd_url, verify=False, stream=True)
            soup = BeautifulSoup(page.content, 'html.parser')
            
            # retrieve list of genres...
            div_genres = soup.select_one('#tab-genres')
            for link in div_genres.select('div.text-sluglist a.text-slug[href]'):
                if 'genre' in link['href']:
                    genre = link.text.capitalize()
                    if genre == 'Science-fiction':
                        genre = 'Sci-fi'
                    genres.append(genre)

            # retrieve duration
            textfooter = soup.select_one('section.col-main > p.text-footer').text
            if 'mins' in textfooter:
                minstext = textfooter.find('mins', 0, len(textfooter))
                duration = textfooter[minstext-5:minstext].strip()
            
            # retrieve the first spoken language
            div_details = soup.select_one('#tab-details')
            for link in div_details.select('div.text-sluglist a.text-slug[href]'):
                if 'language' in link['href']:
                    language = link.text.capitalize()
                    break
        
            # retrieve IMDB url
            footer = soup.select_one('section.col-main p.text-footer')
            for link in footer.select('a.micro-button'):
                if 'imdb' in link.text.lower():
                    imdb_url = link['href']

            # Use the OMDB API (https://www.omdbapi.com/) to retrieve some additional data from IMDB website...
            omdb_api_key = '4af56bed'   # apparently this expires after 1000 days (today is 07/02/2023, 1000 days from now is 03/11/2025... holy shit!)
            imdb_film_id = imdb_url.split('/')[-2]
            url = f'http://www.omdbapi.com/?i={imdb_film_id}&apikey={omdb_api_key}'
            imdb = requests.get(url=url, verify=False)
            imdb_json = json.loads(imdb.text)

            # retrieve avg IMD rating
            imdb_avg_rating = imdb_json['imdbRating']
            
            # retrieve number of votes on IMDB
            imdb_num_votes = imdb_json['imdbVotes']
            
            # retrieve poster from IMDB
            poster_url = imdb_json['Poster']
            
            # retrieve title from IMDB (because letterboxd parsing is shite!)
            title = imdb_json['Title']
            
            # retrieve list of directors (because letterboxd parsing is shite!)
            directors = imdb_json['Director'].split(', ')
            
            # DEBUGGING....
            print(f" > {pos}: {title} {letterboxd_url}")
            #print(f' > Title = ({title})')
            #print(f' > IMDB url = ({imdb_url})')
            #print(f' > Language = ({language})')
            #print(f' > Duration = ({duration})')
            #print(f' > Genres = ({genres})')
            #print(f' > IMDB avg rating = ({imdb_avg_rating})')
            #print(f' > IMDB num votes = ({imdb_num_votes})')
            #print(f' > Poster = ({poster_url})')
            #print(f' > Directors = ({directors})')
            #print(f' > Tags = ({my_tags})')
            
            # append to list...
            letterboxd_list.append({
                'letterboxdFilmId': letterboxd_film_id,
                'imdbFilmId': imdb_film_id,
                'letterboxdUrl': letterboxd_url,
                'imdbUrl': imdb_url,
                'posterUrl': poster_url,
                'position': pos,
                'title': title,
                'year': year,
                'duration': duration,
                'language': language,
                'imdbAvgRating': imdb_avg_rating,
                'imdbNumVotes': imdb_num_votes,
                'directors': directors,
                'genres': genres,
            })
                
        # clear json file first...
        open(path_to_json_output, 'w').close()
        
        # write new content...
        with open(path_to_json_output, 'w') as f:
            json.dump(letterboxd_list, f, indent=4)
        
        print(f'JSON export finished! -> {path_to_json_output}')