import React from 'react';

import './Body.scss';

export default function Body(){
    return(
        <div className="Body" >
            <div position="relative">
                <img src="./Img/paisaje.gif" alt="animated" height="100%" width="100%"/>
                <img src="./Img/Logo.jpg" alt="Logo" height="30%" width="30%" position="absolute"/>
            </div>

        </div>

    )
}