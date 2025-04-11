import React from 'react'
import { NavLink } from 'react-router-dom';

export default function SearchCountries({ country, setText }) {
    return (
        <NavLink to={`/country/${country.cca3}`} onClick={() => setText("")} className="flex items-center gap-2">
            <img src={country.flags.png} className='w-1/6' />
            <h2 className='hover:text-red-600'>{country.name.common}</h2>
        </NavLink>
    )
}
