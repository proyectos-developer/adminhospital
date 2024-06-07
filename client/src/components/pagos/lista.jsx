import React from 'react'

import BusquedaPago from './busquedapago.jsx'
import Pagos from './pagos.jsx'

export default function ListaPagos({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', background: 'white', padding: 22 / proporcional}}>
            <BusquedaPago proporcional={proporcional}/>
            <Pagos proporcional={proporcional}/>
        </div>
    )
}
