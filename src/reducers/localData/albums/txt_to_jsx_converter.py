import argparse
import os

from openai import OpenAI
from dotenv import load_dotenv
from pathlib import Path

class Helpers:
    ROOT_PROJ = "C:\\dev\\nathansteele"

    def read_file(file):
        with open(file, "r", encoding="utf-8") as f:
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


# OpenAI API Key
API_KEY = Helpers.get_api_key(name="OPENAI_API_KEY")
client = OpenAI(api_key=API_KEY)


# retrieve artist and album name from arguments...
parser = argparse.ArgumentParser(description='Convert .txt file --> .jsx file')
parser.add_argument('artist', help='Artist name (use underscores instead of spaces)')
parser.add_argument('album', help='Album name (use underscores instead of spaces)')
args = parser.parse_args()


# everything we need is here... Might as well minimise code duplication and just write this path once!
albums = f"{Helpers.ROOT_PROJ}\\src\\reducers\\localData\\albums"

# where the plaintext and jsx will live together in harmony...
review_dir = f'{albums}\\content\\{args.artist}\\{args.album}'


# plain text review...
txt = f'{review_dir}\\review.txt'

# template jsx file...
template_jsx_file = f'{albums}\\chatgpt\\template_jsx_file.jsx'

# rules for converting the .txt file into a .jsx file...
rules_file = f'{albums}\\chatgpt\\rules.txt'


print(f"- Artist = {args.artist}")
print(f"- Album = {args.album}")
print(f"- '{review_dir}'")
print(f"- Converting the .txt file into a .jsx file... please wait patiently...")


# now find the files...
review_text = Helpers.read_file(txt)
template_jsx = Helpers.read_file(template_jsx_file)
rules = Helpers.read_file(rules_file)

# define the system prompt
system_prompt = """
Your task is to convert the provided .txt file into a .jsx file. I want the .jsx file to be in the following structure:

----------------------------
"""+template_jsx+"""
----------------------------

Follow these rules:
"""+rules

# make a request to OpenAI
response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": review_text},
    ],
    temperature=0.7     # wtf is this????
)

# Extract the JSX code from the response
jsx_code = response.choices[0].message.content

# Save the JSX code to a file
output_file = f'{review_dir}/review.jsx'
with open(output_file, "w", encoding="utf-8") as f:
    f.write(jsx_code)

# yay
print(f"The JSX file has been generated ---> '{output_file}'")
