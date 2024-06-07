import React from 'react'

import BarraTitulo from './barratitulo.jsx'
import FiltrosTareas from './filtrostareas.jsx'
import ListaTareas from './listatareas.jsx'

export default function TareasPanel({proporcional}) {

    return (
        <div className='overflow-auto' style={{width: '100%', height: '100%', padding: 20 / proporcional, background: '#fafafa'}}>
            <BarraTitulo proporcional={proporcional}/>
            <FiltrosTareas proporcional={proporcional}/>
            <ListaTareas proporcional={proporcional}/>
        </div>
    )
}
