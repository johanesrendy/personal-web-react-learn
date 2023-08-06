import HTML from "../../assets/images/html.png";
import CSS from "../../assets/images/css.png";
import tailwind from "../../assets/images/tailwind.png";
import java from "../../assets/images/java.png";
import js from "../../assets/images/js.png";

function Skills() {
  return (
    <div>
      {/* <!-- Skills Start --> */}
      <section id="skills">
        <div className="flex flex-col items-center p-10 md:mb-10">
          <h2 className="font-bold text-lg md:text-3xl text-red-600">SKILLS</h2>
        </div>
        <div>
          <div className="flex justify-between mx-10 md:mx-96 mb-8 md:mb-14">
            {/* <!-- Skill 1 Start--> */}
            <div className="flex flex-col items-center w-20">
              <img className="w-14 mb-4" src={`${HTML}`} alt="" />
              <h3 className="text-center">HTML</h3>
            </div>
            {/* <!-- Skill 1 End--> */}
            {/* <!-- Skill 2 Start--> */}
            <div className="flex flex-col items-center w-20">
              <img className="w-14 mb-4" src={`${CSS}`} alt="" />
              <h3 className="text-center">CSS</h3>
            </div>
            {/* <!-- Skill 2 End--> */}
            {/* <!-- Skill 3 Start--> */}
            <div className="flex flex-col items-center w-20">
              <img className="w-14 mt-3 mb-6" src={`${tailwind}`} alt="" />
              <h3 className="text-center">Tailwindcss</h3>
            </div>
            {/* <!-- Skill 3 End--> */}
          </div>
          <div className="flex justify-between mx-10 md:mx-96">
            {/* <!-- Skill 4 Start--> */}
            <div className="flex flex-col items-center w-20">
              <img className="w-14 mb-4" src={`${java}`} alt="" />
              <h3 className="text-center">Java</h3>
            </div>
            {/* <!-- Skill 4 End--> */}
            {/* <!-- Skill 5 Start--> */}
            <div className="flex flex-col items-center w-20">
              <img className="w-14 mb-4" src={`${js}`} alt="" />
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
    </div>
  );
}

export default Skills;
