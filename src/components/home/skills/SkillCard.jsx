import skills from "../../../assets/json/Skills";

function SkillCard() {
  return skills.map((e) => {
    return (
      <div className="flex flex-col items-center w-full">
        <img
          className="w-7 sm:w-14 mb-4 aspect-square"
          src={`${e.img}`}
          alt=""
        />
        <h3 className="text-center text-xs sm:text-base">{e.title}</h3>
      </div>
    );
  });
}

export default SkillCard;
