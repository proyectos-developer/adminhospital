export const datatypes = {
    SET_AUTHENTICATED: 'SET_AUTENTICATED',
    SET_OPEN_MENU_LATERAL: 'SET_OPEN_MENU_LATERAL',
    SET_OPEN_MODAL_NEW_TAREA: 'SET_OPEN_MODAL_NEW_TAREA',
    SET_OPEN_MODAL_NEW_ESPECIALIDAD: 'SET_OPEN_MODAL_NEW_ESPECIALIDAD'
}

export const set_authenticated = authenticated => {
    return {
        authenticated,
        type: datatypes.SET_AUTHENTICATED
    }
}

export const set_open_menu_lateral = open_menu_lateral => {
    return {
        open_menu_lateral,
        type: datatypes.SET_OPEN_MENU_LATERAL
    }
}

export const set_open_modal_new_tarea = open_modal_new_tarea => {
    return {
        open_modal_new_tarea,
        type: datatypes.SET_OPEN_MODAL_NEW_TAREA
    }
}

export const set_open_modal_new_especialidad = open_modal_new_especialidad => {
    return {
        open_modal_new_especialidad,
        type: datatypes.SET_OPEN_MODAL_NEW_ESPECIALIDAD
    }
}