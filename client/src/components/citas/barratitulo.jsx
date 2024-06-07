import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BarraTitulo({proporcional}) {

    const naviate = useNavigate()

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
                        Hacer una cita
                    </span>
                </div>
                <div className='d-flex justify-content-end' style={{width: '70%', height: 50 / proporcional}}>
                    <div style={{width: 'auto', paddingRight: 24 / proporcional, marginRight: 24 / proporcional, borderRight: '1px solid rgb(236, 236, 236)'}}>
                        <p style={{color: 'rgb(154, 154, 154)', fontFamily: 'Nunito, sans-serif', fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`,
                                marginBottom: 4 / proporcional, fontWeight: 400}}>Fiebre</p> 
                        <h4 style={{fontSize: 20 / proporcional, color: 'rgb(98, 101, 105)', fontWeight: 500, lineHeight: `${24 / proporcional}px`, marginBottom: 0,
                                    fontFamily: 'Nunito, sans-serif'}}>214</h4>
                    </div>
                    <div style={{width: 'auto', paddingRight: 24 / proporcional, marginRight: 24 / proporcional, borderRight: '1px solid rgb(236, 236, 236)'}}>
                        <p style={{color: 'rgb(154, 154, 154)', fontFamily: 'Nunito, sans-serif', fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`,
                                marginBottom: 4 / proporcional, fontWeight: 400}}>Colera</p> 
                        <h4 style={{fontSize: 20 / proporcional, color: 'rgb(98, 101, 105)', fontWeight: 500, lineHeight: `${24 / proporcional}px`, marginBottom: 0,
                                    fontFamily: 'Nunito, sans-serif'}}>214</h4>
                    </div>
                    <div style={{width: 'auto', paddingRight: 24 / proporcional, marginRight: 24 / proporcional}}>
                        <p style={{color: 'rgb(154, 154, 154)', fontFamily: 'Nunito, sans-serif', fontSize: 14 / proporcional, lineHeight: `${21 / proporcional}px`,
                                marginBottom: 4 / proporcional, fontWeight: 400}}>Covid 19</p> 
                        <h4 style={{fontSize: 20 / proporcional, color: 'rgb(98, 101, 105)', fontWeight: 500, lineHeight: `${24 / proporcional}px`, marginBottom: 0,
                                    fontFamily: 'Nunito, sans-serif'}}>214</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
