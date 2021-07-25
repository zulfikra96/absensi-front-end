import React from "react";
import { Navbar } from "./navbar";
const Container = (props: any) => (
    <div className="flex flex-row h-screen  w-screen bg-gray-50 ">
        {props.children}
    </div>
);

const Body = (props: any) => (
    <div className="flex-initial  w-12/12 w-full  ">
        {props.children}
    </div>
)

const Wrapper = (props: any) => {
    return (
        <div className="flex-initial  w-12/12 w-full  px-16 py-6  shadow-none ">
            {props.children}
        </div>
    )
}

Container.Body = Body;
Container.Navbar = Navbar
Container.Wrapper = Wrapper

export default Container;