import React, { useEffect, useState } from 'react'
import App from '../App'

export default function PhotoOfDay(props) {
    const { nasData } = props
    console.log(nasData)
    return (
    <div className='container'>
        <div>
            <h2>NASA photo of the day {nasData.date}</h2>
            <p>{nasData.explanation}</p>
            <img className="pod" src={nasData.hdurl} alt="test" />
        </div>
    </div>
    )
}
