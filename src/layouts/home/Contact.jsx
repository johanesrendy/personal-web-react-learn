import SubmitForm from "../../components/home/contact/SubmitForm";

function Contact() {
  return (
    <div>
      {/* <!-- Contact Start --> */}
      <section id="contact" className="mb-40 w-full flex justify-center">
        <div className="w-[95%] md:w-4/5 lg:w-3/5">
          <div className="flex flex-col text-center">
            <h2 className="my-10 font-bold text-lg md:text-3xl text-red-600 md:mb-10">
              CONTACT
            </h2>
          </div>
          <div>
            <SubmitForm />
          </div>
        </div>
      </section>
      {/* <!-- Contact End --> */}
    </div>
  );
}

export default Contact;
