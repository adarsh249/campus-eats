import requests
from bs4 import BeautifulSoup
import os
from dotenv import load_dotenv
from supabase import create_client, Client

# Load environment variables
load_dotenv()

# Set up Supabase client
url = "supabase_url"
key = "supabase_service_role_key with rls disabled"
supabase: Client = create_client(url, key)

# URL of the Wikipedia page
wiki_url = "https://en.wikipedia.org/wiki/List_of_colloquial_names_for_universities_and_colleges_in_the_United_States"

# Send a GET request to fetch the HTML content
response = requests.get(wiki_url)
soup = BeautifulSoup(response.content, 'html.parser')

# Extract university data
universities = []

# Find all h2 tags which are sections for A, B, C, etc.
for section in soup.find_all('h2'):
    # Get the next sibling, which should be the ul containing the universities
    ul = section.find_next_sibling('ul')
    if ul:
        for li in ul.find_all('li', recursive=False):
            # Check if li.contents[0] exists and is not None
            if li.contents and li.contents[0] and isinstance(li.contents[0], str):
                abbreviation = li.contents[0].strip()
                nested_ul = li.find('ul')
                if nested_ul:
                    for nested_li in nested_ul.find_all('li'):
                        a_tag = nested_li.find('a')
                        if a_tag:
                            university_name = a_tag.text.strip()
                            universities.append({
                                'name': university_name,
                                'abbreviation': abbreviation
                            })

# Sort the universities list by university name
universities.sort(key=lambda x: x['name'])

# Print extracted universities for debugging
print(universities)

# Function to insert data into Supabase
def insert_data(universities):
    for university in universities:
        response = supabase.table('universities').insert({
            'university_name': university['name'],
            'university_abbrev': university['abbreviation']
        }).execute()
        if 'error' in response:
            print(f"Failed to insert {university['name']}")

# Insert data into Supabase
insert_data(universities)
