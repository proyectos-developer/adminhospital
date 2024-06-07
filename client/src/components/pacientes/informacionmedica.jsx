import React, { useEffect, useState } from 'react'

import CardLectura from './card/lectura.jsx'
import { useDispatch, useSelector } from 'react-redux'

import {valorespacientedata} from '../../redux/slice/valorespacientedata.js'
import {valorespacienteConstants} from '../../uri/valorespaciente-constants.js'
import {tratamientospacientedata} from '../../redux/slice/tratamientospacientedata.js'
import {tratamientospacienteConstants} from '../../uri/tratamientospacientes-constants.js'
import { useLocation } from 'react-router-dom'

const data_medica = [
    {id: 0, fecha: '11/05/2019', doctor: 'DR.Michelle', tratamiento: 'Chequeo', cargo: '14$'},
    {id: 1, fecha: '13/05/2019', doctor: 'Dr.Porter', tratamiento: 'X-Ray', cargo: '16$'},
    {id: 2, fecha: '13/05/2019', doctor: 'Dr.David', tratamiento: 'Prueba de sangre', cargo: '24$'},
    {id: 3, fecha: '14/05/2019', doctor: 'Dr.David', tratamiento: 'Admitido', cargo: '14$'},
    {id: 4, fecha: '15/05/2019', doctor: 'Dr.Michelle', tratamiento: 'Operación', cargo: '14$'},
    {id: 5, fecha: '18/05/2019', doctor: 'Dr.Michelle', tratamiento: 'Descargo', cargo: '14$'}
]

export default function InformacionMedica({proporcional}) {

    const dispatch = useDispatch()
    const location = useLocation()

    const [valores_paciente, setValoresPaciente] = useState({})
    const [tratamientos_paciente, setTratamientosPaciente] = useState ([])

    const {get_valores_paciente_search} = useSelector (({valorespaciente_data}) => valorespaciente_data)
    const {get_tratamientos_paciente_search} = useSelector(({tratamientospaciente_data}) => tratamientospaciente_data)

    useEffect(() => {
        dispatch(valorespacientedata(valorespacienteConstants(location.pathname.split('/')[3], 0, 0, 0, 16, {}, false).get_valores_paciente_search))
    }, [])

    useEffect(() => {
        if (get_valores_paciente_search && get_valores_paciente_search.success === true && get_valores_paciente_search.valores_paciente){
            setValoresPaciente(get_valores_paciente_search.valores_paciente[0])
            dispatch(tratamientospacientedata(tratamientospacienteConstants(location.pathname.split('/')[3], 0, 0, 0, 16, {}, false).get_tratamientos_paciente_search))
        }
    }, [get_valores_paciente_search])

    useEffect(() => {
        if (get_tratamientos_paciente_search && get_tratamientos_paciente_search.success === true && get_tratamientos_paciente_search.tratamientos){
            setTratamientosPaciente(get_tratamientos_paciente_search.tratamientos)
        }
    }, [get_tratamientos_paciente_search])

    return (
        <div style={{width: '100%', height: 'auto', padding: 20 / proporcional, background: 'white'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <p style={{fontSize: 15 / proporcional, fontWeight: 400 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'rgb(98, 101, 105)', marginBottom: 16 / 
                    proporcional}}>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p style={{fontSize: 15 / proporcional, fontWeight: 400 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'rgb(98, 101, 105)', marginBottom: 16 / 
                    proporcional}}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters readable English.
                </p>
                {
                    valores_paciente && valores_paciente.blood_preasure ? (
                        <div style={{width: '100%', height: 'auto', marginTop: 48 / proporcional, marginBottom: 48 / proporcional}}>
                            <div style={{width: '100%', height: 58 /proporcional}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)',
                                        marginBottom: 0}}>
                                    Presión sanguinea
                                </p>
                                <div className='rounded-pill' style={{width: '100%', height: 16 / proporcional, marginBottom: 20 / proporcional, background: 'rgb(238, 238, 238)'}}>
                                    <div style={{width: `${valores_paciente.blood_preasure}`, height: 16 / proporcional, background: 'rgb(130, 180, 64)', borderTopLeftRadius: 8 / proporcional,
                                                borderBottomLeftRadius: 8 / proporcional}}/>
                                </div>
                            </div>
                            <div style={{width: '100%', height: 58 /proporcional}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)',
                                        marginBottom: 0}}>
                                    Ritmo cardiaco
                                </p>
                                <div className='rounded-pill' style={{width: '100%', height: 16 / proporcional, marginBottom: 20 / proporcional, background: 'rgb(238, 238, 238)'}}>
                                    <div style={{width: `${valores_paciente.heart_beat}`, height: 16 / proporcional, background: 'rgb(60, 137, 218)', borderTopLeftRadius: 8 / proporcional,
                                                borderBottomLeftRadius: 8 / proporcional}}/>
                                </div>
                            </div>
                            <div style={{width: '100%', height: 58 /proporcional}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)',
                                        marginBottom: 0}}>
                                    Hemoglobina
                                </p>
                                <div className='rounded-pill' style={{width: '100%', height: 16 / proporcional, marginBottom: 20 / proporcional, background: 'rgb(238, 238, 238)'}}>
                                    <div style={{width: `${valores_paciente.haemoglobin}`, height: 16 / proporcional, background: 'rgb(255, 115, 33)', borderTopLeftRadius: 8 / proporcional,
                                                borderBottomLeftRadius: 8 / proporcional}}/>
                                </div>
                            </div>
                            <div style={{width: '100%', height: 38 /proporcional}}>
                                <p style={{fontSize: 15 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)',
                                        marginBottom: 0}}>
                                    Azúcar
                                </p>
                                <div className='rounded-pill' style={{width: '100%', height: 16 / proporcional, marginBottom: 0 / proporcional, background: 'rgb(238, 238, 238)'}}>
                                    <div style={{width: `${valores_paciente.sugar}`, height: 16 / proporcional, background: 'rgb(225, 88, 88)', borderTopLeftRadius: 8 / proporcional,
                                                borderBottomLeftRadius: 8 / proporcional}}/>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex' style={{width: '100%', height: 46 / proporcional}}>
                    <div style={{width: '24%', height: 46 / proporcional, padding: 12 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'rgb(98, 101, 105)', fontWeight: 400}}>
                            Día
                        </p>
                    </div>
                    <div style={{width: '24%', height: 46 / proporcional, padding: 12 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'rgb(98, 101, 105)', fontWeight: 400}}>
                            Doctor
                        </p>
                    </div>
                    <div style={{width: '24%', height: 46 / proporcional, padding: 12 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'rgb(98, 101, 105)', fontWeight: 400}}>
                            Tratamiento
                        </p>
                    </div>
                    <div style={{width: '24%', height: 46 / proporcional, padding: 12 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'rgb(98, 101, 105)', fontWeight: 400}}>
                            Cargo
                        </p>
                    </div>
                    <div style={{width: '24%', height: 46 / proporcional, padding: 12 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'rgb(98, 101, 105)', fontWeight: 400}}>
                            Acción
                        </p>
                    </div>
                </div>
                {
                    tratamientos_paciente && tratamientos_paciente.length > 0 ? (
                        tratamientos_paciente.map ((tratamiento, index) => {
                            return (
                                <CardLectura proporcional={proporcional} tratamiento={tratamiento} index={index}/>
                            )
                        })
                    ): null
                }
            </div>
        </div>
    )
}
