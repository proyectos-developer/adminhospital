import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {valorespacientedata} from '../../redux/slice/valorespacientedata.js'
import {valorespacienteConstants} from '../../uri/valorespaciente-constants.js'

export default function InformacionContacto({proporcional, paciente}) {

    const dispatch = useDispatch()

    const [valores_paciente, setValoresPaciente] = useState({})

    const {get_valores_paciente_search} = useSelector (({valorespaciente_data}) => valorespaciente_data)

    useEffect(() => {
        if (get_valores_paciente_search && get_valores_paciente_search.success === true && get_valores_paciente_search.valores_paciente){
            setValoresPaciente(get_valores_paciente_search.valores_paciente[0])
        }
    }, [get_valores_paciente_search])

    useEffect(() => {
        dispatch(valorespacientedata(valorespacienteConstants(paciente.usuario_paciente, 0, 0, 0, 16, {}, false).get_valores_paciente_search))
    }, [])

    return (
        <div style={{width: '100%', height: 'auto', background: 'white'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 'auto', padding: 22 / proporcional, marginBottom: 16 / proporcional}}>
                    <small style={{fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, color: 'rgb(154, 154, 154)', fontFamily: 'Nunito, sans-serif',
                            marginBottom: 0}}>Dirección</small>
                    <p style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontFamily: 'Nunito, sans-serif', fontWeight: 400, marginBottom: 16 / proporcional,
                        color: 'rgb(90, 101, 105)'}}>
                        {paciente.direccion}
                    </p>
                    <hr style={{marginBottom: 16 / proporcional}}/>
                    <small style={{fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, color: 'rgb(154, 154, 154)', fontFamily: 'Nunito, sans-serif',
                            marginBottom: 0}}>Teléfono</small>
                    <p style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontFamily: 'Nunito, sans-serif', fontWeight: 400, marginBottom: 16 / proporcional,
                        color: 'rgb(90, 101, 105)'}}>
                        {paciente.nro_telefono}
                    </p>
                    <hr style={{marginBottom: 16 / proporcional}}/>
                    <small style={{fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, color: 'rgb(154, 154, 154)', fontFamily: 'Nunito, sans-serif',
                            marginBottom: 0}}>Fecha nacimiento</small>
                    <p style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontFamily: 'Nunito, sans-serif', fontWeight: 400, marginBottom: 16 / proporcional,
                        color: 'rgb(90, 101, 105)'}}>
                        {paciente.fecha_nacimiento}
                    </p>
                    <hr style={{marginBottom: 16 / proporcional}}/>
                    <small style={{fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, color: 'rgb(154, 154, 154)', fontFamily: 'Nunito, sans-serif',
                            marginBottom: 0}}>Teléfono</small>
                    <p style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontFamily: 'Nunito, sans-serif', fontWeight: 400, marginBottom: 16 / proporcional,
                        color: 'rgb(90, 101, 105)'}}>
                        {paciente.nro_telefono}
                    </p>
                </div>
                <div style={{width: '100%', height: 'auto', padding: 22 / proporcional, paddingBottom: 0}}>
                    <h2 style={{fontSize: 17 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: 'rgb(51, 51, 51)', fontFamily: 'Nunito, sans-serif',
                        fontWeight: 400}}>Reporte de sangre</h2>
                </div>
                <div style={{width: '100%', height: 'auto', padding: 22 / proporcional}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 46 / proporcional, background: '#fafafa'}}>
                        <div className='d-flex justify-content-start' style={{width: 'auto', height: 46 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, fontFamily: 'Nunito, sans-serif', padding: 12 / proporcional}}>
                                Down Cluster
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: 'auto', height: 46 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, fontFamily: 'Nunito, sans-serif', padding: 12 / proporcional}}>
                                {valores_paciente.down_cluster}
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 46 / proporcional, background: 'rgba(255, 255, 255, 1)'}}>
                        <div className='d-flex justify-content-start' style={{width: 'auto', height: 46 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, fontFamily: 'Nunito, sans-serif', padding: 12 / proporcional}}>
                                Down Fiber
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: 'auto', height: 46 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, fontFamily: 'Nunito, sans-serif', padding: 12 / proporcional}}>
                                {valores_paciente.down_fiber}
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 46 / proporcional, background: '#fafafa'}}>
                        <div className='d-flex justify-content-start' style={{width: 'auto', height: 46 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, fontFamily: 'Nunito, sans-serif', padding: 12 / proporcional}}>
                                Waterfowl Feathers
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: 'auto', height: 46 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, fontFamily: 'Nunito, sans-serif', padding: 12 / proporcional}}>
                                {valores_paciente.waterfowl_feathers}
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 46 / proporcional, background: 'rgba(255, 255, 255, 1)'}}>
                        <div className='d-flex justify-content-start' style={{width: 'auto', height: 46 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, fontFamily: 'Nunito, sans-serif', padding: 12 / proporcional}}>
                                Quill
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: 'auto', height: 46 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, fontFamily: 'Nunito, sans-serif', padding: 12 / proporcional}}>
                                {valores_paciente.quill}
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 46 / proporcional, background: '#fafafa'}}>
                        <div className='d-flex justify-content-start' style={{width: 'auto', height: 46 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, fontFamily: 'Nunito, sans-serif', padding: 12 / proporcional}}>
                                Landfowl
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: 'auto', height: 46 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, fontFamily: 'Nunito, sans-serif', padding: 12 / proporcional}}>
                                {valores_paciente.landfowl}
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 46 / proporcional, background: 'rgba(255, 255, 255, 1)'}}>
                        <div className='d-flex justify-content-start' style={{width: 'auto', height: 46 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, fontFamily: 'Nunito, sans-serif', padding: 12 / proporcional}}>
                                Total
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: 'auto', height: 46 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, fontFamily: 'Nunito, sans-serif', padding: 12 / proporcional}}>
                                100%
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
