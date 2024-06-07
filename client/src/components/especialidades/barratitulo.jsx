import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { set_open_modal_new_especialidad } from '../../redux/actions/data'

export default function BarraTitulo({proporcional}) {

    const naviate = useNavigate()
    const dispatch = useDispatch()

    const [boton_agregar, setBotonAgregar] = useState(false)

    return (
        <div style={{width: '100%', height: 80 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional, marginTop: 15 / proporcional,
            marginBottom: 15 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 50 / proporcional}}>
                <div style={{widt: '30%', height: 50 / proporcional}}>
                    <h1 style={{color: 'rgb(32, 34, 35', fontFamily: 'Nunito, sans-serif', fontSize: 22 / proporcional, fontWeight: 500, lineHeight: `${28 / proporcional}px`,
                        marginBottom: 0}}>
                        Hola, bienvenido de nuevo!
                    </h1>
                    <span style={{color: 'rgb(98, 101, 105', fontSize: 15 / proporcional, fontWeight: 400, lineHeight: `${22 / proporcional}px`}}>
                        Especialidades
                    </span>
                </div>
                <div className='d-flex justify-content-end' style={{width: '70%', height: 50 / proporcional}}>
                    <button className={boton_agregar ? 'btn rounded shadow' : 'btn rounded'} 
                        style={{width: 200 / proporcional, height: 35 / proporcional, background: 'rgb(130, 180, 64)', color: 'white', fontSize: 14 / proporcional, fontWeight: 300,
                                lineHeight: `${13 / proporcional}px`}} onMouseOver={() => setBotonAgregar(true)} onMouseLeave={() => setBotonAgregar(false)}
                                onClick={() => dispatch(set_open_modal_new_especialidad(true))}>
                        Agregar nuevo
                    </button>
                </div>
            </div>
        </div>
    )
}
