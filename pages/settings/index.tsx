import { Component } from "react"
import { connect } from "react-redux";
import Container from "../components/container";
import SideBar from "../components/sidebar"
import Header from "../components/header"
import Input from "../components/input";
import Button from "../components/button";
import Auth from "../../config/auth";
import Unauthorized from "../unauthorized";
import { getMe } from "../../redux/thunk/settings";
import { setToken } from "../../redux/reducers/auth";
import { store, wrapper } from "../../redux/store";
import Swal from "sweetalert2"
import variable from "../../config/variable";
interface SettingsProps {
    authorized:boolean,
    token:string,
    me: any
}

interface SettingsState {
    fullname:string,
    email:string
}

class Settings extends Component<SettingsProps, SettingsState> {
    constructor(props: any) {
        super(props);
        this.state = {
            fullname:'',
            email:''
        }
    }

    static async getInitialProps(ctx){
        return {props:{}}
    }

    async componentDidMount(){
        Auth(["company"]);
        if(this.props.token === "")
            store.dispatch(setToken(localStorage.getItem("token") || ""));
        try {
            store.dispatch(getMe(this.props.token || localStorage.getItem("token")));
        } catch (error) {
            console.error(error);
        }
     
       setTimeout(() => {
            const { fullname, email }:any = (typeof this.props.me === "object") ? this.props.me : JSON.stringify(this.props.me);
            this.setState({fullname, email})
       },100)

    }

    componentDidUpdate(prevProps){
        if(Object.keys(this.props.me).length === 0){
            store.dispatch(getMe(this.props.token || localStorage.getItem("token")));
        }
    }

    render = () => {
        if(!this.props.authorized)
            return <Unauthorized/>;
        let data = {};
        return (
            <Container>
                <SideBar active={'Pengaturan'} />
                <Container.Body>
                
                <Header
                    listMenu={[
                        {title:'Utama', href:'/settings'},
                        {title:'Informasi Usaha', href:'/'},
                        {title:'Absensi', href:'/settings/attendances'},
                        {title:'Keamanan', href:'/keamanan'},
                    ]}
                    active="/settings"
                    title={"Pengaturan"} />
                    <div>
                        <div className="flex flex-col w-4/12">
                            <div className="form-group">
                                <label htmlFor="" className="font-bold">Nama</label>
                                <div className="flex">
                                    <Input type="text" onChange={(e) => this.setState({fullname:e.currentTarget.value})} placeholder="Nama admin" value={this.state.fullname || ''}  className="mr-4"/>
                                    <Button onClick={() => this.updateData(this.state)} title="Ubah" bgColor="primary" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="font-bold">Email</label>
                                <div className="flex">
                                    <Input type="text" onChange={(e) => this.setState({email:'' || e.currentTarget.value})}  placeholder="Email" value={this.state.email} className="mr-4"/>
                                    <Button onClick={() => this.updateData(this.state)}  title="Ubah" bgColor="primary" />
                                </div>
                            </div>
                            <div className="form-group">
                                
                            </div>
                        </div>
                    </div>
                </Container.Body>
            </Container>
        );
    }

    public async updateData(data:object){
        Swal.showLoading();
        try {
            const RESPONSE = await fetch(`${variable.url}/users/me`,{
                method:'PUT',
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer " + this.props.token
                },
                body:JSON.stringify(this.state)
            })
            .then((res) => res.json())
            if(RESPONSE.status_code !== 200) throw RESPONSE.message;
            Swal.fire({
                icon:'success',
                title:'Success',
                text:RESPONSE.message
            })
        } catch (error) {
            console.error(error)
            Swal.fire({
                icon:'success',
                title:"Ups,Error !!!",
                text:error
            })
        }
    }
}


const mapStateToProps = (props: any) => {
    return {
        authorized:props.auth.authorized,
        token:props.auth.token,
        me: props.auth.me
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps)(Settings)