import React, { useReducer } from 'react'
import { initState, reducer, getSearchActionCreator, getSearchCountryActionCreator } from '../../store/store'
import { Earth, SearchBox, SearchInput } from "../index"
import { API } from '../../api/api';

export default function Header() {
    const [state, dispatch] = useReducer(reducer, initState);

    const handleSearch = () => {
        API.searchCountry(state.text).then((res) => dispatch(getSearchCountryActionCreator(res.data)))
    }

    return (
        <header className='sticky top-0 z-100 border-b-2 border-gray-300 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-800'>
            <section className='flex justify-between items-center'>
                <Earth />
                <SearchInput
                    text={state.text}
                    handleSearch={handleSearch}
                    dispatch={dispatch}
                    getSearchActionCreator={getSearchActionCreator}
                />
            </section>
            {state.searchCountries.length > 0 && (
                <section className='absolute right-0'>
                    <SearchBox
                        countries={state.searchCountries}
                        dispatch={dispatch}
                        getSearchCountryActionCreator={getSearchCountryActionCreator}
                    />
                </section>
            )}
        </header>
    )
}
