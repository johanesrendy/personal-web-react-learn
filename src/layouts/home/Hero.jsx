import profile from "../../assets/images/profile.jpeg";

function Hero() {
  return (
    <div>
      {/* <!-- Cover Page Start --> */}
      <section id="home">
        {/* <!-- Mobile start --> */}
        <div className="md:hidden">
          <div className="tracking-wide flex flex-col items-center justify-center h-screen">
            <div className="w-1/2 aspect-square border-2 border-solid border-red-500 rounded-full overflow-hidden mb-10">
              <img className="-mt-16" src={`${profile}`} alt="" />
            </div>
            <div className="outline-none decoration-0 text-center">
              <h3 className="text-lg font-medium mb-2">
                <span className="text-red-600">Hi Guys! </span>I am
              </h3>
              <h2 className="font-bold text-5xl mb-3">Johanes Rendy</h2>
              <h3 className=" font-semibold text-xl ">
                Front End Web Developer
              </h3>
            </div>
          </div>
        </div>
        {/* <!-- Mobile end --> */}
        {/* <!-- md Start --> */}
        <div className="hidden md:block px-20">
          <div className="tracking-wide flex items-center justify-center h-screen gap-[10%]">
            <div>
              <h3 className="text-xl font-medium mb-2">
                <span className="text-red-600">Hi Guys! </span>I am
              </h3>
              <h2 className="font-bold text-8xl mb-2">Johanes Rendy</h2>
              <h3 className="text-gray-500 font-semibold text-3xl">
                Front End Web Developer
              </h3>
            </div>
            <div className="flex items-center justify-center w-1/4 aspect-square border-2 border-solid border-red-500 rounded-full overflow-hidden">
              <img className="" src={`${profile}`} alt="" />
            </div>
          </div>
        </div>
        {/* <!-- md end --> */}
      </section>
      {/* <!-- Cover Page End --> */}
    </div>
  );
}

export default Hero;
