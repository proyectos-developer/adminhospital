import React, { useEffect, useState } from 'react'

import CardCita from './card/cita.jsx'

import { useDispatch, useSelector } from 'react-redux'
import {citasdata} from '../../redux/slice/citasdata'
import {citasConstants} from '../../uri/citas-constants'

export default function ListaCitas({proporcional}) {

    const dispatch = useDispatch ()

    const [total_citas, setTotalCitas] = useState(0)
    const [lista_citas, setListaCitas] = useState([])

    const {get_citas_search, delete_cita} = useSelector(({citas_data}) => citas_data)

    useEffect(() => {
        dispatch(citasdata(citasConstants(0, 0, 0, 0, 0, 16, {}, false).get_citas_search))
    }, [])

    useEffect(() => {
        if (get_citas_search && get_citas_search.success === true && get_citas_search.citas){
            if (get_citas_search.total_citas){setTotalCitas(get_citas_search.total_citas)}
            setListaCitas (get_citas_search.citas)
        }
    }, [get_citas_search])

    useEffect(() => {
        if (delete_cita && delete_cita.success === true && delete_cita.citas){
            if (delete_cita.total_citas){setTotalCitas(delete_cita.total_citas)}
            setListaCitas (delete_cita.citas)
        }
    }, [delete_cita])

    return (
        <div style={{width: '100%', height: 'auto', background: 'white', padding: 20 / proporcional}}>
            <div className='d-flex' style={{width: '100%', height: 'auto', borderBottom: '1px solid rgb(236, 236, 236)'}}>
                <div style={{width: '5%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        #
                    </p>
                </div>
                <div style={{width: '25%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Nombre
                    </p>
                </div>
                <div style={{width: '21%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Email
                    </p>
                </div>
                <div style={{width: '12%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Fecha y hora
                    </p>
                </div>
                <div style={{width: '12%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Consultante
                    </p>
                </div>
                <div style={{width: '10%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Condición
                    </p>
                </div>
                <div style={{width: '15%', height: 44 / proporcional, padding: 12 / proporcional}}>
                    <p style={{color: 'rgb(98, 101, 105)', fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 0}}>
                        Acción
                    </p>
                </div>
            </div>
            {
                lista_citas && lista_citas.length > 0 ? (
                    lista_citas.map ((cita, index) => {
                        return (
                            <CardCita proporcional={proporcional} cita={cita}/>
                        )
                    })
                ) : null
            }
        </div>
    )
}
