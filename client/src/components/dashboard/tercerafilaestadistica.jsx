import React, { useState } from 'react'

import icono_ampliar from '../../assets/iconos/icono_ampliar_black_v2_96.png'
import icono_options from '../../assets/iconos/icono_opciones_black_96.png'
import icono_star from '../../assets/iconos/icono_star_full_grey_96.png'
import icono_star_empty from '../../assets/iconos/icono_star_empty_grey_96.png'
import icono_avatar_masculino from '../../assets/iconos/icono_avatar_masculino_96.png'
import icono_avatar_femenino from '../../assets/iconos/icono_avatar_femenino_96.png'

export default function TerceraFilaEstadistica({proporcional}) {

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
                                Vistas y conversiones orgánicas
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
                            <div style={{width: '15%', height: 'auto'}}>
                                <h2 style={{fontSize: 17 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional}}>
                                    $356
                                </h2>
                                <small style={{fontSize: 11 / proporcional, lineHeight: `${16 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(154, 154, 154)', marginBottom: 0 / proporcional}}>
                                    Ratio
                                </small>
                            </div>
                            <div style={{width: '15%', height: 'auto'}}>
                                <h5 style={{fontSize: 17 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional}}>
                                    $198
                                </h5>
                                <small style={{fontSize: 11 / proporcional, lineHeight: `${16 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(154, 154, 154)', marginBottom: 0 / proporcional}}>
                                    Valor
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
                </div>
            </div>

            <div style={{width: '33%', height: 'auto'}}>
                <div className='shadow-sm rounded' style={{width: '100%', height: 'auto', background: 'white'}}>
                    <div className='' 
                            style={{width: '100%', height: 'auto', paddingTop: 22 / proporcional, paddingLeft: 22 / proporcional, paddingRight: 22 / proporcional}}>
                        <h2 style={{fontSize: 17 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(51, 51, 51)', marginBottom: 0 / proporcional}}>
                            Calificaación general del hospital
                        </h2>
                    </div>
                    <div className='d-flex justify-content-between' 
                            style={{width: '100%', height: 'auto', padding: 22 / proporcional, paddingBottom: 0}}>
                        <div className='d-flex' style={{width: '80%', height: 'auto'}}>
                            <h2 style={{fontSize: 32 / proporcional, lineHeight: `${38 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional}}>
                                4.3
                            </h2>
                            <div className='d-flex' style={{width: 'auto', height: 22 / proporcional, marginTop: 14 / proporcional}}>
                                <img src={icono_star} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star_empty} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 2 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '100%', height: '100%', marginTop: 16 / proporcional, marginBottom: 16 / proporcional, paddingLeft: 22 / proporcional, paddingRight: 22 / proporcional}}>
                        <img src={icono_avatar_masculino} style={{width: 26 / proporcional, height: 26 / proporcional}}/>
                        <img src={icono_avatar_femenino} style={{width: 26 / proporcional, height: 26 / proporcional}}/>
                        <img src={icono_avatar_femenino} style={{width: 26 / proporcional, height: 26 / proporcional}}/>
                        <img src={icono_avatar_masculino} style={{width: 26 / proporcional, height: 26 / proporcional}}/>
                    </div>
                    <div style={{width: '100%', height: 'auto', padding: 22 / proporcional, paddingTop: 0}}>
                        <div className='d-flex' style={{width: '100%', height: 36 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional}}>
                            <div className='d-flex justify-content-start' style={{width: '50%', height: 20 / proporcional}}>
                                <p style={{fontSize: 13 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional,
                                    marginRight: 5 / proporcional}}>
                                    5.0
                                </p>
                                <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 2 / proporcional}}/>
                            </div>
                            <div className='d-flex justify-content-end' style={{width: '50%', height: 20 / proporcional}}>
                                <span style={{fontSize: 13 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional,
                                    marginRight: 5 / proporcional}}>
                                    4,178
                                </span>
                                <span style={{fontSize: 10 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional}}>
                                    58%
                                </span>
                            </div>    
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 36 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional}}>
                            <div className='d-flex justify-content-start' style={{width: '50%', height: 20 / proporcional}}>
                                <p style={{fontSize: 13 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional,
                                    marginRight: 5 / proporcional}}>
                                    4.0
                                </p>
                                <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star_empty} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 2 / proporcional}}/>
                            </div>
                            <div className='d-flex justify-content-end' style={{width: '50%', height: 20 / proporcional}}>
                                <span style={{fontSize: 13 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional,
                                    marginRight: 5 / proporcional}}>
                                    2,091
                                </span>
                                <span style={{fontSize: 10 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional}}>
                                    28%
                                </span>
                            </div>    
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 36 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional}}>
                            <div className='d-flex justify-content-start' style={{width: '50%', height: 20 / proporcional}}>
                                <p style={{fontSize: 13 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional,
                                    marginRight: 5 / proporcional}}>
                                    3.0
                                </p>
                                <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star_empty} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star_empty} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 2 / proporcional}}/>
                            </div>
                            <div className='d-flex justify-content-end' style={{width: '50%', height: 20 / proporcional}}>
                                <span style={{fontSize: 13 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional,
                                    marginRight: 5 / proporcional}}>
                                    398
                                </span>
                                <span style={{fontSize: 10 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional}}>
                                    15%
                                </span>
                            </div>    
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 36 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional}}>
                            <div className='d-flex justify-content-start' style={{width: '50%', height: 20 / proporcional}}>
                                <p style={{fontSize: 13 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional,
                                    marginRight: 5 / proporcional}}>
                                    2.0
                                </p>
                                <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star_empty} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star_empty} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star_empty} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 2 / proporcional}}/>
                            </div>
                            <div className='d-flex justify-content-end' style={{width: '50%', height: 20 / proporcional}}>
                                <span style={{fontSize: 13 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional,
                                    marginRight: 5 / proporcional}}>
                                    430
                                </span>
                                <span style={{fontSize: 10 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional}}>
                                    8%
                                </span>
                            </div>    
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 36 / proporcional, paddingTop: 8 / proporcional, paddingBottom: 8 / proporcional}}>
                            <div className='d-flex justify-content-start' style={{width: '50%', height: 20 / proporcional}}>
                                <p style={{fontSize: 13 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional,
                                    marginRight: 5 / proporcional}}>
                                    1.0
                                </p>
                                <img src={icono_star} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star_empty} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star_empty} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star_empty} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 2 / proporcional}}/>
                                <img src={icono_star_empty} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 2 / proporcional}}/>
                            </div>
                            <div className='d-flex justify-content-end' style={{width: '50%', height: 20 / proporcional}}>
                                <span style={{fontSize: 13 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional,
                                    marginRight: 5 / proporcional}}>
                                    307
                                </span>
                                <span style={{fontSize: 10 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional}}>
                                    18%
                                </span>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>

            <div style={{width: '33%', height: 'auto'}}>
                <div className='shadow-sm rounded' style={{width: '100%', height: 'auto', background: 'white'}}>
                    <div className='d-flex justify-content-between' 
                            style={{width: '100%', height: 'auto', paddingTop: 22 / proporcional, paddingLeft: 22 / proporcional, paddingRight: 22 / proporcional}}>
                        <div style={{width: '80%', height: 'auto'}}>
                            <h2 style={{fontSize: 17 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(51, 51, 51)', marginBottom: 0 / proporcional}}>
                                Resumen general usuarios
                            </h2>
                        </div>
                    </div>
                    <div className='' 
                            style={{width: '100%', height: 'auto', padding: 22 / proporcional}}>
                        <div className='d-flex' style={{width: '100%', height: 56 / proporcional}}>
                            <div style={{width: '50%', height: 56 / proporcional, borderRight: '1px solid rgb(236, 236, 236)', paddingLeft: 7.5 / proporcional, paddingRight: 7.5 / proporcional}}>
                                <p style={{fontSize: 11 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(154, 154, 154)', marginBottom: 0 / proporcional}}>
                                    Nuevos pacientes
                                </p>
                                <h2 style={{fontSize: 17 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional}}>
                                    2,025
                                </h2>
                            </div>
                            <div style={{width: '50%', height: 56 / proporcional, paddingLeft: 7.5 / proporcional, paddingRight: 7.5 / proporcional}}>
                                <p style={{fontSize: 11 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(154, 154, 154)', marginBottom: 0 / proporcional}}>
                                    Pacientes regresaron
                                </p>
                                <h5 style={{fontSize: 17 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0 / proporcional}}>
                                    1,254
                                </h5>
                            </div>
                        </div>
                        <div style={{marginTop: 16 / proporcional, marginBottom: 16 / proporcional, height: 'auto', width: '100%'}}>
                            <hr/>
                        </div>
                        <div style={{width: '100%', height: 31 / proporcional, marginBottom: 16 / proporcional}}>
                            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                <div className='d-flex justify-content-start' style={{width: '50%', height: 'auto'}}>
                                    <label style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, marginBottom: 8 / proporcional, color: 'rgb(98, 101, 105)'}}>
                                        Nuevos Pacientes
                                    </label>
                                </div>
                                <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                    <span style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, marginBottom: 8 / proporcional, color: 'rgb(98, 101, 105)'}}>
                                        77%
                                    </span>
                                </div>
                            </div>
                            <div className="progress" style={{height: 1}}>
                                <div className="progress-bar" role="progressbar" 
                                        style={{width: '77%', heigth: 1, background: 'rgb(130, 180, 64)'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 31 / proporcional, marginBottom: 16 / proporcional}}>
                            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                <div className='d-flex justify-content-start' style={{width: '50%', height: 'auto'}}>
                                    <label style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, marginBottom: 8 / proporcional, color: 'rgb(98, 101, 105)'}}>
                                        Pacientes retornaron
                                    </label>
                                </div>
                                <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                    <span style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, marginBottom: 8 / proporcional, color: 'rgb(98, 101, 105)'}}>
                                        50%
                                    </span>
                                </div>
                            </div>
                            <div className="progress" style={{height: 1}}>
                                <div className="progress-bar" role="progressbar" 
                                        style={{width: '50%', heigth: 1, background: 'rgb(255, 115, 33)'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 31 / proporcional, marginBottom: 16 / proporcional}}>
                            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                <div className='d-flex justify-content-start' style={{width: '50%', height: 'auto'}}>
                                    <label style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, marginBottom: 8 / proporcional, color: 'rgb(98, 101, 105)'}}>
                                        Compromiso
                                    </label>
                                </div>
                                <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                    <span style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, marginBottom: 8 / proporcional, color: 'rgb(98, 101, 105)'}}>
                                        23%
                                    </span>
                                </div>
                            </div>
                            <div className="progress" style={{height: 1}}>
                                <div className="progress-bar" role="progressbar" 
                                        style={{width: '23%', heigth: 1, background: 'rgb(60, 137, 218)'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <small style={{color: 'rgb(154, 154, 154)', fontFamily: 'Nunito, sans-serif', fontSize: 12 / proporcional, fontWeight: 400, lineHeight: `${18 / proporcional}px`}}>
                            El número total de impresiones de página dentro del intervalo de fechas <span style={{color: 'rgb(0, 123, 255)', cursor: 'pointer'}}> Ver más</span>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}
