import os
import json

from LastFm import LastFM
from LastFm import GET_TOP_TRACKS_TIME_PERIOD_OPTIONS
from MusicbeeHelpers import MusicbeeHelpers

from urllib3.exceptions import InsecurePlatformWarning, InsecureRequestWarning
from urllib3 import disable_warnings

# ignore annoying warnings...
disable_warnings(InsecurePlatformWarning)
disable_warnings(InsecureRequestWarning)


# create instance of my class that communicates with LastFM API...
lastfm = LastFM(API_KEY='641be1ed643c913edb609208c24efad7', USERNAME='gutash')


def convert_m3u_to_json():
    """
    Convert an m3u musicbee export into a json file
    """
    
    # filepaths...
    dir_export = f"C:\\Users\\{os.getlogin()}\\Downloads"
    musicbee_export_filename = 'All time best albums.m3u'
    path_to_musicbee_export = f"{dir_export}\\{musicbee_export_filename}"
    json_output_filename = 'reviews_web_data.json'
    path_to_json_output = f'D:\\Programming-Projects\\nathansteele\\src\\components\\music\\{json_output_filename}'
    path_to_music_files_storage = 'D:\\Music\\Music files\\'
    
    # locate m3u export
    if os.path.exists(path_to_musicbee_export):
        with open(path_to_musicbee_export, 'r', encoding="utf8") as f:
            # convert m3u to str
            content = f.read()

            # convert str to list
            toplist = content.split(path_to_music_files_storage)
            toplist = toplist[1:]   # dunno why there's a blank item at front of list
            ##print(toplist)
            
            # number of albums in toplist
            num_of_albums = len(toplist)
            print(f"There are {num_of_albums} albums in my toplist")
            
            # local version of list
            albums_list = []
            
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
                folder_name_fixed = MusicbeeHelpers.fix_symbols_on_album_filenames(folder_name=folder_name)
                
                # extract artist name & album name...
                artist_name = folder_name_fixed.split(' - ')[0].strip()
                album_name = folder_name_fixed.split(' - ')[1].strip()
                # print(f"{pos_padded}: {artist_name} - {album_name}")
                
                # construct review ID...
                artist_name_v2 = MusicbeeHelpers.remove_special_characters_based_on_musicbee_export(artist_name)
                album_name_v2 = MusicbeeHelpers.remove_special_characters_based_on_musicbee_export(album_name)
                review_id = f"{artist_name_v2}-{album_name_v2}"
                print(f"{pos_padded}: {review_id}")
                
                # get more data via LastFM API...
                data = lastfm.GET_album_info(artist_name=artist_name, album_name=album_name)
                last_fm_url = ""
                album_cover_url = ""
                duration = 0
                tracks = []

                # some albums dont work...
                if 'album' in data:
                    # get lastfm url...
                    if 'url' in data['album']:
                        last_fm_url = data['album']['url']
                        print(last_fm_url)
                    else:
                        print('not url found :(')
                
                    # get tracks...
                    if 'tracks' in data['album']:
                        for track in data['album']['tracks']['track']:
                            tracks.append(track)
                            #if (track['duration']):
                            #    duration += int(track['duration'])
                            #else:
                            #    print('no duration info :(')
                    else:
                        print('no tracks info :(')
                
                    # get album cover (if it was in response)...
                    if 'image' in data['album']:
                        album_cover_url = data['album']['image'][-1]['#text']
                        print(album_cover_url)
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
                    'tracks': tracks,
                    'albumCoverUrl': album_cover_url,
                    'reviewId': review_id,
                })
            
            # clear json file first...
            open(path_to_json_output, 'w').close()
            
            # write new content...
            with open(path_to_json_output, 'w') as f:
                json.dump(albums_list, f, indent=4)
            
            print(f'JSON export finished! -> {path_to_json_output}')


def get_top_tracks(period=GET_TOP_TRACKS_TIME_PERIOD_OPTIONS.OVERALL.value, limit=10):
    """
    Get top tracks.
    """
    
    data = lastfm.GET_my_top_tracks(period=period, limit=limit)
    if 'toptracks' in data:
        if 'track' in data['toptracks']:
            print(f'MY TOP {limit} MOST LISTENED SONGS ({period.upper()})')
            for track in data['toptracks']['track']:
                track_name = track['name']
                album_cover = track['image'][-1]['#text']
                lastfm_artist_url = track['artist']['url']
                artist_name = track['artist']['name']
                lastfm_track_url = track['url']
                track_duration = track['duration']
                pos = track['@attr']['rank']
                play_count = track['playcount']
                
                print(f'[{pos}] ({play_count} scrobbles): {artist_name} - {track_name} ({lastfm_track_url})')


# Generate JSON data from musicbee list.....
convert_m3u_to_json()

# get top tracks
# get_top_tracks(period=GET_TOP_TRACKS_TIME_PERIOD_OPTIONS.LAST_12_MONTHS.value, limit=25)

