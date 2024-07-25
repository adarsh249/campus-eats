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
    const formRef = useRef<HTMLDivElement>(null);
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
    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!formRef.current || !formRef.current.contains(e.relatedTarget as Node)) {
            setShowDropdown(false);
        }
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
        <section role="search" className="flex flex-col justify-center items-center text-center p-4 relative">
          <p className="text-lg font-semibold text-white mb-4">
            The #1 place to find the places to eat on campus!
          </p>
          <div className="w-full relative" ref={formRef}>
          <form action="/search" method="get" className={`flex items-center py-2.5 px-5 bg-white border-2 border-black rounded-xl w-full relative ${showDropdown ? 'rounded-b-none border-b-0' : ''}`}>
            <input
              className="flex flex-1 h-8 outline-none border-none w-full z-50"
              type="text"
              id="search"
              name="query"
              autoComplete="off"
              placeholder={placeholder}
              value={inputValue}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <button type="submit" className="bg-transparent border-none outline-none">
              <FontAwesomeIcon icon={faSearch} className="w-6 text-gray-500 cursor-pointer " />
            </button>
          </form>
          {/*
          <a href="/" onClick={handleLinkClick} className="text-blue-500 hover:underline">
            {searchLinkText}
          </a>*/}
          {showDropdown && (
            <div className="absolute left-0 top-full w-full z-10">
                <ul className="w-full overflow-y-auto max-h-60 absolute bg-white border-2 border-black border-t-0 rounded-b-xl scrollbar-thin scrollbar-webkit">
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
                    <li className="p-2 hover:bg-gray-100">
                        <a
                            href={`/add-school`}
                            className="block text-gray-700 hover:text-gray-900"
                        >
                            Can't find your school? Add it here!
                        </a>
                    </li>
                </ul>
            </div>
            )}
          </div>
          
        </section>
    );
}