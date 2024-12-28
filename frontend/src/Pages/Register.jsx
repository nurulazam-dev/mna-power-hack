import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost5000/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="h-screen mt-12 py-12">
      <div className="flex justify-center items-center">
        {/* register form side */}
        <div className="w-96 bg-white p-4 rounded-md">
          <div className="">
            <h2 className=" text-violet-600 text-4xl font-bold mb-4">
              Create Account
            </h2>
            <form onSubmit={handleSubmit}>
              {/* ========name field======== */}
              <label className="border border-black px-3 py-2 rounded flex items-center mb-4">
                <img
                  src="https://freesvg.org/img/abstract-user-flat-4.png"
                  alt=""
                  className="w-7 h-7 opacity-30"
                />
                <input
                  type="text"
                  className="bg-white outline-none px-2 text-[17px]"
                  placeholder="Full Name"
                  name="name"
                  onChange={handleChange}
                  value={data.name}
                  required
                />
              </label>
              {/* ========email field======== */}
              <label className="border border-black px-3 py-2 rounded flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-7 h-7 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  className="bg-white outline-none px-2 text-[17px]"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  required
                />
              </label>

              {/* ========password field======== */}
              <label className="border border-black px-3 py-2 rounded flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-7 h-7 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="bg-white outline-none px-2 text-[17px]"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  required
                />
              </label>
              {error && <div>{error}</div>}

              <input
                className="border shadow-lg bg-violet-600 hover:bg-black py-[10px] rounded font-mono font-semibold w-full mt-4 mb-1 text-white hover:text-orange-500"
                type="submit"
                value="Register"
              />
            </form>
            <p className="text-center text-[13px]">
              If you have account?{" "}
              <Link className="text-blue-500" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
