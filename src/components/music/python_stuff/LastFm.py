import requests
from lastfm_helpers import LASTFM_API_METHODS
from lastfm_helpers import GET_TOP_TRACKS_TIME_PERIOD_OPTIONS
from helpers import pretty_print_json


class LastFM:
    """
    Class to communicate with the LastFM API
    
    Links:
    - Setup -> https://www.last.fm/api/authentication
    - Applications -> https://www.last.fm/api/accounts
    - Documentation -> https://www.last.fm/api/intro
    
    Example usage:
        lastfm = LastFM('641be1ed643c913edb609208c24efad7', 'this_is_my_username')
        response = lastfm.GET_album_info('Bruno Sanfilippo', 'Ver Sacrum')
        print(response.json())
    """
    
    def __init__(self, API_KEY, USERNAME):
        """
        Construct basic requirments for making GET requests...

        Args:
            API_KEY (string): You need an API KEY
            USERNAME (string): Your LastFM username (aka. user agent)
        """
        self.api_key = API_KEY
        self.user_agent = USERNAME
        self.headers = {
            'user-agent': USERNAME
        }
        self.payload = {
            'api_key': API_KEY,
            'method': '',
            'format': 'json'
        }
        
    def GET(self, payload):
        """
        Execute GET request on the LastFM API
        """
        # define headers and URL
        headers = {'user-agent': self.user_agent}
        url = 'https://ws.audioscrobbler.com/2.0/'

        # Add API key and format to the payload
        payload['api_key'] = self.api_key
        payload['format'] = 'json'

        # execute GET request...
        response = requests.get(url, headers=headers, params=payload)
        return response

    def GET_album_info(self, artist_name, album_name):
        """Get info about an album

        Args:
            artist_name (string): Artist name (must be exactly the same as it is on the lastfm website)
            album_name (string: Album name (must be exactly the same as it is on the lastfm website)

        Returns:
            _type_: JSON response from API
        """
        r = self.GET({ 
            'method': LASTFM_API_METHODS.GET_ALBUM_INFO.value,
            'artist': artist_name,
            'album': album_name
        })
        # pretty_print_json(r.json())
        return r.json()
    
    def GET_track_info(self, artist_name="", track_name="", mbid=""):
        """Get info about a track

        Args:
            artist_name (string): Artist name (required, unless you specify the mbid)
            track_name (string): Track name (required, unless you specify the mbid)
            mbid (string, optional): The musicbrainz id for the track

        Returns:
            _type_: JSON response from API
        """
        r = self.GET({
            'method': LASTFM_API_METHODS.GET_TRACK_INFO.value,
            'user': self.user_agent,
            'artist': artist_name,
            'track': track_name
        })
        # pretty_print_json(r.json())
        return r.json()
    
    def GET_my_top_tracks(self, period, limit):
        """Get my top tracks

        Args:
            period (str, optional): Time period to query. Defaults to "overall".
            limit (int, optional): Limit. Defaults to 50, but you can give it whatever you want (e.g. top 5, top 10, top 100, top 500, etc...)

        Returns:
            _type_: JSON response from API
        """
        r = self.GET({
            'method': LASTFM_API_METHODS.GET_MY_TOP_TRACKS.value,
            'user': self.user_agent,
            'period': period,
            'limit': limit,
        })
        # pretty_print_json(r.json())
        return r.json()

