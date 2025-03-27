import argparse
import os
import json

from openai import OpenAI
from dotenv import load_dotenv
from pathlib import Path


class Helpers:
    ROOT_PROJ = "C:\\dev\\nathansteele"

    def read_file(filepath):
        """Read a file...

        Args:
            filepath (string): path to file that I want to read contents of
        """
        with open(filepath, "r", encoding="utf-8") as f:
            file_content = f.read()
        return file_content


    def get_api_key(name, root_project=ROOT_PROJ):
        """Get api key
        
        Args:
            name (string): name that I assigned it in the .env file
            root_project (string): root project directory
        """

        # name of file where my API keys are stored...
        env = '.env.local'

        # load the file...
        load_dotenv(Path(f"{root_project}/{env}"))

        # now we retrieve the API key we want...
        API_KEY = os.getenv(name)
        return API_KEY


    def pretty_print_json(obj):
        """
        Create a formatted string of the Python JSON object
        """
        text = json.dumps(obj, sort_keys=True, indent=4)
        print(text)


    def export_list_to_json(fullpath_to_json_output, list):
        """Export list to JSON file

        Args:
            fullpath_to_json_output (string): full path to JSON output
            list (list): list to convert into a JSON representation
        """

        # clear json file first...
        open(fullpath_to_json_output, 'w').close()
        
        # write new content...
        with open(fullpath_to_json_output, 'w') as f:
            json.dump(list, f, indent=4)
        
        print(f'JSON export finished! -> {fullpath_to_json_output}')


    def append_list_to_existing_json(fullpath_to_json_output, new_data):
        """
        https://stackoverflow.com/questions/44901806/python-error-message-io-unsupportedoperation-not-readable
        """

        # write new content...
        with open(fullpath_to_json_output, 'r+') as f:
            # load existing data...
            file_data = json.load(f)

            # join new data with current file data (i.e. merge the two arrays)
            file_data.extend(new_data)

            # Sets file's current position at offset.
            f.seek(0)

            # convert back to json.
            json.dump(file_data, f, indent = 4)
        
        print(f'JSON append finished! -> {fullpath_to_json_output}')

