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
musicbee_export_filename = 'All time best albums.m3u'
path_to_musicbee_export = f"{dir_export}\\{musicbee_export_filename}"
json_output_filename = 'reviews_web_data.json'
path_to_json_output = f'D:\\Programming-Projects\\nathansteele\\src\\components\\music\\{json_output_filename}'

# local version of list
albums_list = []

# locate m3u export
if os.path.exists(path_to_musicbee_export):
    with open(path_to_musicbee_export, 'r', encoding="utf8") as f:
        # convert m3u to str
        content = f.read()

        # convert str to list
        toplist = content.split('D:\\Music\\Music files\\')
        toplist = toplist[1:]   # dunno why there's a blank item at front of list
        ##print(toplist)
        
        # number of albums in toplist
        num_of_albums = len(toplist)
        print(f"There are {num_of_albums} albums in my toplist")
        
        # iterate over list...
        print('==================================================')
        pos = 0
        for elem in toplist:
            pos += 1
            
            # seperate artist name from album name
            firstpart = elem.split('\\')[0]
            artist_name = firstpart.split('-')[0].strip()
            album_name = firstpart.split('-')[1].strip()
            print(f"{pos}: {artist_name} - {album_name}")
            
            # somehow get more data via an API...
            genres = []
            year_of_release = ""
            duration = ""
            album_cover = ""
            rym_link = ""
            
            # append to list...
            albums_list.append({
                'position': pos,
                'artistName': artist_name,
                'albumName': album_name,
                'genres': genres,
                'yearOfRelease': year_of_release,
                'duration': duration,
                'albumCover': album_cover,
                'rymLink': rym_link
            })
        
        # clear json file first...
        open(path_to_json_output, 'w').close()
        
        # write new content...
        with open(path_to_json_output, 'w') as f:
            json.dump(albums_list, f, indent=4)
        
        print(f'JSON export finished! -> {path_to_json_output}')
        