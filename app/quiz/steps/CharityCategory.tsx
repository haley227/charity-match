'use client';

import { ChangeEvent } from "react";
import { Answers } from "../page";

const handleClick = () => {
    const dropdown = document.getElementById('dropdown');
    if(!dropdown) return;
    dropdown.classList.toggle('hidden');
};

const CharityCategories = [
    'Arts and culture',
    'Community development',
    'Education',
];

export const CharityCategory = ({ answers, handleChange }: { answers: Answers; handleChange: (event: ChangeEvent<HTMLInputElement>) => void}) => {
    return (
      <div>
        <h2>Which types of charities interest you? Select all that apply</h2>
        <div className="flex items-center justify-center p-4">
            <button id="dropdownDefault" data-dropdown-toggle="dropdown" onClick={handleClick}
                className="bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                type="button">
                Filter by category
                <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            <div id="dropdown" className="z-10 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                  Category
                </h6>
                <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                  {CharityCategories.map((category) => (
                    <li key={category} className="flex items-center">
                      <input id={category} name="charityType" type="checkbox" value={category} onChange={handleChange}
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor={category} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                          {category}
                      </label>
                    </li>
                  ))}
                </ul>
            </div>
        </div>
      </div>
    );
};
