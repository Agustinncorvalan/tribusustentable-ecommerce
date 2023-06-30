import MainHeader from "./components/navbar/MainHeader";
import MainProduct from "./components/product/MainProduct";
import { FaWhatsapp } from 'react-icons/fa';
const App = () => {
    return (
        <>
            <MainHeader />
            <MainProduct />
            <div className="fixed bottom-4 right-4">
                <a
                    href="https://api.whatsapp.com/send?phone=2614712243"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                >
                    <FaWhatsapp className="text-white text-xl mr-2" />
                    WhatsApp Tribü 
                </a>
            </div>
        </>
    );
};

export default App;
