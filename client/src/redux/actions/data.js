export const datatypes = {
    SET_AUTHENTICATED: 'SET_AUTENTICATED',
    SET_OPEN_MENU_MAIN: 'SET_OPEN_MENU_MAIN',
    SET_DATA_PAGE_RESERVA: 'SET_DATA_PAGE_RESERVA',
    SET_SCREEN_SEARCH: 'SET_SCREEN_SEARCH',
    SET_MODAL_FAVORITOS: 'SET_MODAL_FAVORITOS',
    SET_MODAL_PRODUCTO: 'SET_MODAL_PRODUCTO',
    SET_MODAL_CARRITO: 'SET_MODAL_CARRITO'
}

export const set_authenticated = authenticated => {
    return {
        authenticated,
        type: datatypes.SET_AUTHENTICATED
    }
}

export const set_open_menu_main = open_menu_main => {
    return {
        open_menu_main,
        type: datatypes.SET_OPEN_MENU_MAIN
    }
}

export const set_data_page_reserva = data_page_reserva => {
    return {
        data_page_reserva,
        type: datatypes.SET_DATA_PAGE_RESERVA
    }
}

export const set_screen_search = screen_search => {
    return {
        screen_search,
        type: datatypes.SET_SCREEN_SEARCH
    }
}

export const set_modal_favoritos = modal_favoritos => {
    return {
        modal_favoritos,
        type: datatypes.SET_MODAL_FAVORITOS
    }
}

export const set_modal_producto = modal_producto => {
    return {
        modal_producto,
        type: datatypes.SET_MODAL_PRODUCTO
    }
}

export const set_modal_carrito = modal_carrito => {
    return {
        modal_carrito,
        type: datatypes.SET_MODAL_CARRITO
    }
}