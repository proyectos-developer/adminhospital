import React from 'react'

import BarraTitulo from './barratitulo.jsx'
import FiltroEstadisticas from './filtroestadisticas.jsx'
import PanelPrincipal from './panelprincipal.jsx'
import RevisionResumen from './revisionresumen.jsx'
import PrimeraFilaEstadistica from './primerafilaestadistica.jsx'
import SegundaFilaEstaditica from './segundafilaestadistica.jsx'
import TerceraFilaEstadistica from './tercerafilaestadistica.jsx'
import CuartaFilaEstadistica from './cuartafilaestadistica.jsx'

export default function DashboardPanel({proporcional}) {
  
    return (
        <div className='overflow-auto' style={{width: '100%', height: '100vh', padding: 20 / proporcional, background: '#fafafa'}}>
            <BarraTitulo proporcional={proporcional}/>
            <FiltroEstadisticas proporcional={proporcional}/>
            <PanelPrincipal proporcional={proporcional}/>
            <RevisionResumen proporcional={proporcional}/>
            <PrimeraFilaEstadistica proporcional={proporcional}/>
            <SegundaFilaEstaditica proporcional={proporcional}/>
            <TerceraFilaEstadistica proporcional={proporcional}/>
            <CuartaFilaEstadistica proporcional={proporcional}/>
        </div>
    )
}
