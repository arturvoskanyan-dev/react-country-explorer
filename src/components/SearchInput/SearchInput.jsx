import React from 'react'
import { FaSearchLocation } from "react-icons/fa";

export default function SearchInput({text, handleSearch, dispatch, getSearchActionCreator}) {
    return (
        <form onSubmit={(e) => { e.preventDefault(); handleSearch() }}>
            <div className="relative w-72">
                <input
                    type="text"
                    value={text}
                    placeholder='Search by country'
                    onChange={(e) => dispatch(getSearchActionCreator(e.target.value))}
                    className="w-full border-2 border-white text-white rounded-xl p-2 pr-10"
                />
                <FaSearchLocation onClick={handleSearch} className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-white cursor-pointer" />
            </div>
        </form>
    )
}
