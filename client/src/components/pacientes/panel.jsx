import React from 'react'

import { Outlet } from 'react-router-dom'

import BarraTitulo from './barratitulo.jsx'

export default function PacientesPanel({proporcional}) {
  
    return (
        <div className='overflow-auto' style={{width: '100%', height: '100%', padding: 20 / proporcional, background: '#fafafa'}}>
            <BarraTitulo proporcional={proporcional}/>
            <Outlet/>
        </div>
    )
}
