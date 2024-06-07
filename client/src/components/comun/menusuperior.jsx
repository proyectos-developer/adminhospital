import React, { useState } from 'react'

import icono_ampliar_v1 from '../../assets/iconos/icono_ampliar_black_v1_96.png'
import icono_ampliar_v2 from '../../assets/iconos/icono_ampliar_black_v2_96.png'
import icono_language from '../../assets/iconos/icono_language_black_96.png'
import icono_logout from '../../assets/iconos/icono_poweroff_black_96.png'
import icono_message_black from '../../assets/iconos/icono_message_black_96.png'
import icono_message_black_empty from '../../assets/iconos/icono_message_black_empty_96.png'
import icono_email_black_v2 from '../../assets/iconos/icono_email_black_v2_96.png'
import icono_email_black_empty_v2 from '../../assets/iconos/icono_email_black_empty_v2_96.png'
import icono_notificacion_black from '../../assets/iconos/icono_notificacion_black_96.png'
import icono_notificacion_black_empty from '../../assets/iconos/icono_notificacion_black_empty_96.png'
import icono_search from '../../assets/iconos/icono_search_grey_96.png'

export default function MenuSuperior({proporcional}) {

    const [mouse_icono, setMouseIcono] = useState ('')
    const [mouse_submenu, setMouseSubmenu] = useState ('')
    const [search, setSearch] = useState('')
    const [submenu_opcion, setSubMenuOpcion] = useState('')
 
    return (
        <div className='' style={{width: '100%', height: 75 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional, 
            paddingLeft: 30 / proporcional, paddingRight: 30 / proporcional, borderBottom: '1px solid rgb(236, 236, 236)'}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 54 / proporcional}}>
                <div style={{width: '50%', height: 54 / proporcional}}>
                    <div className='d-flex justify-content-start' style={{width: 300 / proporcional, height: 54 / proporcional, paddingTop: 10.5 / proporcional, paddingBottom: 10.5 / proporcional}}>
                        <img src={icono_search} style={{width: 33 / proporcional, height: 33 / proporcional, padding: 6 / proporcional}}/>
                        <input
                            type='default'
                            id='search'
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder='Buscar aquí...'
                            className='form-control border-0'
                            style={{width: 267 / proporcional, height: 33 / proporcional, fontSize: 15 / proporcional, fontFamily: 'Nunito, sans-serif', fontWeight: 500,
                                        color: 'rgb(73, 80, 87)'}}/>
                    </div>
                </div>
                <div style={{width: '50%', height: 54 / proporcional}}>
                    <div className='d-flex justify-content-end' style={{width: 'auto', height: 54 / proporcional}}>
                        <div style={{width: 80 / proporcional, height: 54 / proporcional, padding: 15 / proporcional}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', textAlign: 'center',
                                        marginBottom: 0, cursor: 'pointer'}}>
                                Notas
                            </p>
                        </div>
                        <div className='position-relative' style={{width: 80 / proporcional, height: 54 / proporcional, padding: 15 / proporcional}}
                                        onMouseOver={() => setMouseIcono('crear')} onMouseLeave={() => setMouseIcono('')}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', textAlign: 'center',
                                        marginBottom: 0, cursor: 'pointer'}}>
                                Crear
                            </p>
                            {
                                mouse_icono === 'crear' ? (
                                    <div className='position-absolute start-0 shadow-lg' style={{width: 160 / proporcional, height: 111 / proporcional, top: 54 / proporcional}}>
                                        <div className='rounded' style={{width: 160 / proporcional, height: 111 / proporcional, background: 'white'}}>
                                            <div className='rounded-top' style={{width: 160 / proporcional, height: 37 / proporcional, background: mouse_submenu === 'usuario' ? 'rgb(0, 123, 255)' : 'white',
                                                        paddingLeft: 16 / proporcional, paddingRight: 16 / proporcional}}>
                                                <p style={{fontSize: 16 / proporcional, lineHeight: `${37 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                            color: mouse_submenu === 'usuario' ? 'white' : 'rgb(98, 101, 105)', textAlign: 'left',
                                                            marginBottom: 0, cursor: 'pointer'}}
                                                            onMouseOver={() => setMouseSubmenu('usuario')} onMouseLeave={() => setMouseSubmenu('')}>
                                                    Usuario
                                                </p>
                                            </div>
                                            <div style={{width: 160 / proporcional, height: 37 / proporcional, background: mouse_submenu === 'factura' ? 'rgb(0, 123, 255)' : 'white',
                                                        paddingLeft: 16 / proporcional, paddingRight: 16 / proporcional}}>
                                                <p style={{fontSize: 16 / proporcional, lineHeight: `${37 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                            color: mouse_submenu === 'factura' ? 'white' : 'rgb(98, 101, 105)', textAlign: 'left',
                                                            marginBottom: 0, cursor: 'pointer'}}
                                                            onMouseOver={() => setMouseSubmenu('factura')} onMouseLeave={() => setMouseSubmenu('')}>
                                                    Factura
                                                </p>
                                            </div>
                                            <div className='rounded-bottom' style={{width: 160 / proporcional, height: 37 / proporcional, background: mouse_submenu === 'reporte' ? 'rgb(0, 123, 255)' : 'white',
                                                        paddingLeft: 16 / proporcional, paddingRight: 16 / proporcional}}>
                                                <p style={{fontSize: 16 / proporcional, lineHeight: `${37 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                            color: mouse_submenu === 'reporte' ? 'white' : 'rgb(98, 101, 105)', textAlign: 'left',
                                                            marginBottom: 0, cursor: 'pointer'}}
                                                            onMouseOver={() => setMouseSubmenu('reporte')} onMouseLeave={() => setMouseSubmenu('')}>
                                                    Reporte
                                                </p>
                                            </div>
        
                                        </div>
                                    </div>
                                ) : null
                            }
                        </div>
                        <div className='position-relative' style={{width: 50 / proporcional, height: 54 / proporcional}}
                                        onMouseOver={() => setMouseIcono('email')} onMouseLeave={() => setMouseIcono('')}>
                            <img src={mouse_icono === 'email' ? icono_email_black_v2 : icono_email_black_empty_v2} style={{width: 50 / proporcional, height: 54 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional,
                                        paddingLeft: 13 / proporcional, paddingRight: 13 / proporcional, cursor: 'pointer'}}/>
                            <div className='position-absolute rounded-circle' style={{width: 20 / proporcional, height: 20 / proporcional, background: 'rgb(130, 180, 64)',
                                    top: 4 / proporcional, right: 4 / proporcional}}>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'white', textAlign: 'center',
                                            marginBottom: 0, cursor: 'pointer'}}>
                                    4
                                </p>
                            </div>
                            {
                                mouse_icono === 'email' ? (
                                    <div className='position-absolute shadow-lg' style={{width: 300 / proporcional, height: 393.5 / proporcional, top: 54 / proporcional, left: -75}}>
                                        <div className='rounded' style={{width: 300 / proporcional, height: 393.5 / proporcional, background: 'white'}}>
                                            <div className='rounded-top' style={{width: 300 / proporcional, height: 62.5 / proporcional, background: 'rgb(130, 180, 64)',
                                                        padding: 20 / proporcional, marginBottom: 20 / proporcional}}>
                                                <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                            color: 'white', textAlign: 'center', marginBottom: 0, cursor: 'pointer'}}>
                                                    Tienes 4 nuevos eMail
                                                </p>
                                            </div>
                                            <div style={{width: 300 / proporcional, height: 77.5 / proporcional, background: 'white', paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                                                <div style={{width: 300 / proporcional, height: 47.5 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                                                        paddingTop: 5 / proporcional, paddingBottom: 5 / proporcional}}>
                                                    <div className='d-flex' style={{width: 260 / proporcional, height: 37.5 / proporcional, cursor: 'pointer'}}>
                                                        <div className='rounded-circle' style={{width: 37.5 / proporcional, height: 37.5 / proporcional, padding: 1.25 / proporcional,
                                                                border: '1px solid rgb(229, 229, 229)', marginRight: 15 / proporcional}}/>
                                                        <div style={{width: 208.5 / proporcional, height: 37.5 / proporcional, paddingTop: 1.25 / proporcional, paddingBlock: 1.25 / proporcional}}>
                                                            <div className='d-flex justify-content-between' style={{width: 208.5 / proporcional, height: 15 / proporcional}}>
                                                                <p style={{fontSize: 15 / proporcional, lineHeight: `${15 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                            color: 'rgb(85, 85, 85)', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                    Dr. James Wert
                                                                </p>
                                                                <p style={{fontSize: 12 / proporcional, lineHeight: `${15 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                            color: 'rgb(85, 85, 85)', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                    Justo ahora
                                                                </p>
                                                            </div>
                                                            <p style={{fontSize: 13 / proporcional, lineHeight: `${19.5 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                        color: 'rgb(119, 119, 119)', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                Justo ahora
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{width: 300 / proporcional, height: 77.5 / proporcional, background: 'white', paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                                                <div style={{width: 300 / proporcional, height: 47.5 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                                                        paddingTop: 5 / proporcional, paddingBottom: 5 / proporcional}}>
                                                    <div className='d-flex' style={{width: 260 / proporcional, height: 37.5 / proporcional, cursor: 'pointer'}}>
                                                        <div className='rounded-circle' style={{width: 37.5 / proporcional, height: 37.5 / proporcional, padding: 1.25 / proporcional,
                                                                border: '1px solid rgb(229, 229, 229)', marginRight: 15 / proporcional}}/>
                                                        <div style={{width: 208.5 / proporcional, height: 37.5 / proporcional, paddingTop: 1.25 / proporcional, paddingBlock: 1.25 / proporcional}}>
                                                            <div className='d-flex justify-content-between' style={{width: 208.5 / proporcional, height: 15 / proporcional}}>
                                                                <p style={{fontSize: 15 / proporcional, lineHeight: `${15 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                            color: 'rgb(85, 85, 85)', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                    Dr. Folisise Chosielie
                                                                </p>
                                                                <p style={{fontSize: 12 / proporcional, lineHeight: `${15 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                            color: 'rgb(85, 85, 85)', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                    12 min ago
                                                                </p>
                                                            </div>
                                                            <p style={{fontSize: 13 / proporcional, lineHeight: `${19.5 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                        color: 'rgb(119, 119, 119)', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                Nuevo mensaje
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{width: 300 / proporcional, height: 77.5 / proporcional, background: 'white', paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                                                <div style={{width: 300 / proporcional, height: 47.5 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                                                        paddingTop: 5 / proporcional, paddingBottom: 5 / proporcional}}>
                                                    <div className='d-flex' style={{width: 260 / proporcional, height: 37.5 / proporcional, cursor: 'pointer'}}>
                                                        <div className='rounded-circle' style={{width: 37.5 / proporcional, height: 37.5 / proporcional, padding: 1.25 / proporcional,
                                                                border: '1px solid rgb(229, 229, 229)', marginRight: 15 / proporcional}}/>
                                                        <div style={{width: 208.5 / proporcional, height: 37.5 / proporcional, paddingTop: 1.25 / proporcional, paddingBlock: 1.25 / proporcional}}>
                                                            <div className='d-flex justify-content-between' style={{width: 208.5 / proporcional, height: 15 / proporcional}}>
                                                                <p style={{fontSize: 15 / proporcional, lineHeight: `${15 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                            color: 'rgb(85, 85, 85)', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                    As. Louis Henry
                                                                </p>
                                                                <p style={{fontSize: 12 / proporcional, lineHeight: `${15 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                            color: 'rgb(85, 85, 85)', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                    38 min ago
                                                                </p>
                                                            </div>
                                                            <p style={{fontSize: 13 / proporcional, lineHeight: `${19.5 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                        color: 'rgb(119, 119, 119)', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                Diseño bug fix
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{width: 300 / proporcional, height: 77.5 / proporcional, background: 'white', paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                                                <div style={{width: 300 / proporcional, height: 47.5 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                                                        paddingTop: 5 / proporcional, paddingBottom: 5 / proporcional}}>
                                                    <div className='d-flex' style={{width: 260 / proporcional, height: 37.5 / proporcional, cursor: 'pointer'}}>
                                                        <div className='rounded-circle' style={{width: 37.5 / proporcional, height: 37.5 / proporcional, padding: 1.25 / proporcional,
                                                                border: '1px solid rgb(229, 229, 229)', marginRight: 15 / proporcional}}/>
                                                        <div style={{width: 208.5 / proporcional, height: 37.5 / proporcional, paddingTop: 1.25 / proporcional, paddingBlock: 1.25 / proporcional}}>
                                                            <div className='d-flex justify-content-between' style={{width: 208.5 / proporcional, height: 15 / proporcional}}>
                                                                <p style={{fontSize: 15 / proporcional, lineHeight: `${15 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                            color: 'rgb(85, 85, 85)', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                    Dr. Debra Stewart
                                                                </p>
                                                                <p style={{fontSize: 12 / proporcional, lineHeight: `${15 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                            color: 'rgb(85, 85, 85)', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                    2hr ago
                                                                </p>
                                                            </div>
                                                            <p style={{fontSize: 13 / proporcional, lineHeight: `${19.5 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                        color: 'rgb(119, 119, 119)', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                Fix Bug
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
        
                                        </div>
                                    </div>
                                ) : null
                            }
                        </div>
                        <div className='position-relative' style={{width: 50 / proporcional, height: 54 / proporcional}}
                                        onMouseOver={() => setMouseIcono('notification')} onMouseLeave={() => setMouseIcono('')}>
                            <img src={mouse_icono === 'notification' ? icono_notificacion_black : icono_notificacion_black_empty} style={{width: 50 / proporcional, height: 54 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional,
                                        paddingLeft: 13 / proporcional, paddingRight: 13 / proporcional, cursor: 'pointer'}}/>
                            <div className='position-absolute rounded-circle' style={{width: 20 / proporcional, height: 20 / proporcional, background: 'rgb(3, 146, 207)',
                                    top: 4 / proporcional, right: 4 / proporcional}}>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'white', textAlign: 'center',
                                            marginBottom: 0, cursor: 'pointer'}}>
                                    4
                                </p>
                            </div>
                            {
                                mouse_icono === 'notification' ? (
                                    <div className='position-absolute shadow-lg' style={{width: 300 / proporcional, height: 'auto', top: 54 / proporcional, left: -75}}>
                                        <div className='rounded' style={{width: 300 / proporcional, height: 'auto', background: 'white', paddingBottom: 20 / proporcional}}>
                                            <div className='rounded-top' style={{width: 300 / proporcional, height: 62.5 / proporcional, background: 'rgb(130, 180, 64)',
                                                        padding: 20 / proporcional, marginBottom: 20 / proporcional}}>
                                                <p style={{fontSize: 16 / proporcional, lineHeight: `${22.5 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                            color: 'white', textAlign: 'center', marginBottom: 0, cursor: 'pointer'}}>
                                                    Tienes 4 nuevas notificaciones
                                                </p>
                                            </div>
                                            <div style={{width: 300 / proporcional, height: 'auto'/ proporcional, background: 'white'}}>
                                                <div style={{width: 300 / proporcional, height: 'auto'/ proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                                                        paddingTop: 13 / proporcional, paddingBottom: 13 / proporcional}}>
                                                    <div className='d-flex' style={{width: 260 / proporcional, height: 'auto', cursor: 'pointer'}}>
                                                        <div className='rounded' style={{width: 15 / proporcional, height: 15 / proporcional, border: '1px solid rgb(229, 229, 229)', 
                                                            marginRight: 24 / proporcional}}/>
                                                        <div style={{width: 208.5 / proporcional, height: 'auto'}}>
                                                            <div className='d-flex justify-content-between' style={{width: 208.5 / proporcional, height: 'auto'}}>
                                                                <p style={{fontSize: 16 / proporcional, lineHeight: `${19.2 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                            color: 'red', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                    Problema solucionado
                                                                </p>
                                                                <p style={{fontSize: 12 / proporcional, lineHeight: `${14.4 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                            color: 'rgb(154, 154, 154)', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                    9:10 a.m
                                                                </p>
                                                            </div>
                                                            <p style={{fontSize: 13 / proporcional, lineHeight: `${19.5 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                        color: 'rgb(154, 154, 154)', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                Hemos corregido el bug del diseño con responsivo
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{width: 300 / proporcional, height: 'auto'/ proporcional, background: 'white'}}>
                                                <div style={{width: 300 / proporcional, height: 'auto'/ proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                                                        paddingTop: 13 / proporcional, paddingBottom: 13 / proporcional}}>
                                                    <div className='d-flex' style={{width: 260 / proporcional, height: 'auto', cursor: 'pointer'}}>
                                                        <div className='rounded' style={{width: 15 / proporcional, height: 15 / proporcional, border: '1px solid rgb(229, 229, 229)', 
                                                            marginRight: 24 / proporcional}}/>
                                                        <div style={{width: 208.5 / proporcional, height: 'auto'}}>
                                                            <div className='d-flex justify-content-between' style={{width: 208.5 / proporcional, height: 'auto'}}>
                                                                <p style={{fontSize: 16 / proporcional, lineHeight: `${19.2 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                            color: 'red', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                    Nuevo usuario
                                                                </p>
                                                                <p style={{fontSize: 12 / proporcional, lineHeight: `${14.4 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                            color: 'rgb(154, 154, 154)', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                    9:15 a.m
                                                                </p>
                                                            </div>
                                                            <p style={{fontSize: 13 / proporcional, lineHeight: `${19.5 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                        color: 'rgb(154, 154, 154)', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                Me siento excelnte, gracias equipo
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{width: 300 / proporcional, height: 'auto'/ proporcional, background: 'white'}}>
                                                <div style={{width: 300 / proporcional, height: 'auto'/ proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                                                        paddingTop: 13 / proporcional, paddingBottom: 13 / proporcional}}>
                                                    <div className='d-flex' style={{width: 260 / proporcional, height: 'auto', cursor: 'pointer'}}>
                                                        <div className='rounded' style={{width: 15 / proporcional, height: 15 / proporcional, border: '1px solid rgb(229, 229, 229)', 
                                                            marginRight: 24 / proporcional}}/>
                                                        <div style={{width: 208.5 / proporcional, height: 'auto'}}>
                                                            <div className='d-flex justify-content-between' style={{width: 208.5 / proporcional, height: 'auto'}}>
                                                                <p style={{fontSize: 16 / proporcional, lineHeight: `${19.2 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                            color: 'red', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                    Advertencia de servidor
                                                                </p>
                                                                <p style={{fontSize: 12 / proporcional, lineHeight: `${14.4 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                            color: 'rgb(154, 154, 154)', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                    9:17 a.m
                                                                </p>
                                                            </div>
                                                            <p style={{fontSize: 13 / proporcional, lineHeight: `${19.5 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                        color: 'rgb(154, 154, 154)', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                Tu conexión no es privada
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{width: 300 / proporcional, height: 'auto'/ proporcional, background: 'white'}}>
                                                <div style={{width: 300 / proporcional, height: 'auto'/ proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                                                        paddingTop: 13 / proporcional, paddingBottom: 13 / proporcional}}>
                                                    <div className='d-flex' style={{width: 260 / proporcional, height: 'auto', cursor: 'pointer'}}>
                                                        <div className='rounded' style={{width: 15 / proporcional, height: 15 / proporcional, border: '1px solid rgb(229, 229, 229)', 
                                                            marginRight: 24 / proporcional}}/>
                                                        <div style={{width: 208.5 / proporcional, height: 'auto'}}>
                                                            <div className='d-flex justify-content-between' style={{width: 208.5 / proporcional, height: 'auto'}}>
                                                                <p style={{fontSize: 16 / proporcional, lineHeight: `${19.2 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                            color: 'red', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                    2 nuevas retroalimentaciones
                                                                </p>
                                                                <p style={{fontSize: 12 / proporcional, lineHeight: `${14.4 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                            color: 'rgb(154, 154, 154)', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                    9:22 a.m
                                                                </p>
                                                            </div>
                                                            <p style={{fontSize: 13 / proporcional, lineHeight: `${19.5 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', 
                                                                        color: 'rgb(154, 154, 154)', textAlign: 'left', marginBottom: 0, cursor: 'default'}}>
                                                                Dará un finalizado más inteligente a tu web.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : null
                            }
                        </div>
                        <div style={{width: 50 / proporcional, height: 54 / proporcional}}>
                            <img src={icono_language} style={{width: 50 / proporcional, height: 54 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional,
                                        paddingLeft: 13 / proporcional, paddingRight: 13 / proporcional, cursor: 'pointer'}}/>
                        </div>
                        <div className='position-relative' style={{width: 50 / proporcional, height: 54 / proporcional}}
                                        onMouseOver={() => setMouseIcono('message')} onMouseLeave={() => setMouseIcono('')}>
                            <img src={mouse_icono === 'message' ? icono_message_black : icono_message_black_empty} style={{width: 50 / proporcional, height: 54 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional,
                                        paddingLeft: 13 / proporcional, paddingRight: 13 / proporcional, cursor: 'pointer'}}/>
                        </div>
                        <div className='position-relative' style={{width: 50 / proporcional, height: 54 / proporcional}}
                                        onMouseOver={() => setMouseIcono('ampliar')} onMouseLeave={() => setMouseIcono('')}>
                            <img src={mouse_icono === 'ampliar' ? icono_ampliar_v2 : icono_ampliar_v1} style={{width: 50 / proporcional, height: 54 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional,
                                        paddingLeft: 13 / proporcional, paddingRight: 13 / proporcional, cursor: 'pointer'}}/>
                        </div>
                        <div style={{width: 50 / proporcional, height: 54 / proporcional}}>
                            <img src={icono_logout} style={{width: 50 / proporcional, height: 54 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional,
                                        paddingLeft: 13 / proporcional, paddingRight: 13 / proporcional, cursor: 'pointer'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
