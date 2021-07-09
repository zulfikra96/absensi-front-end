import SideBar from "../components/sidebar"
import Container from "../components/container"
import { Table, Image, Modal } from "react-bootstrap"
import Header from "../components/header"
import Button from "../components/button"
import Link from "next/link"
import dynamic from "next/dynamic";
// @ts-ignore
const BingMap:any = dynamic(() => import("bingmaps-react"))

const Views = () => (
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
                        <tr>
                            <td>1</td>
                            <td>Zulfikra</td>
                            <td>zulfikralahmudin@gmail.com</td>
                            <td>
                                <Link href="/employees/1" >
                                    <a href="" className="hover:no-underline bg-color-blue-cst text-white px-4 py-2.5 text-sm rounded  font-semibold mr-4  ">Detail </a>
                                </Link>
                                <Button bgColor="danger" title="Hapus" />
                            </td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        </Container.Body>
    </Container>
)

export const MapModal = () => (
    <>
        <Modal 
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={false} >
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <BingMap 
                      height="500px"
                      width="100%"
                      viewOptions={{
                          zoom:18
                      }}
                    bingMapsKey={"AhkL3-tgHzlKs49gq7u_ZYfINXlkiPlkUGT619tCypvojRcZYNV7MrptnjZ8dR4z"}
                />
            </Modal.Footer>
        </Modal>
    </>
);

export const ViewsDetail = () => (
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
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Arnold_Schwarzenegger_1974.jpg/412px-Arnold_Schwarzenegger_1974.jpg"
                        />
                    </div>
                    <div id="information" className="text-center ">
                        <h4 className="font-semibold text-gray-700">Zulfikra L. Abdjul</h4>
                        <h5>zulfikralahmudin@gmail.com</h5>
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
                                <th className="text-sm">ID</th>
                                <th className="text-sm">Tanggal Check-IN</th>
                                <th className="text-sm">Lokasi Check-IN</th>
                                <th className="text-sm">Radius Check-IN</th>
                                <th className="text-sm">Tanggal Check-OUT</th>
                                <th className="text-sm">Lokasi Check-OUT</th>
                                <th className="text-sm">Radius Check-OUT</th>
                                <th className="text-sm">Lokasi Map</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1 July 2021 07.00</td>
                                <td>Jalan Morotai Tama</td>
                                <td><div className="border border-green-500 bg-green-400 p-1 rounded-lg text-white font-semibold text-sm text-center">Dalam Radius</div></td>
                                <td>1 July 2021 07.00</td>
                                <td>Jalan Morotai Tama</td>
                                <td><div className="border border-green-500 bg-red-400 p-1 rounded-lg text-white font-semibold text-sm text-center">Luar Radius</div></td>
                                <td>
                                    <Button bgColor="primary" title="Lihat" className=""></Button>

                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2 July 2021 07.00</td>
                                <td>Jalan Morotai Tama</td>
                                <td><div className="border border-green-500 bg-green-400 p-1 rounded-lg text-white font-semibold text-sm text-center">Dalam Radius</div></td>
                                <td>1 July 2021 07.00</td>
                                <td>Jalan Morotai Tama</td>
                                <td><div className="border border-green-500 bg-red-400 p-1 rounded-lg text-white font-semibold text-sm text-center">Luar Radius</div></td>
                                <td>
                                    <Button bgColor="primary" title="Lihat" className=""></Button>

                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <MapModal></MapModal>
        </Container.Body>
    </Container>
)

export default Views