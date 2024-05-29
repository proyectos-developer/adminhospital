import React, { useEffect, useState } from 'react'

import {useDispatch, useSelector} from 'react-redux'

import icono_asterisco from '../../assets/iconos/icono_asterisco_red_96.png'
import icono_drop_file from '../../assets/iconos/icono_upload_cloud_grey_96.png'

import {doctoresdata} from '../../redux/slice/doctoresdata.js'
import {doctoresConstants} from '../../uri/doctores-constants.js'
import { useNavigate } from 'react-router-dom'

export default function DataDoctor({proporcional}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [fecha_nacimiento, setFechaNacimiento] = useState('')
    const [genero, setGenero] = useState('')
    const [especialidad, setEspecialidad] = useState('')
    const [nro_telefono, setNroTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [pagina_web, setPaginaWeb] = useState('')
    const [descripcion, setDescripcion] = useState ('')

    const [enombres, setENombres] = useState('')
    const [eapellidos, setEApellidos] = useState('')
    const [efecha_nacimiento, setEFechaNacimiento] = useState('')
    const [egenero, setEGenero] = useState('')
    const [eespecialidad, setEEspecialidad] = useState('')
    const [enro_telefono, setENroTelefono] = useState('')
    const [ecorreo, setECorreo] = useState('')
    const [epagina_web, setEPaginaWeb] = useState('')
    const [edescripcion, setEDescripcion] = useState ('')

    const [boton_guardar, setBotonGuardar] = useState(false)
    const [boton_cancelar, setBotonCancelar] = useState (false)

    const {new_doctor} = useSelector(({doctores_data}) => doctores_data)

    useEffect(() => {
        if (new_doctor && new_doctor.success === true && new_doctor.doctor){

        }
    }, [new_doctor])

    const guardar_datos = () => {
        if (nombres === '' || apellidos === '' || fecha_nacimiento === '' || genero === '' || especialidad === '' || nro_telefono === '' || correo === '' || 
            pagina_web === '' || descripcion === ''){
            setENombres(nombres === '' ? true : false)
            setEApellidos(apellidos === '' ? true : false)
            setEFechaNacimiento (fecha_nacimiento === '' ? true : false)
            setEGenero (genero === '' ? true : false)
            setEEspecialidad (especialidad === '' ? true : false)
            setENroTelefono (nro_telefono === '' ? true : false)
            setECorreo (correo === '' ? true : false)
            setEPaginaWeb (pagina_web === '' ? true : false)
            setEDescripcion (descripcion === '' ? true : false)
        }else{
            setENombres(false)
            setEApellidos(false)
            setEFechaNacimiento(false)
            setEGenero(false)
            setEEspecialidad(false)
            setENroTelefono(false)
            setECorreo(false)
            setEPaginaWeb(false)
            setEDescripcion(false)
            const new_doctor = {
                nombres: nombres,
                apellidos: apellidos,
                correo: correo, 
                nro_telefono: nro_telefono,
                usuario: '',
                fecha_nacimiento: fecha_nacimiento,
                genero: genero,
                especialidad: especialidad,
                descripcion: descripcion
            }
            dispatch(doctoresdata(doctoresConstants(0, 0, 0, 0, 0, 0, new_doctor, false).new_doctor))
        }
    }

    const cancelar_guardado = () => {
        setENombres(false)
        setEApellidos(false)
        setEFechaNacimiento(false)
        setEGenero(false)
        setEEspecialidad(false)
        setENroTelefono(false)
        setECorreo(false)
        setEPaginaWeb(false)
        setEDescripcion(false)
        navigate ('/doctores')
    }

    return (
        <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
            <div style={{width: '100%', height: 'auto', background: 'white', padding: 20 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '49%', height: 91 / proporcional}}>
                        <div style={{width: '100%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                    border: enombres ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                    marginRight: 5 / proporcional, fontFamily: 'Nunito, sans-serif'}}>
                                    Nombres
                                </label>
                                <img src={icono_asterisco} style={{width: 8 / proporcional, height: 8 / proporcional}}/>
                            </div>
                            <input  
                                type='default'
                                className='form-control border-0'
                                style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                        padding: 0}}
                                value={nombres}
                                onChange={(event) => setNombres(event.target.value)}
                                placeholder=''
                                id='nombres'/>
                        </div>
                    </div>
                    <div style={{width: '49%', height: 91 / proporcional}}>
                        <div style={{width: '100%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                    border: eapellidos ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                    marginRight: 5 / proporcional, fontFamily: 'Nunito, sans-serif'}}>
                                    Apellidos
                                </label>
                                <img src={icono_asterisco} style={{width: 8 / proporcional, height: 8 / proporcional}}/>
                            </div>
                            <input  
                                type='default'
                                className='form-control border-0'
                                style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                        padding: 0}}
                                value={apellidos}
                                onChange={(event) => setApellidos(event.target.value)}
                                placeholder=''
                                id='apellidos'/>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '49%', height: 91 / proporcional}}>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                            <div style={{width: '49%', height: 91 / proporcional}}>
                                <div style={{width: '100%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                            border: efecha_nacimiento ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                                    <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                        <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                            marginRight: 5 / proporcional, fontFamily: 'Nunito, sans-serif'}}>
                                            Fecha nacimiento
                                        </label>
                                        <img src={icono_asterisco} style={{width: 8 / proporcional, height: 8 / proporcional}}/>
                                    </div>
                                    <input  
                                        type='date'
                                        className='form-control border-0'
                                        style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                                padding: 0}}
                                        value={fecha_nacimiento}
                                        onChange={(event) => setFechaNacimiento(event.target.value)}
                                        placeholder=''
                                        id='fecha_nacimiento'/>
                                </div>
                            </div>
                            <div style={{width: '49%', height: 91 / proporcional}}>
                                <div style={{width: '100%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                            border: egenero ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                                    <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                        <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                            marginRight: 5 / proporcional, fontFamily: 'Nunito, sans-serif'}}>
                                            Género
                                        </label>
                                        <img src={icono_asterisco} style={{width: 8 / proporcional, height: 8 / proporcional}}/>
                                    </div>
                                    <select  
                                        type='default'
                                        className='form-select border-0'
                                        style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                                padding: 0}}
                                        value={genero}
                                        onChange={(event) => event.target.value === '0' ? null : setGenero(event.target.value)}
                                        placeholder=''
                                        id='genero'>
                                        <option value='0'>Género</option>
                                        <option value='Masculino'>Masculino</option>
                                        <option value='Femenino'>Femenino</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '49%', height: 91 / proporcional}}>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                            <div style={{width: '49%', height: 91 / proporcional}}>
                                <div style={{width: '100%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                            border: eespecialidad ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                                    <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                        <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                            marginRight: 5 / proporcional, fontFamily: 'Nunito, sans-serif'}}>
                                            Especialidad
                                        </label>
                                        <img src={icono_asterisco} style={{width: 8 / proporcional, height: 8 / proporcional}}/>
                                    </div>
                                    <input  
                                        type='deault'
                                        className='form-control border-0'
                                        style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                                padding: 0}}
                                        value={especialidad}
                                        onChange={(event) => setEspecialidad(event.target.value)}
                                        placeholder=''
                                        id='especialidad'/>
                                </div>
                            </div>
                            <div style={{width: '49%', height: 91 / proporcional}}>
                                <div style={{width: '100%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                            border: enro_telefono ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                                    <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                        <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                            marginRight: 5 / proporcional, fontFamily: 'Nunito, sans-serif'}}>
                                            Nro teléfono
                                        </label>
                                        <img src={icono_asterisco} style={{width: 8 / proporcional, height: 8 / proporcional}}/>
                                    </div>
                                    <input  
                                        type='deault'
                                        className='form-control border-0'
                                        style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                                padding: 0}}
                                        value={nro_telefono}
                                        onChange={(event) => setNroTelefono(event.target.value)}
                                        placeholder=''
                                        id='nro_telefono'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '49%', height: 91 / proporcional}}>
                        <div style={{width: '100%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                    border: ecorreo ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                    marginRight: 5 / proporcional, fontFamily: 'Nunito, sans-serif'}}>
                                    Correo electrónico
                                </label>
                                <img src={icono_asterisco} style={{width: 8 / proporcional, height: 8 / proporcional}}/>
                            </div>
                            <input  
                                type='email'
                                className='form-control border-0'
                                style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                        padding: 0}}
                                value={correo}
                                onChange={(event) => setCorreo(event.target.value)}
                                placeholder=''
                                id='correo'/>
                        </div>
                    </div>
                    <div style={{width: '49%', height: 91 / proporcional}}>
                        <div style={{width: '100%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                    border: epagina_web ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                    marginRight: 5 / proporcional, fontFamily: 'Nunito, sans-serif'}}>
                                    Página web
                                </label>
                                <img src={icono_asterisco} style={{width: 8 / proporcional, height: 8 / proporcional}}/>
                            </div>
                            <input  
                                type='url'
                                className='form-control border-0'
                                style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                        padding: 0}}
                                value={pagina_web}
                                onChange={(event) => setPaginaWeb(event.target.value)}
                                placeholder=''
                                id='pagina_web'/>
                        </div>
                    </div>
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
                <div className='d-flex justify-content-center' style={{width: '100%', height: 104 / proporcional, marginBottom: 16 / proporcional}}>
                    <div style={{width: '100%', height: 104 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                border: edescripcion ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                        <textarea
                            rows={4}  
                            className='form-control border-0'
                            style={{width: '100%', height: 84 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                    padding: 0}}
                            value={descripcion}
                            onChange={(event) => setDescripcion(event.target.value)}
                            placeholder='Ingrese una descipción lo que desee...'
                            id='descripcion'/>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 40 / proporcional}}>
                    <button className='btn' style={{width: 100 / proporcional, height: 40 / proporcional, background: boton_guardar ? 'white' : 'rgb(130, 180, 64)', 
                            fontSize: 14 / proporcional, color: boton_guardar ? 'rgb(130, 180, 64)' : 'white',
                            fontFamily: 'Nunito, sans-serif', lineHeight: `${22 / proporcional}px`, fontWeight: 300, marginRight: 10 / proporcional,
                            border: '1px solid rgb(130, 180, 64)'}}
                            onMouseOver={() => setBotonGuardar(true)} onMouseLeave={() => setBotonGuardar(false)}
                            onClick={() => guardar_datos()}>
                        Guardar
                    </button>
                    <button className='btn' style={{width: 100 / proporcional, height: 40 / proporcional, background: boton_cancelar ? 'rgb(3, 146, 207)' : 'white', 
                            fontSize: 14 / proporcional, 
                            color: boton_cancelar ? 'white' : 'rgb(3, 146, 207)',
                            fontFamily: 'Nunito, sans-serif', lineHeight: `${22 / proporcional}px`, fontWeight: 300, border: '1px solid rgb(3, 146, 207)'}}
                            onMouseOver={() => setBotonCancelar(true)} onMouseLeave={() => setBotonCancelar(false)}
                            onClick={() => cancelar_guardado()}>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}
