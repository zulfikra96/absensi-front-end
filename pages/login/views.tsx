import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { connect } from "react-redux";
import { postLogin } from "../../redux/reducers/auth"


export const Views = (props: any) => {
    const ROUTER = useRouter();
    return (
        <div className="flex-1 w-screen h-screen bg-gray-200">
            <div className="container mx-auto flex justify-center h-screen " >
                <div className="bg-white w-5/12 h-96 my-64 shadow-md p-14">
                    <form action="">
                        <div className="form-group mb-8" >
                            <label htmlFor="email" className="">Email</label>
                            <input type="email" name="email" onKeyUp={(email) => props.emailValue(email.currentTarget.value)} className={`rounded bg-gray-100 w-full h-10 active:bg-black-400 focus:outline-none focus:ring focus:border-cyan-400 px-4 mt-2 ${(props.isErrorEmail) ?'ring-2 ring-red-600' :''}`} />
                        </div>
                        <div className="form-group mb-8" >
                            <label htmlFor="password" className="">Password</label>
                            <input type="password" onKeyUp={(password) => props.passwordValue(password.currentTarget.value)} name="password" className={`rounded bg-gray-100 w-full h-10 active:bg-black-400 focus:outline-none focus:ring focus:border-cyan-400 px-4 mt-2 ${(props.isErrorPassword) ?'ring-2 ring-red-600' :''}`} />
                        </div>
                        <div className="form-group">
                            <button 
                                onClick={props.onSubmit}
                                className="bg-color-blue-cst text-white px-4 py-4 rounded w-full"><span className="text-md">Login</span></button>
                        </div>
                        <div className="form-group text-center">
                            <span className="text-red-400">{props.error_message}</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (props) => {
    return {
      error_message: props.auth.error_message
    }
}

const mapDispatchToProps = {
    postLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Views);