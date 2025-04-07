import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Border, Map } from "../index"
import { MyContext } from '../../App';

export default function Country() {
    const { countries } = useContext(MyContext)
    let { name } = useParams();
    const country = countries?.find((elem) => elem.cca3 === name)

    return (
        <section className='flex flex-col gap-16 p-4'>
            <section className='flex items-center gap-16 text-white'>
                <div>
                    <img src={country?.flags.png} />
                </div>
                <div className='flex flex-col gap-4'>
                    <div>
                        <h1 className='text-4xl font-medium'>{country?.name.common}</h1>
                    </div>
                    <div className='flex gap-16 text-lg'>
                        <div className='card-info'>
                            <h3><span>Native Name : </span>{country?.name.common}</h3>
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
            </section>
            <section className="flex items-center gap-12">
                <div>
                    <img src={country?.coatOfArms.png} className='w-[400px]' />
                </div>
                <Map name={country?.name.common} />
            </section>
        </section>
    )
}
