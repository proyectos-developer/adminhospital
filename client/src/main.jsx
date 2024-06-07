import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {Provider} from 'react-redux'
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'

import data from './redux/reducers/data.js'
import doctoresdata from './redux/slice/doctoresdata'
import pacientesdata from './redux/slice/pacientesdata.js'
import calificacionesdata from './redux/slice/calificacionesdata.js'
import valorespacientedata from './redux/slice/valorespacientedata.js'
import tratamientospacientedata from './redux/slice/tratamientospacientedata.js'
import facturasdata from './redux/slice/facturasdata.js'
import habitacionesdata from './redux/slice/habitacionesdata.js'
import especialidadesdata from './redux/slice/especialidadesdata.js'
import pagosdata from './redux/slice/pagosdata.js'
import citasdata from './redux/slice/citasdata.js'
import tareasdata from './redux/slice/tareasdata.js'
import tipohabitaciondata from './redux/slice/tipohabitaciondata.js'
import begindata from './redux/slice/begindata'

const store = configureStore ({
    reducer: ({
        data_actions: data,
        doctores_data: doctoresdata,
        calificaciones_data: calificacionesdata,
        pacientes_data: pacientesdata,
        valorespaciente_data: valorespacientedata,
        tratamientospaciente_data: tratamientospacientedata,
        facturas_data: facturasdata,
        habitaciones_data: habitacionesdata,
        especialidades_data: especialidadesdata,
        pagos_data: pagosdata,
        citas_data: citasdata,
        tareas_data: tareasdata,
        tipohabitacion_data: tipohabitaciondata,
        begin_data: begindata
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false
    })
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
