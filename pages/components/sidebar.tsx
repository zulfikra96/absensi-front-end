import { Nav } from "react-bootstrap";
import Link from "next/link"
import {TiChartBarOutline, TiGroup, TiArchive, TiCogOutline} from "react-icons/ti"
const attr = {
    active:"bg-gray-700"
}

const menu = [
    {title:"Dashboard", path:"/dashboard", icon:TiChartBarOutline},
    {title:"Karyawan", path:"/employees", icon:TiGroup},
    {title:"Inventaris", path:"/inventarist", icon:TiArchive},
    {title:"Pengaturan", path:"/settings", icon:TiCogOutline},
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
                        return  (
                            <Nav.Link key={Math.random() } className={`font-bold hover:bg-gray-700 transition-all outline-none  ${(active === e.title) ? attr.active : ''}`}>
                                <Link href={e.path}>
                                    <div className="flex flex-row">
                                        <div className="flex flex-col justify-center ">
                                            <e.icon size={22} color="white"></e.icon>
                                        </div>
                                        <span className="text-white text-lg ml-2">{e.title} </span>
                                    </div>
                                </Link>
                            </Nav.Link>
                        )
                    })}
                </Nav>
            </div>
        </div>
    )
};

export default SideBar;