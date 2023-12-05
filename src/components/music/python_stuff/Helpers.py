import json

def pretty_print_json(obj):
    """
    Create a formatted string of the Python JSON object
    """
    text = json.dumps(obj, sort_keys=True, indent=4)
    print(text)


def export_list_to_json(fullpath_to_json_output, list_to_convert):
    """Export list to JSON file

    Args:
        fullpath_to_json_output (string): full path to JSON output
        list_to_convert (list): list to convert into a JSON representation
    """
    # clear json file first...
    open(fullpath_to_json_output, 'w').close()
    
    # write new content...
    with open(fullpath_to_json_output, 'w') as f:
        json.dump(list_to_convert, f, indent=4)
    
    print(f'JSON export finished! -> {fullpath_to_json_output}')
