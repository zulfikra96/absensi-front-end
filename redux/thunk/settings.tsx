import variable from "../../config/variable"
import { setMe } from "../reducers/auth"
import { setError } from "../reducers/workers"


export const getMe = (token) => {
    return async (dispatch) => {

        try {
            const RESPONSE = await  fetch(`${variable.url}/users/me`,{
                headers:{
                    "Authorization":"Bearer " + token
                }
            })
            .then((res) => res.json())
            if(RESPONSE.status_code !== 200) throw RESPONSE.message;
            dispatch(setMe(RESPONSE.data));
        } catch (error) {
            console.error(error)
            dispatch(setError(error))
        }
    }
}