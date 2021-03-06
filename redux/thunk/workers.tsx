import variable from "../../config/variable"
import { setError, getWorkerDetail as getWorkerDetailRducer, getWorkerAttendances as getWorkerAttendancesRducer } from "../reducers/workers";


export const getWorkerDetail = (worker_id, token) => {
    return async (dispatch) => {
        try {
            const RESPONSE = await fetch(`${variable.url}/workers/${worker_id}`,{
                headers:{
                    "Authorization":"Bearer " + token
                }
            })
            .then((res) => res.json());
            
            if(RESPONSE.status_code !== 200) throw RESPONSE.message;
            return dispatch(getWorkerDetailRducer(RESPONSE.data));
        } catch (error) {
            dispatch(setError(error))    
        }
    }
}

export const getWorkerAttendances = (worker_id, token) => {
    return async dispatch => {
        try {
            const RESPONSE = await fetch(`${variable.url}/workers/${worker_id}/attendances`, {
                headers:{
                    "Authorization":"Bearer " + token
                }
            })
            .then((res) => res.json())
            if(RESPONSE.status_code !== 200) throw RESPONSE.message;
            return dispatch(getWorkerAttendancesRducer(RESPONSE.data));
        } catch (error) {
            dispatch(setError(error))    
            
        }
    }
}

interface AddNewWorkerData { 
    fullname:string,
    email:string,
    password:string
}

export const addNewWorker =  (data:AddNewWorkerData, token: string) => {
    return async dispatch => {
        try {
            const RESPONSE = await fetch(`${variable.url}/workers`,{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`,
                },
                body:JSON.stringify(data)
            })
            .then((res) => res.json())
            if(RESPONSE.status_code !== 200) throw RESPONSE.message;
            return RESPONSE.data;
        } catch (error) {
            dispatch(setError(error));
        }
    }
}