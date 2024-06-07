import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { constantes } from '../../../uri/constantes'

export default function CardPago({proporcional, pago}) {

    const [paciente, setPaciente] = useState({})
    const [doctor, setDoctor] = useState({})

    const [card_id, setCardId] = useState ('')

    useEffect(() => {
        axios.get (`${constantes().url_principal[0].url}/paciente/${pago.usuario_paciente}`)
            .then ((res) => {
                setPaciente (res.data.paciente)
                axios.get (`${constantes().url_principal[0].url}/doctor/${pago.usuario_doctor}`)
                    .then ((res) => {
                        setDoctor (res.data.doctor)
                    }).catch((err) => {

                    })
            }).catch((err) => {
                        
            })
    }, [])
    
    return (
        <div className='d-flex' style={{width: '100%', height: 45 / proporcional, borderBottom: '1px solid rgb(128, 128, 128)', background: card_id === pago.id ? 'rgba(0, 0, 0, 0.075)' : 'white'}}
            onMouseOver={() => setCardId(pago.id)} onMouseLeave={() => setCardId('')}>
            <div className='d-flex justify-content-between' style={{width: '10%', height: 45 / proporcional, padding: 12 / proporcional}}>
                <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${21 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                    marginBottom: 0}}>
                    {pago.numero}
                </p>
            </div>
            <div className='d-flex justify-content-between' style={{width: '10%', height: 45 / proporcional, padding: 12 / proporcional}}>
                <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${21 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                    marginBottom: 0}}>
                    {pago.fecha_pago}
                </p>
            </div>
            <div className='d-flex justify-content-between' style={{width: '20%', height: 45 / proporcional, padding: 12 / proporcional}}>
                {
                    paciente && paciente.nombres ? (
                        <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${21 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                            marginBottom: 0}}>
                            {paciente.nombres + ' ' + paciente.apellidos}
                        </p>
                    ) : null
                }
            </div>
            <div className='d-flex justify-content-between' style={{width: '20%', height: 45 / proporcional, padding: 12 / proporcional}}>
                {
                    doctor && doctor.nombres ? (
                        <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${21 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                            marginBottom: 0}}>
                            {doctor.nombres + ' ' + doctor.apellidos}
                        </p>
                    ) : null
                }
            </div>
            <div className='d-flex justify-content-between' style={{width: '10%', height: 45 / proporcional, padding: 12 / proporcional}}>
                <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${21 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                    marginBottom: 0}}>
                    {pago.cargos}
                </p>
            </div>
            <div className='d-flex justify-content-between' style={{width: '10%', height: 45 / proporcional, padding: 12 / proporcional}}>
                <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${21 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                    marginBottom: 0}}>
                    {pago.impuesto}%
                </p>
            </div>
            <div className='d-flex justify-content-between' style={{width: '10%', height: 45 / proporcional, padding: 12 / proporcional}}>
                <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${21 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                    marginBottom: 0}}>
                    {pago.descuento}%
                </p>
            </div>
            <div className='d-flex justify-content-between' style={{width: '10%', height: 45 / proporcional, padding: 12 / proporcional}}>
                <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${21 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                    marginBottom: 0}}>
                    Total
                </p>
            </div>
        </div>
    )
}