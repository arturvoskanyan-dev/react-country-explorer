import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Earth, SearchBox, SearchInput, getSearchActionCreator, getSearchCountryThunk } from "../index"

export default function Header() {
    const {searchCountries} = useSelector((state) => state.searchCountries);
    const {text} = useSelector((state) => state.text);
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(getSearchCountryThunk(text))
    }

    return (
        <header className='sticky top-0 z-100 border-b-2 border-gray-300 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-800'>
            <section className='flex justify-between items-center'>
                <Earth />
                <SearchInput
                    text={text}
                    handleSearch={handleSearch}
                    dispatch={dispatch}
                    getSearchActionCreator={getSearchActionCreator}
                />
            </section>
            {searchCountries.length > 0 && (
                <section className='absolute right-0'>
                    <SearchBox
                        countries={searchCountries}
                        dispatch={dispatch}
                    />
                </section>
            )}
        </header>
    )
}
