import React, { useState } from 'react'

import icono_avatar_masculino from '../../assets/iconos/icono_avatar_masculino_96.png'
import icono_avatar_femenino from '../../assets/iconos/icono_avatar_femenino_96.png'
import icono_facebook from '../../assets/iconos/icono_facebook_grey_96.png'
import icono_twitter from '../../assets/iconos/icono_twitter_grey_96.png'
import icono_instagram from '../../assets/iconos/icono_instagram_grey_96.png'
import icono_linkedin from '../../assets/iconos/icono_linkedin_grey_96.png'

import icono_opciones from '../../assets/iconos/icono_opciones_black_96.png'

export default function InformacionContacto({proporcional, doctor}) {

    const [boton_seguir, setBotonSeguir] = useState(false)
    const [boton_mensaje, setBotonMensaje] = useState(false)

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto',  background: 'white', padding: 22 / proporcional, marginBottom: 16 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 140 / proporcional, marginBottom: 16 / proporcional}}>
                    <img className='rounded-circle' src={doctor.genero === 'masculino' ? icono_avatar_masculino : icono_avatar_femenino}
                        style={{width: 140 / proporcional, height: 140 / proporcional, background: '#dee3e9', padding: 10 / proporcional}}/>
                </div>
                <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                    <h5 style={{fontSize: 20 / proporcional, fontWeight: 500, color: 'rgb(90, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                            textAlign: 'center', lineHeight: `${24 / proporcional}px`}}>
                        {doctor.nombres}
                    </h5>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 22 / proporcional}}>
                        <span style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(90, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                textAlign: 'center', lineHeight: `${22 / proporcional}px`}}>
                            {doctor.correo}
                        </span>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 30 / proporcional}}>
                    <button className={boton_seguir ? `shadow btn rounded` : 'btn rounded'} style={{width: 100 / proporcional, 
                            border: '1px solid rgb(130, 180, 64)', color: 'white', fontSize: 14 / proporcional, background: 'rgb(130, 180, 64)',
                            lineHeight: `${14 / proporcional}px`, fontWeight: 300, marginRight: 10 / proporcional}}
                            onClick={() => navigate (`/doctores/doctor/${doctor.usuario}`)}
                            onMouseOver={() => setBotonSeguir(true)} onMouseLeave={() => setBotonSeguir(false)}>
                        Seguirme
                    </button>
                    <button className={boton_mensaje ? `shadow btn rounded` : 'btn rounded'} style={{width: 100 / proporcional, 
                            border: '1px solid rgb(3, 146, 207)', color: 'rgb(3, 146, 207)', fontSize: 14 / proporcional,
                            lineHeight: `${14 / proporcional}px`, fontWeight: 300, marginLeft: 10 / proporcional}}
                            onMouseOver={() => setBotonMensaje(true)} onMouseLeave={() => setBotonMensaje(false)}>
                        Mensaje
                    </button>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto',  background: 'white', padding: 22 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 20 / proporcional, marginBottom: 22 / proporcional}}>
                    <h2 style={{fontSize: 17 / proporcional, fontWeight: 400, color: 'rgb(51, 51, 51)', fontFamily: 'Nunito, sans-serif', 
                            textAlign: 'left', lineHeight: `${20 / proporcional}px`}}>
                        Acerca de mi
                    </h2>
                    <img src={icono_opciones} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 2 / proporcional, paddingRight: 0, cursor: 'pointer'}}/>
                </div>
                <small style={{fontSize: 13.5 / proporcional, fontWeight: 400, color: 'rgb(154, 154, 154)', fontFamily: 'Nunito, sans-serif', 
                        textAlign: 'left', lineHeight: `${20 / proporcional}px`}}>
                    Grado de estudios
                </small>
                <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                        textAlign: 'left', lineHeight: `${22 / proporcional}px`, marginBottom: 16 / proporcional}}>
                    MBBS, MD
                </p>
                <small style={{fontSize: 13.5 / proporcional, fontWeight: 400, color: 'rgb(154, 154, 154)', fontFamily: 'Nunito, sans-serif', 
                        textAlign: 'left', lineHeight: `${20 / proporcional}px`}}>
                    Designación
                </small>
                <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                        textAlign: 'left', lineHeight: `${22 / proporcional}px`, marginBottom: 16 / proporcional}}>
                    {doctor.especialidad}
                </p>
                <small style={{fontSize: 13.5 / proporcional, fontWeight: 400, color: 'rgb(154, 154, 154)', fontFamily: 'Nunito, sans-serif', 
                        textAlign: 'left', lineHeight: `${20 / proporcional}px`}}>
                    Dirección e-mail
                </small>
                <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                        textAlign: 'left', lineHeight: `${22 / proporcional}px`, marginBottom: 16 / proporcional}}>
                    {doctor.correo}
                </p>
                <small style={{fontSize: 13.5 / proporcional, fontWeight: 400, color: 'rgb(154, 154, 154)', fontFamily: 'Nunito, sans-serif', 
                        textAlign: 'left', lineHeight: `${20 / proporcional}px`}}>
                    Teléfono móvil
                </small>
                <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                        textAlign: 'left', lineHeight: `${22 / proporcional}px`, marginBottom: 16 / proporcional}}>
                    {doctor.nro_telefono}
                </p>
                <small style={{fontSize: 13.5 / proporcional, fontWeight: 400, color: 'rgb(154, 154, 154)', fontFamily: 'Nunito, sans-serif', 
                        textAlign: 'left', lineHeight: `${20 / proporcional}px`}}>
                    Dirección
                </small>
                <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                        textAlign: 'left', lineHeight: `${22 / proporcional}px`, marginBottom: 16 / proporcional}}>
                    Calle Ignacio la Puente 270, Miraflores, Lima Perú
                </p>
                <div style={{width: '100%', height: 1, background: 'rgb(98, 101, 105)', marginBottom: 16 / proporcional}}/>
                <small style={{fontSize: 13.5 / proporcional, fontWeight: 400, color: 'rgb(154, 154, 154)', fontFamily: 'Nunito, sans-serif', 
                        textAlign: 'left', lineHeight: `${20 / proporcional}px`}}>
                    Redes sociales:
                </small>
                <div className='d-flex' style={{width: '100%', height: 22 / proporcional, marginBottom: 16 / proporcional}}>
                    <img src={icono_facebook} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 3.5 / proporcional, marginRight: 5 / proporcional}}/>
                    <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                            textAlign: 'left', lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional}}>
                        Facebook
                    </p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 22 / proporcional, marginBottom: 16 / proporcional}}>
                    <img src={icono_twitter} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 3.5 / proporcional, marginRight: 5 / proporcional}}/>
                    <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                            textAlign: 'left', lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional}}>
                        Twitter
                    </p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 22 / proporcional, marginBottom: 16 / proporcional}}>
                    <img src={icono_instagram} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 3.5 / proporcional, marginRight: 5 / proporcional}}/>
                    <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                            textAlign: 'left', lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional}}>
                        Instagram
                    </p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 22 / proporcional, marginBottom: 16 / proporcional}}>
                    <img src={icono_linkedin} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 3.5 / proporcional, marginRight: 5 / proporcional}}/>
                    <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                            textAlign: 'left', lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional}}>
                        Linkedin
                    </p>
                </div>
            </div>
        </div>
    )
}
