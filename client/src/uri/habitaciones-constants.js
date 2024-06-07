import { constantes } from "./constantes"

export const habitacionesConstants = (id = 0, search = 0, order_by = 0, order = 0, begin = 0, amount = 16, data = {}, reset = false) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        new_habitacion_paciente: {
            path: `habitacion/paciente`,
            stateType: 'new_habitacion_paciente',
            reset: reset,
            data: data
        },
        update_habitacion_paciente: {
            path: `habitacion/paciente/${id}`,
            stateType: 'update_habitacion_paciente',
            reset: reset,
            data: data
        },
        get_habitacion_paciente: {
            path: `habitacion/paciente/${id}`,
            stateType: 'get_habitacion_paciente',
            reset: reset,
            data: data
        },
        get_habitaciones_pacientes_search: {
            path: `habitaciones/pacientes/search/${search}/order/${order_by}/${order}/${begin}/${amount}`,
            stateType: 'get_habitaciones_pacientes_search',
            reset: reset,
            data: data
        },
        delete_habitacion_paciente: {
            path: `delete/habitacion/paciente/${id}`,
            stateType: 'delete_habitacion_paciente',
            reset: reset
        }
    }
}