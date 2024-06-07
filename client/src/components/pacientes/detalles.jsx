import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {pacientesdata} from '../../redux/slice/pacientesdata'
import { pacientesConstants } from '../../uri/pacientes-constants'

import DoctorAtendio from './doctoratendio.jsx'
import InformacionContacto from './informacioncontacto.jsx'
import InformacionMedica from './informacionmedica.jsx'

export default function Paciente({proporcional}) {
    
    const location = useLocation()
    const dispatch = useDispatch()

    const [paciente, setPaciente] = useState({})
    
    const {get_paciente} = useSelector(({pacientes_data}) => pacientes_data)

    useEffect(() => {
        if (get_paciente && get_paciente.success === true && get_paciente.paciente){
            setPaciente(get_paciente.paciente)
        }
    }, [get_paciente])

    useEffect (() => {
        dispatch(pacientesdata(pacientesConstants(location.pathname.split('/')[3], 0, 0, 0, 0, 0, {}, false).get_paciente))
    }, [])



    return (
        <div className='' style={{width: '100%', height: 'auto'}}>
            <DoctorAtendio usuario_doctor={paciente.doctor} proporcional={proporcional}/>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '32%', height: 'auto'}}>
                    <InformacionContacto proporcional={proporcional} paciente={paciente}/>
                </div>
                <div style={{width: '67%', height: 'auto'}}>
                    <InformacionMedica proporcional={proporcional} paciente={paciente}/>
                </div>
            </div>
        </div>
    )
}
