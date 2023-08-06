import ProjectsCard from "../../components/home/projects/ProjectsCard";
function Projects() {
  return (
    <div>
      {/* <!-- Project Start --> */}
      <section id="project">
        <div className="flex flex-col items-center p-5 md:px-10 xl:px-60">
          <div className="flex flex-col items-center">
            <h2 className="mb-10 font-bold text-lg md:text-3xl text-red-600">
              PROJECT
            </h2>
          </div>
          <div className="md:flex-row md:flex md:gap-5">
            <ProjectsCard />
          </div>
        </div>
      </section>
      {/* <!-- Project End --> */}
    </div>
  );
}

export default Projects;
