
import React from "react";
import Views from "./views";
import Auth from "../../../config/auth";
import { connect } from "react-redux";
import Unauthorized from "../../unauthorized";
import Swal from "sweetalert2";
import { store } from "../../../redux/store";
import { addNewWorker } from "../../../redux/thunk/workers";
import { setAuthorized } from "../../../redux/reducers/auth";
import { setError } from "../../../redux/reducers/workers";

interface RegisterProps {
    authorized:any,
    error?:string,
    success?:string
}

class Register extends React.Component<RegisterProps> {
    constructor(props: any){
        super(props);
    }

    componentDidMount(){
        Auth(['company'])
    }

    public submit(e: any){
        let token: any = localStorage.getItem("token");
        if(token === null || token === undefined) store.dispatch(setAuthorized(false))
        store.dispatch(addNewWorker(e, token));
        if(this.props.error !== "") {
            return Swal.fire({
                title:'Error!',
                icon:'error',
                text:(typeof this.props.error === "object") ? JSON.stringify(this.props.error) : this.props.error,
            }).then((result) => {
                if(result.isConfirmed){
                    store.dispatch(setError(""))
                }
            })
        }
        Swal.fire({
            title:"Success",
            text:this.props.success,
            icon:'success'
        })
    }

    render = () => {
        if(!this.props.authorized) return <Unauthorized/>
        return <Views
            onSubmit={this.submit.bind(this)}
        />
    }
}

const mapStateToProps = (props) => {
    return {
        token:props.auth.token,
        authorized:props.auth.authorized,
        me:props.auth.me,
        workers:props.workers.workers,
        error:props.workers.error,
        success:props.workers.success
    }
}

export default connect(mapStateToProps)(Register);