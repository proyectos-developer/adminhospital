import React, { useEffect, useState } from 'react'

import icono_order from '../../assets/iconos/icono_sort_grey_96.png'

import CardPago from './card/pago.jsx'

import { useDispatch, useSelector } from 'react-redux'
import {pagosdata} from '../../redux/slice/pagosdata'
import { pagosConstants } from '../../uri/pagos-constants'

export default function Pagos({proporcional}) {

    const dispatch = useDispatch ()

    const [lista_pagos, setListaPagos] = useState([])

    const {get_pagos_search} = useSelector(({pagos_data}) => pagos_data)

    useEffect(() => {
        dispatch(pagosdata(pagosConstants(0, 0, 0, 0, 0, 10, {}, false).get_pagos_search))
    }, [])

    useEffect(() => {
        if (get_pagos_search && get_pagos_search.success === true && get_pagos_search.pagos){
            console.log ('pagos', get_pagos_search)
            setListaPagos(get_pagos_search.pagos)
        }
    }, [get_pagos_search])

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex' style={{width: '100%', height: 45 / proporcional, borderTop: '1px solid rgb(128, 128, 128)'}}>
                <div className='d-flex justify-content-between' style={{width: '10%', height: 45 / proporcional, padding: 12 / proporcional}}>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${21 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Factura nro.
                    </p>
                    <img src={icono_order} style={{width: 21 / proporcional, height: 21 / proporcional, padding: 2 / proporcional, cursor: 'pointer'}}/>
                </div>
                <div className='d-flex justify-content-between' style={{width: '10%', height: 45 / proporcional, padding: 12 / proporcional}}>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${21 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Fecha pago
                    </p>
                    <img src={icono_order} style={{width: 21 / proporcional, height: 21 / proporcional, padding: 2 / proporcional, cursor: 'pointer'}}/>
                </div>
                <div className='d-flex justify-content-between' style={{width: '20%', height: 45 / proporcional, padding: 12 / proporcional}}>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${21 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Paciente
                    </p>
                    <img src={icono_order} style={{width: 21 / proporcional, height: 21 / proporcional, padding: 2 / proporcional, cursor: 'pointer'}}/>
                </div>
                <div className='d-flex justify-content-between' style={{width: '20%', height: 45 / proporcional, padding: 12 / proporcional}}>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${21 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Doctor
                    </p>
                    <img src={icono_order} style={{width: 21 / proporcional, height: 21 / proporcional, padding: 2 / proporcional, cursor: 'pointer'}}/>
                </div>
                <div className='d-flex justify-content-between' style={{width: '10%', height: 45 / proporcional, padding: 12 / proporcional}}>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${21 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Cargos
                    </p>
                    <img src={icono_order} style={{width: 21 / proporcional, height: 21 / proporcional, padding: 2 / proporcional, cursor: 'pointer'}}/>
                </div>
                <div className='d-flex justify-content-between' style={{width: '10%', height: 45 / proporcional, padding: 12 / proporcional}}>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${21 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Impuestos
                    </p>
                    <img src={icono_order} style={{width: 21 / proporcional, height: 21 / proporcional, padding: 2 / proporcional, cursor: 'pointer'}}/>
                </div>
                <div className='d-flex justify-content-between' style={{width: '10%', height: 45 / proporcional, padding: 12 / proporcional}}>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${21 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Descuento
                    </p>
                    <img src={icono_order} style={{width: 21 / proporcional, height: 21 / proporcional, padding: 2 / proporcional, cursor: 'pointer'}}/>
                </div>
                <div className='d-flex justify-content-between' style={{width: '10%', height: 45 / proporcional, padding: 12 / proporcional}}>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${21 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Total
                    </p>
                    <img src={icono_order} style={{width: 21 / proporcional, height: 21 / proporcional, padding: 2 / proporcional, cursor: 'pointer'}}/>
                </div>
            </div>
            <div style={{width: '100%', height: 4 / proporcional, borderBottom: '1px solid rgb(128, 128, 128)', borderTop: '1px solid rgb(128, 128, 128)'}}/>
            {
                lista_pagos && lista_pagos.length > 0 ? (
                    lista_pagos.map ((pago, index) => {
                        return (
                            <CardPago proporcional={proporcional} pago={pago}/>
                        )
                    })
                ) : null
            }
        </div>
    )
}
