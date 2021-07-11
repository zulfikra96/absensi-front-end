import React from "react";
import { connect } from "react-redux";
import Views from "./views";
import Unauthorized from "../unauthorized"
import Auth from "../../config/auth"

interface EmployeesProps {
    token:string,
    me:any,
    authorized
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
        me:props.auth.me
    }
}

export default connect(mapStateToprops)(Employess);