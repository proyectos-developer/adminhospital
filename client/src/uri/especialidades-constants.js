import { constantes } from "./constantes"

export const especialidadesConstants = (id = 0, search = 0, order_by = 0, order = 0, begin = 0, amount = 16, data = {}, reset = false) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        new_especialidad: {
            path: `especialidad`,
            stateType: 'new_especialidad',
            reset: reset,
            data: data
        },
        update_especialidad: {
            path: `especialidad/${id}`,
            stateType: 'update_especialidad',
            reset: reset,
            data: data
        },
        get_especialidad: {
            path: `especialidad/${id}`,
            stateType: 'get_especialidad',
            reset: reset,
            data: data
        },
        get_especialidades_search: {
            path: `especialidades/search/${search}/order/${order_by}/${order}/${begin}/${amount}`,
            stateType: 'get_especialidades_search',
            reset: reset,
            data: data
        }
    }
}