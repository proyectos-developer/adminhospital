import { constantes } from "./constantes"

export const doctoresConstants = (id = 0, search = 0, order_by = 0, order = 0, begin = 0, amount = 16, data = {}, reset = false) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        new_doctor: {
            path: `doctor`,
            stateType: 'new_doctor',
            reset: reset,
            data: data
        },
        update_doctor: {
            path: `doctor/${id}`,
            stateType: 'update_doctor',
            reset: reset,
            data: data
        },
        get_doctor: {
            path: `doctor/${id}`,
            stateType: 'get_doctor',
            reset: reset,
        },
        get_doctores_filtros: {
            path: `doctores/search/${search}/order/${order_by}/${order}/${begin}/${amount}`,
            stateType: 'get_doctores_filtros',
            reset: reset,
        },
        new_red_doctor: {
            path: `red/doctor`,
            stateType: 'new_red_doctor',
            reset: reset,
            data: data
        },
        update_red_doctor: {
            path: `red/doctor/${id}`,
            stateType: 'update_red_doctor',
            reset: reset,
            data: data
        },
        get_red_doctor: {
            path: `red/doctor/${id}`,
            stateType: 'get_red_doctor',
            reset: reset
        }
    }
}