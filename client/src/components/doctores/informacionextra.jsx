import React, { useState } from 'react'

import icono_triangle from '../../assets/iconos/icono_triangle_grey_select_96.png'
import icono_ampliar from '../../assets/iconos/icono_ampliar_black_v1_96.png'
import icono_opciones from '../../assets/iconos/icono_opciones_black_96.png'

import icono_star_full from '../../assets/iconos/icono_star_full_black_96.png'
import icono_star_empty from '../../assets/iconos/icono_star_empty_black_96.png'

export default function InformacionExtra({proporcional, doctor}) {

    const [seleccion_menu, setSeleccionMenu] = useState ('basico')
    const [menu_over, setMenuOver] = useState ('')

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
                                <div className='d-flex' style={{width: '100%', height: 40 / proporcional}}>
                                    <div style={{width: '50%', height: 40 / proporcional}}> 
                                        <h2 style={{fontSize: 32 / proporcional, lineHeight: `${39 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif',
                                            marginBottom: 0}}>
                                                Rating 5/4.3
                                        </h2>   
                                    </div>
                                    <div style={{width: '50%', height: 40 / proporcional}}>    
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
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}
