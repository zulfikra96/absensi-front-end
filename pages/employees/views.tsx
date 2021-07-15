import SideBar from "../components/sidebar"
import Container from "../components/container"
import { Table, Image, Modal } from "react-bootstrap"
import Header from "../components/header"
import Button from "../components/button"
import Link from "next/link"
import { connect } from "react-redux"
import Pagination from "../components/pagination"
import variable from "../../config/variable"
import moment from "moment-timezone";
// @ts-ignore
import BingMap from "../components/bingMap";
import { store } from "../../redux/store"
import { setAttendancesDetail } from "../../redux/reducers/workers"
const Views = ({ workers }: any) => {

    return (
        <Container>
            <SideBar />
            <Container.Body>
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
            </Container.Body>
        </Container>
    )
}

interface MapModalProps {
    isOpen?:boolean,
    onHide?:any,
    children?:any
}

export const MapModal = ({ isOpen, onHide, children }:MapModalProps) => (
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

interface WorkerDetailProps  {
    workerDetail:any,
    workerAttendances?:Array<any>,
    showMap?:boolean,
    onClickShowMap:any,
    onClickCloseMap:any,
    attendancesDetail?:any,
    onClickDetailMap?:any
}

export const ViewsDetail = ({ workerDetail, workerAttendances = [], showMap, onClickShowMap, onClickCloseMap }:WorkerDetailProps) => {

    return (
        <Container>
            <SideBar />
            <Container.Body>
                <Header
                    active="/employees"
                    title="Detail" />
                <div id="content" className="flex flex-row">
                    <div className="flex w-3/12 shadow-sm h-400 py-4 px-4 bg-white justify-center flex-col">
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
                    <div className="flex w-9/12 px-4 py-4 b-white shadow-sm ml-4 flex-col">
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
                                    <th colSpan={4} className="text-center">Check-IN</th>
                                    <th colSpan={4} className="text-center">Check-Out</th>
                                </tr>
                                <tr>
                                    <th className="text-sm">Tanggal</th>
                                    <th className="text-sm">Lokasi</th>
                                    <th className="text-sm">Radius</th>
                                    <th className="text-sm">Foto</th>
                                    <th className="text-sm">Tanggal </th>
                                    <th className="text-sm">Lokasi </th>
                                    <th className="text-sm">Radius </th>
                                    <th className="text-sm">Foto </th>
                                    <th className="text-sm">Lokasi Map</th>
                                </tr>
                            </thead>
                            <tbody>
                                {workerAttendances.map((e) => {
                                    return (
                                        <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{moment(e.check_in).tz("Asia/Makassar").format("MMMM Do YYYY HH:mm:ss")}</td>
                                    <td>{e.check_in_location.locality}, {e.check_in_location.addressLine}</td>
                                    <td>{(e.check_in_distance_status) ? <div className="border border-green-500 bg-green-400 p-1 rounded-lg text-white font-semibold text-sm text-center">Dalam Radius</div> : <div className="border border-green-500 bg-red-400 p-1 rounded-lg text-white font-semibold text-sm text-center">Luar Radius</div> }</td>
                                    <td><Button bgColor="primary" title="Lihat"/></td>
                                    <td>{(e.check_out) ? moment(e.check_out).tz("Asia/Makassar").format("MMMM Do YYYY HH:mm:ss") :''}</td>
                                    <td>{(e.check_out_location) ? e.check_in_location.locality :''}, {(e.check_out_location) ? e.check_in_location.addressLine : ''}</td>
                                    <td>{(e.check_in_distance_status) ? <div className="border border-green-500 bg-green-400 p-1 rounded-lg text-white font-semibold text-sm text-center">Dalam Radius</div> : <div className="border border-green-500 bg-red-400 p-1 rounded-lg text-white font-semibold text-sm text-center">Luar Radius</div> }</td>
                                    <td><Button   bgColor="primary" title="Lihat"/></td>
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
                        <BingMap/>      
                </MapModal>
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