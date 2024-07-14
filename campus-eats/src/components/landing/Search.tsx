'use client'
import { useState } from 'react';

export default function Search() {
    const [placeholder, setPlaceholder] = useState("Search for your school");
    const [searchLinkText, setSearchLinkText] = useState("I want to find my dining options by name.");
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

    return (
        <section role="search">
            <p>The #1 place to find the places to eat on campus!</p>
            <form action="/search" method="get">
                <label htmlFor="search">
                    <input type="search" id="search" name="query" placeholder={placeholder} />
                </label>
                <button type="submit">Search</button>
            </form>
            <a href="/" onClick={handleLinkClick}>{searchLinkText}</a>
        </section>
    );
}