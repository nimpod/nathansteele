
from enum import Enum

class OriginalStrings(Enum):
    COLON = ":",
    SEMI_COLON = ";",
    QUESTION_MARK = "?",
    FULL_STOP = ".",
    FORWARD_SLASH = "\"",
    BACK_SLASH = "/"

class ReplacementStrings(Enum):
    """
    Certain characters can't be used in folder names
    For example : ; \ / . ?
    This aims to get around that issue, by having an "identical string clone" for each one of those.
    This is a bit annoying, because it means I have to change the names of my folders. 
    """
    
    COLON = (OriginalStrings.COLON, "~")
    SEMI_COLON = (OriginalStrings.SEMI_COLON, "")

    

class MusicbeeHelpers:
    """ Useful functions related to the Musicbee m3u export file """
    
    def fix_symbols_on_album_filenames(folder_name: str):
        """
        Because on windows you can't put certain icons in file names, and the musicbee export is based on the name of the folder represting the album!!!
        
        Use these characters instead:
        . = •
        ? = ♪
        : = ⋮
        ; = ⧽
        / = ⇗
        \ = ⇖
        """
        return folder_name.replace('~', ':')\
                            .replace('¬', "\"")\
                            .replace('))', "/")\
                            .replace('@', '?')\
                            .replace('^', '.')\
                            .replace(')(', ';')

    def remove_special_characters_based_on_musicbee_export(str_to_edit):
        """
        Musicbee exports are annoying
        """
        return str_to_edit.replace(" ", "_")\
                          .replace(".", "")\
                          .replace("/", "")\
                          .replace("(", "")\
                          .replace(")", "")\
                          .replace("[", "")\
                          .replace("]", "")\
                          .replace("!", "")\
                          .replace("%", "")\
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
