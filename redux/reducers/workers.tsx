/**======================ACTION VARIABLE============================== */
const GET_WORKERS = "GET_WORKERS";

/**======================ACTION FUNCTION============================== */

export const getWorkers = (workers) => {
    return {
        type:GET_WORKERS,
        payload:workers
    }
}

const initialState = {
    workers:[]
}

const workerReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_WORKERS:
            return {
                ...state,
                workers:state.workers.concat(action.payload)
            }
        default:
            return state
    }
}

export default workerReducers;