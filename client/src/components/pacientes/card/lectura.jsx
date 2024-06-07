import React, { useEffect, useState } from 'react'

import axios from 'axios'

import icono_edit from '../../../assets/iconos/icono_edit_grey_96.png'
import icono_delete from '../../../assets/iconos/icono_delete_grey_96.png'

import { constantes } from '../../../uri/constantes'

export default function CardLectura({proporcional, tratamiento, index}) {

    const [doctor, setDoctor] = useState({})

    const [boton_edit, setBotonEdit] = useState(false)
    const [boton_eliminar, setBotonEliminar] = useState(false)

    useEffect(() => {
        axios.get (`${constantes().url_principal[0].url}/doctor/${tratamiento.usuario_doctor}`)
            .then ((res) => {
                setDoctor (res.data.doctor)
            }).catch ((err) => {

            })
    }, [])

    return (
        <div className='d-flex' style={{width: '100%', height: 46 / proporcional, background: index % 2 === 0 ? '#fafafa' : 'white'}}>
            <div style={{width: '24%', height: 46 / proporcional, padding: 12 / proporcional}}>
                <p style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'rgb(98, 101, 105)', fontWeight: 400}}>
                    {tratamiento.fecha}
                </p>
            </div>
            <div style={{width: '24%', height: 46 / proporcional, padding: 12 / proporcional}}>
                {
                    doctor && doctor.nombres ? (
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'rgb(98, 101, 105)', fontWeight: 400}}>
                            {doctor.nombres + ' ' + doctor.apellidos}
                        </p>
                    ) : null
                }
            </div>
            <div style={{width: '24%', height: 46 / proporcional, padding: 12 / proporcional}}>
                <p style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'rgb(98, 101, 105)', fontWeight: 400}}>
                    {tratamiento.tratamiento}
                </p>
            </div>
            <div style={{width: '24%', height: 46 / proporcional, padding: 12 / proporcional}}>
                <p style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'rgb(98, 101, 105)', fontWeight: 400}}>
                    {tratamiento.cargo}
                </p>
            </div>
            <div className='d-flex justify-content-start' style={{width: '24%', height: 46 / proporcional, padding: 12 / proporcional}}>
                <img className={boton_edit ? 'shadow-lg rounded btn' : 'rounded btn'} 
                   src={icono_edit} style={{width: 22 / proporcional, height: 22 / proporcional, background: 'white', padding: 4 / proporcional, marginRight: 10 / proporcional}}
                    onMouseOver={() => setBotonEdit(true)} onMouseLeave={() => setBotonEdit(false)}/>
                <img className={boton_eliminar ? 'shadow-lg rounded btn' : 'rounded btn'} 
                    src={icono_delete} style={{width: 22 / proporcional, height: 22 / proporcional, background: 'white', padding: 4 / proporcional, marginRight: 0 / proporcional}}
                    onMouseOver={() => setBotonEliminar(true)} onMouseLeave={() => setBotonEliminar(false)}/>
            </div>
        </div>
    )
}
