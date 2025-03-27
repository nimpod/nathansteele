import os
import json
import time

from LastFm import LastFM
from LastFm import TIME_PERIOD_OPTIONS
from musicbee_helpers import MusicbeeHelpers
from Helpers import export_list_to_json
from Helpers import append_list_to_existing_json

from urllib3.exceptions import InsecurePlatformWarning, InsecureRequestWarning
from urllib3 import disable_warnings

# ignore annoying warnings...
disable_warnings(InsecurePlatformWarning)
disable_warnings(InsecureRequestWarning)


json_input_filename = 'webdata_top_albums_list.json'
rootpath_laptop = f'C:\\dev'

fullpath_to_json_input = f'{rootpath_laptop}\\nathansteele\\src\\components\\music\\{json_input_filename}'

m3u = ""

if os.path.exists(fullpath_to_json_input):
    with open(fullpath_to_json_input, 'r', encoding="utf8") as f:
        data = json.load(f)
        for v in data:
            artist_name = v['artist_name']
            album_name = v['album_name']

            combined = f'{artist_name} - {album_name}'
            full_structure = f'D:\Music\Music files\{combined}\\01 - cunt.mp3'

            m3u += full_structure +  "\n"

print(m3u)

with open("src/components/music/python_stuff/FAVOURITE_ALBUMS.m3u", "w+", encoding="utf8") as file:
    file.write(m3u)
