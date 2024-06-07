import { constantes } from "./constantes"

export const valorespacienteConstants = (id = 0, order_by = 0, order = 0, begin = 0, amount = 16, data = {}, reset = false) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        new_valores_paciente: {
            path: `valores/paciente`,
            stateType: 'new_valores_paciente',
            reset: reset,
            data: data
        },
        update_valores_paciente: {
            path: `valores/paciente/${id}`,
            stateType: 'update_valores_paciente',
            reset: reset,
            data: data
        },
        get_valores_paciente: {
            path: `valores/paciente/${id}`,
            stateType: 'get_valores_paciente',
            reset: reset,
        },
        get_valores_paciente_search: {
            path: `valores/paciente/${id}/order/${order_by}/${order}/${begin}/${amount}`,
            stateType: 'get_valores_paciente_search',
            reset: reset,
        }
    }
}