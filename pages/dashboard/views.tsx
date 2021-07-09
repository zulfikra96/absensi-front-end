import SideBar from "../components/sidebar";

export const Views = () => (
    <div className="flex flex-row h-screen  w-screen bg-white">
        <SideBar/>
        <div className="flex-initial  w-12/12 w-full px-16 py-6  shadow-none ">
            <h1>HEllo world</h1>
        </div>
    </div>
);

export default Views;