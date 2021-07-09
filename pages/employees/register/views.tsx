import Container from "../../components/container";
import SideBar from "../../components/sidebar";
import Header from "../../components/header";
import FormRegister from "./components/form_register";
const Views = () =>(
    <Container>
        <SideBar />
        <Container.Body>
            <Header
                active="/employees/register"
                title="Tambah Karyawan"
            />
        <FormRegister/>
        </Container.Body>
    </Container>
);

export default Views;