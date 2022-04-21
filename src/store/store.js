import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { contactInfo } from "../reducers/userReducer";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers= combineReducers({
    contact: contactInfo
})

export const store= createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)
