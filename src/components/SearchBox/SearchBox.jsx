import React from 'react'
import { SearchCountries, IoCloseCircleOutline } from "../index"
import searchThunk from '../../store/actions/search/searchThunk'

export default function SearchBox({ countries, dispatch }) {
    return (
        <section className='flex flex-col gap-4 p-3 bg-white rounded-2xl'>
            <div className='w-xs max-h-[300px] flex flex-col gap-4  overflow-y-scroll'>
                {
                    countries?.map((country, i) => {
                        return <SearchCountries key={i} country={country} dispatch={dispatch} />
                    })
                }
            </div>
            <div className='border-b-2 border-gray-700'></div>
            <button
                className='flex items-center text-lg font-medium cursor-pointer'
                onClick={() => dispatch(searchThunk(""))}
            >
                <IoCloseCircleOutline className='text-red-600' />
                Close
            </button>
        </section>
    )
}
