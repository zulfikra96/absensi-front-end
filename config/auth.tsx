import variable from "./variable"
import { store } from "../redux/store"
import { setAuthorized, setMe } from "../redux/reducers/auth"
const Auth = async (roles: Array<string>) => {
    let response: any = {}
    let token = localStorage.getItem("token");
    let me: any = localStorage.getItem("me");
    if(me === null){
        try {
            const response = await fetch(`${variable.url}/users/me`,{
                headers:{
                    'Authorization':'Bearer ' + token
                }
            })
            .then((res) => res.json())

            if(response.status_code !== 200) throw "Unauthorzied";
            store.dispatch(setMe(response.data))
            store.dispatch(setAuthorized(true))
            setTimeout(() => {
                localStorage.removeItem("me");
            },150000)
        } catch (error) {
            store.dispatch(setAuthorized(false));
        }
        return
    }
    store.dispatch(setAuthorized(true));
    setTimeout(() => {
        localStorage.removeItem("me");
    },150000)
}

export default Auth;