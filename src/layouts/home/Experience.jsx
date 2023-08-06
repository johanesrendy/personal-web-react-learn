import ExperienceListMd from "../../components/home/experience/ExperienceListMd";

function Experience() {
  return (
    <div>
      {/* <!-- Experience Start --> */}
      <section id="experience">
        <div className="p-5 md:px-10 lg:px-40 2xl:px-52  mt-10 md:mt-16">
          <div className="flex flex-col items-center">
            <h2 className="mb-10 md:mb-14 font-bold text-lg md:text-3xl text-red-600">
              EXPERIENCE
            </h2>
          </div>
          <div>
            <ExperienceListMd />
          </div>
        </div>
      </section>
      {/* <!-- Experience End --> */}
    </div>
  );
}

export default Experience;
