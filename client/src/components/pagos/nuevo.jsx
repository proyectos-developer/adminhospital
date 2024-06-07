import React, { useEffect, useState } from 'react'

import icono_user from '../../assets/iconos/icono_name_card_grey_96.png'
import icono_card from '../../assets/iconos/icono_credit_card_grey_96.png'
import icono_ask from '../../assets/iconos/icono_ask_cvv_grey_96.png'

import { useDispatch, useSelector } from 'react-redux'
import {pacientesdata} from '../../redux/slice/pacientesdata.js'
import {pacientesConstants} from '../../uri/pacientes-constants.js'
import {doctoresdata} from '../../redux/slice/doctoresdata'
import { doctoresConstants } from '../../uri/doctores-constants'
import {pagosdata} from '../../redux/slice/pagosdata.js'
import { pagosConstants } from '../../uri/pagos-constants.js'

export default function NuevoPaciente({proporcional}) {

    const dispatch = useDispatch()

    const [numero, setNumero] = useState('')
    const [nombre_paciente, setNombrePaciente] = useState('')
    const [nombre_doctor, setNombreDoctor] = useState('')
    const [nombre_tarjeta, setNombreTarjeta] = useState ('')
    const [numero_tarjeta, setNumeroTarjeta] = useState('')
    const [mes_vencimiento, setMesVencimiento] = useState('')
    const [anio_vencimiento, setAnioVencimiento] = useState('')
    const [codigo_cvv, setCodigoCVV] = useState ('')
    const [fecha_pago, setFechaPago] = useState('')

    const [lista_doctores, setListaDoctores] = useState([''])
    const [lista_pacientes, setListaPacientes] = useState([''])

    const [boton_guardar, setBotonGuardar] = useState (false)

    const [enumero, setENumero] = useState(false)
    const [enombre_paciente, setENombrePaciente] = useState(false)
    const [enombre_doctor, setENombreDoctor] = useState (false)
    const [enombre_tarjeta, setENombreTarjeta] = useState (false)
    const [enumero_tarjeta, setENumeroTarjeta] = useState(false)
    const [emes_vencimiento, setEMesVencimiento] = useState(false)
    const [eanio_vencimiento, setEAnioVencimiento] = useState(false)
    const [ecodigo_cvv, setECodigoCVV] = useState (false)

    const {new_pago} = useSelector(({pagos_data}) => pagos_data)
    const {get_doctores_filtros} = useSelector(({doctores_data}) => doctores_data)
    const {get_pacientes_filtros} = useSelector(({pacientes_data}) => pacientes_data)

    useEffect(() => {
        dispatch(doctoresdata(doctoresConstants(0, 0, 0, 0, 0, 16, {}, false).get_doctores_filtros))
    }, [])

    useEffect(() => {
        if (get_doctores_filtros && get_doctores_filtros.success === true && get_doctores_filtros.doctores){
            setListaDoctores(get_doctores_filtros.doctores)
        }
    }, [get_doctores_filtros])

    useEffect(() => {
        if (get_doctores_filtros && get_doctores_filtros.success === true && get_doctores_filtros.doctores){
            setListaDoctores(get_doctores_filtros.doctores)
            dispatch (pacientesdata(pacientesConstants(0, 0, 0, 0, 0, 16, {}, false).get_pacientes_filtros))
        }
    }, [get_doctores_filtros])

    useEffect(() => {
        if (get_pacientes_filtros && get_pacientes_filtros.success === true && get_pacientes_filtros.pacientes){
            setListaPacientes(get_pacientes_filtros.pacientes)
        }
    }, [get_pacientes_filtros])
    
    useEffect(() => {
        if (new_pago && new_pago.success === true && new_pago.paciente){

        }
    }, [new_pago])

    const guardar_datos = () => {
        if (numero === '' || nombre_paciente  === '' || nombre_doctor === '' || nombre_tarjeta === '' || numero_tarjeta === '' || mes_vencimiento === '' || anio_vencimiento === '' || 
                codigo_cvv === ''){
            setENumero(numero === '' ? true : false)
            setENombrePaciente(nombre_paciente === '' ? true : false)
            setENombreDoctor(nombre_doctor === '' ? true : false)
            setENumeroTarjeta(numero_tarjeta === '' ? true : false)
            setEMesVencimiento(mes_vencimiento === '' ? true : false)
            setEAnioVencimiento(anio_vencimiento === '' ? true : false)
            setECodigoCVV(codigo_cvv === '' ? true : false)
        }else{
            setENumero(false)
            setENombrePaciente(false)
            setENombreDoctor(false)
            setENumeroTarjeta(false)
            setEMesVencimiento(false)
            setEAnioVencimiento(false)
            setECodigoCVV(false)
            const new_data = {
                usuario_paciente: nombre_paciente,
                usuario_doctor: nombre_doctor,
                fecha_pago: fecha_pago,
                cargos: 0,
                impuesto: 0,
                descuento: 0
            }
            dispatch(pagosdata(pagosConstants(0, 0, 0, 0, 0, 0, new_data, false).new_pago))
        }
    }


    return (
        <div style={{width: '100%', height: 'auto', background: 'white', padding: 22 / proporcional}}>
            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                <div style={{width: '15%', height: 'auto'}}>
                    <label style={{fontSize: 15 / proporcional, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', lineHeight: `${22 / proporcional}px`, marginBottom: 0}}>
                        Información paciente
                    </label>
                </div>
                <div style={{width: '68%', height: 'auto'}}>
                    <div style={{width: '100%', height: 'auto', padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                border: enumero ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                        <input  
                            type='default'
                            className='form-control border-0'
                            style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                    padding: 0}}
                            value={numero}
                            onChange={(event) => setNumero(event.target.value)}
                            placeholder='Número factura'
                            id='numero'/>
                    </div>
                    <div style={{width: '100%', height: 'auto', padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                border: enombre_paciente ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                        <select  
                            type='default'
                            className='form-select border-0'
                            style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                    padding: 0}}
                            value={nombre_paciente}
                            onChange={(event) => event.target.value !== '0' ? setNombrePaciente(event.target.value) : null}
                            id='nombre_paciente'>
                            <option value='0'>Seleccionar paciente</option>
                            {
                                lista_pacientes && lista_pacientes.length > 0 ? (
                                    lista_pacientes.map ((paciente, index) => {
                                        return (
                                            <option value={paciente.usuario}>{paciente.nombres + ' ' + paciente.apellidos}</option>
                                        )
                                    })
                                ) : null
                            }
                        </select>
                    </div>
                    <div style={{width: '100%', height: 'auto', padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                border: enombre_doctor ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                        <select  
                            type='default'
                            className='form-select border-0'
                            style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                    padding: 0}}
                            value={nombre_doctor}
                            onChange={(event) => event.target.value !== '0' ? setNombreDoctor(event.target.value) : null}
                            id='nombre_doctor'>
                            <option value='0'>Seleccionar doctor</option>
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
                </div>
                <div style={{width: '15%', height: 'auto'}}/>
            </div>
            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                <div style={{width: '15%', height: 'auto'}}>
                    <label style={{fontSize: 15 / proporcional, color: 'rgb(98, 101, 105)', fontFamily: 'Nunito, sans-serif', lineHeight: `${22 / proporcional}px`, marginBottom: 0}}>
                        Información de pago
                    </label>
                </div>
                <div style={{width: '68%', height: 'auto'}}>
                    <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                        <label style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, marginBottom: 8 / proporcional, fontFamily: 'Nunito, sans-serif',
                                color: 'rgb(98, 101, 105)'}}>
                            Nombre completo (en la tarjeta)
                        </label>
                        <div className='d-flex' style={{width: '100%', height: 36 / proporcional, border: enombre_tarjeta ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                            <img src={icono_user} style={{width: 36 / proporcional, height: 36 / proporcional, padding: 8 / proporcional, borderRight: '1px solid rgb(236, 236, 236)'}}/>
                            <input  
                                type='default'
                                className='form-control border-0'
                                style={{width: '100%', height: 33 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                        padding: 0, padding: 6 / proporcional}}
                                value={nombre_tarjeta}
                                onChange={(event) => setNombreTarjeta(event.target.value)}
                                placeholder=''
                                id='nombre_tarjeta'/>
                        </div>
                    </div>
                    <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                        <label style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, marginBottom: 8 / proporcional, fontFamily: 'Nunito, sans-serif',
                                color: 'rgb(98, 101, 105)'}}>
                            Número de tarjeta
                        </label>
                        <div className='d-flex' style={{width: '100%', height: 36 / proporcional, border: enumero_tarjeta ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                            <img src={icono_user} style={{width: 36 / proporcional, height: 36 / proporcional, padding: 8 / proporcional, borderRight: '1px solid rgb(236, 236, 236)'}}/>
                            <input  
                                type='number'
                                className='form-control border-0'
                                style={{width: '100%', height: 33 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                        padding: 0, padding: 6 / proporcional}}
                                value={numero_tarjeta}
                                onChange={(event) => setNumeroTarjeta(event.target.value)}
                                placeholder=''
                                id='numero_tarjeta'/>
                        </div>
                    </div>
                    <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                            <div className='' style={{width: '66%', height: 'auto'}}>
                                <label style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, marginBottom: 8 / proporcional, fontFamily: 'Nunito, sans-serif',
                                        color: 'rgb(98, 101, 105)'}}>
                                    Fecha expiración
                                </label>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 36 / proporcional}}>
                                    <select
                                        className='form-select'
                                        id='mes_vencimiento'
                                        style={{width: '40%', height: 36 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}`,
                                            padding: 7 / proporcional, border: emes_vencimiento ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}
                                        value={mes_vencimiento}
                                        onChange={(event) => event.target.value !== '0' ? setMesVencimiento (even.target.value) : null}>
                                        <option value='0'>MM</option>
                                        <option value='01'>01</option>
                                        <option value='02'>02</option>
                                        <option value='03'>03</option>
                                        <option value='04'>04</option>
                                        <option value='05'>05</option>
                                        <option value='06'>06</option>
                                        <option value='07'>07</option>
                                        <option value='08'>08</option>
                                        <option value='09'>09</option>
                                        <option value='10'>10</option>
                                        <option value='11'>11</option>
                                        <option value='12'>12</option>
                                    </select>
                                    <label style={{width: '20%', fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${36 / proporcional}px`, marginBottom: 0 / proporcional, fontFamily: 'Nunito, sans-serif',
                                            color: 'rgb(98, 101, 105)', textAlign: 'center'}}>
                                        /
                                    </label>
                                    <select
                                        className='form-select'
                                        id='anio_vencimiento'
                                        style={{width: '40%', height: 36 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}`,
                                            padding: 7 / proporcional, border: eanio_vencimiento ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}
                                        value={anio_vencimiento}
                                        onChange={(event) => event.target.value !== '0' ? setAnioVencimiento (even.target.value) : null}>
                                        <option value='0'>AA</option>
                                        <option value='2024'>2024</option>
                                        <option value='2025'>2025</option>
                                        <option value='2026'>2026</option>
                                        <option value='2027'>2027</option>
                                        <option value='2028'>2028</option>
                                        <option value='2029'>2029</option>
                                        <option value='2030'>2030</option>
                                        <option value='2031'>2031</option>
                                        <option value='2032'>2032</option>
                                        <option value='2033'>2033</option>
                                        <option value='2034'>2034</option>
                                        <option value='2035'>2035</option>
                                        <option value='2036'>2036</option>
                                        <option value='2037'>2037</option>
                                        <option value='2038'>2038</option>
                                        <option value='2039'>2039</option>
                                        <option value='2040'>2040</option>
                                    </select>
                                </div>
                            </div>

                            <div className='' style={{width: '33%', height: 'auto'}}>
                                <label style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, fontFamily: 'Nunito, sans-serif',
                                        color: 'rgb(98, 101, 105)'}}>
                                    CVV <img src={icono_ask} style={{width: 15 / proporcional, height: 15 / proporcional, margin: 0 / proporcional}}/>
                                </label>
                                <input  
                                    type='number'
                                    className='form-control'
                                    style={{width: '100%', height: 36 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                            padding: 7 / proporcional, border: ecodigo_cvv ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}
                                    value={codigo_cvv}
                                    onChange={(event) => setCodigoCVV(event.target.value)}
                                    placeholder=''
                                    id='codigo_cvv'/>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 40 / proporcional}}>
                        <button className='btn' style={{width: '100%', height: 40 / proporcional, background: boton_guardar ? 'white' : 'rgb(130, 180, 64)', 
                                fontSize: 14 / proporcional, color: boton_guardar ? 'rgb(130, 180, 64)' : 'white',
                                fontFamily: 'Nunito, sans-serif', lineHeight: `${22 / proporcional}px`, fontWeight: 300, marginRight: 10 / proporcional,
                                border: '1px solid rgb(130, 180, 64)'}}
                                onMouseOver={() => setBotonGuardar(true)} onMouseLeave={() => setBotonGuardar(false)}
                                onClick={() => guardar_datos()}>
                            Confirmar
                        </button>
                    </div>
                </div>
                <div style={{width: '15%', height: 'auto'}}/>
            </div>
        </div>
    )
}
