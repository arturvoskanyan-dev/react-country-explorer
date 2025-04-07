import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Border({ border }) {
    return (
        <div className='p-2 border-2 rounded-sm'>
            <NavLink to={`/country/${border}`}>
                {border}
            </NavLink>
        </div>
    )
}
