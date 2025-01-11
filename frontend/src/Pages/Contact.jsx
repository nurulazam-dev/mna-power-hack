const Contact = () => {
  return (
    <div className="mt-10 py-5 flex items-center justify-center">
      <div className="">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black">Contact Us</h1>
          <p className="text-gray-600 my-2">
            We’d love to hear from you! Reach out to us for inquiries, feedback,
            or support.
          </p>
        </div>

        {/* Contact Form */}
        <div className="mt-6">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input text-black focus:outline-none  bg-white border border-violet-600"
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input text-black focus:outline-none  bg-white border border-violet-600"
              />
            </div>

            {/* Subject */}
            <div className="form-control col-span-full">
              <label className="label">
                <span className="label-text text-black">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Enter subject"
                className="input text-black focus:outline-none  bg-white border border-violet-600"
              />
            </div>

            {/* Message */}
            <div className="form-control col-span-full">
              <label className="label">
                <span className="label-text text-black">Message</span>
              </label>
              <textarea
                placeholder="Type your message here"
                className="textarea focus:outline-none textarea-bordered text-black  bg-white border border-violet-600 h-24"
              ></textarea>
            </div>
          </form>
        </div>

        <button className="border shadow-lg bg-violet-600 hover:bg-black py-[8px] rounded font-thin text-[20px] w-full mt-4 mb-1 text-white hover:text-orange-500">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
