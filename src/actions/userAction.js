import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/firebase"
import { userTypes } from "../types/types"

export const sendDataAsync = (nombre, email, asunto, mensaje) => {
    return (dispatch) => {
        const data = { nombre, email, asunto, mensaje }

        addDoc(collection(db, "portafolio"), data)
            .then(res => {
                dispatch(sendDataSync(data))
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const sendDataSync = (contact) => {
    return {
        type: userTypes.sendInfo,
        payload: contact
    }
}