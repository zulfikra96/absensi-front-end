import { Component } from "react"
import { connect } from "react-redux";
import Container from "../../components/container";
import SideBar from "../../components/sidebar"
import Header from "../../components/header"
import Input from "../../components/input";
import Button from "../../components/button";

class Attendances extends Component {
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
                            { title: 'Utama', href: '/settings' },
                            { title: 'Absensi', href: '/settings/attendances' },
                        ]}
                        active="/settings/attendances"
                        title={"Pengaturan"} />
                    <div>
                        <div className="flex flex-col w-4/12">
                            <div className="form-group">
                                <label htmlFor="" className="font-bold">Batas Jam Masuk</label>
                                <div className="flex">
                                    <div className="flex">
                                        <Input type="text" onChange={ (e) => {
                                            
                                        }} maxLength={2} min={"00"} max={"23"} placeholder="Jam" isError={false} className="" />
                                        <Input type="text" maxLength={2} min={"00"} max={"59"} placeholder="Menit" isError={false} className="" />
                                    </div>
                                    <Button title="Simpan" bgColor="primary" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="font-bold">Batas Jam keluar</label>
                                <div className="flex">
                                    <div className="flex">
                                        <Input type="text" min={"00"} max={"23"} placeholder="Jam" className="" />
                                        <Input type="text" min={"00"} max={"59"} placeholder="Menit" className="" />
                                    </div>
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

export default connect()(Attendances)