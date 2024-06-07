import React from 'react'

import { Outlet } from 'react-router-dom'
import icono_left from '../../assets/iconos/icono_left_white_96.png'
import icono_right from '../../assets/iconos/icono_right_white_96.png'

import MenuLateral from '../comun/menulateral.jsx'
import MenuSuperior from '../comun/menusuperior.jsx'
import ModalNewTarea from '../modal/newtarea.jsx'
import ModalNewEspecialidad from '../modal/newespecialidad.jsx'

import { useDispatch, useSelector } from 'react-redux'
import { set_open_menu_lateral } from '../../redux/actions/data.js'

export default function GlobalPanel({proporcional}) {

    const dispatch = useDispatch()

    const {open_modal_new_tarea, open_menu_lateral, open_modal_new_especialidad} = useSelector(({data_actions}) => data_actions)
        
    return (
        <div className='position-relative' style={{width: '100%', height: 'auto'}}>
            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                <div style={{width: open_menu_lateral ? '16%' : '0%', height: '100vh', borderRight: '2px solid rgb(130, 180, 64)'}}>
                    {
                        open_menu_lateral ? (
                            <MenuLateral proporcional={proporcional}/>
                        ) : null
                    }
                </div>
                <img className='position-absolute rounded-circle shadow' src={open_menu_lateral ? icono_left : icono_right} 
                        style={{width: 30 / proporcional, height: 30 / proporcional, padding: 7.5 / proporcional, 
                            background: 'rgb(130, 180, 64)', top: 60 / proporcional, left: open_menu_lateral ? 288.52 / proporcional : 0, cursor: 'pointer', zIndex: 999}}
                            onClick={() => dispatch(set_open_menu_lateral(!open_menu_lateral))}/>
                <div className='' style={{width: open_menu_lateral ? '84%' : '100%', height: '100%'}}>
                    <MenuSuperior proporcional={proporcional}/>
                    <Outlet/>
                </div>
            </div>
            {
                open_modal_new_tarea ? (
                    <ModalNewTarea proporcional={proporcional}/>
                ) : null
            }
            {
                open_modal_new_especialidad ? (
                    <ModalNewEspecialidad proporcional={proporcional}/>
                ) : null
            }
        </div>
    )
}
