import React from 'react'
import { useSelector } from 'react-redux';
import {Loader, FilterRegion, Countries} from "../index"

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
