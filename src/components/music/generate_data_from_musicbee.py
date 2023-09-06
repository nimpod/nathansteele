import os
import zipfile
import csv
import json
import glob
import json
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

# stuff for lastfm API...
# API applications -> https://www.last.fm/api/accounts
# API documentation -> https://www.last.fm/api/show/album.getInfo
API_KEY = '641be1ed643c913edb609208c24efad7'
USER_AGENT = 'gutash'
headers = {
    'user-agent': USER_AGENT
}
payload = {
    'api_key': API_KEY,
    'method': 'chart.gettopartists',
    'format': 'json'
}


class Helpers:
    """ Useful functions (TODO: move to separate file) """
    
    def fix_symbols_on_album_filenames(folder_name: str):
        """
        Because on windows you can't put certain icons in file names, and the musicbee export is based on the name of the folder represting the album!!!
        """
        return folder_name.replace('~', ':')\
                            .replace('¬', "\"")\
                            .replace('@', '?')

    def remove_special_characters(str_to_edit):
        return str_to_edit.replace(" ", "_")\
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


def generate_data_from_musicbee():
    """
    Essentially converts an m3u musicbee export into a json file
    """
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
                # position in toplist is just a counter
                pos += 1
                pos_padded = f"{pos:03}"
                
                # essentially the name of the folder containing the songs from the album
                folder_name = elem.split('\\')[0]
                # but the symbols need to be replaced...
                folder_name_fixed = Helpers.fix_symbols_on_album_filenames(folder_name=folder_name)
                
                # extract artist name & album name...
                artist_name = folder_name_fixed.split(' - ')[0].strip()
                album_name = folder_name_fixed.split(' - ')[1].strip()
                # print(f"{pos_padded}: {artist_name} - {album_name}")
                
                # construct review ID...
                artist_name_v2 = Helpers.remove_special_characters(artist_name)
                album_name_v2 = Helpers.remove_special_characters(album_name)
                review_id = f"{artist_name_v2}-{album_name_v2}"
                print(f"{pos_padded}: {review_id}")
                
                # get more data via LastFM API...
                data = lastfm_get_album_info(artist_name=artist_name, album_name=album_name)
                # print(pretty_print_json(data))
                last_fm_url = ""
                album_cover_url = ""
                duration = 0

                # some albums dont work...
                if 'album' in data:
                    # get lastfm url...
                    if "url" in data['album']:
                        last_fm_url = data['album']['url']
                    else:
                        print('not url found :(')
                
                    # calculate duration (if track info was in response)...
                    """
                    if 'tracks' in data['album']:
                        for track in data['album']['tracks']['track']:
                            if track['duration']:
                                duration += int(track['duration'])
                            else:
                                print('no duration info :(')
                    else:
                        print('no tracks info :(')
                    """
                
                    # get album cover (if it was in response)...
                    if 'image' in data['album']:
                        album_cover_url = data['album']['image'][-1]['#text']
                    else:
                        print('no album cover found :(')
                
                # append to list...
                albums_list.append({
                    'position': pos,
                    'positionStr': pos_padded,
                    'lastFmUrl': last_fm_url,
                    'artistName': artist_name,
                    'albumName': album_name,
                    'duration': duration,
                    'albumCoverUrl': album_cover_url,
                    'reviewId': review_id,
                })
            
            # clear json file first...
            open(path_to_json_output, 'w').close()
            
            # write new content...
            with open(path_to_json_output, 'w') as f:
                json.dump(albums_list, f, indent=4)
            
            print(f'JSON export finished! -> {path_to_json_output}')


def lastfm_get(payload):
    """
    Execute GET request on the LastFM API
    """
    # define headers and URL
    headers = {'user-agent': USER_AGENT}
    url = 'https://ws.audioscrobbler.com/2.0/'

    # Add API key and format to the payload
    payload['api_key'] = API_KEY
    payload['format'] = 'json'

    # execute GET request...
    response = requests.get(url, headers=headers, params=payload)
    return response


def pretty_print_json(obj):
    """
    Create a formatted string of the Python JSON object
    """
    text = json.dumps(obj, sort_keys=True, indent=4)
    print(text)


def lastfm_get_album_info(artist_name, album_name):
    """
    Get album info
    """
    r = lastfm_get({ 
        'method': 'album.getinfo',
        'artist': artist_name,
        'album': album_name
    })
    # print(r)
    # print(r.json())
    # pretty_print_json(r.json())
    return r.json()


## 
generate_data_from_musicbee()