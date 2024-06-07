import { constantes } from "./constantes"

export const tratamientospacienteConstants = (id = 0, order_by = 0, order = 0, begin = 0, amount = 16, data = {}, reset = false) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        new_tratamient_paciente: {
            path: `tratamiento/paciente`,
            stateType: 'new_tratamient_paciente',
            reset: reset,
            data: data
        },
        update_tratamiento_paciente: {
            path: `tratamiento/paciente/${id}`,
            stateType: 'update_tratamiento_paciente',
            reset: reset,
            data: data
        },
        get_tratamiento_paciente: {
            path: `tratamiento/paciente/${id}`,
            stateType: 'get_tratamiento_paciente',
            reset: reset,
        },
        get_tratamientos_paciente_search: {
            path: `tratamientos/paciente/${id}/order/${order_by}/${order}/${begin}/${amount}`,
            stateType: 'get_tratamientos_paciente_search',
            reset: reset,
        }
    }
}