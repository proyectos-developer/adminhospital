import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {doctoresdata} from '../../redux/slice/doctoresdata'
import { doctoresConstants } from '../../uri/doctores-constants'

import icono_avatar_masculino from '../../assets/iconos/icono_avatar_masculino_96.png'
import icono_avatar_femenino from '../../assets/iconos/icono_avatar_femenino_96.png'
import { useNavigate } from 'react-router-dom'

export default function DoctorAtendio({proporcional, usuario_doctor}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [doctor, setDoctor] = useState({})
    const [boton_perfil, setBotonPerfil] = useState(false)
    const [boton_mensaje, setBotonMensaje] = useState(false)
    
    const {get_doctor} = useSelector(({doctores_data}) => doctores_data)

    useEffect(() => {
        if (get_doctor && get_doctor.success === true && get_doctor.doctor){
            setDoctor(get_doctor.doctor)
        }
    }, [get_doctor])

    useEffect(() => {
        dispatch(doctoresdata(doctoresConstants(usuario_doctor, 0, 0, 0, 0, 0, {}, false).get_doctor))
    }, [])

    return (
        <div style={{width: '100%', height: 110 / proporcional, marginBottom: 15 / proporcional, background: 'rgb(130, 180, 64)', padding: 20 / proporcional, marginBottom: 32 / proporcional}}>
            {
                doctor && doctor.nombres ? (
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 70 / proporcional}}>
                        <div className='d-flex justify-content-start' style={{width: 'auto', height: 70 / proporcional}}>
                            <img className='rounded' src={doctor.genero === 'masculino' ? icono_avatar_masculino : icono_avatar_femenino} 
                                style={{width: 70 / proporcional, height: 70 / proporcional, marginRight: 16 / proporcional, background: 'white'}}/>
                            <div style={{width: 'auto', height: 70 / proporcional}}>
                                <h5 style={{fontSize: 20 / proporcional, fontWeight: 500, lineHeight: `${20 / proporcional}px`, marginBottom: 0, fontFamily: 'Nunito, sans-serif', 
                                    color: 'white'}}>
                                    {doctor.nombres + ' ' + doctor.apellidos}
                                </h5>
                                <span style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${18 / proporcional}px`, marginBottom: 0, fontFamily: 'Nunito, sans-serif', 
                                    color: 'white'}}>
                                    {doctor.correo}
                                </span>
                                <p style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${18 / proporcional}px`, marginBottom: 0, fontFamily: 'Nunito, sans-serif', 
                                    color: 'white'}}>
                                    {doctor.nro_telefono}
                                </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: 'auto', height: 70 / proporcional}}>
                            <button className='btn' style={{width: 100 / proporcional, height: 30 / proporcional, background: boton_perfil ? 'transparent' : 'white', fontSize: 14 / proporcional, 
                                    lineHeight: `${21 / proporcional}px`, color: 'rgb(119, 119, 199)', fontWeight: 300, marginRight: 10 / proporcional, border: '1px solid white',
                                paddingTop: 4 / proporcional, paddingBottom: 4 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional}}
                                    onMouseOver={() => setBotonPerfil(true)} onMouseLeave={() => setBotonPerfil(false)}
                                    onClick={() => navigate(`/doctores/doctor/${doctor.usuario}`)}>
                                Perfil
                            </button>
                            <button className='btn' style={{width: 100 / proporcional, height: 30 / proporcional, background: boton_mensaje ? 'transparent' : 'white', fontSize: 14 / proporcional, 
                                    lineHeight: `${21 / proporcional}px`, color: 'rgb(119, 119, 199)', fontWeight: 300, border: '1px solid white',
                                    paddingTop: 4 / proporcional, paddingBottom: 4 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional}}
                                    onMouseOver={() => setBotonMensaje(true)} onMouseLeave={() => setBotonMensaje(false)}
                                    onClick={() => navigate(`/doctores/doctor/${doctor.usuario}`)}>
                                Mensaje
                            </button>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}
