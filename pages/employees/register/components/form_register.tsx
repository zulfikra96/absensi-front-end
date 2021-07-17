
import Input from "../../../components/input";
import Button from "../../../components/button";
import  { useState } from "react";

interface FormRegisterProps {
    onSubmit?:any,
}

const FormRegister = (props:FormRegisterProps) => {
    const [form, setForm] = useState({
        fullname:'',
        email:'',
        password:''
    })

    const [error, setError] = useState({
        fullname:false,
        email:false,
        password:false
    })
    return (
        <div className="flex">
            <div className=" flex-row  w-4/12 shadow-sm px-2 py-2">
                <div className="flex-col">
                    <div className="form-group">
                        <label htmlFor="" className="font-semibold text-gray-700">Nama Lengkap</label>
                        <Input type="text" isError={error.fullname}  placeholder="Full name" onKeyup={(e) => setForm({...form, fullname:e.currentTarget.value}) } />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="font-semibold text-gray-700">Email</label>
                        <Input type="text" isError={error.email} placeholder="Email" onKeyup={(e) => setForm({...form, email:e.currentTarget.value}) } />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="" className="font-semibold text-gray-700">Password</label>
                        <Input type="password" isError={error.password} placeholder="Password" onKeyup={(e) => setForm({...form, password:e.currentTarget.value}) } />
                    </div>
                    <div className="form-group mt-10">
                        <Button onClick={() => {
                            let error_count = 0;
                            let error_bind:any = {}
                            for (const key in form) {
                                if(form[key] === ""){
                                    error_count++
                                    error_bind = {...error_bind, [key]:true}
                                } 
                            }
                            setError(error_bind);
                            if(error_count > 0) return
                            props.onSubmit(form)
                        } } bgColor="primary"  title="Tambahkan"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FormRegister;