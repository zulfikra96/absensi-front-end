import { Nav } from "react-bootstrap";

const SideBar = () => (
    <div className="flex-initial w-2/12 bg-gray-500 h-full shadow-2xl border-none">
        <div className="top-side-bar h-40 bg-gray-700">
            
        </div>

        <div className="bottom-side-bar px-4 py-6">
            <Nav className="flex-column">
                <Nav.Link className="text-white font-bold hover:bg-gray-700 transition-all">Dashboard</Nav.Link>
                <Nav.Link className="text-white font-bold hover:bg-gray-700 transition-all">Karyawan</Nav.Link>
                <Nav.Link className="text-white font-bold hover:bg-gray-700 transition-all">Inventaris</Nav.Link>
                <Nav.Link className="text-white font-bold hover:bg-gray-700 transition-all">Pengaturan</Nav.Link>
            </Nav>
        </div>
    </div>
);

export default SideBar;