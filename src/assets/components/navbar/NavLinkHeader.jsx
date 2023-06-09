export default ({ text }) => {
    return (
        <a href="#" className="group relative py-8">
            <span className="group-hover:text-gray-500">{text}</span>
            <span className=" absolute  bottom-0 left-0  block h-1 w-full scale-x-0 transition-all duration-300 group-hover:scale-x-100 group-hover:bg-gray-500"></span>
        </a>
    );

};
