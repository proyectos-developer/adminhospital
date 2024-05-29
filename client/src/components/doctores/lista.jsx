import React from 'react'

import Especialidades from './especialidades.jsx'
import Doctores from './doctores.jsx'

export default function ListaDoctores({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <Especialidades proporcional={proporcional}/>
            <Doctores proporcional={proporcional}/>
        </div>
    )
}
