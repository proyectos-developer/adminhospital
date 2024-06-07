import React, { useEffect, useState } from 'react'

import icono_order from '../../assets/iconos/icono_sort_grey_96.png'

import CardFactura from './card/factura.jsx'

import { useDispatch, useSelector } from 'react-redux'
import {facturasdata} from '../../redux/slice/facturasdata'
import { facturasCosntants } from '../../uri/facturas-constants'

export default function Pagos({proporcional}) {

    const dispatch = useDispatch ()

    const [lista_facturas, setListaFacturas] = useState([])

    const {get_facturas_pacientes_search, delete_factura} = useSelector(({facturas_data}) => facturas_data)

    useEffect(() => {
        dispatch(facturasdata(facturasCosntants(0, 0, 0, 0, 0, 10, {}, false).get_facturas_pacientes_search))
    }, [])

    useEffect(() => {
        if (get_facturas_pacientes_search && get_facturas_pacientes_search.success === true && get_facturas_pacientes_search.facturas){
            setListaFacturas(get_facturas_pacientes_search.facturas)
        }
    }, [get_facturas_pacientes_search])

    useEffect(() => {
        if (delete_factura && delete_factura.success === true && delete_factura.facturas){
            setListaFacturas(delete_factura.facturas)
        }
    }, [delete_factura])

    return (
        <div style={{width: '100%', height: 'auto', background: 'white', padding: 22 / proporcional}}>
            <div className='d-flex' style={{width: '100%', height: 45 / proporcional, borderTop: '1px solid rgb(128, 128, 128)'}}>
                <div className='d-flex justify-content-between' style={{width: '10%', height: 45 / proporcional, padding: 12 / proporcional}}>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${21 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Nro.
                    </p>
                    <img src={icono_order} style={{width: 21 / proporcional, height: 21 / proporcional, padding: 2 / proporcional, cursor: 'pointer'}}/>
                </div>
                <div className='d-flex justify-content-between' style={{width: '50%', height: 45 / proporcional, padding: 12 / proporcional}}>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${21 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Detalles Cliente
                    </p>
                    <img src={icono_order} style={{width: 21 / proporcional, height: 21 / proporcional, padding: 2 / proporcional, cursor: 'pointer'}}/>
                </div>
                <div className='d-flex justify-content-between' style={{width: '10%', height: 45 / proporcional, padding: 12 / proporcional}}>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${21 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Monto
                    </p>
                    <img src={icono_order} style={{width: 21 / proporcional, height: 21 / proporcional, padding: 2 / proporcional, cursor: 'pointer'}}/>
                </div>
                <div className='d-flex justify-content-between' style={{width: '10%', height: 45 / proporcional, padding: 12 / proporcional}}>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${21 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Estado
                    </p>
                    <img src={icono_order} style={{width: 21 / proporcional, height: 21 / proporcional, padding: 2 / proporcional, cursor: 'pointer'}}/>
                </div>
                <div className='d-flex justify-content-between' style={{width: '20%', height: 45 / proporcional, padding: 12 / proporcional}}>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${21 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Acción
                    </p>
                </div>
            </div>
            <div style={{width: '100%', height: 4 / proporcional, borderBottom: '1px solid rgb(128, 128, 128)', borderTop: '1px solid rgb(128, 128, 128)'}}/>
            {
                lista_facturas && lista_facturas.length > 0 ? (
                    lista_facturas.map ((factura, index) => {
                        return (
                            <CardFactura proporcional={proporcional} factura={factura}/>
                        )
                    })
                ) : null
            }
        </div>
    )
}
