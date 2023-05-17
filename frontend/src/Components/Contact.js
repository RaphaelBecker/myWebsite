import React from "react";
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div className="bg-slate-100 pb-8 px-16 xl:px-32">
      <center>
        <div className="text-4xl font-bold pt-8 pb-4">Get in touch?</div>
      </center>
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2 p-8 text-xl xl:text-2xl">
          <p className="leading-relaxed text-gray-600">
            {" "}
            Thank you for your interest in contacting me! Whether you have a
            question, want to collaborate, or are interested in hiring me for a
            project. To get started, simply fill out the form below with your
            contact information and a brief message. I'll get back to you as
            soon as possible, typically within 24-48 hours. If you prefer, you
            can also reach out to me directly at [insert email address]. I look
            forward to hearing from you and exploring how we can work together
            to bring your project to life!{" "}
          </p>
        </div>
        <form className="w-full lg:w-1/2 mx-auto mt-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="John"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-email"
                type="email"
                placeholder="johndoe@example.com"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-message"
              >
                Message
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-message"
                placeholder="Enter your message here"
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
