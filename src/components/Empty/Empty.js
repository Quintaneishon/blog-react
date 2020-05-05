import React from 'react'
import {ReactComponent as Logo} from '../../icons/empty.svg'
import './Empty.scss'

export default function Empty() {
    return (
        <div className='empty'>
            <Logo />
        </div>
    )
}