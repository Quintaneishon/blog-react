import React from 'react'
import './Empty.scss'

export default function Empty() {
    return (
        <div className='empty'>
            <h1 className="empty_error"><span>404 </span>Not Found</h1>
            <h1>Ups, parece que aún no contamos con esa carrera.</h1>
            <img className='empty_logo' src="../empty.png"/>
        </div>
    )
}