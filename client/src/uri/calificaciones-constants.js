import { constantes } from "./constantes";

export const calificacionesConstants = (data = {}, reset = false, id = 0, usuario = 0) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        new_calificacion: {
            path: `calificacion/doctor`,
            stateType: 'new_calificacion',
            reset: reset,
            data: data
        },
        get_calificacion_doctor: {
            path: `calificacion/doctor/${id}`,
            stateType: 'get_calificacion_doctor',
            data: data,
            reset: reset
        },
        get_calificaciones_doctor: {
            path: `calificaciones/doctor/${usuario}`,
            stateType: 'get_calificaciones_doctor',
            reset: reset
        },
        delete_calificacion_doctor: {
            path: `delete/calificacion/doctor//${usuario}/${id}`,
            stateType: 'delete_calificacion_doctor',
            reset: reset
        }
    }
}