import { constantes } from "./constantes"

export const facturasCosntants = (id = 0, search = 0, order_by = 0, order = 0, begin = 0, amount = 16, data = {}, reset = false) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        new_factura_paciente: {
            path: `factura/paciente`,
            stateType: 'new_factura_paciente',
            reset: reset,
            data: data
        },
        update_factura_paciente: {
            path: `factura/paciente/${id}`,
            stateType: 'update_factura_paciente',
            reset: reset,
            data: data
        },
        get_factura_paciente: {
            path: `factura/paciente/${id}`,
            stateType: 'get_factura_paciente',
            reset: reset,
            data: data
        },
        get_facturas_paciente: {
            path: `facturas/paciente/${id}`,
            stateType: 'get_facturas_paciente',
            reset: reset,
            data: data
        },
        get_facturas_pacientes_search: {
            path: `facturas/pacientes/search/${search}/order/${order_by}/${order}/${begin}/${amount}`,
            stateType:  'get_facturas_pacientes_search',
            reset: reset
        },
        delete_factura: {
            path: `delete/factura/${id}`,
            stateType: 'delete_factura',
            reset: 'reset'
        }
    }
}