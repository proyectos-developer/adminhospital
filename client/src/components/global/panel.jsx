import React from 'react'

import { Outlet } from 'react-router-dom'
import icono_left from '../../assets/iconos/icono_left_white_96.png'
import icono_right from '../../assets/iconos/icono_right_white_96.png'

import MenuLateral from '../comun/menulateral.jsx'
import MenuSuperior from '../comun/menusuperior.jsx'

export default function GlobalPanel({proporcional}) {
        
    return (
        <div className='' style={{width: '100%', height: 'auto'}}>
            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '16%', height: '100vh', borderRight: '2px solid rgb(130, 180, 64)'}}>
                    <MenuLateral proporcional={proporcional}/>
                </div>
                <img className='position-absolute rounded-circle shadow' src={icono_left} style={{width: 30 / proporcional, height: 30 / proporcional, padding: 7.5 / proporcional, 
                            background: 'rgb(130, 180, 64)', top: 60 / proporcional, left: 288.52 / proporcional, cursor: 'pointer', zIndex: 99999}}/>
                <div className='' style={{width: '84%', height: '100%'}}>
                    <MenuSuperior proporcional={proporcional}/>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
