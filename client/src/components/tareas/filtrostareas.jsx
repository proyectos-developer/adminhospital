import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { set_open_modal_new_tarea } from '../../redux/actions/data'

export default function FiltrosTareas({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [filtro_menu, setFiltroMenu] = useState('hacer')

    return (
        <div style={{width: '100%', height: 56 / proporcional, background: 'rgb(32, 34, 36)', paddingLeft: 16 / proporcional, paddingRight: 16 / proporcional, paddingTop: 8 / proporcional,
                    paddingBottom: 8 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 40 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: '80%', height: 40 / proporcional}}>
                    <p style={{color: 'rgb(0, 123, 255)', fontSize: 20 / proporcional, fontWeight: 400, lineHeight: `${40 / proporcional}px`, marginBottom: 0, marginRight: 16 / proporcional}} 
                        onClick={() => navigate ('/')}>
                        SH
                    </p>
                    <p style={{color: filtro_menu === 'hacer' ? 'rgb(130, 180, 64)' : 'rgb(98, 101, 105)', fontSize: 15 / proporcional, fontWeight: 700, lineHeight: `${40 / proporcional}px`, marginBottom: 0, paddingLeft: 8 / proporcional, 
                            cursor: 'pointer', paddingRight:8 / proporcional}} onClick={() => setFiltroMenu('hacer')}>
                        Por hacer
                    </p>
                    <p style={{color: filtro_menu === 'hechas' ? 'rgb(130, 180, 64)' : 'rgb(98, 101, 105)', fontSize: 15 / proporcional, fontWeight: 700, lineHeight: `${40 / proporcional}px`, marginBottom: 0, paddingLeft: 8 / proporcional, 
                            cursor: 'pointer', paddingRight:8 / proporcional}} onClick={() => setFiltroMenu('hechas')}>
                        Hechas
                    </p>
                    <p style={{color: filtro_menu === 'importantes' ? 'rgb(130, 180, 64)' : 'rgb(98, 101, 105)', fontSize: 15 / proporcional, fontWeight: 700, lineHeight: `${40 / proporcional}px`, marginBottom: 0, paddingLeft: 8 / proporcional, 
                            cursor: 'pointer', paddingRight:8 / proporcional}} onClick={() => setFiltroMenu('importantes')}>
                        Importantes
                    </p>
                    <p style={{color: filtro_menu === 'basura' ? 'rgb(130, 180, 64)' : 'rgb(98, 101, 105)', fontSize: 15 / proporcional, fontWeight: 700, lineHeight: `${40 / proporcional}px`, marginBottom: 0, paddingLeft: 8 / proporcional, 
                            cursor: 'pointer', paddingRight:8 / proporcional}} onClick={() => setFiltroMenu('basura')}>
                        Basura
                    </p>
                </div>
                <div className='d-flex justify-content-end' style={{width: '20%', height: 40 / proporcional}}>
                    <button className='btn rounded' style={{width: 150 / proporcional, color: 'white', height: 40 / proporcional, background: 'rgb(130, 180, 64', fontSize: 14 / proporcional, fontWeight: 300}}
                        onClick={() => dispatch(set_open_modal_new_tarea(true))}>
                        Agregar tarea
                    </button>
                </div>
            </div>
        </div>
    )
}
