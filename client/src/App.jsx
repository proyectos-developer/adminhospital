import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './styles.css'

import GlobalPanel from './components/global/panel.jsx'
import GlobalPanelTablet from './components/global/paneltablet.jsx'
import GlobalPanelCell from './components/global/panelcell.jsx'

import DoctoresPanel from './components/doctores/panel.jsx'
import DoctoresPanelTablet from './components/doctores/paneltablet.jsx'
import DoctoresPanelCell from './components/doctores/panelcell.jsx'

import ListaDoctores from './components/doctores/lista.jsx'
import ListaDoctoresTablet from './components/doctores/listatablet.jsx'
import ListaDoctoresCell from './components/doctores/listacell.jsx'

import Doctor from './components/doctores/detalles.jsx'
import DoctorTablet from './components/doctores/detallestablet.jsx'
import DoctorCell from './components/doctores/detallescell.jsx'

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
                                                                  
                    <Route index element={width < 500 ? <ListaDoctoresCell   proporcional={499 / width}/> : 
                                          width < 991 ? <ListaDoctoresTablet proporcional={991 / width}/> : 
                                                        <ListaDoctores       proporcional={1920 / width} />}/>
                                                        
                    <Route path='doctor/:doctor' element={width < 500 ? <DoctorCell   proporcional={499 / width}/> : 
                                                          width < 991 ? <DoctorTablet proporcional={991 / width}/> : 
                                                                        <Doctor       proporcional={1920 / width} />}/>
                                                                  
                    <Route path='nuevo-doctor' element={width < 500 ? <NuevoDoctorCell   proporcional={499 / width}/> : 
                                                        width < 991 ? <NuevoDoctorTablet proporcional={991 / width}/> : 
                                                                      <NuevoDoctor       proporcional={1920 / width} />}/>

                  </Route>
              </Route>
          </Routes>
      </BrowserRouter>
    )
}
