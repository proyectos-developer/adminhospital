import React from 'react'

import icono_avatar_masculino from '../../../assets/iconos/icono_avatar_masculino_96.png'
import icono_avatar_femenino from '../../../assets/iconos/icono_avatar_femenino_96.png'
import { useNavigate } from 'react-router-dom'

export default function CardPaciente({proporcional, paciente}) {

    const navigate = useNavigate()
    
    return (
        <div className='d-flex' style={{width: '100%', height: 60 / proporcional, borderBottom: '1px solid rgb(236, 236, 236)',
                cursor: 'pointer'}}
            onClick={() => navigate(`/pacientes/paciente/${paciente.usuario_paciente}`)}>
            <div style={{width: '5%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <img className='rounded-circle' src={paciente.genero === 'masculino' ? icono_avatar_masculino : icono_avatar_femenino} 
                    style={{width: 36 / proporcional, height: 36 / proporcional, background: '#dee3e9'}}/>
            </div>
            <div style={{width: '8%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <span style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${36 / proporcional}px`}}>
                    US 00598
                </span>
            </div>
            <div style={{width: '20%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <span style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${36 / proporcional}px`}}>
                    {paciente.nombres + ' ' + paciente.apellidos}
                </span>
            </div>
            <div style={{width: '5%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <span style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${36 / proporcional}px`}}>
                    {paciente.edad}
                </span>
            </div>
            <div style={{width: '32%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <span style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${36 / proporcional}px`}}>
                    {paciente.direccion}
                </span>
            </div>
            <div style={{width: '10%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <span style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${36 / proporcional}px`}}>
                    {paciente.nro_telefono}
                </span>
            </div>
            <div style={{width: '10%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <span style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${36 / proporcional}px`}}>
                    11 Junio 2018
                </span>
            </div>
            <div style={{width: '10%', height: 60 / proporcional, padding: 12 / proporcional}}>
                <span style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', marginBottom: 0, fontFamily: 'Nunito, sans-serif', lineHeight: `${36 / proporcional}px`}}>
                    
                </span>
            </div>
        </div>
    )
}
