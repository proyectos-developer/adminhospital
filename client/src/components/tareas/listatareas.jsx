import React, { useEffect, useState } from 'react'

import CardTarea from './card/tarea.jsx'

import { useDispatch, useSelector } from 'react-redux'
import {tareasdata} from '../../redux/slice/tareasdata'
import {tareasConstants} from '../../uri/tareas-constants'

export default function ListaTareas({proporcional}) {

    const dispatch = useDispatch ()

    const [total_tareas, setTotalTareas] = useState(0)
    const [lista_tareas, setListaTareas] = useState([])

    const {get_tareas_search, delete_tarea} = useSelector(({tareas_data}) => tareas_data)

    useEffect(() => {
        dispatch(tareasdata(tareasConstants(0, 0, 0, 0, 0, 16, {}, false).get_tareas_search))
    }, [])

    useEffect(() => {
        if (get_tareas_search && get_tareas_search.success === true && get_tareas_search.tareas){
            if (get_tareas_search.total_tareas){setTotalTareas(get_tareas_search.total_tareas)}
            setListaTareas (get_tareas_search.tareas)
        }
    }, [get_tareas_search])

    useEffect (() => {
        if (delete_tarea && delete_tarea.success === true && delete_tarea.tareas){
            if (delete_tarea.total_tareas){setTotalTareas(delete_tarea.total_tareas)}
            setListaTareas(delete_tarea.tareas)
        }
    }, [delete_tarea])

    return (
        <div style={{width: '100%', height: 'auto', padding: 22 / proporcional}}>
            <div style={{width: '100%', height: 'auto', background: 'white'}}>
                {
                    lista_tareas && lista_tareas.length > 0 ? (
                        lista_tareas.map ((tarea, index) => {
                            return (
                                <CardTarea proporcional={proporcional} tarea={tarea}/>
                            )
                        })
                    ) : null
                }
            </div>
        </div>
    )
}
