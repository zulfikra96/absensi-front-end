import React from "react";
import { connect } from "react-redux";
import Views from "./views";
import Unauthorized from "../unauthorized"
import Auth from "../../config/auth"
import variable from "../../config/variable";
import { store } from "../../redux/store";
import { getWorkers } from "../../redux/reducers/workers";
import { setAuthorized } from "../../redux/reducers/auth";

interface EmployeesProps {
    token:string,
    me:any,
    authorized,
    workers:any
}

interface EmployeesState {
    auth:boolean,
}

 class Employess extends React.Component<EmployeesProps, EmployeesState> {
     constructor(props){
         super(props)
         this.state = {
             auth:true,
         }
     }

    componentDidMount(){
        Auth(['company'])
        this.getWorkers(1)
    }

    componentDidUpdate(prevProps){

    }

    public async getWorkers(page: number = 1){
        fetch(`${variable.url}/workers?page=${page}`,{
            headers:{
                "Authorization":"Bearer " + localStorage.getItem("token")
            }
        })
        .then((res) => res.json())
        .then((res) => {
            store.dispatch(getWorkers(res.data));
        })
        .catch((err) => {
            console.log(err)
            if(err){
                store.dispatch(setAuthorized(false));
            }
        })
    }

    render = () => {
        if(!this.props.authorized) return <Unauthorized/>
        return <Views/>
    }

}

const mapStateToprops = (props) => {
    return {
        token:props.auth.token,
        authorized:props.auth.authorized,
        me:props.auth.me,
        workers:props.workers.workers
    }
}

export default connect(mapStateToprops)(Employess);