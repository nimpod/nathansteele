from enum import Enum

class LASTFM_API_METHODS(Enum):
    """
    LastFM API methods
    """
    
    # album data...
    GET_ALBUM_INFO = 'album.getinfo'            # https://www.last.fm/api/show/album.getInfo
    
    # track data...
    GET_TRACK_INFO = 'track.getinfo'             # https://www.last.fm/api/show/track.getInfo
    
    # user data...
    GET_MY_TOP_TRACKS = 'user.gettoptracks'     # https://www.last.fm/api/show/user.getTopTracks
    GET_MY_TOP_ALBUMS = 'user.gettopalbums'     # https://www.last.fm/api/show/user.getTopAlbums


class TIME_PERIOD_OPTIONS(Enum):
    """ 
    https://www.last.fm/api/show/user.getTopTracks
    """
    
    ALL_TIME = 'overall'
    LAST_7_DAYS = '7day'
    LAST_MONTH = '1month'
    LAST_3_MONTHS = '3month'
    LAST_6_MONTHS = '6month'
    LAST_12_MONTHS = '12month'
