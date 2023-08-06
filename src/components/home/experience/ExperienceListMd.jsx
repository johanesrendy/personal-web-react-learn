import experience from "../../../assets/json/experience.json";

function ExperienceListMd() {
  return experience.map((e) => {
    return (
      <div className="hover:bg-gray-500 hover:bg-opacity-20 p-5 hover:rounded-lg flex flex-col md:flex-row md:p-14">
        <h4 className="text-gray-500 mr-10 font-medium text-sm md:text-lg md:w-1/2 xl:w-1/3 text-left md:text-right mb-3 md:mb-0">
          {e.startDate} - {e.endDate}
        </h4>
        <div>
          <h2 className="mb-2 font-semibold md:text-2xl">
            {e.position} - <span className="text-red-600">{e.institution}</span>
          </h2>
          <p className="text-gray-500 text-justify text-sm md:text-lg">
            {e.description}
          </p>
        </div>
      </div>
    );
  });
}
export default ExperienceListMd;
