import SkillCard from "../../components/home/skills/SkillCard";

function Skills() {
  return (
    <div>
      {/* <!-- Skills Start --> */}
      <section id="skills">
        <div className="flex flex-col items-center p-10 md:mb-10">
          <h2 className="font-bold text-lg md:text-3xl">SKILLS</h2>
        </div>
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-3 md:mb-14 gap-10 w-4/5 md:w-3/5 lg:w-2/5">
            <SkillCard />
          </div>
        </div>
      </section>
      {/* <!-- Skills End --> */}
    </div>
  );
}

export default Skills;
