function NavLinks({ text }) {
  return (
    <a className="font-bold block mt-4 p-4 lg:inline  lg:mt-0 text-white hover:text-teal-200 lg:mr-10 cursor-pointer lg:p-2 no-underline font-sans text-lg sm:text-base capitalize relative after:absolute after:h-0.5 after:bg-slate-500 after:-bottom-1 after:inset-x-1/2 hover:after:inset-x-2 after:transition-all after:ease-linear dark:text-slate-200 dark:after:bg-slate-300 py-4 bg-slate-700 lg:bg-transparent ">
      {text}
    </a>
  );
}

export default NavLinks;
