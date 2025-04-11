import React from 'react'
import Countries from '../../components/Countries/Countries';
import FilterRegion from '../../components/FilterRegion/FilterRegion';
import Loader from '../../components/Loader/Loader';
import { useSelector } from 'react-redux';

export default function Home() {
    const {countries} = useSelector((state) => state.countries);
    const {loader} = useSelector((state) => state.loader);

    return (
        <main className='container p-8'>
            <FilterRegion />
            <div className='flex justify-center flex-wrap gap-12'>
                {
                    loader 
                    ? <Loader />
                    : countries?.map((country) => {
                        return (
                            <Countries
                                key={country.name.common}
                                flag={country.flags.png}
                                region={country.region}
                                name={country.name.common}
                                capital={country.capital}
                                population={country.population}
                                cca3={country.cca3}
                            />
                        )
                    })
                }
            </div>
        </main>
    )
}
