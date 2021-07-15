
interface ButtonProps {
    title: string,
    bgColor:'primary' | 'danger',
    size?: 'md' | 'sm',
    className?: string,
    children?: any,
    onClick?:any
}

const button_color = {
    primary:'bg-color-blue-cst border-color-blue-cst',
    danger:'bg-red-500 border border-b-2'
}

const button_size = {
    md:'px-4 py-3',
    sm:'px-4 py-2 text-sm'
}

const Button = ({ title, bgColor, size = 'sm', className, children, onClick }: ButtonProps) => (
    <button onClick={onClick} className={` ${button_color[bgColor]} text-white ${button_size[size]} rounded  font-semibold ${className}`}>{title || children}</button>
);

export default Button;