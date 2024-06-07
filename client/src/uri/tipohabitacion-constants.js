import { constantes } from "./constantes"

export const tipohabitacionConstants = (id = 0, search = 0, order_by = 0, order = 0, begin = 0, amount = 16, data = {}, reset = false) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        new_tipo_habitacion: {
            path: `tipo/habitacion`,
            stateType: 'new_tipo_habitacion',
            reset: reset,
            data: data
        },
        update_tipo_habitacion: {
            path: `tipo/habitacion/${id}`,
            stateType: 'update_tipo_habitacion',
            reset: reset,
            data: data
        },
        get_tipo_habitacion: {
            path: `tipo/habitacion/${id}`,
            stateType: 'get_tipo_habitacion',
            reset: reset,
        },
        get_tipo_habitaciones_search: {
            path: `tipos/habitaciones/search/${search}/order/${order_by}/${order}/${begin}/${amount}`,
            stateType: 'get_tipo_habitaciones_search',
            reset: reset
        }
    }
}