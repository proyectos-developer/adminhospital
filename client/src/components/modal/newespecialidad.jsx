import React, { useEffect, useState } from 'react'

import icono_drop_file from '../../assets/iconos/icono_upload_cloud_grey_96.png'

import { useDispatch, useSelector } from 'react-redux'
import { set_open_modal_new_especialidad } from '../../redux/actions/data'
import {doctoresdata} from '../../redux/slice/doctoresdata'
import { doctoresConstants } from '../../uri/doctores-constants'

export default function ModalNewEspecialidad({proporcional}) {

    const dispatch = useDispatch()

    const [nombre_especialidad, setNombreEspecialidad] = useState('')
    const [descripcion, setDescripcion] = useState('') 
    const [usuario_doctor, setUsuarioDoctor] = useState ('')

    const [lista_doctores, setListaDoctores] = useState([]) 
    
    const [boton_cerrar, setBotonCerrar] = useState(false)
    const [boton_agregar, setBotonAgregar] = useState(false)

    const {get_doctores_filtros} = useSelector(({doctores_data}) => doctores_data)

    useEffect(() => {
        dispatch (doctoresdata(doctoresConstants(0, 0, 0, 0, 0, 16, {}, false).get_doctores_filtros))
    }, [])

    useEffect(() => {
        if (get_doctores_filtros && get_doctores_filtros.success === true && get_doctores_filtros.doctores){
            setListaDoctores(get_doctores_filtros.doctores)
        }
    }, [get_doctores_filtros])

    const agregar_especialidad = () => {
        
    }

    return (
        <div className='position-fixed top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(91, 101, 105, 0.6)', zIndex: 9999}}>
            <div className='position-absolute shadow rounded' style={{width: '25%', height: 'auto', top: 56 / proporcional, left: '37.5%',
                    background: 'white', zIndex: 99999}}>
                <div style={{width: '100%', height: 'auto', padding: 16 / proporcional, borderBottom: '1px solid rgb(236, 236, 236)'}}>
                    <h5 style={{fontSize: 16 / proporcional, fontWeight: 500, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0,
                            lineHeight: `${24 / proporcional}px`}}>
                        Agregar especialidad
                    </h5>
                </div>
                <div style={{width: '100%', height: 'auto', padding: 16 / proporcional, borderBottom: '1px solid rgb(236, 236, 236)'}}>
                    <div style={{width: '100%', height: 'auto', border: '1px solid rgb(236, 236, 236)', padding: 10 / proporcional, marginBottom: 16 / proporcional}}>
                        <label style={{fontSize: 13 / proporcional, fontWeight: 400, color: 'rgb(119, 119, 119)', marginBottom: 8 / proporcional, fontFamily: 'Nunito, sans-serif', 
                            lineHeight: `${19 / proporcional}px`}}>
                            Título tarea
                        </label>
                        <input 
                            type='default'
                            className='form-control border-0'
                            value={nombre_especialidad}
                            id='nombre_especialidad'
                            onChange={(event) => setNombreEspecialidad(event.target.value)}
                            placeholder='Título tarea'
                            style={{width: '100%', height: 22 / proporcional, color: 'rgb(73, 80, 73)', fontSize: 15 / proporcional, fontWeight: 500, fontFamily: 'Nunito, sans-serif',
                                    lineHeight: `${22 / proporcional}px`}}/>
                    </div>
                    <div style={{width: '100%', height: 'auto', border: '1px solid rgb(236, 236, 236)', padding: 10 / proporcional, marginBottom: 16 / proporcional}}>
                        <label style={{fontSize: 13 / proporcional, fontWeight: 400, color: 'rgb(119, 119, 119)', marginBottom: 8 / proporcional, fontFamily: 'Nunito, sans-serif', 
                            lineHeight: `${19 / proporcional}px`}}>
                            Doctor a cargo
                        </label>
                        <select
                            className='form-select border-0'
                            value={usuario_doctor}
                            id='usuario_doctor'
                            onChange={(event) => event.target.value !== '0' ? setUsuarioDoctor(event.target.value) : null}
                            style={{width: '100%', height: 22 / proporcional, color: 'rgb(73, 80, 73)', fontSize: 15 / proporcional, fontWeight: 500, fontFamily: 'Nunito, sans-serif',
                                    lineHeight: `${22 / proporcional}px`}}>
                            <option value='0'>Seleccionar</option>
                            {
                                lista_doctores && lista_doctores.length > 0 ? (
                                    lista_doctores.map ((doctor, index) => {
                                        return (
                                            <option value={doctor.usuario}>{doctor.nombres + ' ' + doctor.apellidos} ({doctor.especialidad})</option>
                                        )
                                    })
                                ) : null
                            }
                        </select>
                    </div>
                    <div className='' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
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
                    <div style={{width: '100%', height: 'auto', border: '1px solid rgb(236, 236, 236)', padding: 10 / proporcional, marginBottom: 16 / proporcional}}>
                        <label style={{fontSize: 13 / proporcional, fontWeight: 400, color: 'rgb(119, 119, 119)', marginBottom: 8 / proporcional, fontFamily: 'Nunito, sans-serif', 
                            lineHeight: `${19 / proporcional}px`}}>
                            Descripción
                        </label>
                        <textarea 
                            rows={4}
                            className='form-control border-0'
                            value={descripcion}
                            id='descripcion'
                            onChange={(event) => setDescripcion(event.target.value)}
                            placeholder='Descripción especialidad'
                            style={{width: '100%', height: 90 / proporcional, color: 'rgb(73, 80, 73)', fontSize: 15 / proporcional, fontWeight: 500, fontFamily: 'Nunito, sans-serif',
                                    lineHeight: `${22 / proporcional}px`}}/>
                    </div>
                </div>
                <div className='d-flex justify-content-end' style={{width: '100%', height: 'auto', padding: 12 / proporcional}}>
                    <button className={boton_cerrar ? 'btn shadow rounded' : 'btn rounded'} style={{width: 100 / proporcional, height: 35 / proporcional, background: 'white', border: '1px solid rgb(236, 236, 236)',
                            fontSize: 15 / proporcional, fontFamily: 'Nunito, sans-serif', fontWeight: 300,  color: 'rgb(85, 85, 85)', marginRight: 10 / proporcional,
                            lineHeight: `${15 / proporcional}px`}} onClick={() => dispatch(set_open_modal_new_especialidad(false))}
                            onMouseOver={() => setBotonCerrar(true)} onMouseLeave={() => setBotonCerrar(false)}>
                            Cerrar
                    </button>
                    <button className={boton_agregar ? 'btn shadow rounded' : 'btn rounded'} style={{width: 100 / proporcional, height: 35 / proporcional, background: 'rgb(130, 180, 64)', 
                            fontSize: 15 / proporcional, fontFamily: 'Nunito, sans-serif', fontWeight: 300,  color: 'white',
                            lineHeight: `${15 / proporcional}px`}} onClick={() => agregar_especialidad()}
                            onMouseOver={() => setBotonAgregar(true)} onMouseLeave={() => setBotonAgregar(false)}>
                            Agregar
                    </button>
                </div>
            </div> 
        </div>
    )
}
