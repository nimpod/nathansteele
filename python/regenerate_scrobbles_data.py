from LastFm import LastFM
from LastFm import TIME_PERIOD_OPTIONS
from musicbee_helpers import MusicbeeHelpers
from Helpers import Helpers

# create instance of my class that communicates with LastFM API...
lastfm = LastFM(API_KEY='641be1ed643c913edb609208c24efad7', USERNAME='gutash')

# from home...
#json_output = f'D:\\Programming-Projects\\nathansteele\\src\\components\\music\\top_tracks_scrobble_data.json'

# on laptop...
top_tracks_json_output = f'C:\\dev\\nathansteele\\src\\components\\music\\scrobble_data\\top_tracks.json'
top_albums_json_output = f'C:\\dev\\nathansteele\\src\\components\\music\\scrobble_data\\top_albums.json'


def get_top_tracks(period=TIME_PERIOD_OPTIONS.ALL_TIME, limit=10):
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
    all_time = get_top_tracks(period=TIME_PERIOD_OPTIONS.ALL_TIME, limit=limit)
    last_12_months = get_top_tracks(period=TIME_PERIOD_OPTIONS.LAST_12_MONTHS, limit=limit)
    last_6_months = get_top_tracks(period=TIME_PERIOD_OPTIONS.LAST_6_MONTHS, limit=limit)
    last_3_months = get_top_tracks(period=TIME_PERIOD_OPTIONS.LAST_3_MONTHS, limit=limit)
    last_month = get_top_tracks(period=TIME_PERIOD_OPTIONS.LAST_MONTH, limit=limit)
    #last_7_days = get_top_tracks(period=TIME_PERIOD_OPTIONS.LAST_7_DAYS, limit=limit)

    # structure of json output...
    all_data = {
        TIME_PERIOD_OPTIONS.ALL_TIME.value: all_time,
        TIME_PERIOD_OPTIONS.LAST_12_MONTHS.value: last_12_months,
        TIME_PERIOD_OPTIONS.LAST_6_MONTHS.value: last_6_months,
        TIME_PERIOD_OPTIONS.LAST_3_MONTHS.value: last_3_months,
        TIME_PERIOD_OPTIONS.LAST_MONTH.value: last_month,
        #TIME_PERIOD_OPTIONS.LAST_7_DAYS.value: last_7_days,
    }
    
    # export all data to individual json files...
    Helpers.export_list_to_json(top_tracks_json_output, all_data)


def get_top_albums(period=TIME_PERIOD_OPTIONS.ALL_TIME, limit=10):
    # add to this list...
    albums = []
    
    print(period.value)

    # GET request...
    data = lastfm.GET_my_top_albums(period=period.value, limit=limit)

    # get string representation of time period
    time_period_str = period.value.upper()
    
    # iterate over tracks in response...
    if 'topalbums' in data:
        if 'album' in data['topalbums']:
            print(f'\nMY TOP {limit} MOST LISTENED ALBUMS ({time_period_str})')
            for album in data['topalbums']['album']:
                album_name = album['name']
                album_cover = album['image'][-1]['#text']
                lastfm_artist_url = album['artist']['url']
                artist_name = album['artist']['name']
                lastfm_album_url = album['url']
                pos = album['@attr']['rank']
                play_count = album['playcount']
                
                # musicbrainz_artist_id = album['artist']['mbid']
                # musicbrainz_album_id = album['mbid']
                
                # print(track)
                # print(f'{musicbrainz_artist_id} - {musicbrainz_track_id}')
                print(f'[{pos}] ({play_count} scrobbles): {artist_name} - {album_name} ({lastfm_album_url})')
                
                albums.append({
                    'position': pos,
                    'album_name': album_name,
                    'artist_name': artist_name,
                    'lastfm_album_url': lastfm_album_url,
                    'lastfm_artist_url': lastfm_artist_url,
                    'album_cover': album_cover,
                    'play_count': play_count,
                    #'musicbrainz_artist_id': musicbrainz_artist_id,
                    #'musicbrainz_album_id': musicbrainz_album_id,
                })
    
    return albums

def get_top_albums_all_data(limit=10):
    albums = get_top_albums(limit=limit)
    Helpers.export_list_to_json(top_albums_json_output, albums)


##### GET TOP TRACKS...
get_top_tracks_all_data(limit=200)

##### GET TOP ALBUMS...
get_top_albums_all_data(limit=1000)
