import React, { useState } from 'react'

import {useDispatch} from 'react-redux'

import {pagosdata} from '../../redux/slice/pagosdata'
import {pagosConstants} from '../../uri/pagos-constants'

export default function BusquedaPago({proporcional}) {

    const dispatch = useDispatch()
        
    const [cantidad_mostrar, setCantidadMostrar] = useState(10)
    const [buscar_pago, setBuscarPago] = useState ('')

    const mostrar_pagos_por_cantidad = () => {
        dispatch(pagosdata(pagosConstants(0, buscar_pago === '' ? 0 : buscar_pago, 0, 0, 0, parseInt(cantidad_mostrar), {}, false).get_pagos_search))
    }

    const buscar_pagos = () => {
        if (buscar_pago !== ''){
            dispatch(pagosdata(pagosConstants(0, buscar_pago, 0, 0, 0, 16, {}, false).get_pagos_search))
        }
    }

    return (
        <div className='d-flex justify-content-between' style={{width: '100%', height: 45 / proporcional, marginBottom: 8 / proporcional}}>
            <div className='d-flex justify-content-start' style={{width: '50%', height: 45 / proporcional}}>
                <span style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${35 / proporcional}px`, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif',
                    marginRight: 10 / proporcional}}>
                    Mostrar
                </span>
                <select 
                    className='form-select'
                    value={cantidad_mostrar}
                    onChange={(event) => {setCantidadMostrar(event.target.value); mostrar_pagos_por_cantidad()}}
                    style={{width: 100 / proporcional, height: 35 / proporcional, border: '1px solid rgb(236, 236, 236)', fontSize: 15 / proporcional, fontWeight: 300, lineHeight: `${15 / proporcional}px`,
                            color: 'rgb(73, 80, 87)'}}
                    id='cantidad_mostrar'>
                    <option value='10'>10</option>
                    <option value='20'>20</option>
                    <option value='40'>40</option>
                    <option value='80'>80</option>
                    <option value='160'>160</option>
                </select>
                <span style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${35 / proporcional}px`, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif',
                    marginLeft: 10 / proporcional}}>
                    entradas
                </span>
            </div>
            <div className='d-flex justify-content-end' style={{width: '50%', height: 45 / proporcional}}>
                <span style={{fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${35 / proporcional}px`, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif',
                    marginRight: 10 / proporcional}}>
                    Buscar:
                </span>
                <input 
                    type='default'
                    id='buscar_pago'
                    className='form-control'
                    value={buscar_pago}
                    onChange={(event) => setBuscarPago(event.target.value)}
                    placeholder='Buscar pago'
                    style={{width: 200 / proporcional, height: 35 / proporcional, border: '1px solid rgb(236, 236, 236)', color: 'rgb(73, 80, 87)', fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${15 / proporcional}px`,
                            fontFamily: 'Nunito, sans-serif'}}/>
            </div>
        </div>
    )
}
