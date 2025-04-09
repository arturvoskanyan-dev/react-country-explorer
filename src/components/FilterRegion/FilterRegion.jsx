import React from 'react'
import { useDispatch } from 'react-redux'
import { API } from '..';
import { getRegionActionCreator } from '../../store/reducers/countriesReducer';

export default function FilterRegion() {
    const dispatch = useDispatch();

    const filter = (e) => {
        API.getRegion(e).then((res) => dispatch(getRegionActionCreator(res)))
    }

    return (
        <select 
            onClick={(e) => filter(e.target.value)}
            className='mb-8 p-2 bg-gray-700 text-white rounded-xl cursor-pointer'
        >
            <option>All</option>
            <option>Europe</option>
            <option>Asia</option>
            <option>Africa</option>
            <option>Antarctic</option>
            <option>Oceania</option>
        </select>
    )
}
