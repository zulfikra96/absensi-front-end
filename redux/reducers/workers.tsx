/**======================ACTION VARIABLE============================== */
export const GET_WORKERS = "GET_WORKERS";
export const GET_WORKER_DETAIL = "GET_WORKER_DETAIL"
export const SET_ERROR = "SET_ERROR"
/**======================ACTION FUNCTION============================== */

export const getWorkers = (workers) => {
    return {
        type:GET_WORKERS,
        payload:workers
    }
}

export const getWorkerDetail = (worker_detail) => {
    return {
        type:GET_WORKER_DETAIL,
        payload:worker_detail
    }
}

export const setError = (error) => {
    return {
        type:SET_ERROR,
        payload:error
    }
}




const initialState = {
    workers:[],
    worker_detail:{},
    error:""
}

/**======================ACTION FUNCTION============================== */


const workerReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_WORKERS:
            return {
                ...state,
                workers:action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error:action.payload
            }
        case GET_WORKER_DETAIL:
            return {
                ...state,
                worker_detail:action.payload
            }
        default:
            return state
    }
}

export default workerReducers;