import LogoTribu from "@/assets/images/marca-tribu.svg";
import Avatar from "@/assets/images/avatar-sustentable.png";
import MenuIcon from "@/assets/components/icons/MenuIcon";
import CartIcon from "@/assets/components/icons/CartIcon";
import CloseIcon from "@/assets/components/icons/CloseIcon";
import NavLinkHeader from "@/assets/components/navbar/NavLInkHeader";
import { useState } from "react";

const MainHeader = () => {

    const [navClass, setNavClass] = useState(
        "hidden font-bold  md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
    );

    const handleOpenMenu = () => {
        setNavClass("absolute top-0 left-0 flex h-full w-3/5 flex-col  gap-y-[21px] bg-gray-400 p-2 font-bold  md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0 md:h-auto"
        );
    };
    const handleCloseMenu = () => {
        setNavClass("hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0");
    };
    return (
        <>

            <header className="container mx-auto flex items-center gap-8 p-4 md:p-0 ">

                <button className="md:hidden" onClick={handleOpenMenu} >
                    <MenuIcon />

                </button>

                <img src={LogoTribu} alt="Logo Tribu" className="mr-auto mb-1 h-8 md:mr-0 " />

                <nav className={navClass}>
                    <button className="mb-12 md:hidden" onClick={handleCloseMenu} >
                        <CloseIcon />
                    </button>

                    
                    <NavLinkHeader text="Marketplace"/>
                    <NavLinkHeader text="Buscar"/>
                    <NavLinkHeader text="Mi Tienda"/>
                    <NavLinkHeader text="Vender"/>
                    <NavLinkHeader text="Blog"/>



                </nav>

                <div className="flex gap-4">
                    <button className="">
                        <CartIcon />
                    </button>
                    <p id="Sign up">Sign up</p>
                    <a href="#"><img src={Avatar} alt="sign up" className="block w-9 md:block" /></a>


                </div>

            </header>

            <span className="container mx-auto hidden md:block h-[1px] w-full bg-gray px-4 bg-gray-500"> </span>

        </>

    );
};

export default MainHeader;