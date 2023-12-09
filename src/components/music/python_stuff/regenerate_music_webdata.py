import os
import json

from LastFm import LastFM
from LastFm import GET_TOP_TRACKS_TIME_PERIOD_OPTIONS
from musicbee_helpers import MusicbeeHelpers
from helpers import export_list_to_json

from urllib3.exceptions import InsecurePlatformWarning, InsecureRequestWarning
from urllib3 import disable_warnings

# ignore annoying warnings...
disable_warnings(InsecurePlatformWarning)
disable_warnings(InsecureRequestWarning)


# create instance of my class that communicates with LastFM API...
lastfm = LastFM(API_KEY='641be1ed643c913edb609208c24efad7', USERNAME='gutash')


def get_top_albums_via_musicbee_m3u_exported_file():
    # find the .m3u export...
    dir_export = f"C:\\Users\\{os.getlogin()}\\Downloads"
    musicbee_export_filename = 'All time best albums.m3u'
    fullpath_to_musicbee_export = f"{dir_export}\\{musicbee_export_filename}"
    
    # define full path to json file...
    json_output_filename = 'webdata_top_albums_list.json'
    fullpath_to_json_output = f'D:\\Programming-Projects\\nathansteele\\src\\components\\music\\{json_output_filename}'
    
    # convert .m3u file to .json file...
    convert_m3u_to_json(fullpath_to_musicbee_export, fullpath_to_json_output)

def convert_m3u_to_json(fullpath_to_musicbee_export, fullpath_to_json_output):
    """
    Convert an m3u musicbee export into a json file
    """
    
    # locate m3u export
    if os.path.exists(fullpath_to_musicbee_export):
        with open(fullpath_to_musicbee_export, 'r', encoding="utf8") as f:
            # convert m3u to str
            content = f.read()

            # convert str to list
            toplist = content.split('D:\\Music\\Music files\\')
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
                lastfm_url = ""
                album_cover_url = ""
                duration = 0
                tracks = []

                # some albums dont work...
                if 'album' in data:
                    # get lastfm url...
                    if 'url' in data['album']:
                        lastfm_url = data['album']['url']
                        print(lastfm_url)
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
                    'position_str': pos_padded,
                    'lastfm_url': lastfm_url,
                    'artist_name': artist_name,
                    'album_name': album_name,
                    'duration': duration,
                    'tracks': tracks,
                    'album_cover_url': album_cover_url,
                    'review_id': review_id,
                })
            
            
            # export list to json...
            export_list_to_json(fullpath_to_json_output, albums_list)



def get_top_tracks(period=GET_TOP_TRACKS_TIME_PERIOD_OPTIONS.ALL_TIME, limit=10):
    """
    Get top tracks.
    """
    
    # add to this list...
    tracks = []
    
    # GET request...
    data = lastfm.GET_my_top_tracks(period=period.value, limit=limit)
    
    # get string representation of time period
    time_period_str = period.value.upper()
    
    # iterate over tracks in response...
    if 'toptracks' in data:
        if 'track' in data['toptracks']:
            print(f'\nMY TOP {limit} MOST LISTENED SONGS ({time_period_str})')
            for track in data['toptracks']['track']:
                track_name = track['name']
                album_cover = track['image'][-1]['#text']
                lastfm_artist_url = track['artist']['url']
                artist_name = track['artist']['name']
                lastfm_track_url = track['url']
                track_duration = track['duration']
                pos = track['@attr']['rank']
                play_count = track['playcount']
                
                musicbrainz_artist_id = track['artist']['mbid']
                musicbrainz_track_id = track['mbid']
                
                # print(track)
                # print(f'{musicbrainz_artist_id} - {musicbrainz_track_id}')
                print(f'[{pos}] ({play_count} scrobbles): {artist_name} - {track_name} ({lastfm_track_url})')
                
                tracks.append({
                    'position': pos,
                    'track_name': track_name,
                    'artist_name': artist_name,
                    'lastfm_track_url': lastfm_track_url,
                    'lastfm_artist_url': lastfm_artist_url,
                    'album_cover': album_cover,
                    'track_duration': track_duration,
                    'play_count': play_count,
                    'musicbrainz_artist_id': musicbrainz_artist_id,
                    'musicbrainz_track_id': musicbrainz_track_id,
                })
    
    return tracks
    
def get_top_tracks_all_data(limit=10):
    """
    Get top tracks, for every time period
    """
    
    # get all data...
    all_time = get_top_tracks(period=GET_TOP_TRACKS_TIME_PERIOD_OPTIONS.ALL_TIME, limit=limit)
    last_12_months = get_top_tracks(period=GET_TOP_TRACKS_TIME_PERIOD_OPTIONS.LAST_12_MONTHS, limit=limit)
    last_6_months = get_top_tracks(period=GET_TOP_TRACKS_TIME_PERIOD_OPTIONS.LAST_6_MONTHS, limit=limit)
    last_3_months = get_top_tracks(period=GET_TOP_TRACKS_TIME_PERIOD_OPTIONS.LAST_3_MONTHS, limit=limit)
    last_month = get_top_tracks(period=GET_TOP_TRACKS_TIME_PERIOD_OPTIONS.LAST_MONTH, limit=limit)
    last_7_days = get_top_tracks(period=GET_TOP_TRACKS_TIME_PERIOD_OPTIONS.LAST_7_DAYS, limit=limit)

    # structure of json output...
    all_data = {
        GET_TOP_TRACKS_TIME_PERIOD_OPTIONS.ALL_TIME.value: all_time,
        GET_TOP_TRACKS_TIME_PERIOD_OPTIONS.LAST_12_MONTHS.value: last_12_months,
        GET_TOP_TRACKS_TIME_PERIOD_OPTIONS.LAST_6_MONTHS.value: last_6_months,
        GET_TOP_TRACKS_TIME_PERIOD_OPTIONS.LAST_3_MONTHS.value: last_3_months,
        GET_TOP_TRACKS_TIME_PERIOD_OPTIONS.LAST_MONTH.value: last_month,
        GET_TOP_TRACKS_TIME_PERIOD_OPTIONS.LAST_7_DAYS.value: last_7_days,
    }
    
    # name of json files...
    json_output = f'D:\\Programming-Projects\\nathansteele\\src\\components\\music\\webdata_top_tracks_list.json'

    # export all data to individual json files...
    export_list_to_json(json_output, all_data)



# get top albums...
get_top_albums_via_musicbee_m3u_exported_file()

# get top tracks...
get_top_tracks_all_data(limit=100)
