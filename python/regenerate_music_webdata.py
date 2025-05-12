# TODO:
# 1) Make this script faster, I don't why it takes so fucking long
# 2) At the end, when the json file has been regenerated, iterate over it again, and look for album_cover_url": ""
#    This is an indication there was a naming mismatch somewhere (album name missing a colon, comma, fullstop, etc...)
#    And then print out the names of the albums which couldn't find a LastFM match. So I can speed up the process of fixing it.

import os
import json
import time

from LastFm import LastFM
from LastFm import TIME_PERIOD_OPTIONS
from musicbee_helpers import MusicbeeHelpers

from Helpers import Helpers

from urllib3.exceptions import InsecurePlatformWarning, InsecureRequestWarning
from urllib3 import disable_warnings

# ignore annoying warnings...
disable_warnings(InsecurePlatformWarning)
disable_warnings(InsecureRequestWarning)


# define full path to json file...
json_output_filename = 'webdata_top_albums_list.json'
rootpath_home = f'D:\\Programming-Projects'
rootpath_laptop = f'C:\\dev'

# fullpath_to_json_output = f'D:\\Programming-Projects\\nathansteele\\src\\components\\music\\{json_output_filename}'
fullpath_to_json_output = f'{rootpath_laptop}\\nathansteele\\src\\components\\music\\{json_output_filename}'

# find the .m3u export...
musicbee_export_filename = 'FAVOURITE_ALBUMS.m3u'
fullpath_to_musicbee_export = f'{rootpath_laptop}\\nathansteele\\python\\{musicbee_export_filename}'

# create instance of my class that communicates with LastFM API...
API_KEY = Helpers.get_api_key(name="LASTFM_API_KEY")
lastfm = LastFM(API_KEY=API_KEY, USERNAME='gutash')

if(API_KEY is None):
    print('Something went wrong with getting the API key from .env.local.....')


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

            # keeps track of current position in list
            pos = 0

            # NOTE: Temporary code, that allows me to append to the existing json so I don't have to reiterate the whole list
            #       I might not always want this... Because when I add new albums, this will be triggered
            #       But in that situation I would rather regenerate the whole list...
            append = False
            with open(fullpath_to_json_output) as f:
                data = json.load(f)
                num_of_albums_already_in_list = len(data)
                # if there are still more albums missing from the list...
                if num_of_albums_already_in_list < num_of_albums:
                    # tell my program that I want to append to the existing list (not create a new one)
                    append = True
                    # update current position in list
                    pos = num_of_albums_already_in_list
                    # modify the array so it starts from where we left off before
                    toplist = toplist[pos:]
                    # inform the user pos has been changed...
                    print(f"You added new album(s). Changed to 'Append' mode. Restarting from pos {pos}")
                elif num_of_albums_already_in_list == num_of_albums:
                    # If the new data and old data are same size, I am probbaly just reordering the list.
                    # Therefore it's more efficient to regenerate the list starting from the point at which they are different.
                    # https://stackoverflow.com/questions/67263585/determining-the-indicies-where-2-numpy-arrays-differ
                    pass
                    #append = True
                    #print(old_data_reformatted)
                    #print(new_data)
                    #test = (~numpy.equal(data_reformatted, new_data)).astype(object)
                    #indices = numpy.flatnonzero(test)
                    #print(indices)
                    #pos = indices[0]
                    #print(pos)
                    #toplist = toplist[pos:]
                    #print(f"You reordered the list. Changed to 'Append' mode. Restarting from pos {pos}")

            
            # local version of list
            albums_list = []            
            print('==================================================')

            # iterate over list...
            for elem in toplist:
                # position in toplist is just a counter
                pos += 1
                pos_padded = f"{pos:03}"
                
                # essentially the name of the folder containing the songs from the album
                folder_name = elem.split('\\')[0]
                # print(folder_name)
                
                # but the symbols need to be replaced...
                folder_name_fixed = MusicbeeHelpers.fix_symbols_on_album_filenames(folder_name=folder_name)
                
                # extract artist name & album name...
                artist_name = folder_name_fixed.split(' - ')[0].strip()
                album_name = folder_name_fixed.split(' - ')[1].strip()
                #print(f"{pos_padded}: {artist_name} - {album_name}")
                
                # construct review ID...
                artist_name_v2 = MusicbeeHelpers.remove_special_characters_based_on_musicbee_export(artist_name)
                album_name_v2 = MusicbeeHelpers.remove_special_characters_based_on_musicbee_export(album_name)
                review_id = f"{artist_name_v2}-{album_name_v2}"

                # get more data from LastFM API...
                try:
                    data = lastfm.GET_album_info(artist_name=artist_name_v2, album_name=album_name_v2)

                    # TODO: Only do this if the lastfm api call returns nothing... Because most albums don't require this step...
                    artist_name_lastfm_version = artist_name_doesnt_match_with_lastfm(folder_name=folder_name, artist_name=artist_name)
                    album_name_lastfm_version = album_name_doesnt_match_with_lastfm(folder_name=folder_name, album_name=album_name)

                    # get more data via LastFM API...
                    data = lastfm.GET_album_info(artist_name=artist_name_lastfm_version, album_name=album_name_lastfm_version)
                    #print(data)
                except ConnectionError as err:
                    # I get the error message below when disconnected mid script... Wait for 60s in the hope that the connection is regained by then. Otherwise we loose all progress!
                    # HTTPSConnectionPool(host='ws.audioscrobbler.com', port=443): Max retries exceeded with url: /2.0/?method=album.getinfo&artist=ichiko_aoba&album=utabiko&api_key=641be1ed643c913edb609208c24efad7&format=json (Caused by NewConnectionError('<urllib3.connection.HTTPSConnection object at 0x0000026587B7F890>: Failed to establish a new connection: [WinError 10065] A socket operation was attempted to an unreachable host'))
                    time.sleep(60)
                except Exception as err:
                    # something went wrong... Break out of loop before we loose all the data we've gathered so far
                    print(err)
                    break
                
                lastfm_url = ""
                album_cover_url = ""
                wiki_summary = ""
                duration = 0    # mostly useless, lastfm rarely provides this statistic per album, I wish they did
                tracks = []     # also useless, lastfm is shit when it comes to tracklists for albums, sometimes it's not there, sometimes the tracks are spelt wrong, not translated properly, etc...

                # some albums dont work...
                if 'album' in data:
                    # get lastfm url...
                    if 'url' in data['album']:
                        lastfm_url = data['album']['url']
                        print(lastfm_url)
                    else:
                        print('not url found :(')
                    
                    # get album cover (if it was in response)...
                    if 'image' in data['album']:
                        album_cover_url = data['album']['image'][-1]['#text']
                        print(album_cover_url)
                    else:
                        print('no album cover found :(')
                    
                    # get wiki summary...
                    """
                    if 'wiki' in data['album']:
                        wiki_summary = data['album']['wiki']['summary']
                    else:
                        print('No wiki found :(')
                    """
                
                # Annoying.... Sometimes Lastfm automatically gives me slightly different versions of artist names... This will have to do for now...
                artist_name = fix_artist_name_to_make_filtering_easier_in_javascript_world(artist_name=artist_name)
                
                # show progress...
                # print(f"{pos_padded}: {artist_name} - {album_name} - {lastfm_url} - {album_cover_url}")
                print(f"{pos_padded}: {artist_name} - {album_name}")
                print("")

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
            
            if append:
                Helpers.append_list_to_existing_json(fullpath_to_json_output, albums_list)
            else:
                Helpers.export_list_to_json(fullpath_to_json_output, albums_list)


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
    elif "Global Communication - 7614" in folder_name:
        return "76:14"
    elif "Brad Mehldau - Suite April 2020" in folder_name:
        return "Suite: April 2020"
    elif "Jobim - The Composer of Desafinado" in folder_name:
        return "The Composer Of Desafinado, Plays"
    elif "Metamatics - Mind Mushing Git" in folder_name:
        return "Midnight Sun Pig"
    elif "Banco De Gaia - Last Train to Lhasa" in folder_name:
        return "Last Train to Lhasa (Special Edition)"
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
    elif 'Panzerballett' in folder_name:
        return 'Panzerballett'
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
    #elif artist_name == '久石譲':
    #    return 'Joe Hisaishi'
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



# update json...
convert_m3u_to_json(fullpath_to_musicbee_export, fullpath_to_json_output)


# testing the LastFM API...
#test = lastfm.GET_album_info(artist_name='Joe Hisaishi', album_name="A Scene at the Sea (Takeshi Kitano's Original Motion Picture Soundtrack)")
#print(test)
