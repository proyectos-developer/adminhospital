import React, { useEffect, useState } from 'react'

import CardEspecialidad from './card/especialidad.jsx'

import { useDispatch, useSelector } from 'react-redux'
import {especialidadesdata} from '../../redux/slice/especialidadesdata'
import {especialidadesConstants} from '../../uri/especialidades-constants'

export default function Especialidades({proporcional}) {

    const dispatch = useDispatch ()

    const [total_especialidades, setTotalEspecialidades] = useState(0)
    const [lista_especialidades, setListaEspecialidades] = useState([])
    const [especialidades, setEspecialidades] = useState([])

    const {get_especialidades_search} = useSelector(({especialidades_data}) => especialidades_data)

    useEffect(() => {
        dispatch(especialidadesdata(especialidadesConstants(0, 0, 0, 0, 0, 16, {}, false).get_especialidades_search))
    }, [])

    useEffect(() => {
        if (get_especialidades_search && get_especialidades_search.success === true && get_especialidades_search.especialidades){
            let data = get_especialidades_search.especialidades.length
            let lista = []
            let cuenta = data / 4 < 1 ? 1 : data % 4 !== 0 ? (data / 4) + 1 : data / 4
            for (let count = 0; count < cuenta; count ++){
                lista.push ({num: `${count + 1}`})
            }
            if (get_especialidades_search.total_especialidades){setTotalEspecialidades(get_especialidades_search.total_especialidades)}
            setEspecialidades (get_especialidades_search.especialidades)
            setListaEspecialidades (lista)
        }
    }, [get_especialidades_search])

    return (
        <div style={{width: '100%', height: 'auto'}}>
            {
                lista_especialidades && lista_especialidades.length > 0 ? (
                    lista_especialidades.map ((especialidad, numespc) => {
                        return (
                            <div className='d-flex justify-content-between' style={{width: '100%'}}>
                            {
                                especialidades[(4 *  numespc)] ? ( 
                                    <div style={{width: '24%', height: 'auto'}}>
                                        <CardEspecialidad especialidad={especialidades[(4 *  numespc)]} key={(4 *  numespc)} index={(4 *  numespc)} proporcional={proporcional}/>
                                    </div>
                                ) : (
                                    <div style={{width: '24%', height: 'auto'}}/>
                                )
                            }
                            {
                                especialidades[(4 *  numespc) + 1] ? ( 
                                    <div style={{width: '24%', height: 'auto'}}>
                                        <CardEspecialidad especialidad={especialidades[(4 *  numespc) + 1]} key={(4 *  numespc) + 1} index={(4 *  numespc) + 1} proporcional={proporcional}/>
                                    </div>
                                ) : (
                                    <div style={{width: '24%', height: 'auto'}}/>
                                )
                            }
                            {
                                especialidades[(4 *  numespc) + 2] ? ( 
                                    <div style={{width: '24%', height: 'auto'}}>
                                        <CardEspecialidad especialidad={especialidades[(4 *  numespc) + 2]} key={(4 *  numespc) + 2} index={(4 *  numespc) + 2} proporcional={proporcional}/>
                                    </div>
                                ) : (
                                    <div style={{width: '24%', height: 'auto'}}/>
                                )
                            }
                            {
                                especialidades[(4 *  numespc) + 3] ? ( 
                                    <div style={{width: '24%', height: 'auto'}}>
                                        <CardEspecialidad especialidad={especialidades[(4 *  numespc) + 3]} key={(4 *  numespc) + 3} index={(4 *  numespc) + 3} proporcional={proporcional}/>
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
    )
}
