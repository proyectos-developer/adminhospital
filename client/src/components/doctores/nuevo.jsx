import React, { useState } from 'react'

import icono_asterisco from '../../assets/iconos/icono_asterisco_red_96.png'

export default function NuevoDoctor({proporcional}) {

    const {nombres, setNombres} = useState('')

    return (
        <div style={{padding: 20 / proporcional, width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 80 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional, marginTop: 15 / proporcional,
                marginBottom: 15 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 50 / proporcional}}>
                    <div style={{widt: '50%', height: 50 / proporcional}}>
                        <h1 style={{color: 'rgb(32, 34, 35', fontFamily: 'Nunito, sans-serif', fontSize: 22 / proporcional, fontWeight: 500, lineHeight: `${28 / proporcional}px`,
                            marginBottom: 0}}>
                            Hola, bienvenido de nuevo!
                        </h1>
                        <span style={{color: 'rgb(98, 101, 105', fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`}}>
                            Solo agrega doctores
                        </span>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: '50%', height: 50 / proporcional}}>
                        <button className='btn shadow' style={{width: 100 / proporcional, height: 35 / proporcional, background: 'rgb(32, 34, 35)', color: 'rgb(238, 238, 238)',
                                fontSize: 14 / proporcional, fontWeight: 300}}>
                            Guardar
                        </button>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', background: 'white'}}>
                <div style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '48%', height: 91 / proporcional}}>
                            <div style={{width: '100%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, border: '1px solid rgb(236, 236, 236)'}}>
                                <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                    <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                        marginRight: 5 / proporcional}}>
                                        Nombres
                                    </label>
                                    <img src={icono_asterisco} style={{width: 8 / proporcional, height: 8 / proporcional}}/>
                                </div>
                                <input  
                                    type='default'
                                    className='form-control border-0'
                                    style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                            padding: 0}}
                                    value={nombres}
                                    onChange={(event) => setNombres(event.target.value)}
                                    placeholder=''
                                    id='nombres'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
