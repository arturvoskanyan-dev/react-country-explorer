import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Map, CountryInfo, getCountryThunk } from "../index"
import { useDispatch, useSelector } from 'react-redux';

export default function Country() {
    let { name } = useParams();
    const {country} = useSelector((state) => state.country);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountryThunk(name))
    }, [name])

    return (
        <main className='flex flex-col gap-16 p-4'>
            <section className='flex items-center gap-16 text-white'>
                <img src={country?.flags?.png} />
                <CountryInfo country={country} />
            </section>
            <section className="flex items-center gap-12">
                <img src={country?.coatOfArms?.png} className='w-[300px]' />
                <Map name={country?.name?.common} />
            </section>
        </main>
    )
}
