import React, { useContext } from 'react'
import { MyContext } from '../../App'
import { useDispatch } from 'react-redux';
import { Earth, SearchBox, SearchInput, API, getSearchCountryActionCreator, getSearchActionCreator } from "../index"

export default function Header() {
    const {text, searchCountries} = useContext(MyContext);
    const dispatch = useDispatch();

    const handleSearch = () => {
        API.searchCountry(text).then((res) => dispatch(getSearchCountryActionCreator(res.data)))
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
                        getSearchCountryActionCreator={getSearchCountryActionCreator}
                    />
                </section>
            )}
        </header>
    )
}
