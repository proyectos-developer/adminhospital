import React from 'react'

import FiltrosFacturas from './filtrosfacturas.jsx'
import BusquedaFacturas from './busquedafacturas.jsx'
import ListaFacturas from './listafacturas.jsx'

export default function Facturas({proporcional}) {

    return (
        <div className='overflow-auto' style={{width: '100%', height: '100%', padding: 20 / proporcional, background: '#fafafa'}}>
            <FiltrosFacturas proporcional={proporcional}/>
            <BusquedaFacturas proporcional={proporcional}/>
            <ListaFacturas proporcional={proporcional}/>
        </div>
    )
}
