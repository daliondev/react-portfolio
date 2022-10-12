import { BsXLg } from "react-icons/bs";
import hiddeHamburger from "./hidden-hamburger.js";

function BurgerButton() {
  return (
    <div className="lg:hidden ">
      <button
        id="boton"
        className="row-start-2 px-3 py-2 border rounded text-white border-slate-200 hover:text-white hover:border-white 
            
            lg:flex lg:items-center lg:px-3 lg:py-2 lg:border lg:rounded lg:text-white lg:border-slate-200 lg:hover:text-white lg:hover:border-white"
        onClick={hiddeHamburger}
      >
        <svg
          className="fill-current h-3 w-3 hidden"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          id="hamburgerBoton"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>

        <BsXLg id="hamburgerClose" className=" max-h-3"></BsXLg>
      </button>
    </div>
  );
}

export default BurgerButton;
