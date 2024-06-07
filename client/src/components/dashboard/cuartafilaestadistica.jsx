import React, { useState } from 'react'

import icono_send from '../../assets/iconos/icono_enviar_grey_96.png'
import icono_reporte from '../../assets/iconos/icono_reporte_grey_96.png'

import icono_avatar_masculino from '../../assets/iconos/icono_avatar_masculino_96.png'
import icono_avatar_femenino from '../../assets/iconos/icono_avatar_femenino_96.png'

export default function CuartaFilaEstadistica({proporcional}) {

    const [fecha, setFecha] = useState('14 Marzo 2024')

    const [boton_reporte, setBotonReporte] = useState(false)
    const [boton_exportar, setBotonExportar] = useState(false)

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 71 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional, marginTop: 20 / proporcional, marginBottom: 10 /    proporcional}}>
                <div className='d-flex' style={{width: '100%', height: 41 / proporcional}}>
                    <div style={{width: '50%', height: 41 / proporcional}}>
                        <h3 style={{color: 'rgb(32, 34, 35)', fontFamily: 'Nunito, sans-serif', fontSize: 20 / proporcional, fontWeight: 700, lineHeight: `${24 / proporcional}px`,
                            marginBottom: 0 / proporcional}}>
                            Lista de próximas operaciones
                        </h3>
                        <small style={{color: 'rgb(154, 154, 154)', fontFamily: 'Nunito, sans-serif', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${17 / proporcional}px`}}>
                            Estadísticas, visualización de datos de análisis predictivo, análisis de big data, etc.
                        </small>
                    </div>

                    <div className='d-flex justify-content-end' style={{width: '50%', height: 41 / proporcional}}>
                        <select
                            className='form-select border-0'
                            value={fecha}
                            onChange={(event) => setFecha(event.target.value)}
                            id='fecha'
                            style={{width: 170 / proporcional, background: 'white', color: 'rgb(32, 34, 35)', fontSize: 15 / proporcional, lineHeight: `${15 / proporcional}px`, fontWeight: 400,
                                fontFamily: 'Nunito, sans-serif', height: 35 / proporcional}}>
                            <option value='14/03/2024'>14 Marzo 2024</option>
                        </select>
                        <div className={boton_reporte ? 'd-flex justify-content-center btn shadow' : 'd-flex justify-content-center btn'} style={{width: 150 / proporcional, height: 35 / proporcional, border: '1px solid rgb(236, 236, 236)', background: 'white'}}
                            onMouseOver={() => setBotonReporte (true)} onMouseLeave={() => setBotonReporte(false)}>
                            <img src={icono_send} style={{width: 21 / proporcional, height: 21 / proporcional, padding: 3.5 / proporcional}}/>
                            <span style={{color: 'rgb(85, 85, 85)', fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, fontWeight: 300,
                                fontFamily: 'Nunito, sans-serif'}}>Reporte</span>
                        </div>
                        <div className={boton_exportar ? 'd-flex justify-content-center btn shadow' : 'd-flex justify-content-center btn'} style={{width: 150 / proporcional, height: 35 / proporcional, border: '1px solid rgb(236, 236, 236)', background: 'white'}}
                            onMouseOver={() => setBotonExportar (true)} onMouseLeave={() => setBotonExportar(false)}>
                            <img src={icono_reporte} style={{width: 21 / proporcional, height: 21 / proporcional, padding: 3.5 / proporcional}}/>
                            <span style={{color: 'rgb(85, 85, 85)', fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, fontWeight: 300,
                                fontFamily: 'Nunito, sans-serif'}}>Exportar</span>
                        </div>
                    </div>
                        
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', padding: 22 / proporcional, background: 'white'}}>
                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '10%', height: 45 / proporcional, padding: 12 / proporcional}}>
                        <p style={{color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', fontSize: 14 / proporcional, fontWeight: 700, marginBottom: 0, lineHeight: `${21 / proporcional}px`}}><strong>#</strong></p>
                    </div>
                    <div style={{width: '30%', height: 45 / proporcional, padding: 12 / proporcional}}>
                        <p style={{color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', fontSize: 14 / proporcional, fontWeight: 700, marginBottom: 0, lineHeight: `${21 / proporcional}px`}}><strong>Nombre paciente</strong></p>
                    </div>
                    <div style={{width: '20%', height: 45 / proporcional, padding: 12 / proporcional}}>
                        <p style={{color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', fontSize: 14 / proporcional, fontWeight: 700, marginBottom: 0, lineHeight: `${21 / proporcional}px`}}><strong>Equipo doctores</strong></p>
                    </div>
                    <div style={{width: '20%', height: 45 / proporcional, padding: 12 / proporcional}}>
                        <p style={{color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', fontSize: 14 / proporcional, fontWeight: 700, marginBottom: 0, lineHeight: `${21 / proporcional}px`}}><strong>Día operación</strong></p>
                    </div>
                    <div style={{width: '10%', height: 45 / proporcional, padding: 12 / proporcional}}>
                        <p style={{color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', fontSize: 14 / proporcional, fontWeight: 700, marginBottom: 0, lineHeight: `${21 / proporcional}px`}}><strong>Reporte</strong></p>
                    </div>
                    <div style={{width: '10%', height: 45 / proporcional, padding: 12 / proporcional}}>
                        <p style={{color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', fontSize: 14 / proporcional, fontWeight: 700, marginBottom: 0, lineHeight: `${21 / proporcional}px`}}><strong>Enfermedad</strong></p>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '10%', height: 69 / proporcional, padding: 12 / proporcional}}>
                        <p style={{color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', fontSize: 14 / proporcional, fontWeight: 400, marginBottom: 0, lineHeight: `${45 / proporcional}px`}}>B-865</p>
                    </div>
                    <div style={{width: '30%', height: 69 / proporcional, padding: 12 / proporcional}}>
                        <div className='d-flex' style={{width: '100%', height: 45 / proporcional}}>
                            <img src={icono_avatar_femenino} style={{width: 45 / proporcional, height: 45 / proporcional, marginRight: 16 / proporcional}}/>
                            <div style={{width: '100%', height: 45 / proporcional}}>
                                <h6 style={{color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', fontSize: 16 / proporcional, fontWeight: 600, marginBottom: 0, lineHeight: `${24 / proporcional}px`}}>Michelle Schults</h6>
                                <span style={{color: 'rgb(154, 154, 154)', fontFamily: 'Nunito, sans-serif', fontSize: 14 / proporcional, fontWeight: 400, marginBottom: 0, lineHeight: `${21 / proporcional}px`}}>+51 9837-89393</span>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '20%', height: 69 / proporcional, padding: 12 / proporcional}}>
                        <img src={icono_avatar_femenino} style={{width: 45 / proporcional, height: 45 / proporcional, padding: 7 / proporcional}}/>
                        <img src={icono_avatar_masculino} style={{width: 45 / proporcional, height: 45 / proporcional, padding: 7 / proporcional}}/>
                        <img src={icono_avatar_masculino} style={{width: 45 / proporcional, height: 45 / proporcional, padding: 7 / proporcional}}/>
                    </div>
                    <div style={{width: '20%', height: 69 / proporcional, padding: 12 / proporcional}}>
                        <p style={{color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', fontSize: 14 / proporcional, fontWeight: 400, marginBottom: 0, lineHeight: `${45 / proporcional}px`}}>15-08-2020</p>
                    </div>
                    <div style={{width: '10%', height: 69 / proporcional, padding: 12 / proporcional}}>
                        <img src={icono_reporte} style={{width: 45 / proporcional, height: 45 / proporcional, padding: 5 / proporcional}}/>
                    </div>
                    <div style={{width: '10%', height: 69 / proporcional, padding: 12 / proporcional}}>
                        <p style={{color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', fontSize: 14 / proporcional, fontWeight: 400, marginBottom: 0, lineHeight: `${45 / proporcional}px`}}>Fractura</p>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '10%', height: 69 / proporcional, padding: 12 / proporcional}}>
                        <p style={{color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', fontSize: 14 / proporcional, fontWeight: 400, marginBottom: 0, lineHeight: `${45 / proporcional}px`}}>B-231</p>
                    </div>
                    <div style={{width: '30%', height: 69 / proporcional, padding: 12 / proporcional}}>
                        <div className='d-flex' style={{width: '100%', height: 45 / proporcional}}>
                            <img src={icono_avatar_femenino} style={{width: 45 / proporcional, height: 45 / proporcional, marginRight: 16 / proporcional}}/>
                            <div style={{width: '100%', height: 45 / proporcional}}>
                                <h6 style={{color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', fontSize: 16 / proporcional, fontWeight: 600, marginBottom: 0, lineHeight: `${24 / proporcional}px`}}>Deborah Cox</h6>
                                <span style={{color: 'rgb(154, 154, 154)', fontFamily: 'Nunito, sans-serif', fontSize: 14 / proporcional, fontWeight: 400, marginBottom: 0, lineHeight: `${21 / proporcional}px`}}>+51 937887333</span>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '20%', height: 69 / proporcional, padding: 12 / proporcional}}>
                        <img src={icono_avatar_femenino} style={{width: 45 / proporcional, height: 45 / proporcional, padding: 7 / proporcional}}/>
                        <img src={icono_avatar_masculino} style={{width: 45 / proporcional, height: 45 / proporcional, padding: 7 / proporcional}}/>
                        <img src={icono_avatar_masculino} style={{width: 45 / proporcional, height: 45 / proporcional, padding: 7 / proporcional}}/>
                    </div>
                    <div style={{width: '20%', height: 69 / proporcional, padding: 12 / proporcional}}>
                        <p style={{color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', fontSize: 14 / proporcional, fontWeight: 400, marginBottom: 0, lineHeight: `${45 / proporcional}px`}}>15-08-2020</p>
                    </div>
                    <div style={{width: '10%', height: 69 / proporcional, padding: 12 / proporcional}}>
                        <img src={icono_reporte} style={{width: 45 / proporcional, height: 45 / proporcional, padding: 5 / proporcional}}/>
                    </div>
                    <div style={{width: '10%', height: 69 / proporcional, padding: 12 / proporcional}}>
                        <p style={{color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', fontSize: 14 / proporcional, fontWeight: 400, marginBottom: 0, lineHeight: `${45 / proporcional}px`}}>Cirugía de cataratas</p>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '10%', height: 69 / proporcional, padding: 12 / proporcional}}>
                        <p style={{color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', fontSize: 14 / proporcional, fontWeight: 400, marginBottom: 0, lineHeight: `${45 / proporcional}px`}}>B-781</p>
                    </div>
                    <div style={{width: '30%', height: 69 / proporcional, padding: 12 / proporcional}}>
                        <div className='d-flex' style={{width: '100%', height: 45 / proporcional}}>
                            <img src={icono_avatar_femenino} style={{width: 45 / proporcional, height: 45 / proporcional, marginRight: 16 / proporcional}}/>
                            <div style={{width: '100%', height: 45 / proporcional}}>
                                <h6 style={{color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', fontSize: 16 / proporcional, fontWeight: 600, marginBottom: 0, lineHeight: `${24 / proporcional}px`}}>Deborah Cox</h6>
                                <span style={{color: 'rgb(154, 154, 154)', fontFamily: 'Nunito, sans-serif', fontSize: 14 / proporcional, fontWeight: 400, marginBottom: 0, lineHeight: `${21 / proporcional}px`}}>+51 983778777</span>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '20%', height: 69 / proporcional, padding: 12 / proporcional}}>
                        <img src={icono_avatar_femenino} style={{width: 45 / proporcional, height: 45 / proporcional, padding: 7 / proporcional}}/>
                        <img src={icono_avatar_masculino} style={{width: 45 / proporcional, height: 45 / proporcional, padding: 7 / proporcional}}/>
                        <img src={icono_avatar_masculino} style={{width: 45 / proporcional, height: 45 / proporcional, padding: 7 / proporcional}}/>
                    </div>
                    <div style={{width: '20%', height: 69 / proporcional, padding: 12 / proporcional}}>
                        <p style={{color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', fontSize: 14 / proporcional, fontWeight: 400, marginBottom: 0, lineHeight: `${45 / proporcional}px`}}>15-08-2020</p>
                    </div>
                    <div style={{width: '10%', height: 69 / proporcional, padding: 12 / proporcional}}>
                        <img src={icono_reporte} style={{width: 45 / proporcional, height: 45 / proporcional, padding: 5 / proporcional}}/>
                    </div>
                    <div style={{width: '10%', height: 69 / proporcional, padding: 12 / proporcional}}>
                        <p style={{color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', fontSize: 14 / proporcional, fontWeight: 400, marginBottom: 0, lineHeight: `${45 / proporcional}px`}}>Histerectomía</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
