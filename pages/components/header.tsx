
import { Nav } from "react-bootstrap"
import Link from "next/link"

interface HeaderProps {
    title: string,
    active: string,
    listMenu?: Array<any>
}
const Header = ({ title, active, listMenu }: HeaderProps) => (
    <div>
        <div className="title mb-8">
            <h4 className="text-gray-600 weight font-semibold">{title}</h4>
        </div>
        <div id="nav" className="mb-10">
            {(!listMenu) ? (
                <Nav variant="tabs" defaultActiveKey={active} as="ul" >
                    <Link href="/employees">
                        <Nav.Item as="li">
                            <Nav.Link href="/employees" className="  font-semibold"><span className="text-gray-700">Daftar Karyawan</span></Nav.Link>
                        </Nav.Item>
                    </Link>
                    <Link href="/employees/register">
                        <Nav.Item as="li">
                            <Nav.Link href="/employees/register" className="font-semibold"><span className="text-gray-700">Tambahkan</span></Nav.Link>
                        </Nav.Item>
                    </Link>
                </Nav>
            ) : (
                <Nav variant="tabs" defaultActiveKey={active} as="ul" >
                    {listMenu.map((e) => (
                        <Link key={e.href} href={e.href}>
                            <Nav.Item as="li">
                                <Nav.Link href={e.href} className="  font-semibold"><span className="text-gray-700">{e.title}</span></Nav.Link>
                            </Nav.Item>
                        </Link>
                    ))}
                </Nav>
            )}

        </div>
    </div>
);


export default Header;