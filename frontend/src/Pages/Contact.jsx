const Contact = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card w-full max-w-4xl shadow-xl bg-white">
        <div className="card-body text-center">
          <h1 className="text-3xl font-bold text-primary">Contact Us</h1>
          <p className="text-gray-600 mt-2">
            We’d love to hear from you! Reach out to us for inquiries, feedback,
            or support.
          </p>
        </div>

        {/* Contact Form */}
        <div className="p-6">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
              />
            </div>

            {/* Subject */}
            <div className="form-control col-span-full">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Enter subject"
                className="input input-bordered"
              />
            </div>

            {/* Message */}
            <div className="form-control col-span-full">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                placeholder="Type your message here"
                className="textarea textarea-bordered h-24"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Submit Button */}
        <div className="text-center mb-6">
          <button className="btn btn-primary px-10 mt-4">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
