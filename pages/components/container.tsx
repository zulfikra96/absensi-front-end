import React from "react";

const Container = (props: any) => (
    <div className="flex flex-row h-screen  w-screen bg-gray-50 ">
        {props.children}
    </div>
);

const Body = (props: any) => (
    <div className="flex-initial  w-12/12 w-full  px-16 py-6  shadow-none ">
        {props.children}
    </div>
)

Container.Body = Body;

export default Container;