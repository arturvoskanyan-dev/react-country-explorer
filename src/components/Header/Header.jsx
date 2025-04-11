import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Earth, SearchBox, SearchInput } from "../index"

export default function Header() {
    const { countries } = useSelector((state) => state.countries)
    const [text, setText] = useState("");
    const [countriesBox, setCountriesBox] = useState([]);

    const handleSearch = (e) => {
        const text = e.target.value;
        setText(text);

        const found = countries.filter((country) =>
            country?.name?.common.toLowerCase().slice(0, text.length) === text.toLowerCase()
        )
        setCountriesBox(found)
    }

    return (
        <header className='sticky top-0 z-100 border-b-2 border-gray-300 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-800'>
            <section className='flex justify-between items-center'>
                <Earth />
                <SearchInput text={text} handleSearch={handleSearch} />
            </section>
            {countriesBox.length > 0 && text.trim() && (
                <section className='absolute right-0'>
                    <SearchBox countries={countriesBox} setText={setText} />
                </section>
            )}
        </header>
    )
}
