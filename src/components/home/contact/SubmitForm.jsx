import SubmitButton from "./SubmitButton";

function SumbitForm() {
  function handleSubmit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbwOLIAX060nvuWirFLNF-W5E7mfAKSQq4kTPU3bDIzkrRr23_M21UW8UXfL7_ScFBg-/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <form
        className="px-10"
        onSubmit={handleSubmit}
        name="submit-to-google-sheet"
      >
        <div className="mb-3 md:mb-5">
          <h3 className="mb-1 md:mb-2">Name</h3>
          <input
            name="Name"
            className="w-full text-black focus:outline-none px-2 rounded-sm"
            type="text"
            required
          />
        </div>
        <div className="mb-3 md:mb-5">
          <h3 className="mb-1 md:mb-2">Email</h3>
          <input
            name="Email"
            className="w-full text-black focus:outline-none px-2 rounded-sm"
            type="text"
            required
          />
        </div>
        <div className="mb-3 md:mb-5">
          <h3 className="mb-1 md:mb-2">Message</h3>
          <textarea
            name="Message"
            className="w-full text-black focus:outline-none px-2 rounded-sm"
            rows="6"
            type="text"
            required
          ></textarea>
        </div>
        <SubmitButton />
      </form>
    </div>
  );
}

export default SumbitForm;
