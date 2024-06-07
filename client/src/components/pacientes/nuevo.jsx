import React, { useEffect, useState } from 'react'

import icono_asterisco from '../../assets/iconos/icono_asterisco_red_96.png'
import icono_drop_file from '../../assets/iconos/icono_upload_cloud_grey_96.png'

import { useDispatch, useSelector } from 'react-redux'
import {pacientesdata} from '../../redux/slice/pacientesdata.js'
import {pacientesConstants} from '../../uri/pacientes-constants.js'
import {doctoresdata} from '../../redux/slice/doctoresdata'
import { doctoresConstants } from '../../uri/doctores-constants'

export default function NuevoPaciente({proporcional}) {

    const dispatch = useDispatch()

    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [nro_telefono, setNroTelefono] = useState ('')
    const [fecha_nacimiento, setFechaNacimiento] = useState('')
    const [edad, setEdad] = useState('')
    const [genero, setGenero] = useState ('')
    const [correo, setCorreo] = useState ('')
    const [descripcion, setDescripcion] = useState ('')

    const [doctor, setDoctor] = useState('')
    const [personal, setPersonal] = useState('')
    const [pabellon, setPabellon] = useState('')
    const [fecha_ingreso, setFechaIngreso] = useState ('')

    const [boton_guardar, setBotonGuardar] = useState (false)
    const [boton_cancelar, setBotonCancelar] = useState(false)

    const [enombres, setENombres] = useState(false)
    const [eapellidos, setEApellidos] = useState(false)
    const [enro_telefono, setENroTelefono] = useState (false)
    const [efecha_nacimiento, setEFechaNacimiento] = useState(false)
    const [eedad, setEEdad] = useState(false)
    const [egenero, setEGenero] = useState (false)
    const [ecorreo, setECorreo] = useState (false)

    const [edoctor, setEDoctor] = useState (false)
    const [epersonal, setEPersonal] = useState (false)
    const [epabellon, setEPabellon] = useState(false)
    const [efecha_ingreso, setEFechaIngreso] = useState(false)

    const [lista_doctores, setListaDoctores] = useState([])

    const {new_paciente} = useSelector(({pacientes_data}) => pacientes_data)
    const {get_doctores_filtros} = useSelector(({doctores_data}) => doctores_data)

    useEffect(() => {
        dispatch(doctoresdata(doctoresConstants(0, 0, 0, 0, 0, 16, {}, false).get_doctores_filtros))
    }, [])

    useEffect(() => {
        if (get_doctores_filtros && get_doctores_filtros.success === true && get_doctores_filtros.doctores){
            setListaDoctores(get_doctores_filtros.doctores)
        }
    }, [get_doctores_filtros])
    
    useEffect(() => {
        if (new_paciente && new_paciente.success === true && new_paciente.paciente){

        }
    }, [new_paciente])

    const guardar_datos = () => {
        if (nombres === '' || apellidos  === '' || nro_telefono === '' || fecha_nacimiento === '' || edad === '' || genero === '' || correo === '' || doctor === '' || 
            personal === '' || pabellon === '' || fecha_ingreso === ''){
            setENombres(nombres === '' ? true : false)
            setEApellidos(apellidos === '' ? true : false)
            setENroTelefono(nro_telefono === '' ? true : false)
            setEFechaNacimiento(fecha_nacimiento === '' ? true : false)
            setEEdad(edad === '' ? true : false)
            setEGenero(genero === '' ? true : false)
            setECorreo(correo === '' ? true : false)
            setEDoctor(doctor === '' ? true : false)
            setEPersonal(personal === '' ? true : false)
            setEPabellon(pabellon === '' ? true : false)
            setEFechaIngreso(fecha_ingreso === '' ? true : false)
        }else{
            setENombres(false)
            setEApellidos(false)
            setENroTelefono(false)
            setEFechaNacimiento(false)
            setEEdad(false)
            setEGenero(false)
            setECorreo(false)
            setEDoctor(false)
            setEPersonal(false)
            setEPabellon(false)
            setEFechaIngreso(false)
            const new_data = {
                nombres: nombres,
                apellidos: apellidos,
                nro_telefono: nro_telefono,
                fecha_nacimiento: fecha_nacimiento,
                edad: edad,
                genero: genero,
                correo: correo,
                descripcion: descripcion,
                doctor: doctor,
                personal: personal,
                pabellon: pabellon,
                fecha_ingreso: fecha_ingreso,
                direccion: ''
            }
            dispatch(pacientesdata(pacientesConstants(0, 0, 0, 0, 0, 0, new_data, false).new_paciente))
        }
    }


    return (
        <div style={{width: '100%', height: 'auto', background: 'white', padding: 22 / proporcional}}>
            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                <div style={{width: '15%', height: 'auto'}}>
                    <label style={{fontSize: 15 / proporcional, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', lineHeight: `${22 / proporcional}px`, marginBottom: 0}}>
                        Información básica
                    </label>
                </div>
                <div style={{width: '68%', height: 'auto'}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                        <div style={{width: '32%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
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
                        <div style={{width: '32%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
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
                        <div style={{width: '32%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                    border: enro_telefono ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                    marginRight: 5 / proporcional, fontFamily: 'Nunito, sans-serif'}}>
                                    Nro teléfono
                                </label>
                                <img src={icono_asterisco} style={{width: 8 / proporcional, height: 8 / proporcional}}/>
                            </div>
                            <input  
                                type='number'
                                className='form-control border-0'
                                style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                        padding: 0}}
                                value={nro_telefono}
                                onChange={(event) => setNroTelefono(event.target.value)}
                                placeholder=''
                                id='nro_telefono'/>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                        <div style={{width: '24%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
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
                        <div style={{width: '24%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                    border: eedad ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                    marginRight: 5 / proporcional, fontFamily: 'Nunito, sans-serif'}}>
                                    Edad
                                </label>
                                <img src={icono_asterisco} style={{width: 8 / proporcional, height: 8 / proporcional}}/>
                            </div>
                            <input  
                                type='number'
                                className='form-control border-0'
                                style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                        padding: 0}}
                                value={edad}
                                onChange={(event) => setEdad(event.target.value)}
                                placeholder=''
                                id='edad'/>
                        </div>
                        <div style={{width: '24%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                    border: egenero ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                    marginRight: 5 / proporcional, fontFamily: 'Nunito, sans-serif'}}>
                                    Género
                                </label>
                                <img src={icono_asterisco} style={{width: 8 / proporcional, height: 8 / proporcional}}/>
                            </div>
                            <select  
                                className='form-select border-0'
                                style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                        padding: 0}}
                                value={genero}
                                onChange={(event) => event.target.value !== '0' ? setGenero(event.target.value) : null}
                                id='genero'>
                                <option value='0'>Seleccionar</option>
                                <option value='masculino'>Masculino</option>
                                <option value='femenino'>Femenino</option>
                            </select>
                        </div>
                        <div style={{width: '24%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                    border: ecorreo ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                    marginRight: 5 / proporcional, fontFamily: 'Nunito, sans-serif'}}>
                                    E-mail
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
                                    border: '1px solid rgb(236, 236, 236)'}}>
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
                </div>
                <div style={{width: '15%', height: 'auto'}}/>
            </div>
            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                <div style={{width: '15%', height: 'auto'}}>
                    <label style={{fontSize: 15 / proporcional, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', lineHeight: `${22 / proporcional}px`, marginBottom: 0}}>
                        Información de registro
                    </label>
                </div>
                <div style={{width: '68%', height: 'auto'}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                        <div style={{width: '49%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                    border: edoctor ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                    marginRight: 5 / proporcional, fontFamily: 'Nunito, sans-serif'}}>
                                    Nombre doctor
                                </label>
                                <img src={icono_asterisco} style={{width: 8 / proporcional, height: 8 / proporcional}}/>
                            </div>
                            <select  
                                className='form-select border-0'
                                style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                        padding: 0}}
                                value={doctor}
                                onChange={(event) => event.target.value !== '0' ? setDoctor(event.target.value) : null}
                                id='doctor'>
                                <option value='0'>Seleccionar</option>
                                {
                                    lista_doctores && lista_doctores.length > 0 ? (
                                        lista_doctores.map ((doctor, index) => {
                                            return (
                                                <option value={doctor.usuario}>{doctor.nombres + ' ' + doctor.apellidos}</option>
                                            )
                                        })
                                    ) : null
                                }
                            </select>
                        </div>
                        <div style={{width: '49%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                    border: epersonal ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                    marginRight: 5 / proporcional, fontFamily: 'Nunito, sans-serif'}}>
                                    Personal
                                </label>
                                <img src={icono_asterisco} style={{width: 8 / proporcional, height: 8 / proporcional}}/>
                            </div>
                            <input  
                                type='default'
                                className='form-control border-0'
                                style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                        padding: 0}}
                                value={personal}
                                onChange={(event) => setPersonal(event.target.value)}
                                placeholder=''
                                id='personal'/>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                        <div style={{width: '49%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                    border: epabellon ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                    marginRight: 5 / proporcional, fontFamily: 'Nunito, sans-serif'}}>
                                    Pabellón
                                </label>
                                <img src={icono_asterisco} style={{width: 8 / proporcional, height: 8 / proporcional}}/>
                            </div>
                            <input  
                                type='default'
                                className='form-control border-0'
                                style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                        padding: 0}}
                                value={pabellon}
                                onChange={(event) => setPabellon(event.target.value)}
                                placeholder=''
                                id='pabellon'/>
                        </div>
                        <div style={{width: '49%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                    border: efecha_ingreso ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                    marginRight: 5 / proporcional, fontFamily: 'Nunito, sans-serif'}}>
                                    Fecha ingreso
                                </label>
                                <img src={icono_asterisco} style={{width: 8 / proporcional, height: 8 / proporcional}}/>
                            </div>
                            <input  
                                type='date'
                                className='form-control border-0'
                                style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                        padding: 0}}
                                value={fecha_ingreso}
                                onChange={(event) => setFechaIngreso(event.target.value)}
                                placeholder=''
                                id='fecha_ingreso'/>
                        </div>
                    </div>
                </div>
                <div style={{width: '15%', height: 'auto'}}/>
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
    )
}
