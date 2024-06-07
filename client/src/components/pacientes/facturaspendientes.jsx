import React from 'react'

import BusquedaFactura from './busquedafactura.jsx'
import Facturas from './facturas.jsx'

export default function FacturasPendientes({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', padding: 20 / proporcional, background: 'white'}}>
            <BusquedaFactura proporcional={proporcional}/>
            <Facturas proporcional={proporcional}/>
        </div>
    )
}
