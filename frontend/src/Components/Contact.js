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
    <div className="bg-gradient-to-r from-gray-900 via-gray-850 to-gray-800 p-10 lg:p-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold pb-16 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text inline-block">
          Get in touch?
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="text-xl xl:text-2xl text-cyan-200">
          <p>
            Thank you for your interest in contacting me! Whether you have a
            question, want to collaborate, or are interested in hiring me for a
            project. To get started, simply fill out the form below with your
            contact information and a brief message. I'll get back to you as
            soon as possible, typically within 24-48 hours. If you prefer, you
            can also reach out to me directly at [insert email address]. I look
            forward to hearing from you and exploring how we can work together
            to bring your project to life!
          </p>
        </div>
        <form className="mt-10 lg:mt-0" onSubmit={onSubmit}>
          <div className="md:flex md:gap-6 mb-6">
            <div className="md:w-1/2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="grid-first-name"
                type="text"
                placeholder="John"
                required
              />
            </div>
            <div className="md:w-1/2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="grid-email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="grid-email"
              type="email"
              placeholder="johndoe@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="grid-message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="grid-message"
              placeholder="Enter your message here"
              required
            ></textarea>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <div className="grid justify-center lg:justify-start">
                <div className="relative group">
                  <div className="animate-tilt transition group-hover:duration-200 duration-500 group-hover:opacity-100 opacity-30 absolute rounded-lg -inset-0.5 bg-gradient-to-r from-green-100 via-indigo-500 to-pink-300 filter blur"></div>
                  <button className="relative flex items-center py-4 leading-none  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 divide-x divide-gray-600 rounded-lg px-7">
                    <span className="text-cyan-200 hover:text-white">Send</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
