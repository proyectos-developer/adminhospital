import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function BarraTitulo({proporcional}) {

    const location = useLocation()
    const naviate = useNavigate()

    const [pagina, setPagina] = useState('')

    useEffect(() => {
        setPagina(location.pathname.split ('/')[2] ? location.pathname.split ('/')[2] : 'pacientes')
    }, [location.pathname.split ('/')[2]])

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
                        Tu panel principal
                    </span>
                </div>
            </div>
        </div>
    )
}
