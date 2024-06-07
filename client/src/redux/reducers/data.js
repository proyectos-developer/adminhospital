import {datatypes} from '../actions/data.js'

const initial_state = {
    authenticated: false,
    open_menu_lateral: true,
    open_modal_new_tarea: false,
    open_modal_new_modalidad: false
}

const data = (state = initial_state, action) => {
    if (action.type === datatypes.SET_AUTHENTICATED){
        const authenticated = action.authenticated
        return {
            ... state,
            authenticated
        }
    }else if (action.type === datatypes.SET_OPEN_MENU_LATERAL){
        const open_menu_lateral = action.open_menu_lateral
        return {
            ... state,
            open_menu_lateral
        }
    }else if (action.type === datatypes.SET_OPEN_MODAL_NEW_TAREA){
        const open_modal_new_tarea = action.open_modal_new_tarea
        return {
            ... state,
            open_modal_new_tarea
        }
    }else if (action.type === datatypes.SET_OPEN_MODAL_NEW_ESPECIALIDAD){
        const open_modal_new_especialidad = action.open_modal_new_especialidad
        return {
            ... state,
            open_modal_new_especialidad
        }
    }else{
        return state
    }
}

export default data