import { useRouter } from "next/dist/client/router";


export const Views = () => {
    const ROUTER = useRouter();
    return (
        <div className="flex-1 w-screen h-screen bg-gray-200">
            <div className="container mx-auto flex justify-center h-screen " >
                <div className="bg-white w-5/12 h-96 my-64 shadow-md p-14">
                    <form action="">
                        <div className="form-group mb-8" >
                            <label htmlFor="email" className="">Email</label>
                            <input type="text" name="email" className="rounded bg-gray-100 w-full h-10 active:bg-black-400 focus:outline-none focus:ring focus:border-cyan-400 px-4 mt-2" />
                        </div>
                        <div className="form-group mb-8" >
                            <label htmlFor="password" className="">Password</label>
                            <input type="password" name="password" className="rounded bg-gray-100 w-full h-10 active:bg-black-400 focus:outline-none focus:ring focus:border-cyan-400 px-4 mt-2" />
                        </div>
                        <div className="form-group">
                            <button 
                                onClick={(e) => {
                                    e.preventDefault();
                                    ROUTER.push("/employees/register")
                                }}
                                className="bg-color-blue-cst text-white px-4 py-4 rounded w-full"><span className="text-md">Login</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Views;