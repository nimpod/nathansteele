import musicbrainzngs as mbz

# Set the user agent for your application
mbz.set_useragent("YourApplicationName", "0.1", "youremail@example.com")

artist_name = "Orbital"
album_name = "In Sides"

result = mbz.search_artists(artist=artist_name)
#print(result)

# Display information about the first artist in the search result
artist = result['artist-list'][0]
print(f"Artist: {artist['name']}, ID: {artist['id']}")

#
artist_id = artist['id']
artist_data = mbz.get_artist_by_id(artist_id, includes=["release-groups"])
# print(artist_data)

release_groups = artist_data['artist']['release-group-list']

mbz_id = ""
year = ""

for release_group in release_groups:
    print(release_group)
    if (release_group['title'].lower() == album_name.lower()):
        mbz_id = release_group['id']
        year = release_group['first-release-date'].split('-')[0]
        print('------------------------')
        print(f"Album: {album_name}, Year: {year}, ID: {mbz_id}")
        break

if mbz_id == "":
    print(f"Could not find {album_name} in release group for {artist_name} :(")
