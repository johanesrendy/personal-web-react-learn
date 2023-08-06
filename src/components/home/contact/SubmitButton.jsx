import React from "react";

function SubmitButton() {
  const handleClick = () => {
    const submitButton = document.getElementById("submit");
    submitButton.innerHTML = "Loading...";

    setTimeout(() => {
      submitButton.innerHTML = "Submitted";
      submitButton.classList =
        "px-4 py-1 md:px-10 md:py-2 rounded-3xl bg-red-600 float-right mb-3 text-sm w-full md:text-lg";
      setTimeout(() => {
        submitButton.innerHTML = "Submit";
        submitButton.classList =
          "px-4 py-1 md:px-10 md:py-2  rounded-3xl hover:bg-red-600 border-2 border-solid border-red-600 float-right mb-3 text-sm w-full md:text-lg";
      }, 3000);
    }, 2000);
  };

  return (
    <button
      id="submit"
      type="submit"
      onSubmit={handleClick}
      className="px-4 py-1 md:px-10 md:py-2 rounded-3xl hover:bg-red-600 border-2 border-solid border-red-600 float-right mb-3 text-sm w-full md:text-lg"
    >
      Submit
    </button>
  );
}

export default SubmitButton;
