import React, { useState } from 'react'

import icono_search from '../../assets/iconos/icono_search_grey_v2_96.png'
import { useDispatch } from 'react-redux'
import {habitacionesdata} from '../../redux/slice/habitacionesdata'
import { habitacionesConstants } from '../../uri/habitaciones-constants.js'

export default function BusquedaPaciente({proporcional}) {

    const dispatch = useDispatch()

    const [search_habitacion, setSearchHabitacion] = useState('')

    const buscar_habitacion = () => {
        if (search_habitacion !== ''){
            dispatch(habitacionesdata(habitacionesConstants(0, search_habitacion, 0, 0, 0, 16, {}, false).get_habitaciones_pacientes_search))
        }
    }
    
    return (
        <div style={{width: '100%', height: 80 / proporcional, padding: 22 / proporcional}}>
            <div className='d-flex' style={{width: '100%', height: 36 / proporcional}}>
                <input 
                    type='default'
                    value={search_habitacion}
                    onChange={(event) => setSearchHabitacion(event.target.value)}
                    placeholder='Buscar habitacion'
                    id='search_habitacion'
                    style={{width: '100%', height: 36 / proporcional, paddingLeft: 12 / proporcional, paddingRight: 12 / proporcional, paddingBottom: 6 / proporcional, paddingTop: 6 / proporcional,
                        fontSize: 15 / proporcional, lineHeight: `${24 / proporcional}px`, border: '1px solid rgb(236, 236, 236)', borderTopLeftRadius: 8 / proporcional, borderRight: 'none',
                        borderBottomLeftRadius: 8 / proporcional}}/>
                <img src={icono_search} style={{width: 36 / proporcional, height: 36 / proporcional, padding: 10 / proporcional, cursor: 'pointer',
                        border: '1px solid rgb(236, 236, 236)', borderLeft: 'none'}}
                    onClick={() => buscar_habitacion()}/>
            </div>
        </div>
    )
}
