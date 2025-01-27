const ConnectionProcess = () => {
  return (
    <section className="py-3 text-gray-800 lg:px-10 px-6">
      <div className="">
        <h2 className="text-3xl mb-2 font-bold text-slate-600 text-center">
          Electricity Connection Process
        </h2>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-5 md:text-end hover:shadow-md px-2 pb-3 rounded">
              <div className="text-violet-600 text-lg font-black">
                📝Submit Application
              </div>
              Begin the process by submitting a detailed application form,
              either online or at our nearest office. Include all required
              documents, such as proof of identity, property ownership, and a
              description of your electricity needs.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-5 hover:shadow-md px-2 pb-3 rounded">
              <div className="text-violet-600 text-lg font-black">
                ✔️Inspection & Approval
              </div>
              Once your application is received, our technical team will
              schedule an inspection to assess your property and ensure it meets
              safety and regulatory standards. After a successful inspection,
              the application will be approved for the next steps.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-5 md:text-end hover:shadow-md px-2 pb-3 rounded">
              <div className="text-violet-600 text-lg font-black">
                🔧Meter Installation
              </div>
              Our certified technicians will visit your premises to install an
              electricity meter. This step ensures accurate tracking of
              electricity consumption and prepares your property for the final
              connection.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-5 hover:shadow-md px-2 pb-3 rounded">
              <div className="text-violet-600 text-lg font-black">
                ⚡Power Connection
              </div>
              Finally, the electricity supply will be connected to your
              property, ensuring a seamless and reliable power supply. Our team
              will also provide a brief orientation on using the meter and
              billing system effectively.
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ConnectionProcess;
