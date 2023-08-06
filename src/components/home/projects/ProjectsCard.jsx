import ProjectsList from "../../../assets/json/ProjectsList";

function ProjectsCard() {
  return ProjectsList.map((e) => {
    return (
      <div>
        <div className="p-5 md:py-5 mb-5 md:mb-10 hover:bg-gray-500 hover:bg-opacity-20 rounded-lg flex flex-col w-full items-center">
          <h1 className="mb-3 md:mb-8 font-bold tracking-wide md:text-xl">
            {e.title}
          </h1>
          <img className="md:w-4/5 mb-3 md:mb-8" src={`${e.img}`} alt="" />
          <p className="text-sm text-gray-500 md:text-lg md:text-justify md:w-4/5">
            {e.description}
          </p>
          <div className="flex justify-end md:justify-center w-full mr-10 md:mr-0">
            <a href={`${e.url}`} target="_blank">
              <button className="mt-5 md:mt-8 hover:bg-red-600 border-2 border-solid border-red-600 rounded-3xl px-10 md:px-16 py-2 md:py-3 text-sm md:text-lg">
                Visit
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  });
}

export default ProjectsCard;
