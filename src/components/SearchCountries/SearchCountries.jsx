import React from 'react'
import { NavLink } from 'react-router-dom';
import searchThunk from '../../store/actions/search/searchThunk';

export default function SearchCountries({ country, dispatch}) {
    return (
        <NavLink 
            to={`/country/${country.cca3}`} 
            onClick={() => dispatch(searchThunk(""))} 
            className="flex items-center gap-2 hover:text-red-600"
        >
            <img src={country.flags.png} className='w-1/6' />
            <h2>{country.name.common}</h2>
        </NavLink>
    )
}
