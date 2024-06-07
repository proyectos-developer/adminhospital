import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import icono_drop_file from '../../assets/iconos/icono_upload_cloud_grey_96.png'

import {tipohabitaciondata} from '../../redux/slice/tipohabitaciondata'
import { tipohabitacionConstants } from '../../uri/tipohabitacion-constants'
import {habitacionesdata} from '../../redux/slice/habitacionesdata.js'
import {habitacionesConstants} from '../../uri/habitaciones-constants.js'
import { useNavigate } from 'react-router-dom'

export default function AsignarCuarto({proporcional}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [numero, setNumero] = useState('')
    const [nombre_paciente, setNombrePaciente] = useState('')
    const [tipo_habitacion, setTipoHabitacion] = useState('')
    const [fecha_inicio, setFechaInicio] = useState('')
    const [fecha_alta, setFechaAlta] = useState('')

    const [enumero, setENumero] = useState('')
    const [enombre_paciente, setENombrePaciente] = useState('')
    const [etipo_habitacion, setETipoHabitacion] = useState('')
    const [efecha_inicio, setEFechaInicio] = useState('')

    const [usuario_paciente, setUsuarioPaciente] = useState('')

    const [boton_guardar, setBotonGuardar] = useState (false)
    const [boton_cancelar, setBotonCancelar] = useState (false)

    const [lista_tipo_habitaciones, setListaTipoHabitaciones] = useState([])

    const {get_tipo_habitaciones_search} = useSelector(({tipohabitacion_data}) => tipohabitacion_data)
    const {new_habitacion_paciente} = useSelector(({habitaciones_data}) => habitaciones_data)

    useEffect(() => {
        if (new_habitacion_paciente && new_habitacion_paciente.success === true && new_habitacion_paciente.habitacon){

        }
    }, [new_habitacion_paciente])

    useEffect(() => {
        if (get_tipo_habitaciones_search && get_tipo_habitaciones_search.success === true && get_tipo_habitaciones_search.tipo_habitaciones){
            setListaTipoHabitaciones (get_tipo_habitaciones_search.tipo_habitaciones)
        }
    }, [get_tipo_habitaciones_search])

    useEffect(() => {
        dispatch (tipohabitaciondata(tipohabitacionConstants(0, 0, 0, 0, 0, 16, {}, false).get_tipo_habitaciones_search))
    }, [])

    const guardar_paciente_habitacion = () => {
        if (numero === '' || nombre_paciente === '' || tipo_habitacion === '' || fecha_inicio === ''){
            setENumero(numero === '' ? true : false)
            setENombrePaciente(nombre_paciente === '' ? true : false)
            setETipoHabitacion(tipo_habitacion === '' ? true : false)
            setEFechaInicio(fecha_inicio === '' ? true : false)
        }else{
            const data_habitacion = {
                numero: numero,
                usuario_paciente: usuario_paciente,
                tipo_habitacion: tipo_habitacion,
                fecha_inicio: fecha_inicio,
                fecha_alta: fecha_alta,
                foto_paciente: fecha_paciente
            }
            dispatch(habitacionesdata(habitacionesConstants(0, 0, 0, 0, 0, 16, data_habitacion, false).new_habitacion_paciente))
        }
    }

    return (
        <div style={{width: '100%', height: 'auto', padding: 22 / proporcional, background: 'white'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex' style={{width: '100%', height: 36 / proporcional, marginBottom: 16 / proporcional}}>
                    <label style={{fontSize: 15 / proporcional, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0, width: '16.5%',
                            lineHeight: `${36 / proporcional}px`}}>
                        Número habitación
                    </label>
                    <input 
                        type='default'
                        id='numero'
                        className='form-control rounded'
                        value={numero}
                        onChange={(event) => setNumero(event.target.value)}
                        placeholder='Ingrese número habitación'
                        style={{width: '50%', height: 36 / proporcional, border: enumero ? '1px solid red' : '1px solid rgb(236, 236, 236)', color: 'rgb(73, 80, 83)', fontFamily: 'Nunito, sans-serif',
                                fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${36 / proporcional}px`}}/>
                </div>
                <div className='d-flex' style={{width: '100%', height: 36 / proporcional, marginBottom: 16 / proporcional}}>
                    <label style={{fontSize: 15 / proporcional, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0, width: '16.5%',
                            lineHeight: `${36 / proporcional}px`}}>
                        Nombre paciente
                    </label>
                    <input 
                        type='default'
                        id='nombre_paciente'
                        className='form-control rounded'
                        value={nombre_paciente}
                        onChange={(event) => setNombrePaciente(event.target.value)}
                        placeholder='Ingrese nombre paciente'
                        style={{width: '50%', height: 36 / proporcional, border: enombre_paciente ? '1px solid red' : '1px solid rgb(236, 236, 236)', color: 'rgb(73, 80, 83)', fontFamily: 'Nunito, sans-serif',
                                fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${36 / proporcional}px`}}/>
                </div>
                <div className='d-flex' style={{width: '100%', height: 36 / proporcional, marginBottom: 16 / proporcional}}>
                    <label style={{fontSize: 15 / proporcional, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0, width: '16.5%',
                            lineHeight: `${36 / proporcional}px`}}>
                        Tipo habitación
                    </label>
                    <select 
                        id='tipo_habitacion'
                        className='form-select rounded'
                        value={tipo_habitacion}
                        onChange={(event) => event.target.value !== '0' ? setTipoHabitacion(event.target.value) : null}
                        placeholder='Ingrese nombre paciente'
                        style={{width: '50%', height: 36 / proporcional, border: etipo_habitacion ? '1px solid red' : '1px solid rgb(236, 236, 236)', color: 'rgb(73, 80, 83)', fontFamily: 'Nunito, sans-serif',
                                fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${15 / proporcional}px`}}>
                        <option value='0'>Seleccionar</option>
                        {
                            lista_tipo_habitaciones && lista_tipo_habitaciones.length > 0 ? (
                                lista_tipo_habitaciones.map ((tipo_habitacion, index) => {
                                    return (
                                        <option value={tipo_habitacion.id}>{tipo_habitacion.nombre} ({tipo_habitacion.disponibles})</option>
                                    )
                                })
                            ) : null
                        }
                    </select>
                </div>
                <div className='d-flex' style={{width: '100%', height: 36 / proporcional, marginBottom: 16 / proporcional}}>
                    <label style={{fontSize: 15 / proporcional, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0, width: '16.5%',
                            lineHeight: `${36 / proporcional}px`}}>
                        Fecha de asignación
                    </label>
                    <input 
                        type='date'
                        id='fecha_inicio'
                        className='form-control rounded'
                        value={fecha_inicio}
                        onChange={(event) => setFechaInicio(event.target.value)}
                        placeholder=''
                        style={{width: '50%', height: 36 / proporcional, border: efecha_inicio ? '1px solid red' : '1px solid rgb(236, 236, 236)', color: 'rgb(73, 80, 83)', fontFamily: 'Nunito, sans-serif',
                                fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${15 / proporcional}px`}}/>
                </div>
                <div className='d-flex' style={{width: '100%', height: 36 / proporcional, marginBottom: 16 / proporcional}}>
                    <label style={{fontSize: 15 / proporcional, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0, width: '16.5%',
                            lineHeight: `${36 / proporcional}px`}}>
                        Fecha de alta
                    </label>
                    <input 
                        type='date'
                        id='fecha_alta'
                        className='form-control rounded'
                        value={fecha_alta}
                        onChange={(event) => setFechaAlta(event.target.value)}
                        placeholder=''
                        style={{width: '50%', height: 36 / proporcional, border: '1px solid rgb(236, 236, 236)', color: 'rgb(73, 80, 83)', fontFamily: 'Nunito, sans-serif',
                                fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${15 / proporcional}px`}}/>
                </div>
                <div className='d-flex' style={{width: '100%', height: 200 / proporcional, marginBottom: 16 / proporcional}}>
                    <label style={{fontSize: 15 / proporcional, fontWeight: 400, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0, width: '16.5%',
                            lineHeight: `${36 / proporcional}px`}}>
                        Foto paciente
                    </label>
                    <div className='' style={{width: '50%', height: 'auto', marginBottom: 16 / proporcional}}>
                        <div className='position-relative' style={{width: '100%', height: 200 / proporcional, 
                                    border: '1px solid rgb(236, 236, 236)', background: '#fafafa',
                                cursor: 'pointer'}}>
                            <div className='position-absolute top-50 start-50 translate-middle' style={{width: '100%', height: 'auto'}}>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional}}>
                                    <img src={icono_drop_file} style={{width: 50 / proporcional, height: 50 / proporcional}}/>
                                </div>
                                <p style={{color: 'rgb(204, 204, 204)', cursor: 'pointer', fontSize: 20 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, 
                                    fontFamily: 'Helvetica Arial', textAlign: 'center'}}>
                                    Arrastrar y soltar archivo o hacer click
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 200 / proporcional, marginBottom: 16 / proporcional}}>
                    <div style={{width: '16%'}}/>
                    <div className='d-flex' style={{width: '50%', height: 35 / proporcional}}>
                        <button className={boton_guardar ? 'btn rounded shadow' : 'btn rounded'} style={{width: 100 / proporcional, height: 35 / proporcional, background: 'rgb(130, 180, 64)', fontSize: 14 / proporcional, color: 'white',
                                lineHeight: `${14 / proporcional}px`, fontWeight: 300, marginRight: 10 / proporcional}}
                                onMouseOver={() => setBotonGuardar(true)} onMouseLeave={() => setBotonGuardar(false)}
                                onClick={() => guardar_paciente_habitacion()}>
                            Guardar
                        </button>
                        <button className={boton_cancelar ? 'btn rounded shadow' : 'btn rounded'} style={{width: 100 / proporcional, height: 35 / proporcional, background: 'white', fontSize: 14 / proporcional, color: 'rgb(85, 85, 85)',
                                lineHeight: `${14 / proporcional}px`, fontWeight: 300, border: '1px solid rgb(236, 236, 236)'}}
                                onMouseOver={() => setBotonCancelar(true)} onMouseLeave={() => setBotonCancelar(false)}
                                onClick={() => navigate ('cuartos-asignados')}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
