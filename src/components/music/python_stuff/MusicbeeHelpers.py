
class MusicbeeHelpers:
    """ Useful functions related to the Musicbee m3u export file """
    
    def fix_symbols_on_album_filenames(folder_name: str):
        """
        Because on windows you can't put certain icons in file names, and the musicbee export is based on the name of the folder represting the album!!!
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
