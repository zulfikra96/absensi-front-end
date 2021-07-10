/**======================ACTION VARIABLE============================== */

const SET_TOKEN     = "SET_TOKEN";
const POST_LOGIN    = "POST_LOGIN"
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
/**======================ACTION============================== */
export const setToken = (token:string) => {
    return {
        type:SET_TOKEN,
        payload:token
    }
}

export const postLogin = (email: string, password:string) => {
    return {
        type:POST_LOGIN,
        email,
        password
    }
}

export const setErrorMessage = (error_message) => {
    return {
        type:SET_ERROR_MESSAGE,
        payload:error_message
    }
}

/**======================STATE============================== */

const initialState = {
    token:'',
    email:'',
    password:'',
    error_message:''
}

/**======================REDUCER============================== */

const authReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case SET_TOKEN:
            localStorage.setItem("token",action.payload);
            return {
                ...state,
                token:action.payload
            }
        case POST_LOGIN:
            return {
                ...state,
                password:action.password,
                email:action.email
            }
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                error_message:action.payload
            }
        default:
            return state;
    }
}

export default authReducer;