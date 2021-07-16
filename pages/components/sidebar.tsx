import { Nav } from "react-bootstrap";
import Link from "next/link"

const attr = {
    active:"bg-gray-700"
}

const menu = [
    {title:"Dashboard", path:"/dashboard"},
    {title:"Karyawan", path:"/employees"},
    {title:"Inventaris", path:"/inventarist"},
    {title:"Pengaturan", path:"/settings"},
];

interface SideBarProps {
    active?:string
}

const SideBar = ({ active }: SideBarProps) => {
    return (
        <div className="flex-initial w-2/12 bg-gray-500 h-full shadow-2xl border-none">
            <div className="top-side-bar h-40 bg-gray-700">
                
            </div>
    
            <div className="bottom-side-bar px-4 py-6">
                <Nav className="flex-column">
                    {menu.map((e) => {
                        return  <Nav.Link key={Math.random() } className={`font-bold hover:bg-gray-700 transition-all outline-none  ${(active === e.title) ? attr.active : ''}`}><Link href={e.path}><span className="text-white">{e.title}</span></Link></Nav.Link>
                    })}
                </Nav>
            </div>
        </div>
    )
};

export default SideBar;