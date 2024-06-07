import React from 'react'

import BarraTitulo from './barratitulo.jsx'
import BusquedaEspecialidad from './busquedaEspecialidad.jsx'
import Especialidades from './especialidades.jsx'

export default function EspecialidadesPanel({proporcional}) {

    return (
        <div className='overflow-auto' style={{width: '100%', height: '100%', padding: 20 / proporcional, background: '#fafafa'}}>
            <BarraTitulo proporcional={proporcional}/>
            <BusquedaEspecialidad proporcional={proporcional}/>
            <Especialidades proporcional={proporcional}/>
        </div>
    )
}
