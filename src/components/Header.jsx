import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./../img/logo.svg";

const Header = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 10 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); 
  };

  return (
    <>
      <header
        className={`${
          isActive ? "bg-white py-4 shadow md" : "bg-none py-6"
        } fixed py-2 w-full z-10 transition-all`}
      >
        <div className="container mx-auto flex items-center justify-between h-full">
          <Link to={"/"}>
            <div>
              <img className="w-[40px]" src={Logo} alt="" />
            </div>
          </Link>
          <div className="flex flex-row w-[100px] justify-between">
          <button className="cursor-pointer" onClick={handleLogout}>log out</button>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative max-w-[50px]"
          >
            <BsBag className="text-2xl" />
            <div className="bg-gray-500 absolute  -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
            </div>
          </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
