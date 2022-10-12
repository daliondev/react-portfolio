import BurgerButton from "./BurgerButton";
import NavLinks from "./NavLinks";

function Header() {
  const name = "<DanielMartinez/ >";
  return (
    <div className="static select-none ">
      <nav className="flex items-center justify-around flex-wrap bg-slate-50 dark:bg-slate-800 shadow transition-colors ease-in py-6 lg:p-6 ">
        <div className="flex items-center flex-shrink-0 text-white mr-6 ">
          <div className="px-5">
            <img
              src="src\assets\logos\avatar-icon-header-only.svg"
              width="50"
              height="50"
              viewBox="0 100 50"
            />
          </div>

          <div className="grid grid-rows-2">
            <span className="font-semibold text-xl tracking-tight font-mono row-span-1">
              {name}
            </span>
            <span>Developer</span>
          </div>
        </div>

        <BurgerButton />
        <div
          id="menu"
          className="w-full block lg:flex-grow lg:flex lg:items-center lg:w-auto text-center lg:text-right  lg:bg-transparent "
        >
          <div className="text-sm block lg:flex-grow lg:text-base  items-center w-auto">
            <NavLinks text="Home" />
            <NavLinks text="About" />
            <NavLinks text="Skills" />
            <NavLinks text="Contact" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
