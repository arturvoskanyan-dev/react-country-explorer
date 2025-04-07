import React, { useContext, useReducer } from 'react'
import { initState, reducer, getSearchActionCreator } from '../../store/store'
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import {Earth, FaSearchLocation} from "../index"

export default function Header() {
    const [state, dispatch] = useReducer(reducer, initState);
    const { countries } = useContext(MyContext)
    const navigate = useNavigate();

    const handleSearch = () => {
        const found = countries.find((country) =>
            country.name.common.toLowerCase().includes(state.text.toLowerCase())
        )

        if (found) {
            navigate(`/country/${found.cca3}`)
        }
    }

    return (
        <header className='sticky top-0 z-100 border-b-2 border-gray-300 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-800'>
            <section className='flex justify-between items-center'>
                <Earth />
                <form onSubmit={(e) => { e.preventDefault(); handleSearch() }}>
                    <div className="relative w-72">
                        <input
                            type="text"
                            value={state.text}
                            placeholder='Search by country'
                            onChange={(e) => dispatch(getSearchActionCreator(e.target.value))}
                            className="w-full border-2 border-white text-white rounded-xl p-2 pr-10"
                        />
                        <FaSearchLocation onClick={handleSearch} className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-white cursor-pointer" />
                    </div>
                </form>
            </section>
        </header>
    )
}
