import Navbar from "./Navbar";
import Exp from "./Exp";
import SumbitForm from "./SubmitForm";
import SubmitButton from "./SubmitButton";

function App() {
  return (
    <div className="absolute -z-100 font-['Rubik'] w-full bg-black text-white">
      <Navbar />
      {/* <!-- Cover Page Start --> */}
      <section id="home">
        {/* <!-- Mobile start --> */}
        <div className="md:hidden">
          <div className="tracking-wide flex flex-col items-center justify-center h-screen">
            <div>
              <img className="w-52 mb-10" src="../images/profile.png" alt="" />
            </div>
            <div className="outline-none decoration-0">
              <h3 className="text-sm font-medium mb-2">
                <span className="text-red-600">Hi Guys! </span>I am
              </h3>
              <h2 className="font-bold text-3xl mb-2">Johanes Rendy</h2>
              <h3 className="text-gray-500 font-semibold">
                Front End Web Developer
              </h3>
            </div>
          </div>
        </div>
        {/* <!-- Mobile end --> */}
        {/* <!-- md Start --> */}
        <div className="hidden md:block">
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
            <div>
              <img className="mb-10" src="../images/profile1.png" alt="" />
            </div>
          </div>
        </div>
        {/* <!-- md end --> */}
      </section>
      {/* <!-- Cover Page End --> */}
      {/* <!-- About Me Start --> */}
      <section id="about-me">
        <div className="bg-red-600">
          <div className="flex flex-col items-center p-10">
            <h2 className="mb-5 md:mb-10 font-bold text-lg md:text-3xl">
              ABOUT ME
            </h2>
            <p className="text-justify md:max-w-2xl md:mb-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              facilis cupiditate incidunt eligendi recusandae obcaecati iste.
              Assumenda necessitatibus nisi dolorem sed suscipit obcaecati
              beatae debitis veniam soluta illo, itaque exercitationem?
            </p>
          </div>
        </div>
      </section>
      {/* <!-- About Me End --> */}
      {/* <!-- Skills Start --> */}
      <section id="skills">
        <div className="flex flex-col items-center p-10 md:mb-10">
          <h2 className="font-bold text-lg md:text-3xl text-red-600">SKILLS</h2>
        </div>
        <div>
          <div className="flex justify-between mx-10 md:mx-96 mb-8 md:mb-14">
            {/* <!-- Skill 1 Start--> */}
            <div className="flex flex-col items-center w-20">
              <img className="w-14 mb-4" src="../images/html.png" alt="" />
              <h3 className="text-center">HTML</h3>
            </div>
            {/* <!-- Skill 1 End--> */}
            {/* <!-- Skill 2 Start--> */}
            <div className="flex flex-col items-center w-20">
              <img className="w-14 mb-4" src="../images/css.png" alt="" />
              <h3 className="text-center">CSS</h3>
            </div>
            {/* <!-- Skill 2 End--> */}
            {/* <!-- Skill 3 Start--> */}
            <div className="flex flex-col items-center w-20">
              <img
                className="w-14 mt-3 mb-6"
                src="../images/tailwind.png"
                alt=""
              />
              <h3 className="text-center">Tailwindcss</h3>
            </div>
            {/* <!-- Skill 3 End--> */}
          </div>
          <div className="flex justify-between mx-10 md:mx-96">
            {/* <!-- Skill 4 Start--> */}
            <div className="flex flex-col items-center w-20">
              <img className="w-14 mb-4" src="../images/java.png" alt="" />
              <h3 className="text-center">Java</h3>
            </div>
            {/* <!-- Skill 4 End--> */}
            {/* <!-- Skill 5 Start--> */}
            <div className="flex flex-col items-center w-20">
              <img className="w-14 mb-4" src="../images/js.png" alt="" />
              <h3 className="text-center">Javascript</h3>
            </div>
            {/* <!-- Skill 5 End--> */}
            {/* <!-- Skill 6 Start (empty)--> */}
            <div className="flex flex-col items-center w-20"></div>
            {/* <!-- Skill 6 End (empty)--> */}
          </div>
        </div>
      </section>
      {/* <!-- Skills End --> */}
      {/* <!-- Experience Start --> */}
      <section id="experience">
        {/* <!-- mobile start --> */}
        <div className="p-10 mt-10 md:mt-16 md:hidden">
          <div className="flex flex-col items-center">
            <h2 className="mb-10 md:mb-14 font-bold text-lg md:text-3xl text-red-600">
              EXPERIENCE
            </h2>
          </div>
          <div>
            <div className="hover:bg-gray-500 hover:bg-opacity-10 p-5 hover:rounded-lg">
              <h4 className="text-gray-600 mb-2 font-medium text-sm">
                April 2023 - Present
              </h4>
              <h2 className="mb-2 font-semibold">
                Front End Developer -{" "}
                <span className="text-red-600">ISE 2023</span>
              </h2>
              <p className="text-gray-500 text-justify text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                excepturi at praesentium magnam iusto, molestiae, natus debitis
                nobis, pariatur odio vel!
              </p>
            </div>

            <div className="hover:bg-gray-500 hover:bg-opacity-10 p-5 hover:rounded-lg">
              <h4 className="text-gray-600 mb-2 font-medium text-sm">
                April 2023 - Present
              </h4>
              <h2 className="mb-2 font-semibold">
                Web Developer - <span className="text-red-600">3C KMK ITS</span>
              </h2>
              <p className="text-gray-500 text-justify text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                excepturi at praesentium magnam iusto, molestiae, natus debitis
                nobis, pariatur odio vel!
              </p>
            </div>
          </div>
        </div>
        {/* <!-- mobile end --> */}
        {/* <!-- md start --> */}
        <div className="p-10 md:px-72 mt-10 md:mt-16 md:block hidden">
          <div className="flex flex-col items-center">
            <h2 className="mb-10 md:mb-14 font-bold text-lg md:text-3xl text-red-600">
              EXPERIENCE
            </h2>
          </div>
          <div>
            <Exp />
          </div>
        </div>
        {/* <!-- md end --> */}
      </section>
      {/* <!-- Experience End --> */}
      {/* <!-- Project Start --> */}
      <section id="project">
        <div className="flex flex-col items-center p-10 md:px-96">
          <div className="flex flex-col items-center">
            <h2 className="mb-10 font-bold text-lg md:text-3xl text-red-600">
              PROJECT
            </h2>
          </div>
          <div className="md:flex-row md:flex md:gap-10">
            {/* <!-- project 1 start --> */}
            <div className="px-2 md:p-10 mb-5 md:mb-10 hover:bg-gray-500 hover:bg-opacity-10 rounded-lg md:flex md:flex-col md:items-center">
              <h1 className="mb-3 md:mb-8 font-medium md:text-xl">3C KMK</h1>
              <img
                className="w-4/5 mb-3 md:mb-8"
                src="../images/ss-3c.png"
                alt=""
              />
              <p className="text-sm text-gray-500 md:text-lg md:text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                recusandae nesciunt sequi exercitationem quo officia maxime
                deleniti, magnam commodi consectetur, non vero iste debitis,
                explicabo aut error natus quod temporibus.
              </p>
              <a href="https://arek.its.ac.id/kmk/home3c/" target="_blank">
                <button className="mt-3 md:mt-8 hover:bg-red-600 border-2 border-solid border-red-600 rounded-3xl px-4 md:px-16 py-1 md:py-3 text-sm md:text-lg">
                  Visit
                </button>
              </a>
            </div>
            {/* <!-- project 1 end --> */}
            {/* <!-- project 2 start --> */}
            <div className="px-2 md:p-10 mb-5 md:mb-10 hover:bg-gray-500 hover:bg-opacity-10 rounded-lg md:flex md:flex-col md:items-center">
              <h1 className="mb-3 md:mb-8 font-medium md:text-xl">ISE 2023</h1>
              <img
                className="w-4/5 mb-3 md:mb-8"
                src="../images/ss-ise.png"
                alt=""
              />
              <p className="text-sm text-gray-500 md:text-lg md:text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                recusandae nesciunt sequi exercitationem quo officia maxime
                deleniti, magnam commodi consectetur, non vero iste debitis,
                explicabo aut error natus quod temporibus.
              </p>
              <a href="http://ise-its.com/" target="_blank">
                <button className="mt-3 md:mt-8 hover:bg-red-600 border-2 border-solid border-red-600 rounded-3xl px-4 md:px-16 py-1 md:py-3 text-sm md:text-lg">
                  Visit
                </button>
              </a>
            </div>
            {/* <!-- project 2 end --> */}
          </div>
        </div>
      </section>
      {/* <!-- Project End --> */}
      {/* <!-- Contact Start --> */}
      <section id="contact" className="mb-40 md:px-96">
        <div className="flex flex-col items-center">
          <h2 className="my-10 font-bold text-lg md:text-3xl text-red-600 md:mb-10">
            CONTACT
          </h2>
        </div>
        <SumbitForm />
      </section>
      {/* <!-- Contact End --> */}
    </div>
  );
}

export default App;
