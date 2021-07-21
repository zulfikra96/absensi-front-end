import { Component } from "react"
import { connect } from "react-redux";
import Container from "../components/container";
import SideBar from "../components/sidebar"
import Header from "../components/header"
import Input from "../components/input";
import Button from "../components/button";

class Settings extends Component {
    constructor(props: any) {
        super(props);
    }
    render = () => {
        return (
            <Container>
                <SideBar active={'Pengaturan'} />
                <Container.Body>
                <Header
                    listMenu={[
                        {title:'Utama', href:'/settings'},
                        {title:'Absensi', href:'/settings/attendances'},
                    ]}
                    active="/settings"
                    title={"Pengaturan"} />
                    <div>
                        <div className="flex flex-col w-4/12">
                            <div className="form-group">
                                <label htmlFor="" className="font-bold">Nama Usaha</label>
                                <div className="flex">
                                    <Input type="text" placeholder="Nama usaha"  className="mr-4"/>
                                    <Button title="Simpan" bgColor="primary" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="font-bold">Nomor Registrasi</label>
                                <div className="flex">
                                    <Input type="text" placeholder="Nomor Registrasi" className="mr-4"/>
                                    <Button title="Simpan" bgColor="primary" />
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
}

const mapStateToProps = (_state: any) => ({})

const mapDispatchToProps = {}

export default connect()(Settings)