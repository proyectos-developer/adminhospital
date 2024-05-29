import React, { useState } from 'react'

import DataDoctor from './datadoctor.jsx'
import DataAccount from './dataaccount.jsx'
import SocialMedia from './socialmedia.jsx'

export default function NuevoDoctor({proporcional}) {
 
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <DataDoctor proporcional={proporcional}/>
            <DataAccount proporcional={proporcional}/>
            <SocialMedia proporcional={proporcional}/>
        </div>
    )
}
