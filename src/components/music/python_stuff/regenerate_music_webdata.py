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



# find the .m3u export...
dir_export = f"C:\\Users\\{os.getlogin()}\\Downloads"
musicbee_export_filename = 'FAVOURITE ALBUMS.m3u'
fullpath_to_musicbee_export = f"{dir_export}\\{musicbee_export_filename}"

# define full path to json file...
json_output_filename = 'webdata_top_albums_list.json'
fullpath_to_json_output = f'D:\\Programming-Projects\\nathansteele\\src\\components\\music\\{json_output_filename}'

# create instance of my class that communicates with LastFM API...
lastfm = LastFM(API_KEY='641be1ed643c913edb609208c24efad7', USERNAME='gutash')


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
                
                # check if we need to manually override album name...
                artist_name_lastfm_version = artist_name_doesnt_match_with_lastfm(folder_name=folder_name, artist_name=artist_name)
                album_name_lastfm_version = album_name_doesnt_match_with_lastfm(folder_name=folder_name, album_name=album_name)
                
                # get more data via LastFM API...
                data = lastfm.GET_album_info(artist_name=artist_name_lastfm_version, album_name=album_name_lastfm_version)
                lastfm_url = ""
                album_cover_url = ""
                duration = 0    # mostly useless, lastfm rarely provides this statistic per album, I wish they did
                tracks = []     # also useless, lastfm is shit when it comes to tracklists for albums, sometimes it's not there, sometimes the tracks are spelt wrong, not translated properly, etc...

                # some albums dont work...
                if 'album' in data:
                    # get lastfm url...
                    if 'url' in data['album']:
                        lastfm_url = data['album']['url']
                        # print(lastfm_url)
                    else:
                        print('not url found :(')
                
                    # get tracks...
                    """
                    if 'tracks' in data['album']:
                        for track in data['album']['tracks']['track']:
                            tracks.append(track)
                            #if (track['duration']):
                            #    duration += int(track['duration'])
                            #else:
                            #    print('no duration info :(')
                    else:
                        print('no tracks info :(')
                    """
                    
                    # get album cover (if it was in response)...
                    if 'image' in data['album']:
                        album_cover_url = data['album']['image'][-1]['#text']
                        # print(album_cover_url)
                    else:
                        print('no album cover found :(')
                
                # Annoying.... Sometimes Lastfm automatically gives me slightly different versions of artist names... This will have to do for now...
                artist_name = fix_artist_name_to_make_filtering_easier_in_javascript_world(artist_name=artist_name)
                """
                if artist_name == 'alt-J' or artist_name == 'Alt-J':
                    artist_name = 'alt-J'
                elif artist_name == 'Twenty One Pilots':
                    artist_name = 'twenty one pilots'
                elif artist_name == 'Kiyo Sen':
                    artist_name = 'KIYO * SEN'
                elif artist_name == '久石譲':
                    artist_name = 'Joe Hisaishi'
                """
                
                # show progress...
                print(f"{pos_padded}: {review_id} {lastfm_url}")

                # append to list...
                albums_list.append({
                    'position': pos,
                    'position_str': pos_padded,
                    'lastfm_url': lastfm_url,
                    'artist_name': artist_name,
                    'album_name': album_name,
                    'album_cover_url': album_cover_url,
                    'review_id': review_id,
                })
                        
            # export list to json...
            export_list_to_json(fullpath_to_json_output, albums_list)


def album_name_doesnt_match_with_lastfm(folder_name, album_name):
    """
    Occasionally, album names contain characters that Windows prevents us from putting in folder names.
    For example : ; / \ ?
    This is a bit annoying, because when lastfm trys to find the album, it will say it can't find it, because the folder name I chose won't match what it really is.
    So here I am manually providing the "correct" album name, so that lastfm can find the correct album info (most notably, automate the retrieval of the album cover).
    The alternative is to use replacement strings in the folder names, but this becomes a bit of a maintaince nightmare, and makes my library look ugly, as I discovered.
    So for now I prefer just replacing the album names with the one that will link it to the "right" lastfm page.
    What a palava.
    """
    if 'Senri Kawaguchi - Cider (Hard & Sweet)' in folder_name:
        return "CIDER ~Hard & Sweet~"
    elif 'Revocation - Scion' in folder_name:
        return "Scion Av Presents: Revocation \"Teratogensis\""
    elif 'Hz Legend' in folder_name:
        return '10 000 Hz Legend'
    elif 'Bring Me The Horizon - Sempiternal' in folder_name:
        return 'Sempiternal (Expanded Edition)'
    elif 'Jeremy Soule - The Elder Scrolls V' in folder_name:
        return 'The Elder Scrolls V: Skyrim: Original Game Soundtrack'
    elif 'Kenji Kawai - Patlabor 2 - The Movie (Original Soundtrack)' in folder_name:
        return 'Patlabor 2 the Movie'
    elif 'Brad Mehldau - Taming The Dragon' in folder_name:
        return 'Mehliana: Taming the Dragon'
    elif 'Karl Jenkins - Motets' in folder_name:
        return 'Karl Jenkins: Motets'
    elif "death's dynamic shroud - Reality 2 Archive of Fading Mist (Part ii)" in folder_name:
        return "Reality 2 : Archive of Fading Mist (part ii)"
    #elif 'Penguin Cafe - Rain Before Seven':
    #    return 'Rain Before Seven...'
    #elif 'Opposite Day - What Is Is':
    #    return 'What Is Is?'
    else:
        # leave as normal...
        return album_name


def artist_name_doesnt_match_with_lastfm(folder_name, artist_name):
    """
    Fix artist name before API call
    """
    
    if 'Portico Quartet - Portico Quartet' in folder_name:
        return 'Portico'
    elif 'Janelle Monae - The ArchAndroid' in folder_name:
        return 'Janelle Monáe'
    elif 'Casualties of Cool - Casualties of Cool' in folder_name:
        return 'Devin Townsend'
    elif 'Kiyo Sen - Trick or Treat' in folder_name:
        return ' KIYO＊SEN '
    else:
        return artist_name


def fix_artist_name_to_make_filtering_easier_in_javascript_world(artist_name):
    """
    Sometimes Lastfm automatically gives me slightly different versions of artist names... 
    This is annoying because it means the filtering on the UI won't work for some artists
    So fix this here...
    """
    
    if artist_name == 'alt-J' or artist_name == 'Alt-J':
        return 'alt-J'
    elif artist_name == 'Twenty One Pilots':
        return 'twenty one pilots'
    elif artist_name == 'Kiyo Sen':
        return 'KIYO * SEN'
    elif artist_name == '久石譲':
        return 'Joe Hisaishi'
    else:
        return artist_name


def update_mismatching_lastfm_urls():
    """
    Maybe do it this way instead...
    Although it would be more complicated than this...
    """
    
    with open(fullpath_to_json_output, "r") as jsonFile:
        data = json.load(jsonFile)

    # iterate over json...
    for d in data:
        artist = d['artist_name']
        album = d['album_name']
        
        # manually change lastfm url's
        if 'Revocation' in artist and 'Scion' in album:
            d['lastfm_url'] = "https://www.last.fm/music/Revocation/Scion+Av+Presents:+Revocation+%22Teratogensis%22"
        elif 'Kawaguchi' in artist and 'Cider' in album:
            d['lastfm_url'] = "https://www.last.fm/music/Senri+Kawaguchi/CIDER+~Hard+&+Sweet~"

    # update content...
    with open(fullpath_to_json_output, 'w') as f:
        json.dump(d, f, indent=4)


def get_top_tracks(period=GET_TOP_TRACKS_TIME_PERIOD_OPTIONS.ALL_TIME, limit=10):
    """
    Get top tracks.
    """
    
    # add to this list...
    tracks = []
    
    print(period.value)
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
    #last_7_days = get_top_tracks(period=GET_TOP_TRACKS_TIME_PERIOD_OPTIONS.LAST_7_DAYS, limit=limit)

    # structure of json output...
    all_data = {
        GET_TOP_TRACKS_TIME_PERIOD_OPTIONS.ALL_TIME.value: all_time,
        GET_TOP_TRACKS_TIME_PERIOD_OPTIONS.LAST_12_MONTHS.value: last_12_months,
        GET_TOP_TRACKS_TIME_PERIOD_OPTIONS.LAST_6_MONTHS.value: last_6_months,
        GET_TOP_TRACKS_TIME_PERIOD_OPTIONS.LAST_3_MONTHS.value: last_3_months,
        GET_TOP_TRACKS_TIME_PERIOD_OPTIONS.LAST_MONTH.value: last_month,
        #GET_TOP_TRACKS_TIME_PERIOD_OPTIONS.LAST_7_DAYS.value: last_7_days,
    }
    
    # name of json files...
    json_output = f'D:\\Programming-Projects\\nathansteele\\src\\components\\music\\webdata_top_tracks_list.json'

    # export all data to individual json files...
    export_list_to_json(json_output, all_data)



# call my functions...
convert_m3u_to_json(fullpath_to_musicbee_export, fullpath_to_json_output)
get_top_tracks_all_data(limit=100)

#test = lastfm.GET_album_info(artist_name='Joe Hisaishi', album_name="A Scene at the Sea (Takeshi Kitano's Original Motion Picture Soundtrack)")
#print(test)
