import React, { useEffect, useState } from 'react'

import CardHabitacion from './card/habitacion.jsx'

import { useDispatch, useSelector } from 'react-redux'
import {habitacionesdata} from '../../redux/slice/habitacionesdata'
import {habitacionesConstants} from '../../uri/habitaciones-constants'

export default function Habitaciones({proporcional}) {

    const dispatch = useDispatch ()

    const [total_habitaciones, setTotalHabitaciones] = useState(0)
    const [lista_habitaciones, setListaHabitaciones] = useState([])

    const {get_habitaciones_pacientes_search, delete_habitacion_paciente} = useSelector(({habitaciones_data}) => habitaciones_data)

    useEffect(() => {
        dispatch(habitacionesdata(habitacionesConstants(0, 0, 0, 0, 0, 16, {}, false).get_habitaciones_pacientes_search))
    }, [])

    useEffect(() => {
        if (get_habitaciones_pacientes_search && get_habitaciones_pacientes_search.success === true && get_habitaciones_pacientes_search.habitaciones){
            if (get_habitaciones_pacientes_search.total_pacientes){setTotalHabitaciones(get_habitaciones_pacientes_search.total_habitaciones)}
            setListaHabitaciones (get_habitaciones_pacientes_search.habitaciones)
        }
    }, [get_habitaciones_pacientes_search])

    useEffect(() => {
        if (delete_habitacion_paciente && delete_habitacion_paciente.success === true && delete_habitacion_paciente.habitaciones){
            if (delete_habitacion_paciente.total_pacientes){setTotalHabitaciones(delete_habitacion_paciente.total_habitaciones)}
            setListaHabitaciones (delete_habitacion_paciente.habitaciones)
        }
    }, [delete_habitacion_paciente])

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex' style={{width: '100%', height: 'auto', borderTop: '1px solid rgb(236, 236, 236)', borderBottom: '1px solid rgb(236, 236, 236)'}}>
                <div style={{width: '10%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    
                </div>
                <div style={{width: '15%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Nro habitación
                    </p>
                </div>
                <div style={{width: '25%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Paciente
                    </p>
                </div>
                <div style={{width: '12.5%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Asignación
                    </p>
                </div>
                <div style={{width: '12.5%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Alta
                    </p>
                </div>
                <div style={{width: '15%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 151, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Tipo habitación
                    </p>
                </div>
                <div style={{width: '10%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Acción
                    </p>
                </div>
            </div>
            {
                lista_habitaciones && lista_habitaciones.length > 0 ? (
                    lista_habitaciones.map ((habitacion, index) => {
                        return (
                            <CardHabitacion proporcional={proporcional} habitacion={habitacion}/>
                        )
                    })
                ) : null
            }
        </div>
    )
}
