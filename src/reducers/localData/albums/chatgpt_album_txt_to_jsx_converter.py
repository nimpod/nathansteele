from openai import OpenAI


def read_file(file):
    with open(file, "r", encoding="utf-8") as f:
        file_content = f.read()
    return file_content


# OpenAI API Key
API_KEY = "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";
client = OpenAI(api_key=API_KEY)

# artist and album we are generating the .jsx file for...
artist = "andreas_vollenweider"
album = "down_to_the_moon"

# everything we need is here... Might as well minimise code duplication and just write this path once!
root = "src\\reducers\\localData\\albums"

# where the plaintext and jsx will live together in harmony...
review_dir = f'{root}\\content\\{artist}\\{album}'


# plain text review...
txt = f'{review_dir}\\review.txt'

# template jsx file...
template_jsx_file = f'{root}\\chatgpt\\template_jsx_file.jsx'

# rules for converting the .txt file into a .jsx file...
rules_file = f'{root}\\chatgpt\\rules.txt'


print(f" - Artist = {artist}")
print(f" - Album = {album}")
print(f" - Currently the plaintext review lives in this director --> '{review_dir}'")
print(f" - Now I am going to convert the .txt file into a .jsx file........ please wait patiently.......")


# now find the files...
review_text = read_file(txt)
template_jsx = read_file(template_jsx_file)
rules = read_file(rules_file)

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
print(f"The JSX file has been generated successfully :) ---> '{output_file}'")
