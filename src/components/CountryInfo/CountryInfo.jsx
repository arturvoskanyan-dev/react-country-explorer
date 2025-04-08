import React from 'react'
import Border from '../Border/Border'

export default function CountryInfo({ country }) {
    return (
        <div className='flex flex-col gap-4'>
            <div>
                <h1 className='text-4xl font-medium'>{country.name?.common}</h1>
            </div>
            <div className='flex gap-16 text-lg'>
                <div className='card-info'>
                    <h3><span>Native Name : </span>{country?.name?.common}</h3>
                    <h3><span>Region : </span>{country?.region}</h3>
                    <h3><span>Capital : </span>{country?.capital}</h3>
                </div>
                <div className='card-info'>
                    <h3><span>Population : </span>{country?.population}</h3>
                    <h3><span>Subregion : </span>{country?.subregion}</h3>
                    <h3><span>Area : </span>{country?.area}km<sup>2</sup></h3>
                </div>
            </div>
            <div className='flex flex-wrap gap-4'>
                {country?.borders?.map((border, i) => <Border key={i} border={border} />)}
            </div>
        </div>
    )
}
