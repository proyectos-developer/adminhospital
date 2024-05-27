import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './styles.css'

import GlobalPanel from './components/global/panel.jsx'
import GlobalPanelTablet from './components/global/paneltablet.jsx'
import GlobalPanelCell from './components/global/panelcell.jsx'

import DoctoresPanel from './components/doctores/panel.jsx'
import DoctoresPanelTablet from './components/doctores/paneltablet.jsx'
import DoctoresPanelCell from './components/doctores/panelcell.jsx'

import NuevoDoctor from './components/doctores/nuevo.jsx'
import NuevoDoctorTablet from './components/doctores/nuevotablet.jsx'
import NuevoDoctorCell from './components/doctores/nuevocell.jsx'

export default function App() {
    const [width, setWidth] = useState (window.outerWidth)

    useEffect(() => {
      window.addEventListener('resize', handle_resize)

      return () => {
        window.removeEventListener('resize', handle_resize)
      }
    }, [])

    const handle_resize = () => {
      setWidth(window.outerWidth)
    }

    return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={width < 500 ? <GlobalPanelCell   proporcional={499 / width}/> : 
                                       width < 991 ? <GlobalPanelTablet proporcional={991 / width}/> : 
                                                     <GlobalPanel       proporcional={1920 / width} />}>

                  <Route path='/doctores' element={width < 500 ? <DoctoresPanelCell   proporcional={499 / width}/> : 
                                                   width < 991 ? <DoctoresPanelTablet proporcional={991 / width}/> : 
                                                                 <DoctoresPanel       proporcional={1920 / width} />}>
                                                                  
                    <Route path='nuevo-doctor' element={width < 500 ? <NuevoDoctorCell   proporcional={499 / width}/> : 
                                                         width < 991 ? <NuevoDoctorTablet proporcional={991 / width}/> : 
                                                                       <NuevoDoctor       proporcional={1920 / width} />}></Route>

                  </Route>
              </Route>
          </Routes>
      </BrowserRouter>
    )
}
