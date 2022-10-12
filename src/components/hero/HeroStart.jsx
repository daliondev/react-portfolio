import HeroWave from "./HeroWave";

function HeroStart() {
  return (
    <header className="mt-11">
      <div className=" block text-center lg:flex m-auto lg:max-w-7xl lg:w-[95%] lg:items-center lg:justify-around ">
        <div className="w-auto text-white px-14 lg:p-0">
          <h1 className="text-sm sm:text-6xl font-mono">Hello i'm </h1>
          <h2 className="text-base sm:text-4xl font-thin text-bold">
            Daniel Martinez
          </h2>
          <span className="text-base sm:text-xl font-extrabold">
            Web developer
          </span>
        </div>
        <div className="px-14 pr-20 lg:p-0 mt-0">
          <img
            src="src/assets/hero-component/images/web-designer-3.svg"
            className="block mt-14 h-auto lg:h-[320px] lg:w-auto"
          />
        </div>
      </div>
      <HeroWave />
    </header>
  );
}

export default HeroStart;
