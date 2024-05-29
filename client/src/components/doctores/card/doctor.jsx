import React, { useState } from 'react'

import icono_facebook from '../../../assets/iconos/icono_facebook_blue_96.png'
import icono_instagram from '../../../assets/iconos/icono_instagram_blue_96.png'
import icono_twitter from '../../../assets/iconos/icono_twitter_blue_96.png'
import icono_linkedin from '../../../assets/iconos/icono_linkedin_blue_96.png'

import icono_opciones from '../../../assets/iconos/icono_opciones_black_96.png'

import icono_avatar_femenino from '../../../assets/iconos/icono_avatar_femenino_96.png'
import icono_avatar_masculino from '../../../assets/iconos/icono_avatar_masculino_96.png'
import { useNavigate } from 'react-router-dom'

export default function CardDoctor({proporcional, doctor}) {

    const navigate = useNavigate()

    const [boton_profile, setBotonProfile] = useState(false)
    const [boton_mensaje, setBotonMensaje] = useState(false)

    const [menu_opciones, setMenuOpciones] = useState(false)

    const [opcion_submenu, setOpcionSubMenu] = useState ('')

    const accion_submenu = (opcion) =>{
        if (opcion === 'editar'){

        }else if (opcion === 'eliminar'){
            
        }else if (opcion === 'mensaje'){
            
        }
    }

    return (
        <div className='shadow-rounded' style={{width: '100%', height: 'auto', padding: 22 / proporcional, background: 'white'}}>
            <div className='d-flex justify-content-end' style={{width: '100%', height: 37 / proporcional}}>
                <div className='btn position-relative' style={{with: 37 / proporcional, height: 37 / proporcional}}
                    onClick={() => setMenuOpciones(!menu_opciones)}>
                    <img src={icono_opciones} style={{width: 37 / proporcional, height: 37 / proporcional, padding: 3.5 / proporcional}}/>
                    {
                        menu_opciones ? (
                            <div className='position-absolute rounded shadow' 
                                style={{width: 140 / proporcional, height: 'auto', background: 'rgb(130, 180, 64)', padding: 10 / proporcional, left: -90 / proporcional}}>
                                <p style={{fontSize: 14 / proporcional, color: 'white', fontFamily: 'Nunito, sans-serif', fontWeight: 400, marginTop: 5 / proporcional,
                                        marginBottom: 5 / proporcional, lineHeight: `${21 / proporcional}px`, textAlign: 'left', cursor: 'pointer',
                                        opacity: opcion_submenu === 'editar' ? 0.7 : 1}}
                                        onMouseOver={() => setOpcionSubMenu('editar')} onMouseLeave={() => setOpcionSubMenu('')}
                                        onClick={() => accion_submenu('editar')}>
                                    Editar perfil
                                </p>
                                <p style={{fontSize: 14 / proporcional, color: 'white', fontFamily: 'Nunito, sans-serif', fontWeight: 400, marginTop: 5 / proporcional,
                                        marginBottom: 5 / proporcional, lineHeight: `${21 / proporcional}px`, textAlign: 'left', cursor: 'pointer',
                                        opacity: opcion_submenu === 'mensaje' ? 0.7 : 1}}
                                        onMouseOver={() => setOpcionSubMenu('mensaje')} onMouseLeave={() => setOpcionSubMenu('')}
                                        onClick={() => accion_submenu('mensaje')}>
                                    Mensaje
                                </p>
                                <p style={{fontSize: 14 / proporcional, color: 'white', fontFamily: 'Nunito, sans-serif', fontWeight: 400, marginTop: 5 / proporcional,
                                        marginBottom: 5 / proporcional, lineHeight: `${21 / proporcional}px`, textAlign: 'left', cursor: 'pointer',
                                        opacity: opcion_submenu === 'eliminar' ? 0.7 : 1}}
                                        onMouseOver={() => setOpcionSubMenu('eliminar')} onMouseLeave={() => setOpcionSubMenu('')}
                                        onClick={() => accion_submenu('eliminar')}>
                                    Eliminar
                                </p>
                            </div>
                        ) : null
                    }
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 120 / proporcional, marginBottom: 16 / proporcional}}>
                <img className='rounded-circle' src={doctor.genero === 'masculino' ? icono_avatar_masculino : icono_avatar_femenino}
                    style={{width: 120 / proporcional, height: 120 / proporcional, background: '#dee3e9', padding: 5 / proporcional}}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <h6 style={{fontSize: 16 / proporcional, fontWeight: 600, color: 'rgb(90, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                        textAlign: 'center', lineHeight: `${20 / proporcional}px`}}>
                    {doctor.nombres}
                </h6>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 22 / proporcional}}>
                    <span style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(90, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                            textAlign: 'center', lineHeight: `${22 / proporcional}px`}}>
                        {doctor.correo}
                    </span>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 22 / proporcional, marginTop: 16 / proporcional, marginBottom: 16 / proporcional}}>
                    <img src={icono_facebook} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 2 / proporcional, marginRight: 16 / proporcional, marginLeft: 16 / proporcional}}/>
                    <img src={icono_twitter} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 2 / proporcional, marginRight: 16 / proporcional, marginLeft: 16 / proporcional}}/>
                    <img src={icono_instagram} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 2 / proporcional, marginRight: 16 / proporcional, marginLeft: 16 / proporcional}}/>
                    <img src={icono_linkedin} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 2 / proporcional, marginRight: 16 / proporcional, marginLeft: 16 / proporcional}}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 30 / proporcional}}>
                    <button className={boton_profile ? `shadow btn rounded` : 'btn rounded'} style={{width: 100 / proporcional, border: '1px solid rgb(236, 236, 236)', color: 'rgb(85, 85, 85)', fontSize: 14 / proporcional,
                            lineHeight: `${14 / proporcional}px`, fontWeight: 300, marginRight: 10 / proporcional}}
                            onClick={() => navigate (`/doctores/doctor/${doctor.usuario}`)}
                            onMouseOver={() => setBotonProfile(true)} onMouseLeave={() => setBotonProfile(false)}>
                        Perfil
                    </button>
                    <button className={boton_mensaje ? `shadow btn rounded` : 'btn rounded'} style={{width: 100 / proporcional, border: '1px solid rgb(236, 236, 236)', color: 'rgb(85, 85, 85)', fontSize: 14 / proporcional,
                            lineHeight: `${14 / proporcional}px`, fontWeight: 300, marginLeft: 10 / proporcional}}
                            onMouseOver={() => setBotonMensaje(true)} onMouseLeave={() => setBotonMensaje(false)}>
                        Mensaje
                    </button>
                </div>
            </div>
        </div>
    )
}
