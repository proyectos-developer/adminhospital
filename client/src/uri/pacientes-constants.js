import { constantes } from "./constantes"

export const pacientesConstants = (id = 0, search = 0, order_by = 0, order = 0, begin = 0, amount = 16, data = {}, reset = false) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        new_paciente: {
            path: `paciente`,
            stateType: 'new_paciente',
            reset: reset,
            data: data
        },
        update_paciente: {
            path: `paciente/${id}`,
            stateType: 'update_paciente',
            reset: reset,
            data: data
        },
        get_paciente: {
            path: `paciente/${id}`,
            stateType: 'get_paciente',
            reset: reset,
        },
        get_pacientes_filtros: {
            path: `pacientes/search/${search}/order/${order_by}/${order}/${begin}/${amount}`,
            stateType: 'get_pacientes_filtros',
            reset: reset,
        },
        delete_paciente: {
            path: `delete/paciente/${id}`,
            stateType: 'delete_paciente',
            reset: reset,
            data: data
        }
    }
}