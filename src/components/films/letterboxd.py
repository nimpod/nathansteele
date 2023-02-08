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
reviews_local_json_filename = 'reviews-local.json'
reviews_allData_json_filename = 'reviews-allData.json'
path_to_local_reviews_json = f'D:\\Programming-Projects\\nathansteele\\src\\components\\films\\{reviews_local_json_filename}'
path_to_allData_reviews_json = f'D:\\Programming-Projects\\nathansteele\\src\\components\\films\\{reviews_allData_json_filename}'


# find zip file...
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

# path to zip file we downlodaded from letterboxd...
path_to_zip_file = f"{dir_export}\\{zip_file_name}"

# path to extracted zip (which we are about to do)...
path_to_extracted_zip = f"{dir_export}\\{zip_file_name[:-4]}"

# do the extraction
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

# locate the csv file...
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
        
        # load in my local reviews json file...
        reviews_json = None
        with open(path_to_local_reviews_json, 'r') as f:
            reviews_json = json.load(f)
               
        # iterate letterboxd csv data...
        for csv_row in csv_reader:
            pos = csv_row[0]
            year = csv_row[2]
            letterboxd_url = csv_row[3]
            genres = []
            directors = []
            duration = 0
            language = ""
            imdb_url = ""
            imdb_avg_rating = ""
            imdb_num_votes = ""
            poster_url = ""
            my_review = ""
            my_rating = 0
            my_tags = []
            my_screenshots = []
            my_poster = ""
            date_reviewed = ""
            
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
            
            # get my local review data...
            for review in reviews_json:
                if review['title'].lower() == title.lower():
                    my_review = review['myReview']
                    my_rating = review['myRating']
                    my_tags = review['myTags']
                    my_screenshots = review['screenshots']
                    if 'titleDisplayed' in review:
                        title = review['titleDisplayed']
                    if 'dateReviewed' in review:
                        date_reviewed = review['dateReviewed']
                    if 'poster' in review:
                        poster_url = review['poster']
            
            # DEBUGGING....
            print(f" > {pos}: {title} {letterboxd_url}")
            print(f' > Title = ({title})')
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
                'position': pos,
                'title': title,
                'year': year,
                'directors': directors,
                'duration': duration,
                'language': language,
                'imdbAvgRating': imdb_avg_rating,
                'imdbNumVotes': imdb_num_votes,
                'urlLetterboxd': letterboxd_url,
                'urlImdb': imdb_url,
                'imdbFilmId': imdb_film_id,
                'genres': genres,
                'dateReviewed': date_reviewed,
                'myRating': my_rating,
                'myReview': my_review,
                'urlPoster': poster_url,
                'tags': my_tags,
                'screenshots': my_screenshots,
            })
                
        # clear json file first...
        open(path_to_allData_reviews_json, 'w').close()
        
        # write new content...
        with open(path_to_allData_reviews_json, 'w') as f:
            json.dump(letterboxd_list, f, indent=4)
        
        print(f'JSON export finished! -> {path_to_allData_reviews_json}')