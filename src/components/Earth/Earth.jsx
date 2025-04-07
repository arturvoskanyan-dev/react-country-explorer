import React from 'react'
import { useNavigate } from "react-router-dom"
import earth from "../../assets/earth.png"

export default function Earth() {
    let navigate = useNavigate();

    return (
        <img src={earth} className='globe' onClick={() => navigate("/")} />
    )
}
