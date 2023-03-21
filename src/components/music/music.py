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


# 
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
        i = 0
        for elem in toplist:
            i += 1
            firstpart = elem.split('\\')[0]
            artist_name = firstpart.split('-')[0]
            album_name = firstpart.split('-')[1]
            print(f"{i}: {artist_name}-{album_name}")
        