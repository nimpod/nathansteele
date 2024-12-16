from LastFm import LastFM
from LastFm import GET_TOP_TRACKS_TIME_PERIOD_OPTIONS
from musicbee_helpers import MusicbeeHelpers
from Helpers import export_list_to_json

# create instance of my class that communicates with LastFM API...
lastfm = LastFM(API_KEY='641be1ed643c913edb609208c24efad7', USERNAME='gutash')

# from home...
#json_output = f'D:\\Programming-Projects\\nathansteele\\src\\components\\music\\webdata_top_tracks_list.json'

# on laptop...
json_output = f'src/components/music/webdata_top_tracks_list.json'


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
    
    # export all data to individual json files...
    export_list_to_json(json_output, all_data)


get_top_tracks_all_data(limit=25)
