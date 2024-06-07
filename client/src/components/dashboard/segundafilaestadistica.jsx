import React, { useState } from 'react'

import icono_ampliar from '../../assets/iconos/icono_ampliar_black_v2_96.png'
import icono_options from '../../assets/iconos/icono_opciones_black_96.png'

import CuadroDonut from './cuadrodonut.tsx'
import CuadroBarVertical from './cuadrobarvertical.tsx'

export default function SegundaFilaEstaditica({proporcional}) {

    const [boton_diario, setBotonDiario] = useState (false)
    const [boton_semanal, setBotonSemanal] = useState(false)
    const [boton_mensual, setBotonMensual] = useState (false)

    const [mostrar_periodo, setMostrarPeriodo] = useState('mensual')

    return (
        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
            <div style={{width: '33%', height: 'auto'}}>
                <div className='shadow-sm rounded' style={{width: '100%', height: 'auto', background: 'white'}}>
                    <div className='d-flex justify-content-between' 
                            style={{width: '100%', height: 'auto', paddingTop: 22 / proporcional, paddingLeft: 22 / proporcional, paddingRight: 22 / proporcional}}>
                        <div style={{width: '80%', height: 'auto'}}>
                            <h2 style={{fontSize: 17 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(51, 51, 51)', marginBottom: 0 / proporcional}}>
                                Disponibilidad doctores
                            </h2>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 'auto'}}>
                            <img src={icono_ampliar} style={{width: 32 / proporcional, height: 32 / proporcional, padding: 6 / proporcional, cursor: 'pointer'}}/>
                            <img src={icono_options} style={{width: 32 / proporcional, height: 32 / proporcional, padding: 6 / proporcional, cursor: 'pointer'}}/>
                        </div>
                    </div>
                    <div className='' 
                            style={{width: '100%', height: 'auto', padding: 22 / proporcional, marginBottom: 16 / proporcional, paddingBottom: 0 / proporcional}}>
                        <div className='d-flex' style={{width: '100%', height: 47 / proporcional, borderTop: '1px solid rgb(128, 128, 128)'}}>
                            <div style={{width: '33%', height: 'auto'}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${21 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(51, 51, 51)', marginBottom: 0 / proporcional,
                                    padding: 12 / proporcional}}>
                                    Doctor
                                </p>
                            </div>
                            <div style={{width: '33%', height: 'auto'}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${21 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(51, 51, 51)', marginBottom: 0 / proporcional,
                                    padding: 12 / proporcional}}>
                                    Especialidad
                                </p>
                            </div>
                            <div style={{width: '33%', height: 'auto'}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${21 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(51, 51, 51)', marginBottom: 0 / proporcional,
                                    padding: 12 / proporcional}}>
                                    Disponibilidad
                                </p>
                            </div>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 47 / proporcional, borderTop: '1px solid rgb(128, 128, 128)'}}>
                            <div style={{width: '33%', height: 'auto', padding: 12 / proporcional}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${21 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(51, 51, 51)', marginBottom: 0 / proporcional}}>
                                    Michelle
                                </p>
                            </div>
                            <div style={{width: '33%', height: 'auto', padding: 12 / proporcional}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${21 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(51, 51, 51)', marginBottom: 0 / proporcional}}>
                                    Dentista
                                </p>
                            </div>
                            <div style={{width: '33%', height: 'auto', padding: 12 / proporcional}}>
                                <p className='rounded-pill' 
                                    style={{width: '50%', fontSize: 12 / proporcional, lineHeight: `${12 / proporcional}px`, fontWeight: 700, fontFamily: 'Nunito, sans-serif', 
                                        color: '#82b440', marginBottom: 0 / proporcional, border: '1px solid #82b440', padding: 4.5 / proporcional, textAlign: 'center'}}>
                                    Disponible
                                </p>
                            </div>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 47 / proporcional, borderTop: '1px solid rgb(128, 128, 128)'}}>
                            <div style={{width: '33%', height: 'auto', padding: 12 / proporcional}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${21 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(51, 51, 51)', marginBottom: 0 / proporcional}}>
                                    Jason
                                </p>
                            </div>
                            <div style={{width: '33%', height: 'auto', padding: 12 / proporcional}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${21 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(51, 51, 51)', marginBottom: 0 / proporcional}}>
                                    Ortodoncia
                                </p>
                            </div>
                            <div style={{width: '33%', height: 'auto', padding: 12 / proporcional}}>
                                <p className='rounded-pill' 
                                    style={{width: '50%', fontSize: 12 / proporcional, lineHeight: `${12 / proporcional}px`, fontWeight: 700, fontFamily: 'Nunito, sans-serif', 
                                        color: 'rgb(255, 115, 33)', marginBottom: 0 / proporcional, border: '1px solid rgb(255, 115, 33)', padding: 4.5 / proporcional, textAlign: 'center'}}>
                                    Salió
                                </p>
                            </div>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 47 / proporcional, borderTop: '1px solid rgb(128, 128, 128)'}}>
                            <div style={{width: '33%', height: 'auto', padding: 12 / proporcional}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${21 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(51, 51, 51)', marginBottom: 0 / proporcional}}>
                                    Michelle
                                </p>
                            </div>
                            <div style={{width: '33%', height: 'auto', padding: 12 / proporcional}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${21 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(51, 51, 51)', marginBottom: 0 / proporcional}}>
                                    Dentista
                                </p>
                            </div>
                            <div style={{width: '33%', height: 'auto', padding: 12 / proporcional}}>
                                <p className='rounded-pill' 
                                    style={{width: '50%', fontSize: 12 / proporcional, lineHeight: `${12 / proporcional}px`, fontWeight: 700, fontFamily: 'Nunito, sans-serif', 
                                        color: 'rgb(255, 88, 88)', marginBottom: 0 / proporcional, border: '1px solid rgb(255, 88, 88)', padding: 4.5 / proporcional, textAlign: 'center'}}>
                                    Ocupado
                                </p>
                            </div>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 47 / proporcional, borderTop: '1px solid rgb(128, 128, 128)'}}>
                            <div style={{width: '33%', height: 'auto', padding: 12 / proporcional}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${21 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(51, 51, 51)', marginBottom: 0 / proporcional}}>
                                    David
                                </p>
                            </div>
                            <div style={{width: '33%', height: 'auto', padding: 12 / proporcional}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${21 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(51, 51, 51)', marginBottom: 0 / proporcional}}>
                                    Piel
                                </p>
                            </div>
                            <div style={{width: '33%', height: 'auto', padding: 12 / proporcional}}>
                                <p className='rounded-pill' 
                                    style={{width: '50%', fontSize: 12 / proporcional, lineHeight: `${12 / proporcional}px`, fontWeight: 700, fontFamily: 'Nunito, sans-serif', 
                                        color: '#82b440', marginBottom: 0 / proporcional, border: '1px solid #82b440', padding: 4.5 / proporcional, textAlign: 'center'}}>
                                    Disponible
                                </p>
                            </div>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 47 / proporcional, borderTop: '1px solid rgb(128, 128, 128)'}}>
                            <div style={{width: '33%', height: 'auto', padding: 12 / proporcional}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${21 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(51, 51, 51)', marginBottom: 0 / proporcional}}>
                                    Angelica
                                </p>
                            </div>
                            <div style={{width: '33%', height: 'auto', padding: 12 / proporcional}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${21 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(51, 51, 51)', marginBottom: 0 / proporcional}}>
                                    Dentista
                                </p>
                            </div>
                            <div style={{width: '33%', height: 'auto', padding: 12 / proporcional}}>
                                <p className='rounded-pill' 
                                    style={{width: '50%', fontSize: 12 / proporcional, lineHeight: `${12 / proporcional}px`, fontWeight: 700, fontFamily: 'Nunito, sans-serif', 
                                        color: '#82b440', marginBottom: 0 / proporcional, border: '1px solid #82b440', padding: 4.5 / proporcional, textAlign: 'center'}}>
                                    Disponible
                                </p>
                            </div>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 47 / proporcional, borderTop: '1px solid rgb(128, 128, 128)'}}>
                            <div style={{width: '33%', height: 'auto', padding: 12 / proporcional}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${21 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(51, 51, 51)', marginBottom: 0 / proporcional}}>
                                    Jason
                                </p>
                            </div>
                            <div style={{width: '33%', height: 'auto', padding: 12 / proporcional}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${21 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(51, 51, 51)', marginBottom: 0 / proporcional}}>
                                    Ortodoncia
                                </p>
                            </div>
                            <div style={{width: '33%', height: 'auto', padding: 12 / proporcional}}>
                                <p className='rounded-pill' 
                                    style={{width: '50%', fontSize: 12 / proporcional, lineHeight: `${12 / proporcional}px`, fontWeight: 700, fontFamily: 'Nunito, sans-serif', 
                                        color: 'rgb(255, 115, 33)', marginBottom: 0 / proporcional, border: '1px solid rgb(255, 115, 33)', padding: 4.5 / proporcional, textAlign: 'center'}}>
                                    Salió
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '100%', height: 'auto', padding: 22 / proporcional, paddingTop: 0}}>
                        <div className='btn' style={{width: '100%', height: 35 / proporcional, background: 'rgb(3, 146, 207)', padding: 6.5 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 300, fontFamily: 'Nunito, sans-serif', color: 'white', marginBottom: 0 / proporcional,
                                textAlign: 'center'}}>
                                Ver todos
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{width: '33%', height: '100%'}}>
                <div className='shadow-sm rounded' style={{width: '100%', height: 'auto', background: 'white'}}>
                    <div className='d-flex justify-content-between' 
                            style={{width: '100%', height: 'auto', paddingTop: 22 / proporcional, paddingLeft: 22 / proporcional, paddingRight: 22 / proporcional}}>
                        <div style={{width: '80%', height: 'auto'}}>
                            <h2 style={{fontSize: 17 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(51, 51, 51)', marginBottom: 0 / proporcional}}>
                                Estado citas
                            </h2>
                        </div>
                    </div>
                    <div style={{width: '100%', height: '50%', paddingLeft: 22 / proporcional, paddingRight: 22 / proporcional, paddingBottom: 22 / proporcional}}>
                        <CuadroDonut/>
                    </div>
                </div>
            </div>

            <div style={{width: '33%', height: '100%'}}>
                <div className='shadow-sm rounded' style={{width: '100%', height: '100%', background: 'white'}}>
                    <div className='d-flex justify-content-between' 
                            style={{width: '100%', height: 'auto', paddingTop: 22 / proporcional, paddingLeft: 22 / proporcional, paddingRight: 22 / proporcional}}>
                        <div style={{width: '80%', height: 'auto'}}>
                            <h2 style={{fontSize: 17 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(51, 51, 51)', marginBottom: 0 / proporcional}}>
                                Decesos y recuperados
                            </h2>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 'auto'}}>
                            <img src={icono_ampliar} style={{width: 32 / proporcional, height: 32 / proporcional, padding: 6 / proporcional, cursor: 'pointer'}}/>
                            <img src={icono_options} style={{width: 32 / proporcional, height: 32 / proporcional, padding: 6 / proporcional, cursor: 'pointer'}}/>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' 
                            style={{width: '100%', height: 'auto', padding: 22 / proporcional}}>
                        <div className='d-flex' style={{width: '80%', height: 'auto'}}>
                            <div style={{width: '40%', height: 'auto'}}>
                                <h2 style={{fontSize: 17 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional}}>
                                    356
                                </h2>
                                <small style={{fontSize: 11 / proporcional, lineHeight: `${16 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(154, 154, 154)', marginBottom: 0 / proporcional}}>
                                    Decesos
                                </small>
                            </div>
                            <div style={{width: '40%', height: 'auto'}}>
                                <h5 style={{fontSize: 17 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional}}>
                                    698
                                </h5>
                                <small style={{fontSize: 11 / proporcional, lineHeight: `${16 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(154, 154, 154)', marginBottom: 0 / proporcional}}>
                                    Recuperados
                                </small>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 'auto'}}>
                            <div className={boton_diario ? 'btn rounded shadow' : 'btn rounded'} 
                                style={{width: 200 / proporcional, height: 32 / proporcional, border: mostrar_periodo === 'diario' ? '1px solid rgb(130, 180, 64)' : '1px solid rgb(236, 236, 236)', fontSize: 14 / proporcional,
                                    color: mostrar_periodo === 'diario' ? 'white' : 'rgb(85, 85, 85)', fontWeight: 300, lineHeight: `${14 / proporcional}px`, background: mostrar_periodo === 'diario' ? 'rgb(130, 180, 64)' : 'white'}}
                                    onClick={() => setMostrarPeriodo('diario')}
                                onMouseOver={() => setBotonDiario(true)} onMouseLeave={() => setBotonDiario(false)}>
                                D
                            </div>
                            <div className={boton_semanal ? 'btn rounded shadow' : 'btn rounded'} 
                                style={{width: 200 / proporcional, height: 32 / proporcional, border: mostrar_periodo === 'semanal' ? '1px solid rgb(130, 180, 64)' : '1px solid rgb(236, 236, 236)', fontSize: 14 / proporcional,
                                    color: mostrar_periodo === 'semanal' ? 'white' : 'rgb(85, 85, 85)', fontWeight: 300, lineHeight: `${14 / proporcional}px`, background: mostrar_periodo === 'semanal' ? 'rgb(130, 180, 64)' : 'white'}}
                                    onClick={() => setMostrarPeriodo('semanal')}
                                onMouseOver={() => setBotonSemanal(true)} onMouseLeave={() => setBotonSemanal(false)}>
                                S
                            </div>
                            <div className={boton_mensual ? 'btn rounded shadow' : 'btn rounded'} 
                                style={{width: 200 / proporcional, height: 32 / proporcional, border: mostrar_periodo === 'mensual' ? '1px solid rgb(130, 180, 64)' : '1px solid rgb(236, 236, 236)', fontSize: 14 / proporcional,
                                    color: mostrar_periodo === 'mensual' ? 'white' :  'rgb(85, 85, 85)', fontWeight: 300, lineHeight: `${14 / proporcional}px`, background: mostrar_periodo === 'mensual' ? 'rgb(130, 180, 64)' : 'white'}}
                                    onClick={() => setMostrarPeriodo('mensual')}
                                onMouseOver={() => setBotonMensual(true)} onMouseLeave={() => setBotonMensual(false)}>
                                M
                            </div>
                        </div>
                    </div>
                    <div style={{width: '100%', height: '100%', paddingLeft: 22 / proporcional, paddingRight: 22 / proporcional, paddingBottom: 22 / proporcional}}>
                        <CuadroBarVertical/>
                    </div>
                </div>
            </div>
        </div>
    )
}
