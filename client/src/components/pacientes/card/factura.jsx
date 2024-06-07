import React, { useEffect, useState } from 'react'

import axios from 'axios'

import icono_avatar_masculino from '../../../assets/iconos/icono_avatar_masculino_96.png'
import icono_avatar_femenino from '../../../assets/iconos/icono_avatar_femenino_96.png'
import icono_email from '../../../assets/iconos/icono_email_grey_v2_96.png'
import icono_delete from '../../../assets/iconos/icono_delete_grey_v2_96.png'
import icono_print from '../../../assets/iconos/icono_print_grey_96.png'

import { useNavigate } from 'react-router-dom'
import { constantes } from '../../../uri/constantes'
import { useDispatch } from 'react-redux'
import facturasdata from '../../../redux/slice/facturasdata'
import { facturasCosntants } from '../../../uri/facturas-constants'

export default function CardFactura({proporcional, factura}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const [paciente, setPaciente] = useState({})
    const [doctor, setDoctor] = useState({})
    const [card_id, setCardId] = useState ('false')

    const [boton_email, setBotonEmail] = useState(false)
    const [boton_print, setBotonPrint] = useState (false)
    const [boton_delete, setBotonDelete] = useState (false)

    useEffect(() => {
        axios.get (`${constantes().url_principal[0].url}/paciente/${factura.usuario_paciente}`)
            .then ((res) => {
                setPaciente (res.data.paciente)
                axios.get (`${constantes().url_principal[0].url}/doctor/${factura.usuario_doctor}`)
                    .then ((res) => {
                        setDoctor (res.data.doctor)
                    }).catch ((err) => {

                    })
            }).catch ((err) => {
                
            })
    }, [])

    const enviar_email = () => {

    }

    const imprimir_factura = () => {

    }

    const borrar_factura = () => {
        dispatch (facturasdata(facturasCosntants(factura.id, 0, 0, 0, 0, 16, {}, false).delete_factura))
    }

    
    return (
        <div className='d-flex' style={{width: '100%', height: 60 / proporcional, borderBottom: '1px solid rgb(236, 236, 236)',
                cursor: 'pointer', background: card_id === factura.id ? '#eeeeee' : 'white'}} onMouseOver={() => setCardId(factura.id)} onMouseLeave={() => setCardId('')}>
            <div style={{width: '5%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <span style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${36 / proporcional}px`}}>
                    {factura.numero}
                </span>
            </div>
            <div className='d-flex' style={{width: '35%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <img src={paciente.genero === 'masculino' ? icono_avatar_masculino : icono_avatar_femenino} className='rounded-circle'  
                    style={{width: 36 / proporcional, height: 36 / proporcional, background: '#dee3e9'}}/>
                <div style={{width: 'auto', height: 36 / proporcional, marginLeft: 16 / proporcional}}>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(0, 123, 255)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${21 / proporcional}px`}}>
                        {paciente.nombres + ' ' + paciente.apellidos}
                    </p>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${15 / proporcional}px`}}>
                        {paciente.correo}
                    </p>
                </div>
            </div>
            <div style={{width: '20%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${36 / proporcional}px`}}>
                    Dr. {doctor.apellidos}
                </p>
            </div>
            <div className='' style={{width: '10%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${36 / proporcional}px`}}>
                    S/.{factura.monto}
                </p>
            </div>
            <div className='' style={{width: '10%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <p className='rounded-pill' style={{width: '60%', fontSize: 10 / proporcional, fontWeight: 400, color: factura.estado === 'pagado' ? 'rgb(130, 180, 64)' : 'rgb(255, 115, 33)', marginBottom: 0, 
                    fontFamily: 'Nunito, sans-serif', lineHeight: `${36 / proporcional}px`, border: factura.estado === 'pagado' ? '1px solid rgb(130, 180, 64)' : '1px solid rgb(255, 115, 33)',
                    paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, textAlign: 'center'}}>
                    {factura.estado}
                </p>
            </div>
            <div style={{width: '20%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <img src={icono_email} className={boton_email ? 'rounded shadow btn' : 'rounded btn'} style={{width: 29 / proporcional, height: 29 / proporcional, margin: 3.5 / proporcional, 
                        padding: 5 / proporcional, background: 'white', border: '1px solid rgb(236, 236, 236)'}}
                        onMouseOver={() => setBotonEmail(true)} onMouseLeave={() => setBotonEmail(false)} onClick={() => enviar_email()}/>
                <img src={icono_print} className={boton_print ? 'rounded shadow btn' : 'rounded btn'} style={{width: 29 / proporcional, height: 29 / proporcional, margin: 3.5 / proporcional, 
                        padding: 5 / proporcional, background: 'white', border: '1px solid rgb(236, 236, 236)'}}
                        onMouseOver={() => setBotonPrint(true)} onMouseLeave={() => setBotonPrint(false)} onClick={() => imprimir_factura()}/>
                <img src={icono_delete} className={boton_delete ? 'rounded shadow btn' : 'rounded btn'} style={{width: 29 / proporcional, height: 29 / proporcional, margin: 3.5 / proporcional, 
                        padding: 5 / proporcional, background: 'white', border: '1px solid rgb(236, 236, 236)'}}
                        onMouseOver={() => setBotonDelete(true)} onMouseLeave={() => setBotonDelete(false)} onClick={() => borrar_factura()}/>
            </div>
        </div>
    )
}
