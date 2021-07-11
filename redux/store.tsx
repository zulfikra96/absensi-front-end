import { Context, createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux"
import thunk from "redux-thunk"
import authReducer from "./reducers/auth";

// root reducers
const rootReducer = combineReducers({
    auth:authReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));

const makeStore = (contex:Context) => store

export const wrapper = createWrapper(makeStore,{debug:false})