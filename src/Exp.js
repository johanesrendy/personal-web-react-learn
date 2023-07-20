import expe from "./exp.json";

function Exp() {
  return expe.map((e) => {
    return (
      <div className="hover:bg-gray-500 hover:bg-opacity-10 p-5 hover:rounded-lg flex md:p-14">
        <h4 className="text-gray-500 mr-2 font-medium text-sm md:text-lg w-1/2">
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
export default Exp;
