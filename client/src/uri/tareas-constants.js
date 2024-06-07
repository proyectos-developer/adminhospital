import { constantes } from "./constantes"

export const tareasConstants = (id = 0, search = 0, order_by = 0, order = 0, begin = 0, amount = 16, data = {}, reset = false) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        new_tarea: {
            path: `tarea`,
            stateType: 'new_tarea',
            reset: reset,
            data: data
        },
        update_tarea: {
            path: `tarea/${id}`,
            stateType: 'update_tarea',
            reset: reset,
            data: data
        },
        get_tarea: {
            path: `tarea/${id}`,
            stateType: 'get_tarea',
            reset: reset,
            data: data
        },
        get_tareas_search: {
            path: `tareas/search/${search}/order/${order_by}/${order}/${begin}/${amount}`,
            stateType: 'get_tareas_search',
            reset: reset,
            data: data
        },
        delete_tarea: {
            path: `delete/tarea/${id}`,
            stateType: 'delete_tarea',
            reset: reset
        }
    }
}