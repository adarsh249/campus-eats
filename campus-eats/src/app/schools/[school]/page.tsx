'use client'
import { fetchUniversityInformation } from '../../../../controllers/searchController';
import { useState, useEffect } from 'react';
import DiningMap from '../../../components/school/DiningMap';
interface SchoolProps {
  params: {
    school: string;
  };
}

export default function SchoolPage({ params }: SchoolProps) {
  const { school } = params;
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    async function fetchData() {
      const schools = await fetchUniversityInformation();
      const schoolData = schools.find(
        (s) => s.university_name.replace(/\s/g, '-').toLowerCase().replace(/[(),/]/g, '') === school
      );
      if (schoolData) {
        setFullName(schoolData.university_name);
      } else {
        setFullName('School not found');
      }
    }

    fetchData();
  }, [school]);

  return (
    <div>
      <h1>{fullName}</h1>
      <DiningMap />
    </div>
  );
}