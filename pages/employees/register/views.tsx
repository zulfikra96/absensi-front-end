import Container from "../../components/container";
import SideBar from "../../components/sidebar";
import Header from "../../components/header";
import FormRegister from "./components/form_register";
import { withRouter } from "next/router";
import { connect } from "react-redux";

interface ViewsProps {
    onSubmit?:any
}

const Views = (props: ViewsProps) =>(
    <Container>
        <SideBar active={'Karyawan'}/>
        <Container.Body>
            <Header
                active="/employees/register"
                title="Tambah Karyawan"
            />
        <FormRegister
            
            onSubmit={props.onSubmit}
        />
        </Container.Body>
    </Container>
);

export default connect()(Views);