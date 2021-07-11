import React from "react";
import { connect } from "react-redux";
import { setAuthorized, setErrorMessage, setToken } from "../../redux/reducers/auth";
import Views from "./views";
import VARIABLE from "../../config/variable"
import { withRouter, NextRouter} from "next/router";

interface LoginProps {
    email?: string,
    password?: string,
    error_message:string,
    dispatch:any,
    router:NextRouter
}

interface LoginState {
    email: string,
    password: string,
    is_email_error:boolean,
    error_message:string
}



 class Login extends React.Component<LoginProps, LoginState>{
     constructor(props: LoginProps){
        super(props);
        this.state = {
            email:'',
            password:'',
            is_email_error:false,
            error_message:''           
        }
       
     }
    render = () => <Views
        onSubmit={this.postLogin.bind(this)}
        isErrorEmail={this.state.is_email_error}
        emailValue={(value) => this.emailValidator(value)}
        passwordValue={(value) => this.setState({password: value})}
    />

    
    public emailValidator(email){
        if(email.length !== 0 && !/^([a-zA-Z0-9@#$%^&*\.\,\(\)\-]+)@([a-z]\w*)([\.]\w+)+/.test(email))
            this.setState({is_email_error:true, email})
        else
            this.setState({is_email_error:false, email});

    }

    public async postLogin(e){
        e.preventDefault();

        const { email, password }  = this.state
        if(this.state.is_email_error) return;
        if(this.state.email.length === 0 && this.state.password.length  === 0){
            this.props.dispatch(setErrorMessage("Email and password can not be empty"))
            return setTimeout(() => {
                this.props.dispatch(setErrorMessage(""))
            },2000)
        }
        try {
            const RESPONSE = await fetch(`${VARIABLE.url}/login`,{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email,
                    password,
                    role:'company'
                })
            })
            .then((res) => res.json())
            if(RESPONSE.status_code !== 200) throw RESPONSE.message
            this.props.dispatch(setToken(RESPONSE.data.token))
            this.props.dispatch(setAuthorized(true));
            this.props.router.push("/dashboard")
        } catch (error) {
            this.props.dispatch(setErrorMessage(error));
            return setTimeout(() => {
                this.props.dispatch(setErrorMessage(""))
            },2000)
        }
        
    }
    
}

const mapStateToProps = (props) => {
    return {
        email:props.auth.email,
        password:props.auth.password,
        error_message:props.auth.error_message
    }
}



export default connect(mapStateToProps)(withRouter(Login))