import React from 'react'

import './Popup.scss'

export default function Popup(props){

    return(
        <div className='popup' id={props.tarjet}>
            <div className='popup__content'>
                <a href='#nada' className='popup__close'>&times;</a>
                {props.children}
            </div>
        </div>
    )
}