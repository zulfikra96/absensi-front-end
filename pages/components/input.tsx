
interface InputProps {
    type:"password" | "text",
    name?: string,
    placeholder?:string,
    onKeyup?:any,
    required?:any, 
    className?:string, 
    isError?:boolean
}



const Input = ({ type, name, placeholder, onKeyup, required, className, isError  }: InputProps) => (
    <input required={required}  onKeyUp={onKeyup} type={type} name={name} placeholder={placeholder} className={`rounded bg-gray-100 w-full h-10 active:bg-black-400 focus:outline-none ${(isError) ? 'ring-red-400 out ring-1' : ''} focus:ring focus:border-cyan-400 px-4 mt-2 ${className}`} />
);

export default Input;