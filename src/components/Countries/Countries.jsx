import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Countries({flag, name, population, region, capital, cca3}) {
  return (
    <section className='p-3 bg-gray-700 rounded-2xl hover:scale-110 duration-200'>
        <NavLink to={`/country/${cca3}`}>
            <img src={flag} className='w-[240px] h-[150px] object-contain cursor-pointer' />
        </NavLink>
        <div className='max-w-[250px] text-white text-center card-info'>
            <h1 className='max-w-xs text-2xl font-medium'>{name}</h1>
            <p><span>Population : </span>{population}</p>
            <p><span>Region : </span>{region}</p>
            <p><span>Capital :</span> {capital}</p>
        </div>
    </section>
  )
}
