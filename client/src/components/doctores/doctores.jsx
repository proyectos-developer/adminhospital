import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {doctoresdata} from '../../redux/slice/doctoresdata'
import { doctoresConstants } from '../../uri/doctores-constants'

import CardDoctor from './card/doctor.jsx'

export default function Doctores({proporcional}) {

    const dispatch = useDispatch()

    const [total_doctores, setTotalDoctores] = useState(0)
    const [doctores, setDoctores] = useState([])
    const [lista_doctores, setListaDoctores] = useState ([])

    const {get_doctores_filtros} = useSelector(({doctores_data}) => doctores_data)

    useEffect(() => {
        dispatch(doctoresdata(doctoresConstants(0, 0, 0, 0, 0, 16, {}, false).get_doctores_filtros))
    }, [])

    useEffect(() => {
        if (get_doctores_filtros && get_doctores_filtros.success === true && get_doctores_filtros.doctores){
            let data = get_doctores_filtros.doctores.length
            let lista = []
            let cuenta = data / 4 < 1 ? 1 : data % 4 !== 0 ? (data / 4) + 1 : data / 4
            for (let count = 0; count < cuenta; count ++){
                lista.push ({num: `${count + 1}`})
            }
            if (get_doctores_filtros.total_doctores){setTotalDoctores(get_doctores_filtros.total_doctores)}
            setDoctores (get_doctores_filtros.doctores)
            setListaDoctores (lista)
        }
    }, [get_doctores_filtros])

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                {
                    lista_doctores && lista_doctores.length > 0 ? (
                        lista_doctores.map ((doctor, numdoc) => {
                            return (
                                <div className='d-flex justify-content-between' style={{width: '100%'}}>
                                {
                                    doctores[(4 *  numdoc)] ? ( 
                                        <div style={{width: '24%', height: 'auto'}}>
                                            <CardDoctor doctor={doctores[(4 *  numdoc)]} key={(4 *  numdoc)} index={(4 *  numdoc)} proporcional={proporcional}/>
                                        </div>
                                    ) : (
                                        <div style={{width: '24%', height: 'auto'}}/>
                                    )
                                }
                                {
                                    doctores[(4 *  numdoc) + 1] ? ( 
                                        <div style={{width: '24%', height: 'auto'}}>
                                            <CardDoctor doctor={doctores[(4 *  numdoc) + 1]} key={(4 *  numdoc) + 1} index={(4 *  numdoc) + 1} proporcional={proporcional}/>
                                        </div>
                                    ) : (
                                        <div style={{width: '24%', height: 'auto'}}/>
                                    )
                                }
                                {
                                    doctores[(4 *  numdoc) + 2] ? ( 
                                        <div style={{width: '24%', height: 'auto'}}>
                                            <CardDoctor doctor={doctores[(4 *  numdoc) + 2]} key={(4 *  numdoc) + 2} index={(4 *  numdoc) + 2} proporcional={proporcional}/>
                                        </div>
                                    ) : (
                                        <div style={{width: '24%', height: 'auto'}}/>
                                    )
                                }
                                {
                                    doctores[(4 *  numdoc) + 3] ? ( 
                                        <div style={{width: '24%', height: 'auto'}}>
                                            <CardDoctor doctor={doctores[(4 *  numdoc) + 3]} key={(4 *  numdoc) + 3} index={(4 *  numdoc) + 3} proporcional={proporcional}/>
                                        </div>
                                    ) : (
                                        <div style={{width: '24%', height: 'auto'}}/>
                                    )
                                }
                                </div>
                            )
                        })
                    ) : null
                }
            </div>
        </div>
    )
}
