import { constantes } from "./constantes"

export const pagosConstants = (id = 0, search = 0, order_by = 0, order = 0, begin = 0, amount = 16, data = {}, reset = false) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        new_pago: {
            path: `pago`,
            stateType: 'new_pago',
            reset: reset,
            data: data
        },
        update_pago: {
            path: `pago/${id}`,
            stateType: 'update_pago',
            reset: reset,
            data: data
        },
        get_pago: {
            path: `pago/${id}`,
            stateType: 'get_pago',
            reset: reset,
            data: data
        },
        get_pagos_search: {
            path: `pagos/search/${search}/order/${order_by}/${order}/${begin}/${amount}`,
            stateType: 'get_pagos_search',
            reset: reset,
            data: data
        }
    }
}