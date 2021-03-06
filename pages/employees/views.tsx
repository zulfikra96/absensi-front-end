import SideBar from "../components/sidebar"
import Container from "../components/container"
import { Table, Image, Modal } from "react-bootstrap"
import Header from "../components/header"
import Button from "../components/button"
import Link from "next/link"
import { connect } from "react-redux"
import Pagination from "../components/pagination"
import variable from "../../config/variable"
// import moment from "moment-timezone";
import moment from "moment";
// @ts-ignore
import BingMap from "../components/bingMap";
import { store } from "../../redux/store";
import { setAttendancesDetail } from "../../redux/reducers/workers"
import ModalCustom from "../components/modal";
import { useState } from "react";

const Views = ({ workers }: any) => {
    return (
        <Container>
            <SideBar active={'Karyawan'} />
            <Container.Body>
                <Container.Wrapper>
                <Header
                    active="/employees"
                    title={"Karyawan"} />
                <div id="content">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th className="w-20">No ID</th>
                                <th className="w-90">Nama Lengkap</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {workers.map((e, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{e.id}</td>
                                        <td>{e.fullname}</td>
                                        <td>{e.email}</td>
                                        <td>
                                            <Link href={`/employees/${e.worker_id}`} >
                                                <a href="" className="hover:no-underline bg-color-blue-cst text-white px-4 py-2.5 text-sm rounded  font-semibold mr-4  ">Detail </a>
                                            </Link>
                                            <Button bgColor="danger" title="Hapus" />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>

                    </Table>
                    <div className="footer flex ">
                        <Pagination
                            active
                        />
                    </div>
                </div>
                </Container.Wrapper>
            </Container.Body>
        </Container>
    )
}

interface MapModalProps {
    isOpen?: boolean,
    onHide?: any,
    children?: any
}

export const MapModal = ({ isOpen, onHide, children }: MapModalProps) => (
    <>
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={isOpen}
            onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    </>
);

interface WorkerDetailProps {
    workerDetail: any,
    workerAttendances?: Array<any>,
    showMap?: boolean,
    onClickShowMap: any,
    onClickCloseMap: any,
    attendancesDetail?: any,
    onClickDetailMap?: any
}

export const AttendanceRadius = ({ status }: any) => {
    if (status === "INSIDE") {
        return <div className="border border-green-500 bg-green-400 p-1 rounded-lg text-white font-semibold text-sm text-center">Dalam Radius</div>
    }
    return <div className="border border-green-500 bg-red-400 p-1 rounded-lg text-white font-semibold text-sm text-center">Luar Radius</div>
}

export const AttendanceStatus = ({ status }: any) => {
    status = status || ""
    if (status === "not on time") {
        return <div className="border border-green-500 bg-red-400 p-1 rounded-lg text-white font-semibold text-sm text-center">Tidak Tepat Waktu</div>
    } else if (status === "on time") {
        return <div className="border border-green-500 bg-green-400 p-1 rounded-lg text-white font-semibold text-sm text-center">Tepat Waktu</div>
    }
    return <></>
}


export const ViewsDetail = ({ workerDetail, workerAttendances = [], showMap, onClickShowMap, onClickCloseMap }: WorkerDetailProps) => {

    const [showModal, setShowModal] = useState(false);
    const [photoLocation, setPhotoLocation] = useState({
        attendance_type: "",
        attendance_id: ""
    });
    console.log(workerDetail);
    return (
        <Container>
            <SideBar active={'Karyawan'} />
            <Container.Body>
                <Container.Navbar />
                <Container.Wrapper>
                    <Header
                        active={`/employees/${workerDetail.worker_id}`}
                        listMenu={[
                            { title: workerDetail.fullname, href: `/employees/${workerDetail.worker_id}` },
                            { title: "Pengajuan Ijin / Sakit", href: `/employees/${workerDetail.worker_id}/permit` }
                        ]}
                        title="Detail" />
                    <div id="content" className="flex flex-col">
                        <div className=" w-2/12 shadow-sm h-400 py-2 px-2 bg-white justify-center flex-col mb-4">
                            <div className="image-wrap flex-initial h-56 self-center w-56 overflow-hidden rounded-lg mb-10">
                                <Image
                                    src={`${variable.url}${workerDetail.avatar}`}
                                />
                            </div>
                            <div id="information" className="text-center ">
                                <h4 className="font-semibold text-gray-700">{workerDetail.fullname}</h4>
                                <h5>{workerDetail.email}</h5>
                            </div>
                        </div>
                        <div className="flex-1 w-12/12 px-4 py-4 b-white shadow-sm  flex-col">
                            <div className="form flex-row flex">
                                <div className="form-group">
                                    <label htmlFor="" className="font-semibold text-sm ">Bulan</label><br />
                                    <select name="" id="" className="py-2 px-4">
                                        <option value="">Januari</option>
                                        <option value="">Februari</option>
                                        <option value="">Maret</option>
                                        <option value="">April</option>
                                        <option value="">Mei</option>
                                        <option value="">Juni</option>
                                        <option value="">Juli</option>
                                        <option value="">Agustus</option>
                                        <option value="">September</option>
                                        <option value="">Oktober</option>
                                        <option value="">November</option>
                                    </select>
                                </div>
                                <div className="form-group ml-4">
                                    <label htmlFor="" className="font-semibold text-sm">Tahun</label><br />
                                    <select name="" id="" className="py-2 px-4">
                                        <option value="">2020</option>
                                        <option value="">2021</option>
                                    </select>
                                </div>
                                <div className="form-group ml-4 flex flex-col justify-end ">

                                    <Button bgColor="primary" title="Cari" className=""></Button>
                                </div>
                            </div>
                            <Table striped bordered hover className="text-sm">
                                <thead>
                                    <tr>
                                        <th rowSpan={2} className="text-sm">ID</th>
                                        <th colSpan={5} className="text-center">Check-IN</th>
                                        <th colSpan={5} className="text-center">Check-Out</th>
                                    </tr>
                                    <tr>
                                        <th className="text-sm">Tanggal</th>
                                        <th className="text-sm">Lokasi</th>
                                        <th className="text-sm">Radius</th>
                                        <th className="text-sm">Status</th>
                                        <th className="text-sm">Foto</th>
                                        <th className="text-sm">Tanggal </th>
                                        <th className="text-sm">Lokasi </th>
                                        <th className="text-sm">Radius </th>
                                        <th className="text-sm">Status </th>
                                        <th className="text-sm">Foto </th>
                                        <th className="text-sm">Lokasi Map</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {workerAttendances.map((e) => {
                                        return (
                                            <tr key={e.id}>
                                                <td>{e.id}</td>
                                                <td>{moment(e.check_in, "YYYY-MM-DD HH:mm:ss").locale("id").format("Do MMMM  YYYY HH:mm")}</td>
                                                <td>{e.check_in_location.locality}, {e.check_in_location.addressLine}</td>
                                                <td>
                                                    <AttendanceRadius status={e.check_in_radius_status} />
                                                </td>
                                                <td><AttendanceStatus status={e.check_in_status} /></td>
                                                <td>
                                                    <Button
                                                        bgColor="primary"
                                                        title="Lihat"
                                                        onClick={() => {
                                                            setShowModal(true);
                                                            setPhotoLocation({
                                                                attendance_id: e.id,
                                                                attendance_type: 'check_in'
                                                            })
                                                        }}
                                                    />
                                                </td>
                                                <td>{(e.check_out) ? moment(e.check_out, "YYYY-MM-DD HH:mm:ss").locale("id").format("MMMM Do YYYY HH:mm:ss") : ''}</td>
                                                <td>{(e.check_out_location) ? e.check_in_location.locality : ''}, {(e.check_out_location) ? e.check_in_location.addressLine : ''}</td>
                                                <td>
                                                    <AttendanceRadius status={e.check_out_radius_status} />
                                                </td>
                                                <td>
                                                    <AttendanceStatus status={e.echeck_out_status} />
                                                </td>
                                                <td>
                                                    <Button
                                                        onClick={() => {
                                                            setShowModal(true);
                                                            setPhotoLocation({
                                                                attendance_id: e.id,
                                                                attendance_type: 'check_out'
                                                            })
                                                        }}
                                                        bgColor="primary"
                                                        title="Lihat" />
                                                </td>
                                                <td>
                                                    <Button bgColor="primary" title="Lihat" onClick={() => {
                                                        store.dispatch(setAttendancesDetail(e))
                                                        onClickShowMap(e.worker_id)
                                                    }}></Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <MapModal
                        onHide={onClickCloseMap}
                        isOpen={showMap}>
                        <BingMap />
                    </MapModal>
                    <ModalCustom
                        className="h-3/6"
                        isOpen={showModal}
                        onHide={() => setShowModal(false)}
                        title="Foto Lokasi">
                        <img src={`${variable.url}/attendances/${photoLocation.attendance_id}/${photoLocation.attendance_type}/photo`} className="w-full" alt="" />
                    </ModalCustom>
                </Container.Wrapper>
            </Container.Body>
        </Container>
    );
}

const mapStateToProps = (props) => {
    return {
        workers: props.workers.workers
    }
}

export default connect(mapStateToProps)(Views)