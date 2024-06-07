import React from 'react'

import BusquedaPaciente from './busquedapaciente.jsx'
import Pacientes from './pacientes.jsx'

export default function ListaPacientes({proporcional}) {
    
    return (
        <div style={{width: '100%', height: 'auto', background: 'white', padding: 22 / proporcional}}>
            <BusquedaPaciente proporcional={proporcional}/>
            <Pacientes proporcional={proporcional}/>
        </div>
    )
}
