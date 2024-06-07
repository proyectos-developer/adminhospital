import React, { useState } from 'react'

import icono_ampliar from '../../assets/iconos/icono_ampliar_black_v2_96.png'
import icono_options from '../../assets/iconos/icono_opciones_black_96.png'

import CuadroLine from './cuadroline.tsx'
import CuadroBarHorizontal from './cuadrobarhorizontal.tsx'

export default function PrimeraFilaEstadistica({proporcional}) {

    const [boton_diario, setBotonDiario] = useState (false)
    const [boton_semanal, setBotonSemanal] = useState(false)
    const [boton_mensual, setBotonMensual] = useState (false)

    const [mostrar_periodo, setMostrarPeriodo] = useState('mensual')

    return (
        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
            <div style={{width: '49%', height: 'auto'}}>
                <div className='shadow-sm rounded' style={{width: '100%', height: 'auto', background: 'white'}}>
                    <div className='d-flex justify-content-between' 
                            style={{width: '100%', height: 'auto', paddingTop: 22 / proporcional, paddingLeft: 22 / proporcional, paddingRight: 22 / proporcional}}>
                        <div style={{width: '80%', height: 'auto'}}>
                            <h2 style={{fontSize: 17 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(51, 51, 51)', marginBottom: 0 / proporcional}}>
                                Resumén de este año
                            </h2>
                            <small style={{fontSize: 12 / proporcional, lineHeight: `${18 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(154, 154, 154)', marginBottom: 0 / proporcional}}>
                                Es el período de tiempo en que un usuario interactúa activamente con su sitio web, página o aplicación, etc
                            </small>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 'auto'}}>
                            <img src={icono_ampliar} style={{width: 32 / proporcional, height: 32 / proporcional, padding: 6 / proporcional, cursor: 'pointer'}}/>
                            <img src={icono_options} style={{width: 32 / proporcional, height: 32 / proporcional, padding: 6 / proporcional, cursor: 'pointer'}}/>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' 
                            style={{width: '100%', height: 'auto', padding: 22 / proporcional}}>
                        <div className='d-flex' style={{width: '80%', height: 'auto'}}>
                            <div style={{width: '15%', height: 'auto'}}>
                                <h2 style={{fontSize: 17 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional}}>
                                    $1056
                                </h2>
                                <small style={{fontSize: 11 / proporcional, lineHeight: `${16 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(154, 154, 154)', marginBottom: 0 / proporcional}}>
                                    Gastos
                                </small>
                            </div>
                            <div style={{width: '15%', height: 'auto'}}>
                                <h5 style={{fontSize: 17 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional}}>
                                    $3098
                                </h5>
                                <small style={{fontSize: 11 / proporcional, lineHeight: `${16 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(154, 154, 154)', marginBottom: 0 / proporcional}}>
                                    Ganancias
                                </small>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 'auto'}}>
                            <div className={boton_diario ? 'btn rounded shadow' : 'btn rounded'} 
                                style={{width: 200 / proporcional, height: 32 / proporcional, border: mostrar_periodo === 'diario' ? '1px solid rgb(130, 180, 64)' : '1px solid rgb(236, 236, 236)', fontSize: 14 / proporcional,
                                    color: mostrar_periodo === 'diario' ? 'white' : 'rgb(85, 85, 85)', fontWeight: 300, lineHeight: `${14 / proporcional}px`, background: mostrar_periodo === 'diario' ? 'rgb(130, 180, 64)' : 'white'}}
                                    onClick={() => setMostrarPeriodo('diario')}
                                onMouseOver={() => setBotonDiario(true)} onMouseLeave={() => setBotonDiario(false)}>
                                Diario
                            </div>
                            <div className={boton_semanal ? 'btn rounded shadow' : 'btn rounded'} 
                                style={{width: 200 / proporcional, height: 32 / proporcional, border: mostrar_periodo === 'semanal' ? '1px solid rgb(130, 180, 64)' : '1px solid rgb(236, 236, 236)', fontSize: 14 / proporcional,
                                    color: mostrar_periodo === 'semanal' ? 'white' : 'rgb(85, 85, 85)', fontWeight: 300, lineHeight: `${14 / proporcional}px`, background: mostrar_periodo === 'semanal' ? 'rgb(130, 180, 64)' : 'white'}}
                                    onClick={() => setMostrarPeriodo('semanal')}
                                onMouseOver={() => setBotonSemanal(true)} onMouseLeave={() => setBotonSemanal(false)}>
                                Semanal
                            </div>
                            <div className={boton_mensual ? 'btn rounded shadow' : 'btn rounded'} 
                                style={{width: 200 / proporcional, height: 32 / proporcional, border: mostrar_periodo === 'mensual' ? '1px solid rgb(130, 180, 64)' : '1px solid rgb(236, 236, 236)', fontSize: 14 / proporcional,
                                    color: mostrar_periodo === 'mensual' ? 'white' :  'rgb(85, 85, 85)', fontWeight: 300, lineHeight: `${14 / proporcional}px`, background: mostrar_periodo === 'mensual' ? 'rgb(130, 180, 64)' : 'white'}}
                                    onClick={() => setMostrarPeriodo('mensual')}
                                onMouseOver={() => setBotonMensual(true)} onMouseLeave={() => setBotonMensual(false)}>
                                Mensual
                            </div>
                        </div>
                    </div>
                    <div style={{width: '100%', height: '50%', paddingLeft: 22 / proporcional, paddingRight: 22 / proporcional, paddingBottom: 22 / proporcional}}>
                        <CuadroLine/>
                    </div>
                </div>
            </div>

            <div style={{width: '49%', height: 'auto'}}>
                <div className='shadow-sm rounded' style={{width: '100%', height: 'auto', background: 'white'}}>
                    <div className='' 
                            style={{width: '100%', height: 'auto', paddingTop: 22 / proporcional, paddingLeft: 22 / proporcional, paddingRight: 22 / proporcional}}>
                        <h2 style={{fontSize: 17 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(51, 51, 51)', marginBottom: 0 / proporcional}}>
                            Listado por ciudad
                        </h2>
                        <small style={{fontSize: 12 / proporcional, lineHeight: `${18 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(154, 154, 154)', marginBottom: 0 / proporcional}}>
                            El número total de impresiones por rango de edad
                        </small>
                    </div>
                    <div className='d-flex justify-content-between' 
                            style={{width: '100%', height: 'auto', padding: 22 / proporcional}}>
                        <div className='d-flex' style={{width: '80%', height: 'auto'}}>
                            <div style={{width: '40%', height: 'auto'}}>
                                <h2 style={{fontSize: 17 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional}}>
                                    2,356
                                </h2>
                                <small style={{fontSize: 11 / proporcional, lineHeight: `${16 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(154, 154, 154)', marginBottom: 0 / proporcional}}>
                                    Nuevos pacientes
                                </small>
                            </div>
                            <div style={{width: '40%', height: 'auto'}}>
                                <h5 style={{fontSize: 17 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional}}>
                                    1,898
                                </h5>
                                <small style={{fontSize: 11 / proporcional, lineHeight: `${16 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(154, 154, 154)', marginBottom: 0 / proporcional}}>
                                    Pacientes antiguos
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
                        <CuadroBarHorizontal/>
                    </div>
                </div>
            </div>
        </div>
    )
}
