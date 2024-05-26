import React from 'react'

import { Outlet } from 'react-router-dom'

import MenuLateral from '../comun/menulateral.jsx'
import MenuSuperior from '../comun/menusuperior.jsx'

export default function GlobalPanel({proporcional}) {
        
    return (
        <div className='' style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div style={{width: '16%', height: '100vh', borderRight: '2px solid rgb(130, 180, 64)'}}>
                    <MenuLateral proporcional={proporcional}/>
                </div>
                <div className='position-relative' style={{width: '16%', height: '100vh', borderRight: '2px solid rgb(130, 180, 64)'}}>
                    <MenuSuperior proporcional={proporcional}/>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}
