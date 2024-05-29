import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import {doctoresdata} from '../../redux/slice/doctoresdata'
import { doctoresConstants } from '../../uri/doctores-constants'

import InformacionContacto from './informacioncontacto.jsx'
import InformacionExtra from './informacionextra.jsx'

export default function DetallesDoctor({proporcional}) {

    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [doctor, setDoctor] = useState (null)

    const {get_doctor} = useSelector(({doctores_data}) => doctores_data)

    useEffect(() => {
        dispatch(doctoresdata(doctoresConstants(location.pathname.split('/')[3], 0, 0, 0, 0, 0, {}, false).get_doctor))
    }, [])

    useEffect(() => {
        if (get_doctor && get_doctor.success === true && get_doctor.doctor){
            setDoctor(get_doctor.doctor)
        }
    }, [get_doctor])

    return (
        <div className='' style={{width: '100%', height: 'auto'}}>
            {
                doctor !== null ? (
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '32%', height: 'auto'}}>
                            <InformacionContacto proporcional={proporcional} doctor={doctor}/>
                        </div>
                        <div style={{width: '67%', height: 'auto'}}>
                            <InformacionExtra proporcional={proporcional} doctor={doctor}/>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}
