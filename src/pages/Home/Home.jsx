import React, { useContext } from 'react'
import { MyContext } from '../../App'
import Countries from '../../components/Countries/Countries';

export default function Home() {
    const { countries } = useContext(MyContext);

    return (
        <main className='container p-8'>
            <div className='flex justify-center flex-wrap gap-12'>
                {
                    countries?.map((country) => {
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
