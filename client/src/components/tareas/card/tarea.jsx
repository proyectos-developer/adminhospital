import React, { useEffect, useState } from 'react'

import icono_box from '../../../assets/iconos/icono_box_empty_grey_96.png'
import icono_check_box from '../../../assets/iconos/icono_check_box_green_96.png'
import icono_calendar from '../../../assets/iconos/icono_calendar_blue_96.png'
import icono_delete from '../../../assets/iconos/icono_delete_red_96.png'

import icono_avatar_masculino from '../../../assets/iconos/icono_avatar_masculino_96.png'
import icono_avatar_femenino from '../../../assets/iconos/icono_avatar_femenino_96.png'

import axios from 'axios'
import { constantes } from '../../../uri/constantes'
import { useDispatch } from 'react-redux'
import {tareasdata} from '../../../redux/slice/tareasdata'
import { tareasConstants } from '../../../uri/tareas-constants'

export default function CardTarea({proporcional, tarea}) {

    const dispatch = useDispatch()

    const [paciente, setPaciente] = useState({})

    const [seleccion_tarea, setSeleccionTarea] = useState(false)

    useEffect(() => {
        axios.get (`${constantes().url_principal[0].url}/paciente/${tarea.usuario_paciente}`)
            .then ((res) => {
                setPaciente(res.data.paciente)
            }).catch ((err) => {

            })
    }, [])

    const borrar_tarea = () => {
        dispatch(tareasdata(tareasConstants(tarea.id, 0, 0, 0, 0, 16, {}, false).delete_))
    }

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional, paddingLeft: 15 / proporcional,
                    paddingRight: 15 / proporcional, marginTop: 5 / proporcional, marginBottom: 5 / proporcional}}>
            {
                paciente && paciente.nombres ? (
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', cursor: 'pointer'}} onClick={() => setSeleccionTarea(!seleccion_tarea)}>
                        <div className='d-flex justify-content-start' style={{width: 'auto', height: 'auto'}}>
                            <img src={seleccion_tarea ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 10 / proporcional}}/>
                            <div style={{width: 'auto', height: 'auto'}}>
                                <p style={{color: 'rgb(98, 101, 105)', fontSize: 18 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, marginBottom: 7 / proporcional,
                                        textDecoration: seleccion_tarea ? 'line-through' : 'none'}}>
                                    {tarea.nombre_tarea}
                                </p>
                                <small style={{color: 'rgb(154, 154, 154)', fontSize: 12 / proporcional, fontWeight: 400, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional,
                                        textDecoration: seleccion_tarea ? 'line-through' : 'none',
                                        fontFamily: 'Nunito, sans-serif'}}>
                                    <strong>Paciente</strong> {paciente.nombres + ' ' + paciente.apellidos}
                                    <span className='rounded-pill' style={{width: 'auto', paddingTop: 2.25 / proporcional, paddingBottom: 2.25 / proporcional, paddingLeft: 3.6 / proporcional,
                                            paddingRight: 3.6 / proporcional, fontSize: 10 / proporcional, color: 'white', background: '#6c757d', fontWeight: 700, 
                                            lineHeight: `${10 / proporcional}px`, marginLeft: 5 / proporcional}}>
                                        {paciente.edad} años
                                    </span>
                                </small>
                                <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 16 / proporcional, lineHeight: `${22 / proporcional}px`,
                                    fontFamily: 'Nunito, sans-serif', textDecoration: seleccion_tarea ? 'line-through' : 'none'}}>
                                    <strong style={{fontWeight: 700, marginRight: 5 / proporcional}}>Detalles:</strong>
                                    {tarea.detalles_tarea}
                                </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: 'auto', height: 'auto'}}>
                            <img src={icono_calendar} style={{width: 15 / proporcional, height: 15 / proporcional, marginRight: 10 / proporcional, cursor: 'pointer'}}/>
                            <img src={icono_delete} style={{width: 15 / proporcional, height: 15 / proporcional, cursor: 'pointer'}}
                                onClick={() => borrar_tarea()}/>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}
