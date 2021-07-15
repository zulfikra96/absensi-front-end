/**======================ACTION VARIABLE============================== */
export const GET_WORKERS                = "GET_WORKERS";
export const GET_WORKER_DETAIL          = "GET_WORKER_DETAIL"
export const SET_ERROR                  = "SET_ERROR"
export const GET_WORKER_ATTENDANCES     = "GET_WORKER_ATTENDANCES"
export const SET_ATTENDANCES_DETAIL     = "SET_ATTENDANCES_DETAIL";
export const OPEN_MAP_MODAL             = "OPEN_MAP_MODAL";
/**======================ACTION FUNCTION============================== */

export const getWorkers = (workers) => {
    return {
        type:GET_WORKERS,
        payload:workers
    }
}

export const setAttendancesDetail = (attendances_detail) => {
    return {
        type:SET_ATTENDANCES_DETAIL,
        payload:attendances_detail
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

export const getWorkerAttendances = (worker_attendances) => {
    return {
        type:GET_WORKER_ATTENDANCES,
        payload:worker_attendances
    }
}


export const openMapModal = (is_open:boolean) => {
    return {
        type:OPEN_MAP_MODAL,
        payload:is_open
    }
}



const initialState = {
    workers:[],
    worker_detail:{},
    error:"",
    worker_attendances:[],
    attendances_detail:{},
    open_map_modal:false
    
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
        case GET_WORKER_ATTENDANCES:
            return {
                ...state,
                worker_attendances:action.payload
            }
        case SET_ATTENDANCES_DETAIL:
            return {
                ...state,
                attendances_detail:action.payload
            }
        case OPEN_MAP_MODAL:
            return {
                ...state,
                open_map_modal:action.payload
            }
        
        default:
            return state
    }
}

export default workerReducers;