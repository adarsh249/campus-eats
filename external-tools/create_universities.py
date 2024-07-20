import json
import os
from supabase import create_client, Client

# Define the University data structure
class University:
    def __init__(self, id: int, university_name: str, university_abbrev: list):
        self.id = id
        self.university_name = university_name
        self.university_abbrev = university_abbrev

def fetch_university_information():
    # Initialize the Supabase client
    url = "https://rhuhxzabdldweknphkyq.supabase.co"
    key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJodWh4emFiZGxkd2VrbnBoa3lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEwNjcyODksImV4cCI6MjAzNjY0MzI4OX0.YosvYI837eNPVT_AUbTO6clLkZXB2CVsw8cfwhT_u8E"
    supabase: Client = create_client(url, key)

    # Fetch data from Supabase
    response = supabase.table('universities').select('id, university_name, university_abbrev').execute()
    data = response.data

    # Process data
    university_map = {}

    for item in data:
        id = item['id']
        university_name = item['university_name']
        university_abbrev = item['university_abbrev']
        if university_name not in university_map:
            university_map[university_name] = University(
                id, university_name, [university_abbrev]
            )
        else:
            university_map[university_name].university_abbrev.append(university_abbrev)

    new_data = [vars(university) for university in university_map.values()]

    # Write data to a JSON file
    file_path = os.path.join(os.path.dirname(__file__), 'universities.json')
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(new_data, f, ensure_ascii=False, indent=2)

    return new_data

if __name__ == "__main__":
    try:
        universities = fetch_university_information()
        print("Data successfully written to universities.json")
    except Exception as e:
        print(f"Error fetching or saving university data: {e}")
