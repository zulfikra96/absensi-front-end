
import Input from "../../../components/input";
import Button from "../../../components/button";
const FormRegister = () => (
    <div className="flex">
        <div className=" flex-row  w-4/12 shadow-sm px-2 py-2">
            <div className="flex-col">
                <div className="form-group">
                    <label htmlFor="" className="font-semibold text-gray-700">Nama Lengkap</label>
                    <Input type="text" placeholder="Full name" />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="font-semibold text-gray-700">Email</label>
                    <Input type="text" placeholder="Email" />
                </div>
                <div className="form-group ">
                    <label htmlFor="" className="font-semibold text-gray-700">Password</label>
                    <Input type="password" placeholder="Password" />
                </div>
                <div className="form-group mt-10">
                    <Button bgColor="primary"  title="Tambahkan"/>
                </div>
            </div>
        </div>
    </div>
);

export default FormRegister;