import {datatypes} from '../actions/data.js'

const initial_state = {
    authenticated: false,
    open_menu_main: false,
    data_page_reserva: {nro_adultos: 0, nro_ninios: 0, fecha: '', hora: '', direccion: '', requisitos: ''},
    screen_search: false,
    modal_favoritos: false,
    modal_producto: false,
    modal_carrito: false,
}

const data = (state = initial_state, action) => {
    if (action.type === datatypes.SET_AUTHENTICATED){
        const authenticated = action.authenticated
        return {
            ... state,
            authenticated
        }
    }else if (action.type === datatypes.SET_OPEN_MENU_MAIN){
        const open_menu_main = action.open_menu_main
        return {
            ... state,
            open_menu_main
        }
    }else if (action.type === datatypes.SET_DATA_PAGE_RESERVA){
        const data_page_reserva = action.data_page_reserva
        return {
            ... state,
            data_page_reserva
        }
    }else if (action.type === datatypes.SET_SCREEN_SEARCH){
        const screen_search = action.screen_search
        return {
            ... state,
            screen_search
        }
    }else if (action.type === datatypes.SET_MODAL_FAVORITOS){
        const modal_favoritos = action.modal_favoritos
        return {
            ... state,
            modal_favoritos
        }
    }else if (action.type === datatypes.SET_MODAL_PRODUCTO){
        const modal_producto = action.modal_producto
        return {
            ... state,
            modal_producto
        }
    }else if (action.type === datatypes.SET_MODAL_CARRITO){
        const modal_carrito = action.modal_carrito
        return {
            ... state,
            modal_carrito
        }
    }else{
        return state
    }
}

export default data