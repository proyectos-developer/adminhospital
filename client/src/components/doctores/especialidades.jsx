import React from 'react'

export default function Especialidades({proporcional}) {

    return (
        <div style={{width: '100%', height: 136 / proporcional, padding: 22 / proporcional, background: 'white', marginBottom: 16 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: '100%'}}>
                <div style={{width: '15%', height: '100%', padding: 8 / proporcional}}>
                    <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${22 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 16 / proporcional}}>
                        Dentistas
                    </p>
                    <p style={{fontSize: 22 / proporcional, fontWeight: 500, color: 'rgb(98, 101, 105)', lineHeight: `${39 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 8 / proporcional}}>
                        12
                    </p>
                </div>
                <div style={{width: '15%', height: '100%', padding: 8 / proporcional}}>
                    <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${22 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 16 / proporcional}}>
                        Ginecologo
                    </p>
                    <p style={{fontSize: 22 / proporcional, fontWeight: 500, color: 'rgb(98, 101, 105)', lineHeight: `${39 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 8 / proporcional}}>
                        10
                    </p>
                </div>
                <div style={{width: '15%', height: '100%', padding: 8 / proporcional}}>
                    <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${22 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 16 / proporcional}}>
                        Enfermeras
                    </p>
                    <p style={{fontSize: 22 / proporcional, fontWeight: 500, color: 'rgb(98, 101, 105)', lineHeight: `${39 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 8 / proporcional}}>
                        58
                    </p>
                </div>
                <div style={{width: '15%', height: '100%', padding: 8 / proporcional}}>
                    <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${22 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 16 / proporcional}}>
                        Audiología
                    </p>
                    <p style={{fontSize: 22 / proporcional, fontWeight: 500, color: 'rgb(98, 101, 105)', lineHeight: `${39 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 8 / proporcional}}>
                        20
                    </p>
                </div>
                <div style={{width: '15%', height: '100%', padding: 8 / proporcional}}>
                    <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${22 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 16 / proporcional}}>
                        Técnicos
                    </p>
                    <p style={{fontSize: 22 / proporcional, fontWeight: 500, color: 'rgb(98, 101, 105)', lineHeight: `${39 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 8 / proporcional}}>
                        25
                    </p>
                </div>
                <div style={{width: '15%', height: '100%', padding: 8 / proporcional}}>
                    <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(98, 101, 105)', lineHeight: `${22 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 16 / proporcional}}>
                        Odontologos
                    </p>
                    <p style={{fontSize: 22 / proporcional, fontWeight: 500, color: 'rgb(98, 101, 105)', lineHeight: `${39 / proporcional}px`, fontFamily: 'Nunito, sans-serif',
                        marginBottom: 8 / proporcional}}>
                        23
                    </p>
                </div>
            </div>
        </div>
    )
}
