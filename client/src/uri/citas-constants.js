import { constantes } from "./constantes"

export const citasConstants = (id = 0, search = 0, order_by = 0, order = 0, begin = 0, amount = 16, data = {}, reset = false) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        new_cita: {
            path: `cita`,
            stateType: 'new_cita',
            reset: reset,
            data: data
        },
        update_cita: {
            path: `cita/${id}`,
            stateType: 'update_cita',
            reset: reset,
            data: data
        },
        get_cita: {
            path: `cita/${id}`,
            stateType: 'get_cita',
            reset: reset,
            data: data
        },
        get_citas_search: {
            path: `citas/search/${search}/order/${order_by}/${order}/${begin}/${amount}`,
            stateType: 'get_citas_search',
            reset: reset,
            data: data
        },
        delete_cita: {
            path: `delete/cita/${id}`,
            stateType: 'delete_cita',
            reset: reset
        }
    }
}