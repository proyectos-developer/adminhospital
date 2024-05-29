import React, { useState } from 'react'

import icono_avatar from '../../assets/iconos/icono_avatar_color_96.png'
import icono_down_grey from '../../assets/iconos/icono_down_grey_96.png'

import icono_profile from '../../assets/iconos/icono_profile_grey_96.png'
import icono_messages from '../../assets/iconos/icono_messages_grey_96.png'
import icono_settings from '../../assets/iconos/icono_settings_grey_96.png'
import icono_logout from '../../assets/iconos/icono_logout_grey_96.png'

import icono_plus_black from '../../assets/iconos/icono_plus_black_96.png'
import icono_plus_green from '../../assets/iconos/icono_plus_green_96.png'
import icono_minus_green from '../../assets/iconos/icono_minus_green_96.png'

import icono_dashboard_green from '../../assets/iconos/icono_dashboard_green_96.png'
import icono_dashboard_black from '../../assets/iconos/icono_dashboard_black_96.png'
import icono_doctors_green from '../../assets/iconos/icono_doctors_green_96.png'
import icono_doctors_black from '../../assets/iconos/icono_doctors_black_96.png'
import icono_appointment_green from '../../assets/iconos/icono_appointment_green_96.png'
import icono_appointment_black from '../../assets/iconos/icono_appointment_black_96.png'
import icono_tareas_green from '../../assets/iconos/icono_tareas_green_96.png'
import icono_tareas_black from '../../assets/iconos/icono_tareas_black_96.png'
import icono_patients_green from '../../assets/iconos/icono_patients_green_96.png'
import icono_patients_black from '../../assets/iconos/icono_patients_black_96.png'
import icono_allotment_green from '../../assets/iconos/icono_allotment_green_96.png'
import icono_allotment_black from '../../assets/iconos/icono_allotment_black_96.png'
import icono_departments_green from '../../assets/iconos/icono_departments_green_96.png'
import icono_departments_black from '../../assets/iconos/icono_departments_black_96.png'
import icono_payments_green from '../../assets/iconos/icono_payments_green_96.png'
import icono_payments_black from '../../assets/iconos/icono_payments_black_96.png'

import icono_email_green from '../../assets/iconos/icono_email_green_96.png'
import icono_email_black from '../../assets/iconos/icono_email_black_96.png'
import icono_chat_green from '../../assets/iconos/icono_chat_green_96.png'
import icono_chat_black from '../../assets/iconos/icono_chat_black_96.png'
import icono_staff_green from '../../assets/iconos/icono_staff_green_96.png'
import icono_staff_black from '../../assets/iconos/icono_staff_black_96.png'
import icono_contacts_green from '../../assets/iconos/icono_contacts_green_96.png'
import icono_contacts_black from '../../assets/iconos/icono_contacts_black_96.png'
import icono_file_manager_green from '../../assets/iconos/icono_file_manager_green_96.png'
import icono_file_manager_black from '../../assets/iconos/icono_file_manager_black_96.png'
import icono_locations_green from '../../assets/iconos/icono_locations_green_96.png'
import icono_locations_black from '../../assets/iconos/icono_locations_black_96.png'

import icono_blog_green from '../../assets/iconos/icono_blog_green_96.png'
import icono_blog_black from '../../assets/iconos/icono_blog_black_96.png'
import icono_social_green from '../../assets/iconos/icono_social_green_96.png'
import icono_social_black from '../../assets/iconos/icono_social_black_96.png'
import { useNavigate } from 'react-router-dom'

export default function MenuLateral({proporcional}) {

    const navigate = useNavigate()

    const [down_perfil, setDownPerfil] = useState(false)
    const [seleccion_menu, setSeleccionMenu] = useState ('')

    const [menu_opciones, setMenuOpciones] = useState ('')
    const [seleccion_submenu, setSeleccionSubmenu] = useState ('')

    return (
        <div style={{width: '100%', height: '100vh'}}>
            <div style={{width: 300 / proporcional, height: '100%', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                <div style={{width: 260 / proporcional, height: 30 / proporcional, marginBottom: 16 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: 260 / proporcional, height: 30 / proporcional}}>
                        <div className='rounded' style={{width: 30 / proporcional, height: 30 / proporcional, border: '1px solid rgb(0, 123, 255)', marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(32, 34, 35)', textAlign: 'center',
                                    marginBottom: 0, cursor: 'default'}}>
                            SOLUTIONS HOSPITAL
                        </p>
                    </div>
                </div>
                <div className='' style={{width: 260 / proporcional, height: '100%'}}>
                    <div style={{width: 260 / proporcional, height: 85 / proporcional, paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional}}>
                        <div className='position-relative d-flex' style={{width: 260 / proporcional,  height: 45 / proporcional}}>
                            <img className='rounded-circle' src={icono_avatar} style={{width: 45 / proporcional, height: 45 / proporcional, marginRight: 10 / proporcional}}/>
                            <div style={{width: 205 / proporcional, height: 45 / proporcional}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(119, 119, 119)', textAlign: 'left',
                                            marginBottom: 0, cursor: 'default'}}>
                                    Bienvenido
                                </p>
                                <div className='d-flex' style={{width: 205 / proporcional, height: 22.5 / proporcional, cursor: 'pointer'}} 
                                    onClick={() => setDownPerfil(!down_perfil)}>
                                    <p style={{fontSize: 15 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 700, fontFamily: 'Nunito, sans-serif', color: 'rgb(119, 119, 119)', textAlign: 'left',
                                                marginBottom: 0}}>
                                        Dr. Jorge P.
                                    </p>
                                    <img src={icono_down_grey} style={{width: 12 / proporcional, height: 12 / proporcional, marginLeft: 4 / proporcional, marginTop: 4 / proporcional}}/>
                                </div>
                            </div>
                            {
                                down_perfil ? (
                                    <div className='position-absolute start-0 shadow rounded' 
                                            style={{width: 'auto', height: 'auto', top: 45 / proporcional, zIndex: 9999}}>
                                        <div style={{width: 'auto', height: 'auto', padding: 15 / proporcional, background: 'white'}}>
                                            <div style={{width: 'auto', height: 42.5 / proporcional, padding: 10 / proporcional}}>
                                                <div className='d-flex' style={{width: 'auto', height: 22.5 / proporcional, cursor: 'pointer'}}>
                                                    <img src={icono_profile} style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 2.25 / proporcional, marginRight: 10 / proporcional}}/>
                                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(119, 119, 119)', textAlign: 'left',
                                                                marginBottom: 0}}>
                                                        Mi perfil
                                                    </p>
                                                </div>
                                            </div>
                                            <div style={{width: 'auto', height: 42.5 / proporcional, padding: 10 / proporcional}}>
                                                <div className='d-flex' style={{width: 'auto', height: 22.5 / proporcional, cursor: 'pointer'}}>
                                                    <img src={icono_messages} style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 2.25 / proporcional, marginRight: 10 / proporcional}}/>
                                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(119, 119, 119)', textAlign: 'left',
                                                                marginBottom: 0}}>
                                                        Mensajes
                                                    </p>
                                                </div>
                                            </div>
                                            <div style={{width: 'auto', height: 42.5 / proporcional, padding: 10 / proporcional}}>
                                                <div className='d-flex' style={{width: 'auto', height: 22.5 / proporcional, cursor: 'pointer'}}>
                                                    <img src={icono_settings} style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 2.25 / proporcional, marginRight: 10 / proporcional}}/>
                                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(119, 119, 119)', textAlign: 'left',
                                                                marginBottom: 0}}>
                                                        Configuraciones
                                                    </p>
                                                </div>
                                            </div>
                                            <div style={{width: '100%', height: 1, background: 'rgb(236, 236, 236)', marginTop: 10 / proporcional, marginBottom: 10 / proporcional}}/>
                                            <div style={{width: 'auto', height: 42.5 / proporcional, padding: 10 / proporcional}}>
                                                <div className='d-flex' style={{width: 'auto', height: 22.5 / proporcional, cursor: 'pointer'}}>
                                                    <img src={icono_logout} style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 2.25 / proporcional, marginRight: 10 / proporcional}}/>
                                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(119, 119, 119)', textAlign: 'left',
                                                                marginBottom: 0}}>
                                                        Cerrar sesión
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                    <div className='overflow-auto' style={{width: 260 / proporcional, height: '100%'}}>
                        <div style={{width: '100%', height: 'auto'}}>
                            <div style={{width: 260 / proporcional, height: 53 / proporcional, paddingTop: 30 / proporcional, paddingBottom: 5 / proporcional, paddingLeft: 15 / proporcional, 
                                    paddingRight: 15 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(204, 204, 204)', textAlign: 'left',
                                            marginBottom: 0}}>
                                    Hospital
                                </p>
                            </div>
                            <div className='d-flex justify-content-between' 
                                style={{width: 260 / proporcional, height: 38.5 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, paddingLeft: 15 / proporcional, 
                                        paddingRight: 15 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('dashboard')} onMouseLeave={() => setSeleccionMenu('')}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                            color: seleccion_menu === 'dashboard' ? 'rgb(130, 180, 64)' : 'black', textAlign: 'left', marginBottom: 0}}>
                                    Dashboard
                                </p>
                                <img className='' src={seleccion_menu === 'dashboard' ? icono_dashboard_green : icono_dashboard_black} 
                                        style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional, paddingRight: 0}}/>
                            </div>
                            <div className='d-flex justify-content-between' 
                                style={{width: 260 / proporcional, height: 38.5 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, paddingLeft: 15 / proporcional, 
                                        paddingRight: 15 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('doctores')} onMouseLeave={() => setSeleccionMenu('')}
                                        onClick={() => setMenuOpciones(menu_opciones === 'doctores' ? '' : 'doctores')}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                            color: (seleccion_menu === 'doctores' || menu_opciones === 'doctores') ? 'rgb(130, 180, 64)' : 'black', textAlign: 'left', marginBottom: 0}}>
                                    Doctores
                                </p>
                                <div className='d-flex' style={{width: 'auto', height: 'auto'}}>
                                    {
                                        menu_opciones === 'doctores' ? (
                                            <img className='' src={icono_minus_green} 
                                                    style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional}}/>
                                        ) : (
                                            <img className='' src={seleccion_menu === 'doctores' ? icono_plus_green : icono_plus_black} 
                                                    style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional}}/>
                                        )
                                    }
                                    <img className='' src={(seleccion_menu === 'doctores' || menu_opciones === 'doctores') ? icono_doctors_green : icono_doctors_black} 
                                            style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional, paddingRight: 0}}/>
                                </div>
                            </div>
                            {
                                menu_opciones === 'doctores' ? (
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <div style={{width: '100%', height: 34.5 / proporcional, paddingTop: 6 / proporcional, paddingBottom: 6 / proporcional, paddingLeft: 47 / proporcional, 
                                                paddingRight: 15 / proporcional}}
                                                onMouseOver={() => setSeleccionSubmenu('todos-doctores')} onMouseLeave={() => setSeleccionSubmenu('')}
                                                onClick={() => navigate ('/doctores')}>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                                        cursor: 'pointer', color: seleccion_submenu === 'todos-doctores' ? 'rgb(130, 180, 64)' : 'rgb(51, 51, 51)', 
                                                        textAlign: 'left', marginBottom: 0}}>
                                                Todos los doctores
                                            </p>
                                        </div>
                                        <div style={{width: '100%', height: 34.5 / proporcional, paddingTop: 6 / proporcional, paddingBottom: 6 / proporcional, paddingLeft: 47 / proporcional, 
                                                paddingRight: 15 / proporcional}}
                                                onMouseOver={() => setSeleccionSubmenu('agregar-doctor')} onMouseLeave={() => setSeleccionSubmenu('')}
                                                onClick={() => navigate ('/doctores/nuevo-doctor')}>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                                        cursor: 'pointer', color: seleccion_submenu === 'agregar-doctor' ? 'rgb(130, 180, 64)' : 'rgb(51, 51, 51)', 
                                                        textAlign: 'left', marginBottom: 0}}>
                                                Agregar doctor
                                            </p>
                                        </div>
                                        <div style={{width: '100%', height: 34.5 / proporcional, paddingTop: 6 / proporcional, paddingBottom: 6 / proporcional, paddingLeft: 47 / proporcional, 
                                                paddingRight: 15 / proporcional}}
                                                onMouseOver={() => setSeleccionSubmenu('perfil-doctores')} onMouseLeave={() => setSeleccionSubmenu('')}>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                                        cursor: 'pointer', color: seleccion_submenu === 'perfil-doctores' ? 'rgb(130, 180, 64)' : 'rgb(51, 51, 51)', 
                                                        textAlign: 'left', marginBottom: 0}}>
                                                Perfil de doctores
                                            </p>
                                        </div>
                                        <div style={{width: '100%', height: 34.5 / proporcional, paddingTop: 6 / proporcional, paddingBottom: 6 / proporcional, paddingLeft: 47 / proporcional, 
                                                paddingRight: 15 / proporcional}}
                                                onMouseOver={() => setSeleccionSubmenu('agenda-doctores')} onMouseLeave={() => setSeleccionSubmenu('')}>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                                        cursor: 'pointer', color: seleccion_submenu === 'agenda-doctores' ? 'rgb(130, 180, 64)' : 'rgb(51, 51, 51)', 
                                                        textAlign: 'left', marginBottom: 0}}>
                                                Agenda doctores
                                            </p>
                                        </div>
                                    </div>
                                ) : null
                            }
                            <div className='d-flex justify-content-between' 
                                style={{width: 260 / proporcional, height: 38.5 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, paddingLeft: 15 / proporcional, 
                                        paddingRight: 15 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('citas')} onMouseLeave={() => setSeleccionMenu('')}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                            color: seleccion_menu === 'citas' ? 'rgb(130, 180, 64)' : 'black', textAlign: 'left', marginBottom: 0}}>
                                    Citas
                                </p>
                                <img className='' src={seleccion_menu === 'citas' ? icono_appointment_green : icono_appointment_black} 
                                        style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional, paddingRight: 0}}/>
                            </div>
                            <div className='d-flex justify-content-between' 
                                style={{width: 260 / proporcional, height: 38.5 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, paddingLeft: 15 / proporcional, 
                                        paddingRight: 15 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('tareas')} onMouseLeave={() => setSeleccionMenu('')}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                            color: seleccion_menu === 'tareas' ? 'rgb(130, 180, 64)' : 'black', textAlign: 'left', marginBottom: 0}}>
                                    Tareas
                                </p>
                                <img className='' src={seleccion_menu === 'tareas' ? icono_tareas_green : icono_tareas_black} 
                                        style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional, paddingRight: 0}}/>
                            </div>
                            <div className='d-flex justify-content-between' 
                                style={{width: 260 / proporcional, height: 38.5 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, paddingLeft: 15 / proporcional, 
                                        paddingRight: 15 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('pacientes')} onMouseLeave={() => setSeleccionMenu('')}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                            color: (seleccion_menu === 'pacientes' || menu_opciones === 'pacientes') ? 'rgb(130, 180, 64)' : 'black', textAlign: 'left', marginBottom: 0}}>
                                    Pacientes
                                </p>
                                <div className='d-flex' style={{width: 'auto', height: 'auto'}}>
                                    {
                                        menu_opciones === 'pacientes' ? (
                                            <img className='' src={icono_minus_green} 
                                                    style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional}}
                                                    onClick={() => setMenuOpciones('')}/>
                                        ) : (
                                            <img className='' src={seleccion_menu === 'pacientes' ? icono_plus_green : icono_plus_black} 
                                                    style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional}}
                                                    onClick={() => setMenuOpciones('pacientes')}/>
                                        )
                                    }
                                    <img className='' src={(seleccion_menu === 'pacientes' || menu_opciones === 'pacientes') ? icono_patients_green : icono_patients_black} 
                                            style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional, paddingRight: 0}}/>
                                </div>
                            </div>
                            {
                                menu_opciones === 'pacientes' ? (
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <div style={{width: '100%', height: 34.5 / proporcional, paddingTop: 6 / proporcional, paddingBottom: 6 / proporcional, paddingLeft: 47 / proporcional, 
                                                paddingRight: 15 / proporcional}}
                                                onMouseOver={() => setSeleccionSubmenu('todos-pacientes')} onMouseLeave={() => setSeleccionSubmenu('')}>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                                        cursor: 'pointer', color: seleccion_submenu === 'todos-pacientes' ? 'rgb(130, 180, 64)' : 'rgb(51, 51, 51)', 
                                                        textAlign: 'left', marginBottom: 0}}>
                                                Todos los pacientes
                                            </p>
                                        </div>
                                        <div style={{width: '100%', height: 34.5 / proporcional, paddingTop: 6 / proporcional, paddingBottom: 6 / proporcional, paddingLeft: 47 / proporcional, 
                                                paddingRight: 15 / proporcional}}
                                                onMouseOver={() => setSeleccionSubmenu('agregar-paciente')} onMouseLeave={() => setSeleccionSubmenu('')}>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                                        cursor: 'pointer', color: seleccion_submenu === 'agregar-paciente' ? 'rgb(130, 180, 64)' : 'rgb(51, 51, 51)', 
                                                        textAlign: 'left', marginBottom: 0}}>
                                                Agregar paciente
                                            </p>
                                        </div>
                                        <div style={{width: '100%', height: 34.5 / proporcional, paddingTop: 6 / proporcional, paddingBottom: 6 / proporcional, paddingLeft: 47 / proporcional, 
                                                paddingRight: 15 / proporcional}}
                                                onMouseOver={() => setSeleccionSubmenu('perfil-pacientes')} onMouseLeave={() => setSeleccionSubmenu('')}>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                                        cursor: 'pointer', color: seleccion_submenu === 'perfil-pacientes' ? 'rgb(130, 180, 64)' : 'rgb(51, 51, 51)', 
                                                        textAlign: 'left', marginBottom: 0}}>
                                                Perfil de pacientes
                                            </p>
                                        </div>
                                        <div style={{width: '100%', height: 34.5 / proporcional, paddingTop: 6 / proporcional, paddingBottom: 6 / proporcional, paddingLeft: 47 / proporcional, 
                                                paddingRight: 15 / proporcional}}
                                                onMouseOver={() => setSeleccionSubmenu('facturas-pacientes')} onMouseLeave={() => setSeleccionSubmenu('')}>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                                        cursor: 'pointer', color: seleccion_submenu === 'facturas-pacientes' ? 'rgb(130, 180, 64)' : 'rgb(51, 51, 51)', 
                                                        textAlign: 'left', marginBottom: 0}}>
                                                Facturas pacientes
                                            </p>
                                        </div>
                                    </div>
                                ) : null
                            }
                            <div className='d-flex justify-content-between' 
                                style={{width: 260 / proporcional, height: 38.5 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, paddingLeft: 15 / proporcional, 
                                        paddingRight: 15 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('habitaciones')} onMouseLeave={() => setSeleccionMenu('')}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                            color: (seleccion_menu === 'habitaciones' || menu_opciones === 'habitaciones') ? 'rgb(130, 180, 64)' : 'black', textAlign: 'left', marginBottom: 0}}>
                                    Asignación habitación
                                </p>
                                <div className='d-flex' style={{width: 'auto', height: 'auto'}}>
                                    {
                                        menu_opciones === 'habitaciones' ? (
                                            <img className='' src={icono_minus_green} 
                                                    style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional}}
                                                    onClick={() => setMenuOpciones('')}/>
                                        ) : (
                                            <img className='' src={seleccion_menu === 'habitaciones' ? icono_plus_green : icono_plus_black} 
                                                    style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional}}
                                                    onClick={() => setMenuOpciones('habitaciones')}/>
                                        )
                                    }
                                    <img className='' src={(seleccion_menu === 'habitaciones' || menu_opciones === 'habitaciones') ? icono_allotment_green : icono_allotment_black} 
                                            style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional, paddingRight: 0}}/>
                                </div>
                            </div>
                            {
                                menu_opciones === 'habitaciones' ? (
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <div style={{width: '100%', height: 34.5 / proporcional, paddingTop: 6 / proporcional, paddingBottom: 6 / proporcional, paddingLeft: 47 / proporcional, 
                                                paddingRight: 15 / proporcional}}
                                                onMouseOver={() => setSeleccionSubmenu('habitaciones-asignadas')} onMouseLeave={() => setSeleccionSubmenu('')}>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                                        cursor: 'pointer', color: seleccion_submenu === 'habitaciones-asignadas' ? 'rgb(130, 180, 64)' : 'rgb(51, 51, 51)', 
                                                        textAlign: 'left', marginBottom: 0}}>
                                                Habitaciones asignadas
                                            </p>
                                        </div>
                                        <div style={{width: '100%', height: 34.5 / proporcional, paddingTop: 6 / proporcional, paddingBottom: 6 / proporcional, paddingLeft: 47 / proporcional, 
                                                paddingRight: 15 / proporcional}}
                                                onMouseOver={() => setSeleccionSubmenu('agregar-habitacion')} onMouseLeave={() => setSeleccionSubmenu('')}>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                                        cursor: 'pointer', color: seleccion_submenu === 'agregar-habitacion' ? 'rgb(130, 180, 64)' : 'rgb(51, 51, 51)', 
                                                        textAlign: 'left', marginBottom: 0}}>
                                                Agregar habitación
                                            </p>
                                        </div>
                                    </div>
                                ) : null
                            }
                            <div className='d-flex justify-content-between' 
                                style={{width: 260 / proporcional, height: 38.5 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, paddingLeft: 15 / proporcional, 
                                        paddingRight: 15 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('departamentos')} onMouseLeave={() => setSeleccionMenu('')}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                            color: seleccion_menu === 'departamentos' ? 'rgb(130, 180, 64)' : 'black', textAlign: 'left', marginBottom: 0}}>
                                    Departamentos
                                </p>
                                <img className='' src={seleccion_menu === 'departamentos' ? icono_departments_green : icono_departments_black} 
                                        style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional, paddingRight: 0}}/>
                            </div>
                            <div className='d-flex justify-content-between' 
                                style={{width: 260 / proporcional, height: 38.5 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, paddingLeft: 15 / proporcional, 
                                        paddingRight: 15 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('pagos')} onMouseLeave={() => setSeleccionMenu('')}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                            color: (seleccion_menu === 'pagos' || menu_opciones === 'pagos') ? 'rgb(130, 180, 64)' : 'black', textAlign: 'left', marginBottom: 0}}>
                                    Pagos
                                </p>
                                <div className='d-flex' style={{width: 'auto', height: 'auto'}}>
                                    {
                                        menu_opciones === 'pagos' ? (
                                            <img className='' src={icono_minus_green} 
                                                    style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional}}
                                                    onClick={() => setMenuOpciones('')}/>
                                        ) : (
                                            <img className='' src={seleccion_menu === 'pagos' ? icono_plus_green : icono_plus_black} 
                                                    style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional}}
                                                    onClick={() => setMenuOpciones('pagos')}/>
                                        )
                                    }
                                    <img className='' src={(seleccion_menu === 'pagos' || menu_opciones === 'pagos') ? icono_payments_green : icono_payments_black} 
                                            style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional, paddingRight: 0}}/>
                                </div>
                            </div>
                            {
                                menu_opciones === 'pagos' ? (
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <div style={{width: '100%', height: 34.5 / proporcional, paddingTop: 6 / proporcional, paddingBottom: 6 / proporcional, paddingLeft: 47 / proporcional, 
                                                paddingRight: 15 / proporcional}}
                                                onMouseOver={() => setSeleccionSubmenu('pagos')} onMouseLeave={() => setSeleccionSubmenu('')}>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                                        cursor: 'pointer', color: seleccion_submenu === 'pagos' ? 'rgb(130, 180, 64)' : 'rgb(51, 51, 51)', 
                                                        textAlign: 'left', marginBottom: 0}}>
                                                Pagos
                                            </p>
                                        </div>
                                        <div style={{width: '100%', height: 34.5 / proporcional, paddingTop: 6 / proporcional, paddingBottom: 6 / proporcional, paddingLeft: 47 / proporcional, 
                                                paddingRight: 15 / proporcional}}
                                                onMouseOver={() => setSeleccionSubmenu('agregar-pago')} onMouseLeave={() => setSeleccionSubmenu('')}>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                                        cursor: 'pointer', color: seleccion_submenu === 'agregar-pago' ? 'rgb(130, 180, 64)' : 'rgb(51, 51, 51)', 
                                                        textAlign: 'left', marginBottom: 0}}>
                                                Agregar pago
                                            </p>
                                        </div>
                                        <div style={{width: '100%', height: 34.5 / proporcional, paddingTop: 6 / proporcional, paddingBottom: 6 / proporcional, paddingLeft: 47 / proporcional, 
                                                paddingRight: 15 / proporcional}}
                                                onMouseOver={() => setSeleccionSubmenu('facturas')} onMouseLeave={() => setSeleccionSubmenu('')}>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                                        cursor: 'pointer', color: seleccion_submenu === 'facturas' ? 'rgb(130, 180, 64)' : 'rgb(51, 51, 51)', 
                                                        textAlign: 'left', marginBottom: 0}}>
                                                Facturas
                                            </p>
                                        </div>
                                    </div>
                                ) : null
                            }
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <div style={{width: 260 / proporcional, height: 53 / proporcional, paddingTop: 30 / proporcional, paddingBottom: 5 / proporcional, paddingLeft: 15 / proporcional, 
                                    paddingRight: 15 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(204, 204, 204)', textAlign: 'left',
                                            marginBottom: 0}}>
                                    Administración
                                </p>
                            </div>
                            <div className='d-flex justify-content-between' 
                                style={{width: 260 / proporcional, height: 38.5 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, paddingLeft: 15 / proporcional, 
                                        paddingRight: 15 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('email')} onMouseLeave={() => setSeleccionMenu('')}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                            color: seleccion_menu === 'email' ? 'rgb(130, 180, 64)' : 'black', textAlign: 'left', marginBottom: 0}}>
                                    Email
                                </p>
                                <img className='' src={seleccion_menu === 'email' ? icono_email_green : icono_email_black} 
                                        style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional, paddingRight: 0}}/>
                            </div>
                            <div className='d-flex justify-content-between' 
                                style={{width: 260 / proporcional, height: 38.5 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, paddingLeft: 15 / proporcional, 
                                        paddingRight: 15 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('chat')} onMouseLeave={() => setSeleccionMenu('')}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                            color: seleccion_menu === 'chat' ? 'rgb(130, 180, 64)' : 'black', textAlign: 'left', marginBottom: 0}}>
                                    Chat
                                </p>
                                <img className='' src={seleccion_menu === 'chat' ? icono_chat_green : icono_chat_black} 
                                        style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional, paddingRight: 0}}/>
                            </div>
                            <div className='d-flex justify-content-between' 
                                style={{width: 260 / proporcional, height: 38.5 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, paddingLeft: 15 / proporcional, 
                                        paddingRight: 15 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('staff')} onMouseLeave={() => setSeleccionMenu('')}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                            color: seleccion_menu === 'staff' ? 'rgb(130, 180, 64)' : 'black', textAlign: 'left', marginBottom: 0}}>
                                    Personal
                                </p>
                                <img className='' src={seleccion_menu === 'staff' ? icono_staff_green : icono_staff_black} 
                                        style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional, paddingRight: 0}}/>
                            </div>
                            <div className='d-flex justify-content-between' 
                                style={{width: 260 / proporcional, height: 38.5 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, paddingLeft: 15 / proporcional, 
                                        paddingRight: 15 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('contacts')} onMouseLeave={() => setSeleccionMenu('')}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                            color: seleccion_menu === 'contacts' ? 'rgb(130, 180, 64)' : 'black', textAlign: 'left', marginBottom: 0}}>
                                    Contactos
                                </p>
                                <img className='' src={seleccion_menu === 'contacts' ? icono_contacts_green : icono_contacts_black} 
                                        style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional, paddingRight: 0}}/>
                            </div>
                            <div className='d-flex justify-content-between' 
                                style={{width: 260 / proporcional, height: 38.5 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, paddingLeft: 15 / proporcional, 
                                        paddingRight: 15 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('file_manager')} onMouseLeave={() => setSeleccionMenu('')}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                            color: seleccion_menu === 'file_manager' ? 'rgb(130, 180, 64)' : 'black', textAlign: 'left', marginBottom: 0}}>
                                    Documentos
                                </p>
                                <img className='' src={seleccion_menu === 'file_manager' ? icono_file_manager_green : icono_file_manager_black} 
                                        style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional, paddingRight: 0}}/>
                            </div>
                            <div className='d-flex justify-content-between' 
                                style={{width: 260 / proporcional, height: 38.5 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, paddingLeft: 15 / proporcional, 
                                        paddingRight: 15 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('locations')} onMouseLeave={() => setSeleccionMenu('')}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                            color: seleccion_menu === 'locations' ? 'rgb(130, 180, 64)' : 'black', textAlign: 'left', marginBottom: 0}}>
                                    Nuestras ubicaciones
                                </p>
                                <img className='' src={seleccion_menu === 'locations' ? icono_locations_green : icono_locations_black} 
                                        style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional, paddingRight: 0}}/>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <div style={{width: 260 / proporcional, height: 53 / proporcional, paddingTop: 30 / proporcional, paddingBottom: 5 / proporcional, paddingLeft: 15 / proporcional, 
                                    paddingRight: 15 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(204, 204, 204)', textAlign: 'left',
                                            marginBottom: 0}}>
                                    Social
                                </p>
                            </div>
                            <div className='d-flex justify-content-between' 
                                style={{width: 260 / proporcional, height: 38.5 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, paddingLeft: 15 / proporcional, 
                                        paddingRight: 15 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('blog')} onMouseLeave={() => setSeleccionMenu('')}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                            color: seleccion_menu === 'blog' ? 'rgb(130, 180, 64)' : 'black', textAlign: 'left', marginBottom: 0}}>
                                    Blog
                                </p>
                                <img className='' src={seleccion_menu === 'blog' ? icono_blog_green : icono_blog_black} 
                                        style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional, paddingRight: 0}}/>
                            </div>
                            <div className='d-flex justify-content-between' 
                                style={{width: 260 / proporcional, height: 38.5 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional, paddingLeft: 15 / proporcional, 
                                        paddingRight: 15 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionMenu('social')} onMouseLeave={() => setSeleccionMenu('')}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', 
                                            color: seleccion_menu === 'social' ? 'rgb(130, 180, 64)' : 'black', textAlign: 'left', marginBottom: 0}}>
                                    Redes sociales
                                </p>
                                <img className='' src={seleccion_menu === 'social' ? icono_social_green : icono_social_black} 
                                        style={{width: 22.5 / proporcional, height: 22.5 / proporcional, padding: 3.25 / proporcional, paddingRight: 0}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
