import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './styles.css'

import GlobalPanel from './components/global/panel.jsx'
import GlobalPanelTablet from './components/global/paneltablet.jsx'
import GlobalPanelCell from './components/global/panelcell.jsx'

import DashboardPanel from './components/dashboard/panel.jsx'
import DashboardPanelTablet from './components/dashboard/paneltablet.jsx'
import DashboardPanelCell from './components/dashboard/panelcell.jsx'

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

import AgendaDoctores from './components/doctores/agenda.jsx'
import AgendaDoctoresTablet from './components/doctores/agendatablet.jsx'
import AgendaDoctoresCell from './components/doctores/agendacell.jsx'

import CitasPanel from './components/citas/panel.jsx'
import CitasPanelTablet from './components/citas/paneltablet.jsx'
import CitasPanelCell from './components/citas/panelcell.jsx'

import TareasPanel from './components/tareas/panel.jsx'
import TareasPanelTablet from './components/tareas/paneltablet.jsx'
import TareasPanelCell from './components/tareas/panelcell.jsx'

import PacientesPanel from './components/pacientes/panel.jsx'
import PacientesPanelTablet from './components/pacientes/paneltablet.jsx'
import PacientesPanelCell from './components/pacientes/panelcell.jsx'

import ListaPacientes from './components/pacientes/lista.jsx'
import ListaPacientesTablet from './components/pacientes/listatablet.jsx'
import ListaPacientesCell from './components/pacientes/listacell.jsx'

import Paciente from './components/pacientes/detalles.jsx'
import PacienteTablet from './components/pacientes/detallestablet.jsx'
import PacienteCell from './components/pacientes/detallescell.jsx'

import NuevoPaciente from './components/pacientes/nuevo.jsx'
import NuevoPacienteTablet from './components/pacientes/nuevotablet.jsx'
import NuevoPacienteCell from './components/pacientes/nuevocell.jsx'

import FacturasPendientes from './components/pacientes/facturaspendientes.jsx'
import FacturasPendientesTablet from './components/pacientes/facturaspendientestablet.jsx'
import FacturasPendientesCell from './components/pacientes/facturaspendientescell.jsx'

import CuartosAsignadosPanel from './components/cuartos/panel.jsx'
import CuartosAsignadosPanelTablet from './components/cuartos/paneltablet.jsx'
import CuartosAsignadosPanelCell from './components/cuartos/panelcell.jsx'

import ListaCuartosAsignados from './components/cuartos/lista.jsx'
import ListaCuartosAsignadosTablet from './components/cuartos/listatablet.jsx'
import ListaCuartosAsignadosCell from './components/cuartos/listacell.jsx'

import AsignarCuarto from './components/cuartos/nuevo.jsx'
import AsignarCuartoTablet from './components/cuartos/nuevotablet.jsx'
import AsignarCuartoCell from './components/cuartos/nuevocell.jsx'

import EspecialidadesPanel from './components/especialidades/panel.jsx'
import EspecialidadesPanelTablet from './components/especialidades/paneltablet.jsx'
import EspecialidadesPanelCell from './components/especialidades/panelcell.jsx'

import PagosPanel from './components/pagos/panel.jsx'
import PagosPanelTablet from './components/pagos/paneltablet.jsx'
import PagosPanelCell from './components/pagos/panelcell.jsx'

import ListaPagos from './components/pagos/lista.jsx'
import ListaPagosTablet from './components/pagos/listatablet.jsx'
import ListaPagosCell from './components/pagos/listacell.jsx'

import NuevoPago from './components/pagos/nuevo.jsx'
import NuevoPagoTablet from './components/pagos/nuevotablet.jsx'
import NuevoPagoCell from './components/pagos/nuevocell.jsx'

import Facturas from './components/pagos/facturas.jsx'
import FacturasTablet from './components/pagos/facturastablet.jsx'
import FacturasCell from './components/pagos/facturascell.jsx'

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

                  <Route index element={width < 500 ? <DashboardPanelCell   proporcional={499 / width}/> : 
                                        width < 991 ? <DashboardPanelTablet proporcional={991 / width}/> : 
                                                      <DashboardPanel       proporcional={1920 / width} />}/>

                  <Route path='doctores' element={width < 500 ? <DoctoresPanelCell   proporcional={499 / width}/> : 
                                                   width < 991 ? <DoctoresPanelTablet proporcional={991 / width}/> : 
                                                                 <DoctoresPanel       proporcional={1920 / width} />}>
                                                                  
                    <Route index element={width < 500 ? <ListaDoctoresCell   proporcional={499 / width}/> : 
                                          width < 991 ? <ListaDoctoresTablet proporcional={991 / width}/> : 
                                                        <ListaDoctores       proporcional={1920 / width} />}/>
                                                        
                    <Route path='doctor/:doctor' element={width < 500 ? <DoctorCell   proporcional={499 / width}/> : 
                                                          width < 991 ? <DoctorTablet proporcional={991 / width}/> : 
                                                                        <Doctor       proporcional={1920 / width} />}/>
                                                                  
                    <Route path='nuevo' element={width < 500 ? <NuevoDoctorCell   proporcional={499 / width}/> : 
                                                 width < 991 ? <NuevoDoctorTablet proporcional={991 / width}/> : 
                                                               <NuevoDoctor       proporcional={1920 / width} />}/>
                                                                  
                    <Route path='agenda' element={width < 500 ? <AgendaDoctoresCell   proporcional={499 / width}/> : 
                                                  width < 991 ? <AgendaDoctoresTablet proporcional={991 / width}/> : 
                                                                <AgendaDoctores       proporcional={1920 / width} />}/>

                  </Route>

                  <Route path='citas' element={width < 500 ? <CitasPanelCell   proporcional={499 / width}/> : 
                                               width < 991 ? <CitasPanelTablet proporcional={991 / width}/> : 
                                                             <CitasPanel       proporcional={1920 / width} />}/>

                  <Route path='tareas' element={width < 500 ? <TareasPanelCell   proporcional={499 / width}/> : 
                                                width < 991 ? <TareasPanelTablet proporcional={991 / width}/> : 
                                                              <TareasPanel       proporcional={1920 / width} />}/>

                  <Route path='pacientes' element={width < 500 ? <PacientesPanelCell   proporcional={499 / width}/> : 
                                                    width < 991 ? <PacientesPanelTablet proporcional={991 / width}/> : 
                                                                  <PacientesPanel       proporcional={1920 / width} />}>
                                                                  
                    <Route index element={width < 500 ? <ListaPacientesCell   proporcional={499 / width}/> : 
                                          width < 991 ? <ListaPacientesTablet proporcional={991 / width}/> : 
                                                        <ListaPacientes       proporcional={1920 / width} />}/>
                                                        
                    <Route path='paciente/:paciente' element={width < 500 ? <PacienteCell   proporcional={499 / width}/> : 
                                                              width < 991 ? <PacienteTablet proporcional={991 / width}/> : 
                                                                            <Paciente       proporcional={1920 / width} />}/>
                                                                  
                    <Route path='nuevo' element={width < 500 ? <NuevoPacienteCell   proporcional={499 / width}/> : 
                                                 width < 991 ? <NuevoPacienteTablet proporcional={991 / width}/> : 
                                                               <NuevoPaciente       proporcional={1920 / width} />}/>
                                                                  
                    <Route path='facturas-pendientes' element={width < 500 ? <FacturasPendientesCell   proporcional={499 / width}/> : 
                                                               width < 991 ? <FacturasPendientesTablet proporcional={991 / width}/> : 
                                                                             <FacturasPendientes       proporcional={1920 / width} />}/>
                                                                  

                  </Route>

                  <Route path='cuartos-asignados' element={width < 500 ? <CuartosAsignadosPanelCell   proporcional={499 / width}/> : 
                                                           width < 991 ? <CuartosAsignadosPanelTablet proporcional={991 / width}/> : 
                                                                         <CuartosAsignadosPanel       proporcional={1920 / width} />}>
                                                                  
                    <Route index element={width < 500 ? <ListaCuartosAsignadosCell   proporcional={499 / width}/> : 
                                          width < 991 ? <ListaCuartosAsignadosTablet proporcional={991 / width}/> : 
                                                        <ListaCuartosAsignados       proporcional={1920 / width} />}/>
                                                        
                    <Route path='asignar' element={width < 500 ? <AsignarCuartoCell   proporcional={499 / width}/> : 
                                                   width < 991 ? <AsignarCuartoTablet proporcional={991 / width}/> : 
                                                                 <AsignarCuarto       proporcional={1920 / width} />}/>
                                                                  
                  </Route>

                  <Route path='especialidades' element={width < 500 ? <EspecialidadesPanelCell   proporcional={499 / width}/> : 
                                                        width < 991 ? <EspecialidadesPanelTablet proporcional={991 / width}/> : 
                                                                      <EspecialidadesPanel       proporcional={1920 / width} />}/>

                  <Route path='pagos' element={width < 500 ? <PagosPanelCell   proporcional={499 / width}/> : 
                                               width < 991 ? <PagosPanelTablet proporcional={991 / width}/> : 
                                                             <PagosPanel       proporcional={1920 / width} />}>
                                                                  
                    <Route index element={width < 500 ? <ListaPagosCell   proporcional={499 / width}/> : 
                                          width < 991 ? <ListaPagosTablet proporcional={991 / width}/> : 
                                                        <ListaPagos       proporcional={1920 / width} />}/>
                                                        
                    <Route path='agregar-pago' element={width < 500 ? <NuevoPagoCell   proporcional={499 / width}/> : 
                                                        width < 991 ? <NuevoPagoTablet proporcional={991 / width}/> : 
                                                                      <NuevoPago       proporcional={1920 / width} />}/>

                    <Route path='facturas' element={width < 500 ? <FacturasCell   proporcional={499 / width}/> : 
                                                    width < 991 ? <FacturasTablet proporcional={991 / width}/> : 
                                                                  <Facturas       proporcional={1920 / width} />}/>
                                                                  
                  </Route>
              </Route>
          </Routes>
      </BrowserRouter>
    )
}
