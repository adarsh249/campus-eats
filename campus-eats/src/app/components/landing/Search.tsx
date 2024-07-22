'use client'
import { useState, useEffect, useRef } from 'react';
import { fetchUniversityInformation, University } from '../../../controllers/searchController';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../../globals.css';
/**
 * The input box to search for a university or dining option.
 * @returns {JSX.Element} - The search form component
 */
export default function Search() {

    const [placeholder, setPlaceholder] = useState<string>("Search for your school");
    const [searchLinkText, setSearchLinkText] = useState<string>("I want to find my dining options by name.");
    const [inputValue, setInputValue] = useState<string>("");
    const [filteredUniversities, setFilteredUniversities] = useState<University[]>([]);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const universitiesRef = useRef<University[]>([]);
    /**
     * Switch the text depending on what the user wants to search.
     * @param event Clicking on the link to switch between searching for a school and dining options.
     * @returns N/A
     */
    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        if (placeholder === "Search for your dining options by name") {
            setPlaceholder("Search for your school");
            setSearchLinkText("I want to search for my school.");
            return;
        }
        else {
            setPlaceholder("Search for your dining options by name");
            setSearchLinkText("Search for your school");
        }
    };

    /**
     * Handle the input change event.
     * @param event 
     */
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setShowDropdown(true);
    }

    /**
     * Handle the input focus event.
     */
    const handleInputFocus = () => {
        setShowDropdown(true);
    }

    /**
     * Handle the input blur
     */
    const handleInputBlur = () => {
        setTimeout(() => setShowDropdown(false), 200); // Delay hiding the dropdown to allow the user to click on it
    }

    /**
     * On load, fetch the university information from the database.
     */
    useEffect(() => {
        async function loadUniversities() {
            const data = await fetchUniversityInformation();
            universitiesRef.current = data;
            setFilteredUniversities(data);
        }
        loadUniversities();

    }, []);

    /**
     * On input change, filter the universities based on the input value.
     */
    useEffect(() => {
        if (inputValue) {
                const uniqueUniversities = universitiesRef.current.filter(
                    (uni) =>
                        uni.university_name.toLowerCase().includes(inputValue.toLowerCase()) ||
                        uni.university_abbrev.some(abbrev => abbrev.toLowerCase().includes(inputValue.toLowerCase()))
                );
            setFilteredUniversities(uniqueUniversities);
        } else {
            setFilteredUniversities(universitiesRef.current);
        }
    }, [inputValue])

    return (
        <section role="search" className="flex flex-col justify-center items-center text-center space-y-4 p-4 relative">
          <p className="text-lg font-semibold text-white">
            The #1 place to find the places to eat on campus!
          </p>
          <form action="/search" method="get" className="flex items-center w-full max-w-md relative">
            <input
              className=""
              type="search"
              id="search"
              name="query"
              placeholder={placeholder}
              value={inputValue}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <button type="submit" className="">
              <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
            </button>
          </form>
          {/*
          <a href="/" onClick={handleLinkClick} className="text-blue-500 hover:underline">
            {searchLinkText}
          </a>*/}
          {showDropdown && (
                <ul className="">
                    {filteredUniversities.map((uni) => (
                        <li key={uni.id} className="p-2 hover:bg-gray-100">
                            <a
                                href={`/schools/${uni.university_name.replace(/\s/g, '-').toLowerCase().replace(/[(),/]/g, '')}`}
                                className="block text-gray-700 hover:text-gray-900"
                            >
                                {uni.university_name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}