import React, { useState } from 'react'

import icono_send from '../../assets/iconos/icono_enviar_grey_96.png'
import icono_reporte from '../../assets/iconos/icono_reporte_grey_96.png'

export default function RevisionResumen({proporcional}) {

    const [fecha, setFecha] = useState('14 Marzo 2024')

    const [boton_reporte, setBotonReporte] = useState(false)
    const [boton_exportar, setBotonExportar] = useState(false)

    return (
        <div style={{width: '100%', height: 70 / proporcional, marginTop: 20 / proporcional, marginBottom: 20 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional}}>
            <div className='d-flex' style={{width: '100%', height: 50 / proporcional}}>
                <div style={{width: '50%', height: 50 / proporcional}}>
                    <h3 style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 700, fontFamily: 'Nunito, sans-serif', color: 'rgb(32, 32, 32)', marginBottom: 0 / proporcional}}>
                        Resumen
                    </h3>
                    <small style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(154, 154, 154)', marginBottom: 0 / proporcional}}>
                        Estadísticas, Prediciones analíticas, visualización data, big data analytics, etc
                    </small>
                </div>

                <div className='d-flex justify-content-end' style={{width: '50%', height: 50 / proporcional}}>
                    <select
                        className='form-select border-0'
                        value={fecha}
                        onChange={(event) => setFecha(event.target.value)}
                        id='fecha'
                        style={{width: 170 / proporcional, background: 'white', color: 'rgb(32, 34, 35)', fontSize: 15 / proporcional, lineHeight: `${15 / proporcional}px`, fontWeight: 400,
                            fontFamily: 'Nunito, sans-serif', height: 35 / proporcional}}>
                        <option value='14/03/2024'>14 Marzo 2024</option>
                    </select>
                    <div className={boton_reporte ? 'd-flex justify-content-center btn shadow' : 'd-flex justify-content-center btn'} style={{width: 150 / proporcional, height: 35 / proporcional, border: '1px solid rgb(236, 236, 236)'}}
                        onMouseOver={() => setBotonReporte (true)} onMouseLeave={() => setBotonReporte(false)}>
                        <img src={icono_send} style={{width: 21 / proporcional, height: 21 / proporcional, padding: 3.5 / proporcional}}/>
                        <span style={{color: 'rgb(85, 85, 85)', fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, fontWeight: 300,
                            fontFamily: 'Nunito, sans-serif'}}>Reporte</span>
                    </div>
                    <div className={boton_exportar ? 'd-flex justify-content-center btn shadow' : 'd-flex justify-content-center btn'} style={{width: 150 / proporcional, height: 35 / proporcional, border: '1px solid rgb(236, 236, 236)'}}
                        onMouseOver={() => setBotonExportar (true)} onMouseLeave={() => setBotonExportar(false)}>
                        <img src={icono_reporte} style={{width: 21 / proporcional, height: 21 / proporcional, padding: 3.5 / proporcional}}/>
                        <span style={{color: 'rgb(85, 85, 85)', fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`, fontWeight: 300,
                            fontFamily: 'Nunito, sans-serif'}}>Exportar</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
