import { userTypes } from "../types/types";

export const contactInfo = (state = {}, action) => {
    switch (action.type) {
        case userTypes.sendInfo:
            return {
                nombre: action.payload.nombre,
                email: action.payload.email,
                asunto: action.payload.asunto,
                mensaje: action.payload.mensaje
            }
        default:
            return state
    }
}