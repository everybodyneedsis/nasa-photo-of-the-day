import React from 'react'
import App from '../App'

export default function photoOfDay(props) {
    // const pod = props
    console.log()
    return <div className='list-photo container'>
        <div>
            <p>{props.explanation}</p>
        </div>
    </div>
}

