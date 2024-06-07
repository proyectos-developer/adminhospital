import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { set_open_modal_new_tarea } from '../../redux/actions/data'

export default function ModalNewTarea({proporcional}) {

    const dispatch = useDispatch()

    const [nombre_tarea, setNombreTarea] = useState('')
    const [detalles_tarea, setDetallesTarea] = useState('')  
    
    const [boton_cerrar, setBotonCerrar] = useState(false)
    const [boton_agregar, setBotonAgregar] = useState(false)

    const agregar_tarea = () => {
        
    }

    return (
        <div className='position-fixed top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(91, 101, 105, 0.6)', zIndex: 9999}}>
            <div className='position-absolute shadow rounded' style={{width: '25%', height: 'auto', top: 56 / proporcional, left: '37.5%',
                    background: 'white', zIndex: 99999}}>
                <div style={{width: '100%', height: 'auto', padding: 16 / proporcional, borderBottom: '1px solid rgb(236, 236, 236)'}}>
                    <h5 style={{fontSize: 16 / proporcional, fontWeight: 500, fontFamily: 'Nunito, sans-serif', color: 'rgb(98, 101, 105)', marginBottom: 0,
                            lineHeight: `${24 / proporcional}px`}}>
                        Agregar tarea
                    </h5>
                </div>
                <div style={{width: '100%', height: 'auto', padding: 16 / proporcional, borderBottom: '1px solid rgb(236, 236, 236)'}}>
                    <div style={{width: '100%', height: 'auto', border: '1px solid rgb(236, 236, 236)', padding: 10 / proporcional, marginBottom: 16 / proporcional}}>
                        <label style={{fontSize: 13 / proporcional, fontWeight: 400, color: 'rgb(119, 119, 119)', marginBottom: 8 / proporcional, fontFamily: 'Nunito, sans-serif', 
                            lineHeight: `${19 / proporcional}px`}}>
                            Título tarea
                        </label>
                        <input 
                            type='default'
                            className='form-control border-0'
                            value={nombre_tarea}
                            id='nombre_tarea'
                            onChange={(event) => setNombreTarea(event.target.value)}
                            placeholder='Título tarea'
                            style={{width: '100%', height: 22 / proporcional, color: 'rgb(73, 80, 73)', fontSize: 15 / proporcional, fontWeight: 500, fontFamily: 'Nunito, sans-serif',
                                    lineHeight: `${22 / proporcional}px`}}/>
                    </div>
                    <div style={{width: '100%', height: 'auto', border: '1px solid rgb(236, 236, 236)', padding: 10 / proporcional, marginBottom: 16 / proporcional}}>
                        <label style={{fontSize: 13 / proporcional, fontWeight: 400, color: 'rgb(119, 119, 119)', marginBottom: 8 / proporcional, fontFamily: 'Nunito, sans-serif', 
                            lineHeight: `${19 / proporcional}px`}}>
                            Descripción
                        </label>
                        <textarea 
                            rows={4}
                            className='form-control border-0'
                            value={detalles_tarea}
                            id='detalles_tarea'
                            onChange={(event) => setDetallesTarea(event.target.value)}
                            placeholder='Descripción tarea'
                            style={{width: '100%', height: 90 / proporcional, color: 'rgb(73, 80, 73)', fontSize: 15 / proporcional, fontWeight: 500, fontFamily: 'Nunito, sans-serif',
                                    lineHeight: `${22 / proporcional}px`}}/>
                    </div>
                </div>
                <div className='d-flex justify-content-end' style={{width: '100%', height: 'auto', padding: 12 / proporcional}}>
                    <button className={boton_cerrar ? 'btn shadow rounded' : 'btn rounded'} style={{width: 100 / proporcional, height: 35 / proporcional, background: 'white', border: '1px solid rgb(236, 236, 236)',
                            fontSize: 15 / proporcional, fontFamily: 'Nunito, sans-serif', fontWeight: 300,  color: 'rgb(85, 85, 85)', marginRight: 10 / proporcional,
                            lineHeight: `${15 / proporcional}px`}} onClick={() => dispatch(set_open_modal_new_tarea(false))}
                            onMouseOver={() => setBotonCerrar(true)} onMouseLeave={() => setBotonCerrar(false)}>
                            Cerrar
                    </button>
                    <button className={boton_agregar ? 'btn shadow rounded' : 'btn rounded'} style={{width: 100 / proporcional, height: 35 / proporcional, background: 'rgb(130, 180, 64)', 
                            fontSize: 15 / proporcional, fontFamily: 'Nunito, sans-serif', fontWeight: 300,  color: 'white',
                            lineHeight: `${15 / proporcional}px`}} onClick={() => agregar_tarea()}
                            onMouseOver={() => setBotonAgregar(true)} onMouseLeave={() => setBotonAgregar(false)}>
                            Agregar
                    </button>
                </div>
            </div> 
        </div>
    )
}
