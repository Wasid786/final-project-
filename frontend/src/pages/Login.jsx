import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import API_URL from "../constants";
import Logo from "../assets/home.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import background from "../assets/bg03.jpg";


function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleApi = () => {
    const url = API_URL + "/login";
    const data = { email, password };
    axios
      .post(url, data)
      .then((res) => {
        if (res.data.message) {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userId", res.data.userId);
            navigate("/");
            toast.success("Login Successfully!");
          }
        }
      })
      .catch((err) => {
        toast.error("SERVER ERROR");
      });
  };

  return (
    <div className="min-h-screen flex items-center z-10 relative justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* <img src={background} className="  opacity-20 object-cover w-full" alt="" /> */}
       
      <div className="absolute inset-0 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${background})`, filter: 'blur(4px)', zIndex: -1 }} />
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg z-10">
        <div>
          <div className="text-center">
            <Link to="/">
              <img className="mx-auto h-12 w-auto" src={Logo} alt="Home" />
            </Link>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-500 hover:text-indigo-500 focus:outline-none focus:text-indigo-500"
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={handleApi}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
