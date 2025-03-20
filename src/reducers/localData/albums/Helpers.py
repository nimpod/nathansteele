import argparse
import os

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
