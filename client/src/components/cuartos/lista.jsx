import React from 'react'

import BusquedaHabitacion from './busquedahabitacion.jsx'
import Habitaciones from './habitaciones.jsx'

export default function ListaCuartosAsignados({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', background: 'white', padding: 22 / proporcional}}>
            <BusquedaHabitacion proporcional={proporcional}/>
            <Habitaciones proporcional={proporcional}/>
        </div>
    )
}
