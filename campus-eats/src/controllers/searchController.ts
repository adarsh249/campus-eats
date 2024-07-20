import { NextApiRequest, NextApiResponse } from 'next';
export interface University {
    id: number;
    university_name: string;
    university_abbrev: Array<string>;
}

/**
 * Function to fetch all university names and abbreviations from the database.
 * @returns {Promise<University>} - An array of objects containing university information
 */
export async function fetchUniversityInformation(): Promise<University[]> {
    const response = await fetch('/universities.json'); // This is a static file served from the public directory
    if (!response.ok) {
        throw new Error('Error fetching universities.json file');
    }
    return response.json();
}