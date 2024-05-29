import React, { useEffect, useState } from 'react'

import icono_triangle from '../../assets/iconos/icono_triangle_grey_select_96.png'
import icono_ampliar from '../../assets/iconos/icono_ampliar_black_v1_96.png'
import icono_opciones from '../../assets/iconos/icono_opciones_black_96.png'

import icono_box from '../../assets/iconos/icono_box_empty_grey_96.png'
import icono_check_box from '../../assets/iconos/icono_check_box_green_96.png'
import icono_radio_button_empty from '../../assets/iconos/icono_radio_button_empty_grey_96.png'
import icono_radio_button_full from '../../assets/iconos/icono_radio_button_full_grey_96.png'

import icono_star_full from '../../assets/iconos/icono_star_full_grey_96.png'
import icono_star_empty from '../../assets/iconos/icono_star_empty_grey_96.png'

import icono_avatar_masculino from '../../assets/iconos/icono_avatar_masculino_96.png'
import icono_avatar_femenino from '../../assets/iconos/icono_avatar_femenino_96.png'

export default function InformacionExtra({proporcional, doctor}) {

    const [seleccion_menu, setSeleccionMenu] = useState ('basico')
    const [menu_over, setMenuOver] = useState ('')

    const [nombres, setNombres] = useState('')
    const [correo, setCorreo] = useState('')
    const [nro_telefono, setNroTelefono] = useState('')
    const [password, setPassword] = useState ('')
    const [new_password, setNewPassword] = useState ('')
    const [confirmar_password, setConfirmarPassword] = useState ('')

    const [idioma, setIdioma] = useState ('')
    const [zona_horaria, setZonaHoraria] = useState('1')
    const [formato_fecha, setFormatoFecha] = useState('')
    const [correo_semanal, setCorreoSemanal] = useState (false)
    const [correo_campañas, setCorreoCampañas] = useState (false)
    const [correo_promocional, setCorreoPromocional] = useState (false)
    const [correo_tips, setCorreoTips] = useState(false)

    const [boton_update, setBotonUpdate] = useState(false)
    const [boton_cancelar, setBotonCancelar] = useState (false)

    useEffect(() => {
        setNombres(doctor.nombres + ' ' + doctor.apellidos)
        setCorreo(doctor.correo)
        setNroTelefono(doctor.nro_telefono)
    }, [])

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto',  background: 'white', marginBottom: 16 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 32 / proporcional, marginBottom: 22 / proporcional, padding: 22 / proporcional}}>
                    <div className='d-flex' style={{width: '31%', height: 32 / proporcional}}>
                        <div className='d-flex justify-content-start' style={{width: '80%', height: 32 / proporcional, paddingBottom: 9 / proporcional,
                                borderBottom: '1px solid rgb(98, 101, 105)'}}>
                            <label style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, marginBottom: 9, color: 'rgb(98, 101, 105)'}}>
                                OPD
                            </label>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 32 / proporcional, paddingBottom: 9 / proporcional,
                                borderBottom: '1px solid rgb(189, 189, 189)'}}>
                            <label style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, marginBottom: 9, color: 'rgb(98, 101, 105)'}}>
                                77%
                            </label>
                        </div>
                    </div>
                    <div className='d-flex' style={{width: '31%', height: 32 / proporcional}}>
                        <div className='d-flex justify-content-start' style={{width: '80%', height: 32 / proporcional, paddingBottom: 9 / proporcional,
                                borderBottom: '1px solid rgb(98, 101, 105)'}}>
                            <label style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, marginBottom: 9, color: 'rgb(98, 101, 105)'}}>
                                Operaciones
                            </label>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 32 / proporcional, paddingBottom: 9 / proporcional,
                                borderBottom: '1px solid rgb(189, 189, 189)'}}>
                            <label style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, marginBottom: 9, color: 'rgb(98, 101, 105)'}}>
                                50%
                            </label>
                        </div>
                    </div>
                    <div className='d-flex' style={{width: '31%', height: 32 / proporcional}}>
                        <div className='d-flex justify-content-start' style={{width: '80%', height: 32 / proporcional, paddingBottom: 9 / proporcional,
                                borderBottom: '1px solid rgb(98, 101, 105)'}}>
                            <label style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, marginBottom: 9, color: 'rgb(98, 101, 105)'}}>
                                Visitas pacientes
                            </label>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 32 / proporcional, paddingBottom: 9 / proporcional,
                                borderBottom: '1px solid rgb(189, 189, 189)'}}>
                            <label style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, marginBottom: 9, color: 'rgb(98, 101, 105)'}}>
                                23%
                            </label>
                        </div>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 64 / proporcional, borderBottom: '1px solid rgb(130, 180, 64)', padding: 22 / proporcional, paddingBottom: 0}}>
                    <div style={{width: 100 / proporcional, height: 42 / proporcional, cursor: 'pointer', borderBottom: '1px solid rgb(130, 180, 64)'}}
                        onMouseOver={() => setMenuOver('basico')} onMouseLeave={() => setMenuOver('')} onClick={() => setSeleccionMenu('basico')}>
                        <p style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, marginBottom: 7, textAlign: 'center', 
                            color: menu_over === 'basico' || seleccion_menu === 'basico' ? 'rgb(130, 180, 64)' : 'rgb(98, 101, 105)'}}>
                            Básico
                        </p>
                        <div className='d-flex justify-content-center' style={{width: 100 / proporcional, height: 13 / proporcional}}>
                            {
                                seleccion_menu === 'basico' || menu_over === 'basico' ? (
                                    <img src={icono_triangle} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                ) : null
                            }
                        </div>
                    </div>
                    <div style={{width: 100 / proporcional, height: 42 / proporcional, cursor: 'pointer', borderBottom: '1px solid rgb(130, 180, 64)'}}
                        onMouseOver={() => setMenuOver('cuenta')} onMouseLeave={() => setMenuOver('')} onClick={() => setSeleccionMenu('cuenta')}>
                        <p style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, marginBottom: 7, textAlign: 'center', 
                            color: menu_over === 'cuenta' || seleccion_menu === 'cuenta' ? 'rgb(130, 180, 64)' : 'rgb(98, 101, 105)'}}>
                            Cuenta
                        </p>
                        <div className='d-flex justify-content-center' style={{width: 100 / proporcional, height: 13 / proporcional}}>
                            {
                                seleccion_menu === 'cuenta' || menu_over === 'cuenta' ? (
                                    <img src={icono_triangle} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                ) : null
                            }
                        </div>
                    </div>
                    <div style={{width: 100 / proporcional, height: 42 / proporcional, cursor: 'pointer', borderBottom: '1px solid rgb(130, 180, 64)'}}
                        onMouseOver={() => setMenuOver('general')} onMouseLeave={() => setMenuOver('')} onClick={() => setSeleccionMenu('general')}>
                        <p style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, marginBottom: 7, textAlign: 'center', 
                            color: menu_over === 'general' || seleccion_menu === 'general' ? 'rgb(130, 180, 64)' : 'rgb(98, 101, 105)'}}>
                            General
                        </p>
                        <div className='d-flex justify-content-center' style={{width: 100 / proporcional, height: 13 / proporcional}}>
                            {
                                seleccion_menu === 'general' || menu_over === 'general' ? (
                                    <img src={icono_triangle} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                ) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto',  background: 'white', padding: 22 / proporcional}}>
                {
                    seleccion_menu === 'basico' ? (
                        <div style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 20 / proporcional, marginBottom: 22 / proporcional}}>
                                <h2 style={{fontSize: 17 / proporcional, fontWeight: 400, color: 'rgb(51, 51, 51)', fontFamily: 'Nunito, sans-serif', 
                                        textAlign: 'left', lineHeight: `${20 / proporcional}px`}}>
                                    Información básica
                                </h2>
                                <div className='d-flex' style={{width: 'auto', height: 'auto'}}>
                                    <img src={icono_ampliar} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 2 / proporcional, marginRight: 10 / proporcional, cursor: 'pointer'}}/>
                                    <img src={icono_opciones} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 2 / proporcional, paddingRight: 0, cursor: 'pointer'}}/>
                                </div>
                            </div>
                            <div className='' style={{width: '100%', height: 'auto', marginBottom: 11 / proporcional, marginTop: 22 / proporcional}}>
                                <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                        lineHeight: `${22 / proporcional}px`}}>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                </p>
                            </div>
                            <div className='' style={{width: '100%', height: 'auto', marginBottom: 22 / proporcional, marginTop: 11 / proporcional}}>
                                <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                        lineHeight: `${22 / proporcional}px`}}>
                                    Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className='d-flex' style={{width: '100%', height: 40 / proporcional, marginBottom: 16 / proporcional}}>
                                    <h2 style={{fontSize: 32 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif',
                                        marginBottom: 0, color: 'rgb(98, 101, 105)'}}>
                                            Rating 5/4.3
                                    </h2>   
                                    <div className='d-flex' style={{width: 'auto', height: 22 / proporcional, marginTop: 14 / proporcional}}>
                                        <img src={icono_star_full} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 3.5 / proporcional}}/>
                                        <img src={icono_star_full} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 3.5 / proporcional}}/>
                                        <img src={icono_star_full} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 3.5 / proporcional}}/>
                                        <img src={icono_star_full} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 3.5 / proporcional}}/>
                                        <img src={icono_star_empty} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 3.5 / proporcional}}/>
                                    </div>
                                </div>
                                <div className='position-relative' style={{width: '100%', height: 34 / proporcional, marginBottom: 16 / proporcional}}>
                                    <div className='d-flex justify-content-start' style={{width: '100%', height: 26 / proporcional, marginBottom: 8 / proporcional}}>
                                        <img className='rounded-circle position-absolute' src={icono_avatar_masculino} style={{width: 26 / proporcional, height: 26 / proporcional, background: '#dee3e9', 
                                                padding: 1 / proporcional, left: 0, zIndex: 99}}/>
                                        <img className='rounded-circle position-absolute' src={icono_avatar_femenino} style={{width: 26 / proporcional, height: 26 / proporcional, background: '#dee3e9', 
                                                padding: 1 / proporcional, left: 16, zIndex: 100}}/>
                                        <img className='rounded-circle position-absolute' src={icono_avatar_femenino} style={{width: 26 / proporcional, height: 26 / proporcional, background: '#dee3e9', 
                                                padding: 1 / proporcional, left: 32, zIndex: 101}}/>
                                        <img className='rounded-circle position-absolute' src={icono_avatar_masculino} style={{width: 26 / proporcional, height: 26 / proporcional, background: '#dee3e9', 
                                                padding: 1 / proporcional, left: 48, zIndex: 102}}/>
                                        <img className='rounded-circle position-absolute' src={icono_avatar_masculino} style={{width: 26 / proporcional, height: 26 / proporcional, background: '#dee3e9', 
                                                padding: 1 / proporcional, left: 64, zIndex: 103}}/>
                                    </div>
                                </div>
                                <div className='' style={{width: '100%', height: 'auto', marginBottom: 24 / proporcional}}>
                                    <div className='d-flex justify-content-between'
                                            style={{width: '100%', height: 36 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, borderBottom: '1px solid rgb(236, 236, 236)'}}>
                                        <div className='d-flex justify-content-start' style={{width: 'auto', height: 20 / proporcional}}>
                                            <p style={{fontSize: 13 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                                    textAlign: 'left', lineHeight: `${20 / proporcional}px`}}>
                                                5.0
                                            </p>
                                            <div className='d-flex' style={{width: 'auto', height: 13 / proporcional, marginLeft: 8 / proporcional, marginRight: 8 / proporcional, marginTop: 3 / proporcional}}>
                                                <img src={icono_star_full} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                                <img src={icono_star_full} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                                <img src={icono_star_full} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                                <img src={icono_star_full} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                                <img src={icono_star_empty} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-end' style={{width: 'auto', height: 20 / proporcional}}>
                                            <span style={{fontSize: 13 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                                    textAlign: 'left', lineHeight: `${20 / proporcional}px`, marginRight: 5 / proporcional}}>
                                                4,178
                                            </span>
                                            <span style={{fontSize: 10 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                                    textAlign: 'left', lineHeight: `${15 / proporcional}px`, marginTop: 5 / proporcional}}>
                                                58%
                                            </span>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'
                                            style={{width: '100%', height: 36 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, borderBottom: '1px solid rgb(236, 236, 236)'}}>
                                        <div className='d-flex justify-content-start' style={{width: 'auto', height: 20 / proporcional}}>
                                            <p style={{fontSize: 13 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                                    textAlign: 'left', lineHeight: `${20 / proporcional}px`}}>
                                                5.0
                                            </p>
                                            <div className='d-flex' style={{width: 'auto', height: 13 / proporcional, marginLeft: 8 / proporcional, marginRight: 8 / proporcional, marginTop: 3 / proporcional}}>
                                                <img src={icono_star_full} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                                <img src={icono_star_full} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                                <img src={icono_star_full} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                                <img src={icono_star_full} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                                <img src={icono_star_empty} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-end' style={{width: 'auto', height: 20 / proporcional}}>
                                            <span style={{fontSize: 13 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                                    textAlign: 'left', lineHeight: `${20 / proporcional}px`, marginRight: 5 / proporcional}}>
                                                4,178
                                            </span>
                                            <span style={{fontSize: 10 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                                    textAlign: 'left', lineHeight: `${15 / proporcional}px`, marginTop: 5 / proporcional}}>
                                                58%
                                            </span>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'
                                            style={{width: '100%', height: 36 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, borderBottom: '1px solid rgb(236, 236, 236)'}}>
                                        <div className='d-flex justify-content-start' style={{width: 'auto', height: 20 / proporcional}}>
                                            <p style={{fontSize: 13 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                                    textAlign: 'left', lineHeight: `${20 / proporcional}px`}}>
                                                5.0
                                            </p>
                                            <div className='d-flex' style={{width: 'auto', height: 13 / proporcional, marginLeft: 8 / proporcional, marginRight: 8 / proporcional, marginTop: 3 / proporcional}}>
                                                <img src={icono_star_full} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                                <img src={icono_star_full} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                                <img src={icono_star_full} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                                <img src={icono_star_full} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                                <img src={icono_star_empty} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-end' style={{width: 'auto', height: 20 / proporcional}}>
                                            <span style={{fontSize: 13 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                                    textAlign: 'left', lineHeight: `${20 / proporcional}px`, marginRight: 5 / proporcional}}>
                                                4,178
                                            </span>
                                            <span style={{fontSize: 10 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                                    textAlign: 'left', lineHeight: `${15 / proporcional}px`, marginTop: 5 / proporcional}}>
                                                58%
                                            </span>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'
                                            style={{width: '100%', height: 36 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, borderBottom: '1px solid rgb(236, 236, 236)'}}>
                                        <div className='d-flex justify-content-start' style={{width: 'auto', height: 20 / proporcional}}>
                                            <p style={{fontSize: 13 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                                    textAlign: 'left', lineHeight: `${20 / proporcional}px`}}>
                                                5.0
                                            </p>
                                            <div className='d-flex' style={{width: 'auto', height: 13 / proporcional, marginLeft: 8 / proporcional, marginRight: 8 / proporcional, marginTop: 3 / proporcional}}>
                                                <img src={icono_star_full} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                                <img src={icono_star_full} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                                <img src={icono_star_full} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                                <img src={icono_star_full} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                                <img src={icono_star_empty} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-end' style={{width: 'auto', height: 20 / proporcional}}>
                                            <span style={{fontSize: 13 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                                    textAlign: 'left', lineHeight: `${20 / proporcional}px`, marginRight: 5 / proporcional}}>
                                                4,178
                                            </span>
                                            <span style={{fontSize: 10 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                                    textAlign: 'left', lineHeight: `${15 / proporcional}px`, marginTop: 5 / proporcional}}>
                                                58%
                                            </span>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'
                                            style={{width: '100%', height: 36 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, borderBottom: '1px solid rgb(236, 236, 236)'}}>
                                        <div className='d-flex justify-content-start' style={{width: 'auto', height: 20 / proporcional}}>
                                            <p style={{fontSize: 13 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                                    textAlign: 'left', lineHeight: `${20 / proporcional}px`}}>
                                                5.0
                                            </p>
                                            <div className='d-flex' style={{width: 'auto', height: 13 / proporcional, marginLeft: 8 / proporcional, marginRight: 8 / proporcional, marginTop: 3 / proporcional}}>
                                                <img src={icono_star_full} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                                <img src={icono_star_full} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                                <img src={icono_star_full} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                                <img src={icono_star_full} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                                <img src={icono_star_empty} style={{width: 13 / proporcional, height: 13 / proporcional}}/>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-end' style={{width: 'auto', height: 20 / proporcional}}>
                                            <span style={{fontSize: 13 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                                    textAlign: 'left', lineHeight: `${20 / proporcional}px`, marginRight: 5 / proporcional}}>
                                                4,178
                                            </span>
                                            <span style={{fontSize: 10 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                                    textAlign: 'left', lineHeight: `${15 / proporcional}px`, marginTop: 5 / proporcional}}>
                                                58%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: '100%', height: 'auto'}}>
                                    <h6 style={{fontSize: 16 / proporcional, fontWeight: 600, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                            textAlign: 'left', lineHeight: `${20 / proporcional}px`, marginBottom: 8 / proporcional}}>
                                        Educación
                                    </h6>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <div className='' style={{width: '100%', height: 48 / proporcional, paddingTop: 12 / proporcional, paddingBlock: 12 / proporcional, paddingLeft: 20 / proporcional,
                                                paddingRight: 20 / proporcional, border: '1px solid rgb(236, 236, 236)'}}>
                                            <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                                    textAlign: 'left', lineHeight: `${22 / proporcional}px`, marginBottom: 8 / proporcional}}>
                                                M.B.B.S., Harvard University, USA.
                                            </p>
                                        </div>
                                        <div className='' style={{width: '100%', height: 48 / proporcional, paddingTop: 12 / proporcional, paddingBlock: 12 / proporcional, paddingLeft: 20 / proporcional,
                                                paddingRight: 20 / proporcional, border: '1px solid rgb(236, 236, 236)'}}>
                                            <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                                    textAlign: 'left', lineHeight: `${22 / proporcional}px`, marginBottom: 8 / proporcional}}>
                                                M.S., Harvard University, USA
                                            </p>
                                        </div>
                                        <div className='' style={{width: '100%', height: 48 / proporcional, paddingTop: 12 / proporcional, paddingBlock: 12 / proporcional, paddingLeft: 20 / proporcional,
                                                paddingRight: 20 / proporcional, border: '1px solid rgb(236, 236, 236)'}}>
                                            <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                                    textAlign: 'left', lineHeight: `${22 / proporcional}px`, marginBottom: 8 / proporcional}}>
                                                SPINAL FELLOWSHIP DR. John Adam, Allegimeines Krakenhaus, Schewring, Germany
                                            </p>
                                        </div>
                                        <div className='' style={{width: '100%', height: 48 / proporcional, paddingTop: 12 / proporcional, paddingBlock: 12 / proporcional, paddingLeft: 20 / proporcional,
                                                paddingRight: 20 / proporcional, border: '1px solid rgb(236, 236, 236)'}}>
                                            <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                                    textAlign: 'left', lineHeight: `${22 / proporcional}px`, marginBottom: 8 / proporcional}}>
                                                Fellowship in Endoscopic Spine Surgery Phoenix, USA.
                                            </p>
                                        </div>
                                        <div className='' style={{width: '100%', height: 48 / proporcional, paddingTop: 12 / proporcional, paddingBlock: 12 / proporcional, paddingLeft: 20 / proporcional,
                                                paddingRight: 20 / proporcional, border: '1px solid rgb(236, 236, 236)'}}>
                                            <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                                    textAlign: 'left', lineHeight: `${22 / proporcional}px`, marginBottom: 8 / proporcional}}>
                                                D.N.B from AIIMS
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : seleccion_menu === 'cuenta' ? (
                        <div style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 20 / proporcional, marginBottom: 22 / proporcional}}>
                                <h2 style={{fontSize: 17 / proporcional, fontWeight: 400, color: 'rgb(51, 51, 51)', fontFamily: 'Nunito, sans-serif', 
                                        textAlign: 'left', lineHeight: `${20 / proporcional}px`}}>
                                    Información cuenta
                                </h2>
                                <div className='d-flex' style={{width: 'auto', height: 'auto'}}>
                                    <img src={icono_ampliar} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 2 / proporcional, marginRight: 10 / proporcional, cursor: 'pointer'}}/>
                                    <img src={icono_opciones} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 2 / proporcional, paddingRight: 0, cursor: 'pointer'}}/>
                                </div>
                            </div>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div style={{width: '100%', height: 36 / proporcional, marginBottom: 16 / proporcional}}>    
                                    <input 
                                        type='default'
                                        className='form-control'
                                        style={{width: '100%', height: 36 / proporcional, paddingTop: 6 / proporcional, paddingBottom: 6 / proporcional, paddingLeft: 12 / proporcional,
                                                    paddingRight: 12 / proporcional, fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                                    color: 'rgb(73, 80, 87)', fontFamily: 'Nunito, sans-serif', background: 'rgb(233, 236, 239)'}}
                                        value={nombres}
                                        onChange={(event) => setNombres(event.target.value)}
                                        id='nombres'
                                        placeholder='Nombres y apellidos'/>
                                </div>    
                                <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional, padding: 10 / proporcional, border: '1px solid rgb(236, 236, 236)'}}>
                                    <label style={{fontSize: 13 / proporcional, color: 'rgb(119, 119, 119)', lineHeight: `${15 / proporcional}px`, fontWeight: 400, marginBottom: 8 / proporcional,
                                        fontFamily: 'Nunito, sans-serif'}}>E-mail</label>
                                    <input 
                                        type='e-mail'
                                        className='form-control border-0'
                                        style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                                    color: 'rgb(73, 80, 87)', fontFamily: 'Nunito, sans-serif', background: 'white'}}
                                        value={correo}
                                        onChange={(event) => setCorreo(event.target.value)}
                                        id='correo'
                                        placeholder='Correo electrónico'/>
                                </div>    
                                <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional, padding: 10 / proporcional, border: '1px solid rgb(236, 236, 236)'}}>
                                    <label style={{fontSize: 13 / proporcional, color: 'rgb(119, 119, 119)', lineHeight: `${15 / proporcional}px`, fontWeight: 400, marginBottom: 8 / proporcional,
                                        fontFamily: 'Nunito, sans-serif'}}>Nro teléfono</label>
                                    <input 
                                        type='number'
                                        className='form-control border-0'
                                        style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                                    color: 'rgb(73, 80, 87)', fontFamily: 'Nunito, sans-serif', background: 'white'}}
                                        value={nro_telefono}
                                        onChange={(event) => setNroTelefono(event.target.value)}
                                        id='nro_telefono'
                                        placeholder='número teléfono'/>
                                </div>    
                            </div>
                            <div style={{width: '100%', height: 'auto'}}>
                                <h6 style={{fontSize: 16 / proporcional, fontWeight: 600, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', 
                                        textAlign: 'left', lineHeight: `${19 / proporcional}px`}}>
                                    Cambio de password
                                </h6>
                                <div style={{width: '100%', height: 'auto'}}>
                                    <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional, padding: 10 / proporcional, border: '1px solid rgb(236, 236, 236)'}}>
                                        <label style={{fontSize: 13 / proporcional, color: 'rgb(119, 119, 119)', lineHeight: `${15 / proporcional}px`, fontWeight: 400, marginBottom: 8 / proporcional,
                                            fontFamily: 'Nunito, sans-serif'}}>Contraseña actual</label>
                                        <input 
                                            type='password'
                                            className='form-control border-0'
                                            style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                                        color: 'rgb(73, 80, 87)', fontFamily: 'Nunito, sans-serif', background: 'white'}}
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                            id='password'
                                            placeholder='password'/>
                                    </div>    
                                    <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional, padding: 10 / proporcional, border: '1px solid rgb(236, 236, 236)'}}>
                                        <label style={{fontSize: 13 / proporcional, color: 'rgb(119, 119, 119)', lineHeight: `${15 / proporcional}px`, fontWeight: 400, marginBottom: 8 / proporcional,
                                            fontFamily: 'Nunito, sans-serif'}}>Nueva contraseña</label>
                                        <input 
                                            type='password'
                                            className='form-control border-0'
                                            style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                                        color: 'rgb(73, 80, 87)', fontFamily: 'Nunito, sans-serif', background: 'white'}}
                                            value={new_password}
                                            onChange={(event) => setNewPassword(event.target.value)}
                                            id='new_password'
                                            placeholder='password'/>
                                    </div>    
                                    <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional, padding: 10 / proporcional, border: '1px solid rgb(236, 236, 236)'}}>
                                        <label style={{fontSize: 13 / proporcional, color: 'rgb(119, 119, 119)', lineHeight: `${15 / proporcional}px`, fontWeight: 400, marginBottom: 8 / proporcional,
                                            fontFamily: 'Nunito, sans-serif'}}>Confirmar password</label>
                                        <input 
                                            type='password'
                                            className='form-control border-0'
                                            style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                                        color: 'rgb(73, 80, 87)', fontFamily: 'Nunito, sans-serif', background: 'white'}}
                                            value={confirmar_password}
                                            onChange={(event) => setConfirmarPassword(event.target.value)}
                                            id='confirmar_password'
                                            placeholder='password'/>
                                    </div>    
                                </div>
                            </div>
                            <div className='d-flex justify-content-start' style={{width: '100%', height: 30 / proporcional}}>
                                <button className={boton_update ? `shadow btn rounded` : 'btn rounded'} style={{width: 100 / proporcional, 
                                        border: '1px solid rgb(130, 180, 64)', color: 'white', fontSize: 14 / proporcional, background: 'rgb(130, 180, 64)',
                                        lineHeight: `${14 / proporcional}px`, fontWeight: 300, marginRight: 10 / proporcional}}
                                        onClick={() => navigate (`/doctores/doctor/${doctor.usuario}`)}
                                        onMouseOver={() => setBotonUpdate(true)} onMouseLeave={() => setBotonUpdate(false)}>
                                    Actualizar
                                </button>
                                <button className={boton_cancelar ? `shadow btn rounded` : 'btn rounded'} style={{width: 100 / proporcional, 
                                        border: '1px solid rgb(3, 146, 207)', color: 'rgb(3, 146, 207)', fontSize: 14 / proporcional,
                                        lineHeight: `${14 / proporcional}px`, fontWeight: 300, marginLeft: 10 / proporcional}}
                                        onMouseOver={() => setBotonCancelar(true)} onMouseLeave={() => setBotonCancelar(false)}>
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    ) : seleccion_menu === 'general' ? (
                        <div style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 20 / proporcional, marginBottom: 22 / proporcional}}>
                                <h2 style={{fontSize: 17 / proporcional, fontWeight: 400, color: 'rgb(51, 51, 51)', fontFamily: 'Nunito, sans-serif', 
                                        textAlign: 'left', lineHeight: `${20 / proporcional}px`}}>
                                    Información general
                                </h2>
                                <div className='d-flex' style={{width: 'auto', height: 'auto'}}>
                                    <img src={icono_ampliar} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 2 / proporcional, marginRight: 10 / proporcional, cursor: 'pointer'}}/>
                                    <img src={icono_opciones} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 2 / proporcional, paddingRight: 0, cursor: 'pointer'}}/>
                                </div>
                            </div>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional, padding: 10 / proporcional, border: '1px solid rgb(236, 236, 236)'}}>
                                    <label style={{fontSize: 13 / proporcional, color: 'rgb(119, 119, 119)', lineHeight: `${15 / proporcional}px`, fontWeight: 400, marginBottom: 8 / proporcional,
                                        fontFamily: 'Nunito, sans-serif'}}>Número de teléfono</label>
                                    <input 
                                        type='number'
                                        className='form-control border-0'
                                        style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                                    color: 'rgb(73, 80, 87)', fontFamily: 'Nunito, sans-serif', background: 'white'}}
                                        value={nro_telefono}
                                        onChange={(event) => setNroTelefono(event.target.value)}
                                        id='nro_telefono'
                                        placeholder='número de teléfono'/>
                                </div>    
                                <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional, padding: 10 / proporcional, border: '1px solid rgb(236, 236, 236)'}}>
                                    <label style={{fontSize: 13 / proporcional, color: 'rgb(119, 119, 119)', lineHeight: `${15 / proporcional}px`, fontWeight: 400, marginBottom: 8 / proporcional,
                                        fontFamily: 'Nunito, sans-serif'}}>Selecconar idioma</label>
                                    <select 
                                        type='password'
                                        className='form-select border-0'
                                        style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                                    color: 'rgb(73, 80, 87)', fontFamily: 'Nunito, sans-serif', background: 'white'}}
                                        value={idioma}
                                        onChange={(event) => event.target.value !== '0' ? setIdioma(event.target.value) : null}
                                        id='idioma'>
                                        <option value='0'>Seleccionar</option>
                                    </select>
                                </div>    
                                <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional, padding: 10 / proporcional, border: '1px solid rgb(236, 236, 236)'}}>
                                    <label style={{fontSize: 13 / proporcional, color: 'rgb(119, 119, 119)', lineHeight: `${15 / proporcional}px`, fontWeight: 400, marginBottom: 8 / proporcional,
                                        fontFamily: 'Nunito, sans-serif'}}>Selecconar zona horaria</label>
                                    <select 
                                        type='password'
                                        className='form-select border-0'
                                        style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                                    color: 'rgb(73, 80, 87)', fontFamily: 'Nunito, sans-serif', background: 'white'}}
                                        value={zona_horaria}
                                        onChange={(event) => event.target.value !== '0' ? setZonaHoraria(event.target.value) : null}
                                        id='zona_horaria'>
                                        <option value='0'>Seleccionar</option>
                                    </select>
                                </div>    
                                <div style={{width: '100%', height: 'auto', marginBottom: 8 / proporcional}}>
                                    <label style={{fontSize: 15 / proporcional, color: 'rgb(98, 101, 105)', lineHeight: `${22 / proporcional}px`, fontWeight: 400, marginBottom: 8 / proporcional,
                                        fontFamily: 'Nunito, sans-serif'}}>
                                        Formato de fecha
                                    </label>
                                    <div className='d-flex' style={{width: '100%', height: 22 / proporcional}}>
                                        <div className='d-flex' style={{width: '15%', height: 22 / proporcional, cursor: 'pointer'}}
                                            onClick={() => setFormatoFecha('1')}>
                                            <img src={formato_fecha === '1' ? icono_radio_button_full : icono_radio_button_empty} style={{width: 22 / proporcional, height: 22 / proporcional,
                                                    padding: 2 / proporcional, marginRight: 5 / proporcional}}/>
                                            <span style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, color: 'rgb(98, 101, 105)', 
                                                fontFamily: 'Nunito, sans-serif'}}>Mayo 18, 2018</span>
                                        </div>  
                                        <div className='d-flex' style={{width: '15%', height: 22 / proporcional, cursor: 'pointer'}}
                                            onClick={() => setFormatoFecha('2')}>
                                            <img src={formato_fecha === '2' ? icono_radio_button_full : icono_radio_button_empty} style={{width: 22 / proporcional, height: 22 / proporcional,
                                                    padding: 2 / proporcional, marginRight: 5 / proporcional}}/>
                                            <span style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, color: 'rgb(98, 101, 105)', 
                                                fontFamily: 'Nunito, sans-serif'}}>2019, Mayo, 18</span>
                                        </div>  
                                        <div className='d-flex' style={{width: '15%', height: 22 / proporcional, cursor: 'pointer'}}
                                            onClick={() => setFormatoFecha('3')}>
                                            <img src={formato_fecha === '3' ? icono_radio_button_full : icono_radio_button_empty} style={{width: 22 / proporcional, height: 22 / proporcional,
                                                    padding: 2 / proporcional, marginRight: 5 / proporcional}}/>
                                            <span style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, color: 'rgb(98, 101, 105)', 
                                                fontFamily: 'Nunito, sans-serif'}}>2018-03-10</span>
                                        </div>  
                                        <div className='d-flex' style={{width: '15%', height: 22 / proporcional, cursor: 'pointer'}}
                                            onClick={() => setFormatoFecha('4')}>
                                            <img src={formato_fecha === '4' ? icono_radio_button_full : icono_radio_button_empty} style={{width: 22 / proporcional, height: 22 / proporcional,
                                                    padding: 2 / proporcional, marginRight: 5 / proporcional}}/>
                                            <span style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, color: 'rgb(98, 101, 105)', 
                                                fontFamily: 'Nunito, sans-serif'}}>02/18/2010</span>
                                        </div>  
                                        <div className='d-flex' style={{width: '15%', height: 22 / proporcional, cursor: 'pointer'}}
                                            onClick={() => setFormatoFecha('5')}>
                                            <img src={formato_fecha === '5' ? icono_radio_button_full : icono_radio_button_empty} style={{width: 22 / proporcional, height: 22 / proporcional,
                                                    padding: 2 / proporcional, marginRight: 5 / proporcional}}/>
                                            <span style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, color: 'rgb(98, 101, 105)', 
                                                fontFamily: 'Nunito, sans-serif'}}>18/02/2010</span>
                                        </div>  
                                    </div>    
                                </div>    
                                <div style={{width: '100%', height: 'auto', marginBottom: 8 / proporcional}}>
                                    <label style={{fontSize: 16 / proporcional, color: 'rgb(98, 101, 105)', lineHeight: `${19 / proporcional}px`, fontWeight: 600, marginBottom: 8 / proporcional,
                                        fontFamily: 'Nunito, sans-serif'}}>
                                        Email de Lucy
                                    </label>
                                    <p style={{fontSize: 15 / proporcional, color: 'rgb(98, 101, 105)', lineHeight: `${22 / proporcional}px`, fontWeight: 400, marginBottom: 8 / proporcional,
                                        fontFamily: 'Nunito, sans-serif'}}>
                                        Me gustaría recibir los siguientes correos:
                                    </p>
                                    <div className='' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                                        <div className='d-flex' style={{width: '100%', height: 22 / proporcional, cursor: 'pointer', marginBottom: 8 / proporcional}}
                                            onClick={() => setCorreoSemanal(!correo_semanal)}>
                                            <img src={correo_semanal ? icono_check_box : icono_box} style={{width: 22 / proporcional, height: 22 / proporcional,
                                                    padding: 2 / proporcional, marginRight: 5 / proporcional}}/>
                                            <span style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, color: 'rgb(98, 101, 105)', 
                                                fontFamily: 'Nunito, sans-serif'}}>Resumen semanal por correo</span>
                                        </div>  
                                        <div className='d-flex' style={{width: '100%', height: 22 / proporcional, cursor: 'pointer', marginBottom: 8 / proporcional}}
                                            onClick={() => setCorreoCampañas(!correo_campañas)}>
                                            <img src={correo_campañas ? icono_check_box : icono_box} style={{width: 22 / proporcional, height: 22 / proporcional,
                                                    padding: 2 / proporcional, marginRight: 5 / proporcional}}/>
                                            <span style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, color: 'rgb(98, 101, 105)', 
                                                fontFamily: 'Nunito, sans-serif'}}>Reporte de campañas</span>
                                        </div>  
                                        <div className='d-flex' style={{width: '100%', height: 22 / proporcional, cursor: 'pointer', marginBottom: 8 / proporcional}}
                                            onClick={() => setCorreoPromocional(!correo_promocional)}>
                                            <img src={correo_promocional ? icono_check_box : icono_box} style={{width: 22 / proporcional, height: 22 / proporcional,
                                                    padding: 2 / proporcional, marginRight: 5 / proporcional}}/>
                                            <span style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, color: 'rgb(98, 101, 105)', 
                                                fontFamily: 'Nunito, sans-serif'}}>Noticias promocionales como descuentos y ofertas</span>
                                        </div>  
                                        <div className='d-flex' style={{width: '100%', height: 22 / proporcional, cursor: 'pointer', marginBottom: 8 / proporcional}}
                                            onClick={() => setCorreoTips(!correo_tips)}>
                                            <img src={correo_tips ? icono_check_box : icono_box} style={{width: 22 / proporcional, height: 22 / proporcional,
                                                    padding: 2 / proporcional, marginRight: 5 / proporcional}}/>
                                            <span style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, color: 'rgb(98, 101, 105)', 
                                                fontFamily: 'Nunito, sans-serif'}}>Tips de campañas, crecimiento y exito de clientes</span>
                                        </div>  
                                    </div>    
                                    <div className='d-flex justify-content-start' style={{width: '100%', height: 30 / proporcional}}>
                                        <button className={boton_update ? `shadow btn rounded` : 'btn rounded'} style={{width: 100 / proporcional, 
                                                border: '1px solid rgb(130, 180, 64)', color: 'white', fontSize: 14 / proporcional, background: 'rgb(130, 180, 64)',
                                                lineHeight: `${14 / proporcional}px`, fontWeight: 300, marginRight: 10 / proporcional}}
                                                onClick={() => navigate (`/doctores/doctor/${doctor.usuario}`)}
                                                onMouseOver={() => setBotonUpdate(true)} onMouseLeave={() => setBotonUpdate(false)}>
                                            Actualizar
                                        </button>
                                        <button className={boton_cancelar ? `shadow btn rounded` : 'btn rounded'} style={{width: 100 / proporcional, 
                                                border: '1px solid rgb(3, 146, 207)', color: 'rgb(3, 146, 207)', fontSize: 14 / proporcional,
                                                lineHeight: `${14 / proporcional}px`, fontWeight: 300, marginLeft: 10 / proporcional}}
                                                onMouseOver={() => setBotonCancelar(true)} onMouseLeave={() => setBotonCancelar(false)}>
                                            Cancelar
                                        </button>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}
