import React from 'react'

import icono_down from '../../assets/iconos/icono_down_white_96.png'

export default function PanelPrincipal({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', marginBottom: 15 / proporcional}}>
            <div style={{width: '100%', height: 'auto', padding: 22 / proporcional, background: 'rgb(130, 180, 64)'}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '25%', height: 'auto'}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'white', marginBottom: 16 / proporcional}}>
                            Total de doctores
                        </p>
                        <p style={{fontSize: 40 / proporcional, lineHeight: `${48 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', color: 'white', marginBottom: 8 / proporcional}}>
                            10
                        </p>
                        <div className='d-flex' style={{width: 'auto', height: 22 / proporcional}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto', marginRight: 16 / proporcional}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'white', marginBottom: 0 / proporcional}}>
                                    1.78%
                                </p>
                                <img src={icono_down} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 3.5 / proporcional, cursor: 'pointer'}}/>
                            </div>
                            <span style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'white', marginBottom: 0 / proporcional}}>
                                Último año
                            </span>
                        </div>
                    </div>

                    <div style={{width: '25%', height: 'auto'}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'white', marginBottom: 16 / proporcional}}>
                            Total de farmacias
                        </p>
                        <p style={{fontSize: 40 / proporcional, lineHeight: `${48 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', color: 'white', marginBottom: 8 / proporcional}}>
                            20
                        </p>
                        <div className='d-flex' style={{width: 'auto', height: 22 / proporcional}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto', marginRight: 16 / proporcional}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'white', marginBottom: 0 / proporcional}}>
                                    6.78%
                                </p>
                                <img src={icono_down} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 3.5 / proporcional, cursor: 'pointer'}}/>
                            </div>
                            <span style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'white', marginBottom: 0 / proporcional}}>
                                Último año
                            </span>
                        </div>
                    </div>
                    <div style={{width: '25%', height: 'auto'}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'white', marginBottom: 16 / proporcional}}>
                            Total de enfermeras
                        </p>
                        <p style={{fontSize: 40 / proporcional, lineHeight: `${48 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', color: 'white', marginBottom: 8 / proporcional}}>
                            20
                        </p>
                        <div className='d-flex' style={{width: 'auto', height: 22 / proporcional}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto', marginRight: 16 / proporcional}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'white', marginBottom: 0 / proporcional}}>
                                    13.78%
                                </p>
                                <img src={icono_down} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 3.5 / proporcional, cursor: 'pointer'}}/>
                            </div>
                            <span style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'white', marginBottom: 0 / proporcional}}>
                                Último año
                            </span>
                        </div>
                    </div>
                    <div style={{width: '25%', height: 'auto'}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'white', marginBottom: 16 / proporcional}}>
                            Total de pacientes
                        </p>
                        <p style={{fontSize: 40 / proporcional, lineHeight: `${48 / proporcional}px`, fontWeight: 500, fontFamily: 'Nunito, sans-serif', color: 'white', marginBottom: 8 / proporcional}}>
                            50
                        </p>
                        <div className='d-flex' style={{width: 'auto', height: 22 / proporcional}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto', marginRight: 16 / proporcional}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'white', marginBottom: 0 / proporcional}}>
                                    5.78%
                                </p>
                                <img src={icono_down} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 3.5 / proporcional, cursor: 'pointer'}}/>
                            </div>
                            <span style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'white', marginBottom: 0 / proporcional}}>
                                Último año
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
