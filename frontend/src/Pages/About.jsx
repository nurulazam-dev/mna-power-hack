const About = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-5xl font-bold text-primary">
              Welcome to Power Hack
            </h1>
            <p className="text-gray-600 mt-6 text-lg">
              We’re on a mission to make bill management stress-free, secure,
              and efficient. Join us as we revolutionize the way you handle your
              payments!
            </p>
            <button className="btn btn-primary mt-6 px-8">Get Started</button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Power Hack Illustration"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="card shadow-lg bg-white p-6">
            <h2 className="text-3xl font-bold text-secondary">Our Mission</h2>
            <p className="text-gray-600 mt-4">
              To empower users with an innovative and secure platform that
              simplifies bill payments while offering unmatched convenience and
              transparency.
            </p>
          </div>
          <div className="card shadow-lg bg-white p-6">
            <h2 className="text-3xl font-bold text-secondary">Our Vision</h2>
            <p className="text-gray-600 mt-4">
              To be a global leader in digital bill management solutions,
              setting new standards in reliability, security, and user
              satisfaction.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary">Why Choose Us?</h2>
          <p className="text-gray-600 mt-4">
            Discover the unique benefits of using Power Hack for all your
            billing needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card shadow-lg bg-white p-6 text-center">
            <div className="text-primary text-5xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-secondary">
              User-Friendly Design
            </h3>
            <p className="text-gray-600 mt-4">
              Experience an intuitive platform that makes managing bills a
              breeze.
            </p>
          </div>
          <div className="card shadow-lg bg-white p-6 text-center">
            <div className="text-primary text-5xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-secondary">
              Secure Payments
            </h3>
            <p className="text-gray-600 mt-4">
              Rest easy with robust security measures safeguarding your
              transactions.
            </p>
          </div>
          <div className="card shadow-lg bg-white p-6 text-center">
            <div className="text-primary text-5xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-secondary">24/7 Support</h3>
            <p className="text-gray-600 mt-4">
              Get assistance whenever you need it with our dedicated support
              team.
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold text-primary">
            Ready to Simplify Your Bills?
          </h2>
          <p className="text-gray-600 mt-4">
            Join thousands of satisfied users who trust Power Hack for their
            bill management needs.
          </p>
          <button className="btn btn-secondary mt-6 px-8">Sign Up Now</button>
        </div>
      </div>
    </div>
  );
};

export default About;
