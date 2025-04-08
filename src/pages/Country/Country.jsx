import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom';
import { Map, CountryInfo } from "../index"
import {getCountryActionCreator, initState, reducer} from "../../store/store"
import { API } from '../../api/api';

export default function Country() {
    let { name } = useParams();
    const [state, dispatch] = useReducer(reducer, initState);
    const country = state.country;

    useEffect(() => {
        API.getCountry(name).then((res) => dispatch(getCountryActionCreator(res.data)))
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
