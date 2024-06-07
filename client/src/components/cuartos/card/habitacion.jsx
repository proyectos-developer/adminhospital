import React, { useEffect, useState } from 'react'

import axios from 'axios'

import icono_avatar_masculino from '../../../assets/iconos/icono_avatar_masculino_96.png'
import icono_avatar_femenino from '../../../assets/iconos/icono_avatar_femenino_96.png'
import icono_edit from '../../../assets/iconos/icono_edit_grey_96.png'
import icono_delete from '../../../assets/iconos/icono_delete_grey_96.png'

import { useNavigate } from 'react-router-dom'
import { constantes } from '../../../uri/constantes'
import { useDispatch } from 'react-redux'
import {habitacionesdata} from '../../../redux/slice/habitacionesdata'
import {habitacionesConstants} from '../../../uri/habitaciones-constants'

export default function CardHabitacion({proporcional, habitacion}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [paciente, setPaciente] = useState({})
    const [tipo_habitacion, setTipoHabitacion] = useState ({})

    const [boton_edit, setBotonEdit] = useState (false)
    const [boton_delete, setBotonDelete] = useState (false)

    useEffect(() => {
        axios.get (`${constantes().url_principal[0].url}/paciente/${habitacion.usuario_paciente}`)
            .then ((res) => {
                setPaciente(res.data.paciente)
                axios.get (`${constantes().url_principal[0].url}/tipo/habitacion/${habitacion.tipo_habitacion}`)
                    .then ((res) => {
                        setTipoHabitacion(res.data.tipo_habitacion)
                    }).catch ((err) => {

                    })
            }).catch ((err) => {

            })
    }, [])

    const editar_asignacion_habitacion = () => {

    }

    const borrar_asignacion_habitacion = () => {
        dispatch(habitacionesdata(habitacionesConstants(habitacion.id, 0, 0, 0, 0, 16, {}, false).delete_habitacion_paciente))
    }
    
    return (
        <div className='d-flex' style={{width: '100%', height: 60 / proporcional, borderBottom: '1px solid rgb(236, 236, 236)',
                cursor: 'pointer'}}>
            <div style={{width: '10%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <img className='rounded-circle' src={paciente.genero === 'masculino' ? icono_avatar_masculino : icono_avatar_femenino} 
                    style={{width: 36 / proporcional, height: 36 / proporcional, background: '#dee3e9'}}/>
            </div>
            <div style={{width: '15%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <span style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${36 / proporcional}px`}}>
                    {habitacion.numero}
                </span>
            </div>
            <div style={{width: '25%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <span style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${36 / proporcional}px`}}>
                    {paciente.nombres + ' ' + paciente.apellidos}
                </span>
            </div>
            <div style={{width: '12.5%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <span style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${36 / proporcional}px`}}>
                    {habitacion.fecha_inicio}
                </span>
            </div>
            <div style={{width: '12.5%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <span style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${36 / proporcional}px`}}>
                    {habitacion.fecha_alta}
                </span>
            </div>
            <div style={{width: '15%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <span style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${36 / proporcional}px`}}>
                    {tipo_habitacion.nombre}
                </span>
            </div>
            <div style={{width: '10%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <img src={icono_edit} className={boton_edit ? 'rounded shadow btn' : 'rounded btn'} style={{width: 29 / proporcional, height: 29 / proporcional, margin: 3.5 / proporcional, 
                        padding: 5 / proporcional, background: 'white', border: '1px solid rgb(236, 236, 236)'}}
                        onMouseOver={() => setBotonEdit(true)} onMouseLeave={() => setBotonEdit(false)} onClick={() => editar_asignacion_habitacion()}/>
                <img src={icono_delete} className={boton_delete ? 'rounded shadow btn' : 'rounded btn'} style={{width: 29 / proporcional, height: 29 / proporcional, margin: 3.5 / proporcional, 
                        padding: 5 / proporcional, background: 'white', border: '1px solid rgb(236, 236, 236)'}}
                        onMouseOver={() => setBotonDelete(true)} onMouseLeave={() => setBotonDelete(false)} onClick={() => borrar_asignacion_habitacion()}/>
            </div>
        </div>
    )
}
