import os
import zipfile
import csv
import json
import glob
import requests
from bs4 import BeautifulSoup
from urllib3.exceptions import InsecurePlatformWarning, InsecureRequestWarning
from urllib3 import disable_warnings

# ignore annoying warnings...
disable_warnings(InsecurePlatformWarning)
disable_warnings(InsecureRequestWarning)


# filepaths...
dir_export = f"C:\\Users\\{os.getlogin()}\\Downloads"
json_export_filename = 'topsters1.json'
json_output_filename = 'merged.json'
path_to_exported_json = f"{dir_export}\\{json_export_filename}"


# 
if os.path.exists(path_to_exported_json):
    with open(path_to_exported_json, 'r', encoding="utf8") as f:
        print(f)
        contents = json.loads(f.read())
        
