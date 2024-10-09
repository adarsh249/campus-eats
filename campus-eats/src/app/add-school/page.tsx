'use client'
import { useState } from 'react';
//import {sendCollegeRequest} from './actions';
import Header from "../components/Header";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);  // Tracks whether the form has been submitted

  const handleSubmit = (e:any) => {
    e.preventDefault(); // Prevent default form submission behavior
    setSubmitted(true); // Set form as submitted, which hides the form
  };

  return (
    <div className="max-w-lg mx-auto">
      {submitted ? (
        // Display the confirmation message after submission
        <p className="mt-4 text-center text-green-500 font-medium">
          Your request is being reviewed, your college page will be added soon.
        </p>
      ) : (
        // Render the form if it hasn't been submitted yet
        <form 
          className="bg-white shadow-md rounded-lg p-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <label className="block text-lg font-medium text-gray-700">
            What school do you want us to add?
            <input 
              type="text" 
              id="school-name" 
              name="school-name" 
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter school name"
              required
            />
          </label>
          
          <label className="block text-lg font-medium text-gray-700">
            What abbreviations do people commonly call this school? (e.g., UCSD)
            <input 
              type="text" 
              id="school-abbrev" 
              name="school-abbrev" 
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter school abbreviation"
              required
            />
          </label>

          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
            //formAction={sendCollegeRequest}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

