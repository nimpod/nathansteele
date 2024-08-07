"""
This python script allows us to do 2 things:
1) Automatically download my letterboxd data without having to manually find and click the button.
2) Automatically regnerate the json file that stores data about each film retrieved from online sources (letterboxd film page, tmdb api).
"""

import time
import os
import zipfile
import csv
import json
import glob
import requests
from json.decoder import JSONDecodeError
from pathlib import Path
from bs4 import BeautifulSoup
from urllib3.exceptions import InsecurePlatformWarning, InsecureRequestWarning
from urllib3 import disable_warnings
disable_warnings(InsecurePlatformWarning)
disable_warnings(InsecureRequestWarning)
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By

# https://devpress.csdn.net/python/630454e3c67703293080b48b.html
session = requests.Session()


class Helpers:
    """ Useful functions (TODO: move to separate file) """
    
    def read_txt_file(relative_path_to_txt_file: str):
        """
        Read content of a txt file
        """
        with open(file=relative_path_to_txt_file) as f:
            lines = f.read()
        return lines


    def simplify_movie_title(title: str):
        """
        Examples:
            Tag = tag
            A Ghost Story = aghoststory
            2001 Space Odyssey = 2001spaceodyssey
            Face/Off = faceoff
            K-PAX = kpax
            Mother! = mother
            Exte: Hair Extensions = extehairextensions
            Big Fish & Begonia = bigfishandbegonia
        """
        return title.replace(" ", "")\
                    .replace(".", "")\
                    .replace("/", "")\
                    .replace("(", "")\
                    .replace(")", "")\
                    .replace("[", "")\
                    .replace("]", "")\
                    .replace("!", "")\
                    .replace("?", "")\
                    .replace("'", "")\
                    .replace("\"", "")\
                    .replace(":", "")\
                    .replace(";", "")\
                    .replace("-", "")\
                    .replace(",", "")\
                    .replace("·", "")\
                    .replace("&", "and")\
                    .replace("Ã¸", "o")\
                    .replace("Ã", "a")\
                    .replace("Â", "")\
                    .replace("¤", "")\
                    .replace("ã", "a")\
                    .replace("¸", "")\
                    .lower()


def download_letterboxd_data():
    """
    Function to automatically download letterboxd data (uses selenium python library)
    """    
    # setup selenium...
    # (if this stops working, try `pip3 install --update requests`)
    option = webdriver.ChromeOptions()
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()),options=option)
    driver.get(url="https://letterboxd.com/settings/data/")

    # enter username & password...
    username = driver.find_element(By.ID, "field-username")
    print(username)
    username.send_keys(Helpers.read_txt_file('../../../../blahu.txt'))
    password = driver.find_element(By.ID, "field-password")
    password.send_keys(Helpers.read_txt_file('../../../../blahp.txt'))

    # click sign in button
    button_sign_in = driver.find_element(By.CSS_SELECTOR, "button.standalone-flow-button")
    button_sign_in.click()

    # wait for website to load properly...
    time.sleep(7)

    # click the "EXPORT YOUR DATA" button
    button_export_data_link = driver.find_element(By.CLASS_NAME, 'export-data-link')
    button_export_data_link.click()

    # wait for the other window to appear...
    time.sleep(4)

    # click the "EXPORT DATA" button
    button_export_data = driver.find_element(By.CLASS_NAME, 'export-data-button')
    button_export_data.click()

    # wait for zip file to download...
    print('Downloading zip export from letterboxd...')
    time.sleep(10)

    # close web browser
    driver.quit()


def regenerate_json_file():
    """
    Function to re-generate json file based on most recently downloaded letterboxd data
    """
    
    # filepaths used in generating json data...
    dir_export = f"C:\\Users\\{os.getlogin()}\\Downloads"
    list_name = 'my-favourite-films.csv'
    json_output_filename = 'webdata_top_films_list.json'
    path_to_rootreducer = f'D:\\Programming-Projects\\nathansteele\\src\\reducers\\RootReducer.js'
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
            print(f"Found the zip export! -> {zip_file_name}")
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
                title = csv_row[1]
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
                tmdb_url = ""
                poster_url = ""
                
                # parse data from letterboxd web page... (this takes ~1.21s)
                page = session.get(url=letterboxd_url, verify=False, stream=True)
                soup = BeautifulSoup(page.content, 'html.parser')
                # print(soup)
                
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
                url_buttons = footer.select('a.micro-button')
                for url in url_buttons:
                    if 'imdb' in url.text.lower():
                        # get IMDB URL
                        imdb_url = url['href']
                    elif 'tmdb' in url.text.lower():
                        # get TMDB URL
                        tmdb_url = url['href']
                    if len(url_buttons) == 1:
                        # if there's only 1 url_button, it's usually the IMDB link that's missing...
                        if soup.select_one('#featured-film-header > h1').text == 'xxxHOLiC':
                            imdb_url = 'https://www.imdb.com/title/tt16233104/'

                # retrieve avg rating on letterboxd
                # page_content_str = page.content.decode('utf-8')
                # letterboxd_avg_rating = soup.select_one('.average-rating')

                # Use the OMDB API (https://www.omdbapi.com/) to retrieve some additional data from IMDB website...
                omdb_api_key = '4af56bed'   # apparently this expires after 1000 days (today is 07/02/2023, 1000 days from now is 03/11/2025... holy shit!)
                imdb_film_id = imdb_url.split('/')[-2]
                url = f'http://www.omdbapi.com/?i={imdb_film_id}&apikey={omdb_api_key}'
                imdb = requests.get(url=url, verify=False)
                print(f" > {pos}: {imdb.text}")

                try:
                    imdb_json = json.loads(imdb.text)
                except JSONDecodeError:
                    print('uh oh')
                
                if (imdb_json['Response'] == "False"):
                    print(imdb_json)
                else:
                    # retrieve avg IMDB rating
                    imdb_avg_rating = imdb_json['imdbRating']
                    if imdb_avg_rating == "N/A":
                        print(f'!!!!!!!!!!!!!!!Cannot automatically find the IMDB avg rating for \"{title}\" ({imdb_url})... Very annoying!!!!!!!!!!!!!!!')
                        if (title == 'Convenience Story' and imdb_url == 'http://www.imdb.com/title/tt22775702/maindetails'):
                            imdb_avg_rating = 5.7
                        elif (title == 'The Fifth Thoracic Vertebra' and imdb_url == 'http://www.imdb.com/title/tt23640302/maindetails'):
                            imdb_avg_rating = 6.4
                        elif (title == 'Ribbon' and imdb_url == 'http://www.imdb.com/title/tt14703070/maindetails'):
                            imdb_avg_rating = 6.3
                        print(f'imdb_avg_rating = {imdb_avg_rating}')
                
                    # retrieve number of votes on IMDB (we remove the comma, because react is fucking stupid and cant sort numbers when they contain commas)
                    imdb_num_votes = imdb_json['imdbVotes'].replace(',', '')
                
                    # retrieve poster from IMDB
                    poster_url = imdb_json['Poster']
                    if 'SX300' in poster_url:
                        poster_url = poster_url.split('SX300')[0]
                
                    # retrieve title from IMDB (because letterboxd parsing is shite!)
                    # title = imdb_json['Title']
                
                    # retrieve list of directors (because letterboxd parsing is shite!)
                    directors = imdb_json['Director'].split(', ')
                
                # id of my review!
                titlev2 = Helpers.simplify_movie_title(title=title)
                review_id = f"{titlev2}-{letterboxd_film_id}-review"
            
                # DEBUGGING....
                #print(f" > {pos}: {title} (imdb_avg_rating={imdb_avg_rating})")
                #print(f' > Title = ({title})')
                #print(f' > IMDB url = ({imdb_url})')
                #print(f' > Language = ({language})')
            
                # append to list...
                letterboxd_list.append({
                    'position': pos,
                    'letterboxd_film_id': letterboxd_film_id,
                    'letterboxd_url': letterboxd_url,
                    'poster_url': poster_url,
                    'title': title,
                    'year': year,
                    'duration': duration,
                    'language': language,
                    'directors': directors,''
                    'genres': genres,
                    'IMDB_film_id': imdb_film_id,
                    'IMDB_url': imdb_url,
                    'IMDB_avg_rating': imdb_avg_rating,
                    'IMDB_num_votes': imdb_num_votes,
                    'TMDB_url': tmdb_url,
                    'review_id': review_id
                })
                    
            # clear json file first...
            open(path_to_json_output, 'w').close()
            
            # write new content...
            with open(path_to_json_output, 'w') as f:
                json.dump(letterboxd_list, f, indent=4)
            
            print(f'JSON export finished! -> {path_to_json_output}')



# call my functions...
download_letterboxd_data()
regenerate_json_file()
