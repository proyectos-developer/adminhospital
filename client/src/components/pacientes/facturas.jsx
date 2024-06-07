import React, { useEffect, useState } from 'react'

import CardFactura from './card/factura.jsx'

import { useDispatch, useSelector } from 'react-redux'
import {facturasdata} from '../../redux/slice/facturasdata'
import {facturasCosntants} from '../../uri/facturas-constants'

export default function Facturas({proporcional}) {

    const dispatch = useDispatch ()

    const [total_facturas, setTotalFacturas] = useState(0)
    const [lista_facturas, setListaFacturas] = useState([])

    const {get_facturas_pacientes_search, delete_factura} = useSelector(({facturas_data}) => facturas_data)

    useEffect(() => {
        dispatch(facturasdata(facturasCosntants(0, 0, 0, 0, 0, 16, {}, false).get_facturas_pacientes_search))
    }, [])

    useEffect(() => {
        if (get_facturas_pacientes_search && get_facturas_pacientes_search.success === true && get_facturas_pacientes_search.facturas){
            if (get_facturas_pacientes_search.total_facturas){setTotalFacturas(get_facturas_pacientes_search.total_facturas)}
            setListaFacturas (get_facturas_pacientes_search.facturas)
        }
    }, [get_facturas_pacientes_search])

    useEffect(() => {
        if (delete_factura && delete_factura.success === true && delete_factura.facturas){
            if (delete_factura.total_facturas){setTotalFacturas(delete_factura.total_facturas)}
            setListaFacturas (delete_factura.facturas)
        }
    }, [delete_factura])

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex' style={{width: '100%', height: 'auto', borderBottom: '1px solid rgb(236, 236, 236)'}}>
                <div style={{width: '5%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        #
                    </p>
                </div>
                <div style={{width: '35%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Paciente
                    </p>
                </div>
                <div style={{width: '20%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Dr.
                    </p>
                </div>
                <div className='' style={{width: '10%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Cantidad
                    </p>
                </div>
                <div className='' style={{width: '10%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Estado
                    </p>
                </div>
                <div style={{width: '20%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Acción
                    </p>
                </div>
            </div>
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
