import React from 'react'

import BarraTitulo from './barratitulo.jsx'
import BusquedaCitas from './busquedacitas.jsx'
import ListaCitas from './listacitas.jsx'

export default function CitasPanel({proporcional}) {

    return (
        <div className='overflow-auto' style={{width: '100%', height: '100%', padding: 20 / proporcional, background: '#fafafa'}}>
            <BarraTitulo proporcional={proporcional}/>
            <BusquedaCitas proporcional={proporcional}/>
            <ListaCitas proporcional={proporcional}/>
        </div>
    )
}
