import React, { useEffect, useState } from 'react'

import axios from 'axios'

import icono_avatar_masculino from '../../../assets/iconos/icono_avatar_masculino_96.png'
import icono_avatar_femenino from '../../../assets/iconos/icono_avatar_femenino_96.png'
import icono_edit from '../../../assets/iconos/icono_edit_grey_96.png'
import icono_delete from '../../../assets/iconos/icono_delete_grey_v2_96.png'

import { useNavigate } from 'react-router-dom'
import { constantes } from '../../../uri/constantes'
import {citasdata} from '../../../redux/slice/citasdata'
import { citasConstants } from '../../../uri/citas-constants'
import { useDispatch } from 'react-redux'

export default function CardCita({proporcional, cita}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [doctor, setDoctor] = useState({})

    const [boton_edit, setBotonEdit] = useState (false)
    const [boton_delete, setBotonDelete] = useState (false)
    const [card_id, setCardId] = useState ('')

    useEffect(() => {
        axios.get (`${constantes().url_principal[0].url}/doctor/${cita.usuario_doctor}`)
            .then ((res) => {
                setDoctor (res.data.doctor)
            }).catch ((err) => {

            })
    }, [])

    const editar_cita = () => {

    }

    const borrar_cita = () => {
        dispatch(citasdata(citasConstants(cita.id, 0, 0, 0, 0, 16, {}, false).delete_cita))
    }
    
    return (
        <div className='d-flex' style={{width: '100%', height: 60 / proporcional, borderBottom: '1px solid rgb(236, 236, 236)', background: card_id === cita.id ? '#fafafa' : 'white',
                cursor: 'pointer'}} onMouseOver={() => setCardId(cita.id)} onMouseLeave={() => setCardId('')}>
            <div style={{width: '5%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <img src={cita.genero === 'masculino' ? icono_avatar_masculino : icono_avatar_femenino} className='rounded-circle' 
                    style={{width: 36 / proporcional, height: 36 / proporcional, background: '#dee3e9'}}/>
            </div>
            <div style={{width: '25%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${21 / proporcional}px`}}>
                    {cita.nombre_paciente}
                </p>
                <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${15 / proporcional}px`}}>
                    {cita.nro_telefono}
                </p>
            </div>
            <div style={{width: '21%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${36 / proporcional}px`}}>
                    {cita.correo}
                </p>
            </div>
            <div style={{width: '12%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${21 / proporcional}px`}}>
                    {cita.fecha}
                </p>
                <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${15 / proporcional}px`}}>
                    {cita.hora}
                </p>
            </div>
            <div style={{width: '12%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <span style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${36 / proporcional}px`}}>
                   Dr. {doctor.apellidos}
                </span>
            </div>
            <div style={{width: '10%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <span style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${36 / proporcional}px`}}>
                    {cita.condicion_medica}
                </span>
            </div>
            <div style={{width: '15%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <img src={icono_edit} className={boton_edit ? 'rounded shadow btn' : 'rounded btn'} style={{width: 29 / proporcional, height: 29 / proporcional, margin: 3.5 / proporcional, 
                        padding: 5 / proporcional, background: 'white', border: '1px solid rgb(236, 236, 236)'}}
                        onMouseOver={() => setBotonEdit(true)} onMouseLeave={() => setBotonEdit(false)} onClick={() => editar_cita()}/>
                <img src={icono_delete} className={boton_delete ? 'rounded shadow btn' : 'rounded btn'} style={{width: 29 / proporcional, height: 29 / proporcional, margin: 3.5 / proporcional, 
                        padding: 5 / proporcional, background: 'white', border: '1px solid rgb(236, 236, 236)'}}
                        onMouseOver={() => setBotonDelete(true)} onMouseLeave={() => setBotonDelete(false)} onClick={() => borrar_cita()}/>
            </div>
        </div>
    )
}
