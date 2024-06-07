import React, { useState } from 'react'

import icono_star from '../../../assets/iconos/icono_star_full_grey_96.png'
import icono_star_empty from '../../../assets/iconos/icono_star_empty_grey_96.png'

export default function CardEspecialidad({proporcional, especialidad}) {

    const [boton_reporte, setBotonReporte] = useState (false)

    return (
        <div className='rounded shadow-sm' style={{width: '100%', height: 'auto', background: 'white'}}>
            <div style={{width: '100%', height: 250 / proporcional, background: 'rgba(189, 189, 189, 0.6)'}}/>
            <div style={{width: '100%', height: 'auto', padding: 22 / proporcional, background: 'white'}}>
                <h6 style={{marginTop: 16 / proporcional, marginBottom: 8 / proporcional, color: 'rgba(98, 101, 105)', fontFamily: 'Nunito, sans-serif', fontSize: 16 / proporcional,
                        fontWeight: 600, lineHeight: `${19 / proporcional}px`}}>
                    {especialidad.nombre_especialidad.toUpperCase()}
                </h6>
                <div style={{width: '100%', height: 44 / proporcional, marginBottom: 16 / proporcional}}>
                    <p style={{color: 'rgb(154, 154, 154)', fontSize: 15 / proporcional, fontWeight: 500, fontFamily: 'Nunito, sans-serif', marginBottom: 0 / proporcional, 
                            lineHeight: `${22 / proporcional}px`}}>
                        {especialidad.descripcion}
                    </p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 22 / proporcional, marginBottom: 16 / proporcional}}>
                    <h6 style={{color: 'rgb(154, 154, 154)', fontSize: 16 / proporcional, fontWeight: 600, fontFamily: 'Nunito, sans-serif', marginBottom: 0 / proporcional, 
                            lineHeight: `${22 / proporcional}px`, marginRight: 5 / proporcional, paddingTop: 3 / proporcional}}>
                        4.3
                    </h6>
                    <img src={icono_star} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 3 / proporcional}}/>
                    <img src={icono_star} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 3 / proporcional}}/>
                    <img src={icono_star} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 3 / proporcional}}/>
                    <img src={icono_star} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 3 / proporcional}}/>
                    <img src={icono_star_empty} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 3 / proporcional}}/>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 32 / proporcional}}>
                    <button className={boton_reporte ? 'btn rounded shadow' : 'btn rounded'} style={{width: 150 / proporcional, height: 32 / proporcional, background: 'white',
                            border: '1px solid rgb(236, 236, 236)', fontSize: 14 / proporcional, fontWeight: 300, color: 'rgb(85, 85, 85)', lineHeight: `${14 / proporcional}px`}}
                            onMouseOver={() => setBotonReporte(true)} onMouseLeave={() => setBotonReporte(false)}>
                        Ver reporte
                    </button>
                </div>
            </div>
        </div>
    )
}
