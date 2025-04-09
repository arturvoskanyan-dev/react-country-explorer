import React from 'react'
import { SearchCountries, IoCloseCircleOutline } from "../index"

export default function SearchBox({ countries, dispatch, getSearchCountryActionCreator }) {
    return (
        <section className='flex flex-col gap-4 p-3 bg-white rounded-2xl'>
            <div className='w-xs max-h-[300px] flex flex-col gap-4  overflow-y-scroll'>
                {
                    countries?.map((country, i) => {
                        return <SearchCountries key={i} country={country} />
                    })
                }
            </div>
            <div className='border-b-2 border-gray-700'></div>
            <button
                className='flex items-center text-lg font-medium cursor-pointer'
                onClick={() => dispatch(getSearchCountryActionCreator([]))}
            >
                <IoCloseCircleOutline className='text-red-600' />
                Close
            </button>
        </section>
    )
}
