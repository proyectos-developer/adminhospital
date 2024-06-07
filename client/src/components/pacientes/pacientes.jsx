import React, { useEffect, useState } from 'react'

import CardPaciente from './card/paciente.jsx'

import { useDispatch, useSelector } from 'react-redux'
import {pacientesdata} from '../../redux/slice/pacientesdata'
import {pacientesConstants} from '../../uri/pacientes-constants'

export default function Pacientes({proporcional}) {

    const dispatch = useDispatch ()

    const [total_pacientes, setTotalPacientes] = useState(0)
    const [lista_pacientes, setListaPacientes] = useState([])

    const {get_pacientes_filtros} = useSelector(({pacientes_data}) => pacientes_data)

    useEffect(() => {
        dispatch(pacientesdata(pacientesConstants(0, 0, 0, 0, 0, 16, {}, false).get_pacientes_filtros))
    }, [])

    useEffect(() => {
        if (get_pacientes_filtros && get_pacientes_filtros.success === true && get_pacientes_filtros.pacientes){
            if (get_pacientes_filtros.total_pacientes){setTotalPacientes(get_pacientes_filtros.total_pacientes)}
            setListaPacientes (get_pacientes_filtros.pacientes)
        }
    }, [get_pacientes_filtros])

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex' style={{width: '100%', height: 'auto', borderTop: '1px solid rgb(236, 236, 236)', borderBottom: '1px solid rgb(236, 236, 236)'}}>
                <div style={{width: '5%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Media
                    </p>
                </div>
                <div style={{width: '8%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Paciente ID
                    </p>
                </div>
                <div style={{width: '20%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Nombre
                    </p>
                </div>
                <div style={{width: '5%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Edad
                    </p>
                </div>
                <div style={{width: '32%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Dirección
                    </p>
                </div>
                <div style={{width: '10%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Teléfono
                    </p>
                </div>
                <div style={{width: '10%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Última visita
                    </p>
                </div>
                <div style={{width: '10%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Estado
                    </p>
                </div>
            </div>
            {
                lista_pacientes && lista_pacientes.length > 0 ? (
                    lista_pacientes.map ((paciente, index) => {
                        return (
                            <CardPaciente proporcional={proporcional} paciente={paciente}/>
                        )
                    })
                ) : null
            }
        </div>
    )
}
