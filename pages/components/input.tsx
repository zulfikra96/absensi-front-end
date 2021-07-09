
interface InputProps {
    type:"password" | "text",
    name?: string,
    placeholder?:string
}

const Input = ({ type, name, placeholder  }: InputProps) => (
    <input type={type} name={name} placeholder={placeholder} className="rounded bg-gray-100 w-full h-10 active:bg-black-400 focus:outline-none focus:ring focus:border-cyan-400 px-4 mt-2" />
);

export default Input;