import json

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
