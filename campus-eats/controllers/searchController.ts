import { supabase } from '../config/supabaseClient';

export interface University {
    id: number;
    university_name: string;
    university_abbrev: Array<string>;
}

/**
 * Function to fetch all university names and abbreviations from the database.
 * @returns {Promise<University>} - An array of objects containing university information
 */
export async function fetchUniversityInformation() {
    const { data, error } = await supabase
        .from('universities')
        .select('id, university_name, university_abbrev');
    if (error) {
        throw error;
    }

    const universityMap: Record<string, University> = {};

    data.forEach((item: any) => {
        const { id, university_name, university_abbrev } = item;
        if(!universityMap[university_name]) {
            universityMap[university_name] = {
                id,
                university_name,
                university_abbrev: [university_abbrev],
            };
        }
        else {
            universityMap[university_name].university_abbrev.push(university_abbrev);
        }
    });
    const newData = Object.values(universityMap);
    return newData as University[];
}