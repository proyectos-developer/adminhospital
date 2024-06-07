import React, { useEffect, useState } from 'react'

import axios from 'axios'

import icono_avatar_masculino from '../../../assets/iconos/icono_avatar_masculino_96.png'
import icono_avatar_femenino from '../../../assets/iconos/icono_avatar_femenino_96.png'
import icono_email from '../../../assets/iconos/icono_email_grey_v2_96.png'
import icono_delete from '../../../assets/iconos/icono_delete_grey_v2_96.png'
import icono_print from '../../../assets/iconos/icono_print_grey_96.png'

import { constantes } from '../../../uri/constantes'
import { useDispatch } from 'react-redux'
import {facturasdata} from '../../../redux/slice/facturasdata'
import { facturasCosntants } from '../../../uri/facturas-constants'

export default function CardFactura({proporcional, factura}) {

    const dispatch = useDispatch ()

    const [paciente, setPaciente] = useState({})

    const [card_id, setCardId] = useState ('')

    const [boton_email, setBotonEmail] = useState(false)
    const [boton_print, setBotonPrint] = useState (false)
    const [boton_delete, setBotonDelete] = useState (false)

    useEffect(() => {
        axios.get (`${constantes().url_principal[0].url}/paciente/${factura.usuario_paciente}`)
            .then ((res) => {
                setPaciente (res.data.paciente)
            }).catch((err) => {
                        
            })
    }, [])

    const enviar_email = () => {

    }

    const imprimir_factura = () => {

    }

    const borrar_factura = () => {
        dispatch(facturasdata(facturasCosntants(factura.id, 0, 0, 0, 0, 16, {}, false).delete_factura))
    }
    
    return (
        <div className='d-flex' style={{width: '100%', height: 68 / proporcional, borderBottom: '1px solid rgb(128, 128, 128)', background: card_id === factura.id ? 'rgba(0, 0, 0, 0.075)' : 'white'}}
            onMouseOver={() => setCardId(factura.id)} onMouseLeave={() => setCardId('')}>
            <div className='d-flex justify-content-between' style={{width: '10%', height: 68 / proporcional, padding: 12 / proporcional}}>
                <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${44 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                    marginBottom: 0}}>
                    {factura.numero}
                </p>
            </div>
            <div className='d-flex justify-content-between' style={{width: '50%', height: 68 / proporcional, padding: 12 / proporcional}}>
                {
                    paciente && paciente.nombres ? (
                        <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                            <img src={factura.genero === 'masculino' ? icono_avatar_masculino : icono_avatar_femenino} style={{width: 44 / proporcional, height: 44 / proporcional,
                                    padding: 4.5 / proporcional
                            }}/>
                            <div style={{width: 'auto', height: 44 / proporcional, marginLeft: 16 / proporcional}}>
                                <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(0, 123, 255)', lineHeight: `${21 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                                    marginBottom: 0}}>
                                    {paciente.nombres + ' ' + paciente.apellidos}
                                </p>
                                <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${21 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                                    marginBottom: 0}}>
                                    {paciente.correo}
                                </p>
                            </div>
                        </div>
                    ) : null
                }
            </div>
            <div className='d-flex justify-content-between' style={{width: '10%', height: 68 / proporcional, padding: 12 / proporcional}}>
                <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${44 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                    marginBottom: 0}}>
                    S/.{factura.monto}
                </p>
            </div>
            <div className='d-flex justify-content-between' style={{width: '10%', height: 68 / proporcional, padding: 12 / proporcional}}>
                <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${44 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                    marginBottom: 0}}>
                    {factura.estado}
                </p>
            </div>
            <div className='d-flex' style={{width: '20%', height: 68 / proporcional, padding: 12 / proporcional}}>
                <img src={icono_email} className={boton_email ? 'rounded shadow btn' : 'rounded btn'} style={{width: 35 / proporcional, height: 35 / proporcional, margin: 3.5 / proporcional, 
                        padding: 5 / proporcional, background: 'white', border: '1px solid rgb(236, 236, 236)'}}
                        onMouseOver={() => setBotonEmail(true)} onMouseLeave={() => setBotonEmail(false)} onClick={() => enviar_email()}/>
                <img src={icono_print} className={boton_print ? 'rounded shadow btn' : 'rounded btn'} style={{width: 35 / proporcional, height: 35 / proporcional, margin: 3.5 / proporcional, 
                        padding: 5 / proporcional, background: 'white', border: '1px solid rgb(236, 236, 236)'}}
                        onMouseOver={() => setBotonPrint(true)} onMouseLeave={() => setBotonPrint(false)} onClick={() => imprimir_factura()}/>
                <img src={icono_delete} className={boton_delete ? 'rounded shadow btn' : 'rounded btn'} style={{width: 35 / proporcional, height: 35 / proporcional, margin: 3.5 / proporcional, 
                        padding: 5 / proporcional, background: 'white', border: '1px solid rgb(236, 236, 236)'}}
                        onMouseOver={() => setBotonDelete(true)} onMouseLeave={() => setBotonDelete(false)} onClick={() => borrar_factura()}/>
            </div>
        </div>
    )
}