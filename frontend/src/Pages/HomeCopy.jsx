const HomeCopy = () => {
  return (
    <div className="bg-gray-50 text-gray-800  ">
      <section className="py-5 px-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2 text-violet-600">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Bill Tracking",
                description:
                  "Monitor all your paid and unpaid bills in one place.",
                icon: "💡",
              },
              {
                title: "User Management",
                description: "Easily manage users and assign roles.",
                icon: "👥",
              },
              {
                title: "Real-time Insights",
                description:
                  "Get real-time statistics on power usage and costs.",
                icon: "📊",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-violet-600">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-violet-600 text-white py-10 px-5 text-center">
        <div className="mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Power Hack Simplified
          </h1>
          <p className="text-lg md:text-xl mb-2">
            Manage your bills and power consumption with ease. Your ultimate
            power management tool.
          </p>
          <button className="bg-white text-violet-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </section>
      <section className="bg-gray-100 py-5 px-10 mb-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2 text-violet-600">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alice Johnson",
                feedback:
                  "Power Hack has transformed the way I handle my bills. Highly recommend it!",
                avatar: "https://i.pravatar.cc/100?img=1",
              },
              {
                name: "Mark Smith",
                feedback:
                  "Real-time insights have been a game changer for my business.",
                avatar: "https://i.pravatar.cc/100?img=2",
              },
              {
                name: "Sophia Brown",
                feedback:
                  "Managing power consumption has never been easier. Love the interface!",
                avatar: "https://i.pravatar.cc/100?img=3",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <p className="text-sm text-gray-600 mb-4">
                  &quot;{testimonial.feedback}&quot;
                </p>
                <h4 className="text-violet-600 font-bold">
                  {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-violet-600 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-5">Ready to Get Started?</h2>
          <p className="text-lg mb-8">
            Join thousands of users who trust Power Hack to manage their energy
            needs efficiently.
          </p>
          <button className="bg-white text-violet-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeCopy;
