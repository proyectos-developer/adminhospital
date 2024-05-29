import React, { useEffect, useState } from 'react'

import {useDispatch, useSelector} from 'react-redux'

import icono_asterisco from '../../assets/iconos/icono_asterisco_red_96.png'

import {begindata} from '../../redux/slice/begindata.js'
import {beginConstants} from '../../uri/begin-constants.js'
import { useNavigate } from 'react-router-dom'

export default function DataAccount({proporcional}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [nombre_usuario, setNombreUsuario] = useState('')
    const [password, setPassword] = useState('')
    const [confirmar_password, setConfirmarPassword] = useState('')

    const [enombre_usuario, setENombreUsuario] = useState('')
    const [epassword, setEPassword] = useState('')
    const [econfirmar_password, setEConfirmarPassword] = useState('')

    const [boton_guardar, setBotonGuardar] = useState(false)
    const [boton_cancelar, setBotonCancelar] = useState (false)

    const {register_user} = useSelector(({begin_data}) => begin_data)

    useEffect(() => {
        if (register_user && register_user.success === true && register_user.user){

        }
    }, [register_user])

    const guardar_datos = () => {
        if (nombre_usuario === '' || password === '' || confirmar_password === '' || (password !== confirmar_password)){
            setENombreUsuario(nombre_usuario === '' ? true : false)
            setEPassword(password === '' || (password !== confirmar_password) ? true : false)
            setEConfirmarPassword (confirmar_password === '' || (password !== confirmar_password) ? true : false)
        }else{
            setENombreUsuario(false)
            setEPassword (false)
            setEConfirmarPassword(false)
            const data_register = {
                usuario: nombre_usuario,
                nro_telefono: '999515414',
                correo: 'j.portocarrero.jp@gmail.com',
                password: password
            }
            dispatch(begindata(beginConstants(data_register, false, 0).register_user))
        }
    }

    const cancelar_guardado = () => {
        
    }

    return (
        <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
            <div style={{width: '100%', height: 'auto', background: 'white', padding: 20 / proporcional}}>
                <h2 style={{color: 'rgb(51, 51, 51)', fontFamily: 'Nunito, sans-serif', fontSize: 17 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`,
                    marginBottom: 20 / proporcional}}>
                    Información de cuenta
                </h2>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '100%', height: 91 / proporcional}}>
                        <div style={{width: '100%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                     border: enombre_usuario ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                    marginRight: 5 / proporcional, fontFamily: 'Nunito, sans-serif'}}>
                                    Nombre de usuario
                                </label>
                                <img src={icono_asterisco} style={{width: 8 / proporcional, height: 8 / proporcional}}/>
                            </div>
                            <input  
                                type='default'
                                className='form-control border-0'
                                style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                        padding: 0}}
                                value={nombre_usuario}
                                onChange={(event) => setNombreUsuario(event.target.value)}
                                placeholder=''
                                id='nombre_usuario'/>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '49%', height: 91 / proporcional}}>
                        <div style={{width: '100%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                     border: epassword ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                    marginRight: 5 / proporcional, fontFamily: 'Nunito, sans-serif'}}>
                                    Contraseña
                                </label>
                                <img src={icono_asterisco} style={{width: 8 / proporcional, height: 8 / proporcional}}/>
                            </div>
                            <input  
                                type='password'
                                className='form-control border-0'
                                style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                        padding: 0}}
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder=''
                                id='password'/>
                        </div>
                    </div>
                    <div style={{width: '49%', height: 91 / proporcional}}>
                        <div style={{width: '100%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                     border: econfirmar_password ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                    marginRight: 5 / proporcional, fontFamily: 'Nunito, sans-serif'}}>
                                    Confirmar contraseña
                                </label>
                                <img src={icono_asterisco} style={{width: 8 / proporcional, height: 8 / proporcional}}/>
                            </div>
                            <input  
                                type='password'
                                className='form-control border-0'
                                style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                        padding: 0}}
                                value={confirmar_password}
                                onChange={(event) => setConfirmarPassword(event.target.value)}
                                placeholder=''
                                id='confirmar_password'/>
                        </div>
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
