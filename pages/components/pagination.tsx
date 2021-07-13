
const attr = {
    active:'text-white transition-colors duration-150 bg-indigo-600'
}


const Pagination = ({ active = false }: any) => {

    return  (
        <nav className=" w-6/12  relative">
            <ul className="flex">
                <li><button className={`h-10 w-auto px-3 text-indigo-600 transition-colors duration-150 bg-white rounded-l-lg focus:shadow-outline hover:bg-indigo-100`}>Prev</button></li>
                <li><button className={`h-10 w-auto px-3 ${(active) ? 'text-white transition-colors duration-150 bg-indigo-600' : 'text-indigo-600 transition-colors duration-150 bg-white'} focus:shadow-outline`}>1</button></li>
                <li><button className="h-10 w-auto px-3 text-indigo-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100">Next</button></li>
            </ul>
        </nav>
    )
};

export default Pagination;