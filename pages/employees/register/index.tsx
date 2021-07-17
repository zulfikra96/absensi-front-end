
import React from "react";
import Views from "./views";
import Auth from "../../../config/auth";
import { connect } from "react-redux";
import Unauthorized from "../../unauthorized";

interface RegisterProps {
    authorized:any
}

class Register extends React.Component<RegisterProps> {
    constructor(props: any){
        super(props);
    }

    componentDidMount(){
        Auth(['company'])
    }

    public submit(e){
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
        workers:props.workers.workers
    }
}

export default connect(mapStateToProps)(Register);