import React, { useEffect, useState } from 'react'

import {useDispatch, useSelector} from 'react-redux'

import icono_asterisco from '../../assets/iconos/icono_asterisco_red_96.png'
import icono_facebook from '../../assets/iconos/icono_facebook_grey_96.png'
import icono_instagram from '../../assets/iconos/icono_instagram_grey_96.png'
import icono_twitter from '../../assets/iconos/icono_twitter_grey_96.png'
import icono_linkedin from '../../assets/iconos/icono_linkedin_grey_96.png'

import {doctoresdata} from '../../redux/slice/doctoresdata.js'
import {doctoresConstants} from '../../uri/doctores-constants.js'
import { useNavigate } from 'react-router-dom'

export default function SocialMedia({proporcional}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [url_facebook, setUrlFacebook] = useState('')
    const [url_twitter, setUrlTwitter] = useState('')
    const [url_linkedin, setUrlLinkedin] = useState('')
    const [url_instagram, setUrlInstagram] = useState('')

    const [eurl_facebook, setEUrlFacebook] = useState('')
    const [eurl_twitter, setEUrlTwitter] = useState('')
    const [eurl_linkedin, setEUrLinkedin] = useState('')
    const [eurl_instagram, setEUrlInstagram] = useState('')

    const [boton_guardar, setBotonGuardar] = useState(false)
    const [boton_cancelar, setBotonCancelar] = useState (false)

    const {new_red_doctor} = useSelector(({doctores_data}) => doctores_data)

    useEffect(() => {
        if (new_red_doctor && new_red_doctor.success === true && new_red_doctor.red_doctor){

        }
    }, [new_red_doctor])

    const guardar_datos = () => {
        if (url_facebook === '' || url_twitter === '' || url_linkedin === '' || url_instagram === ''){
            setEUrlFacebook(url_facebook === '' ? true :false)
            setEUrlTwitter(url_twitter === '' ? true :false)
            setEUrLinkedin(url_linkedin === '' ? true :false)
            setEUrlInstagram(url_instagram === '' ? true :false)
        }else{
            setEUrlFacebook(false)
            setEUrlTwitter(false)
            setEUrLinkedin(false)
            setEUrlInstagram(false)
            const redes_doctor = {
                url_facebook: url_facebook,
                url_twitter: url_twitter,
                url_instagram: url_instagram,
                url_linkedin: url_linkedin,
                usuario: ''
            }
            dispatch(doctoresdata(doctoresConstants(0, 0, 0, 0, 0, 0, redes_doctor, false).new_red_doctor))
        }
    }

    const cancelar_guardado = () => {
        setEUrlFacebook(false)
        setEUrlTwitter(false)
        setEUrLinkedin(false)
        setEUrlInstagram(false)
        navigate ('/doctores')
    }

    return (
        <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
            <div style={{width: '100%', height: 'auto', background: 'white', padding: 20 / proporcional}}>
                <h2 style={{color: 'rgb(51, 51, 51)', fontFamily: 'Nunito, sans-serif', fontSize: 17 / proporcional, fontWeight: 400, lineHeight: `${20 / proporcional}px`,
                    marginBottom: 20 / proporcional}}>
                    Información de redes sociales
                </h2>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '49%', height: 91 / proporcional}}>
                        <div style={{width: '100%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                border: eurl_facebook ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                    marginRight: 5 / proporcional, fontFamily: 'Nunito, sans-serif'}}>
                                    Facebook
                                </label>
                                <img src={icono_asterisco} style={{width: 8 / proporcional, height: 8 / proporcional}}/>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 22 / proporcional}}>
                                <img src={icono_facebook} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 2 / proporcional}}/>
                                <input  
                                    type='default'
                                    className='form-control border-0'
                                    style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                            padding: 0}}
                                    value={url_facebook}
                                    onChange={(event) => setUrlFacebook(event.target.value)}
                                    placeholder=''
                                    id='url_facebook'/>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '49%', height: 91 / proporcional}}>
                        <div style={{width: '100%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                border: eurl_twitter ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                    marginRight: 5 / proporcional, fontFamily: 'Nunito, sans-serif'}}>
                                    Twitter
                                </label>
                                <img src={icono_asterisco} style={{width: 8 / proporcional, height: 8 / proporcional}}/>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 22 / proporcional}}>
                                <img src={icono_twitter} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 2 / proporcional}}/>
                                <input  
                                    type='default'
                                    className='form-control border-0'
                                    style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                            padding: 0}}
                                    value={url_twitter}
                                    onChange={(event) => setUrlTwitter(event.target.value)}
                                    placeholder=''
                                    id='url_twitter'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '49%', height: 91 / proporcional}}>
                        <div style={{width: '100%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                border: eurl_instagram ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                    marginRight: 5 / proporcional, fontFamily: 'Nunito, sans-serif'}}>
                                    Instagram
                                </label>
                                <img src={icono_asterisco} style={{width: 8 / proporcional, height: 8 / proporcional}}/>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 22 / proporcional}}>
                                <img src={icono_instagram} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 2 / proporcional}}/>
                                <input  
                                    type='default'
                                    className='form-control border-0'
                                    style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                            padding: 0}}
                                    value={url_instagram}
                                    onChange={(event) => setUrlInstagram(event.target.value)}
                                    placeholder=''
                                    id='url_instagram'/>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '49%', height: 91 / proporcional}}>
                        <div style={{width: '100%', height: 73 / proporcional, padding: 10 / proporcional, marginBottom: 16 / proporcional, 
                                border: eurl_linkedin ? '1px solid red' : '1px solid rgb(236, 236, 236)'}}>
                            <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 8 / proporcional}}>
                                <label style={{color: 'rgb(119, 119, 119)', cursor: 'default', fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${19 / proporcional}px`, 
                                    marginRight: 5 / proporcional, fontFamily: 'Nunito, sans-serif'}}>
                                    Linkedin
                                </label>
                                <img src={icono_asterisco} style={{width: 8 / proporcional, height: 8 / proporcional}}/>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 22 / proporcional}}>
                                <img src={icono_linkedin} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 2 / proporcional}}/>
                                <input  
                                    type='default'
                                    className='form-control border-0'
                                    style={{width: '100%', height: 22 / proporcional, fontSize: 15 / proporcional, color: 'rgb(73, 80, 87)', fontWeight: 400, lineHeight: `${22 / proporcional}px`,
                                            padding: 0}}
                                    value={url_linkedin}
                                    onChange={(event) => setUrlLinkedin(event.target.value)}
                                    placeholder=''
                                    id='url_linkedin'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 40 / proporcional}}>
                    <button className='btn' style={{width: 100 / proporcional, height: 40 / proporcional, background: boton_guardar ? 'white' : 'rgb(130, 180, 64)', 
                            fontSize: 14 / proporcional, color: boton_guardar ? 'rgb(130, 180, 64)' : 'white',
                            fontFamily: 'Nunito, sans-serif', lineHeight: `${22 / proporcional}px`, fontWeight: 300, marginRight: 10 / proporcional,
                            border: '1px solid rgb(130, 180, 64)'}}
                            onMouseOver={() => setBotonGuardar(true)} onMouseLeave={() => setBotonGuardar(false)}
                            onClick={() => guardar_datos()}>
                        Guardar
                    </button>
                    <button className='btn' style={{width: 100 / proporcional, height: 40 / proporcional, background: boton_cancelar ? 'rgb(3, 146, 207)' : 'white', 
                            fontSize: 14 / proporcional, 
                            color: boton_cancelar ? 'white' : 'rgb(3, 146, 207)',
                            fontFamily: 'Nunito, sans-serif', lineHeight: `${22 / proporcional}px`, fontWeight: 300, border: '1px solid rgb(3, 146, 207)'}}
                            onMouseOver={() => setBotonCancelar(true)} onMouseLeave={() => setBotonCancelar(false)}
                            onClick={() => cancelar_guardado()}>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}
