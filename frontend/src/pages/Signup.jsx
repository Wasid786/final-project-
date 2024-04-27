import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import axios from "axios";
import API_URL from "../constants";
import Logo from "../assets/home.png";
import validator from "validator"; // Import validator library for email validation
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Signup() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [error, setError] = useState(""); // State for holding error message
  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;


  const navigator = useNavigate();

  const handleApi = () => {
    // Validate email format
    if (!validator.isEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const url = API_URL + "/signup";
    const data = { username, password, mobile, email };
    axios
      .post(url, data)
      .then((res) => {
        if (res.data.message) {
          navigator("/login");
          alert(res.data.message);
        }
      })
      .catch((err) => {
        alert("Email Already Exists, Try Different Email");
        console.log("error "+ err)
      });
  };
 

  return (
    <div>
      <div className="w-2/6 mx-auto h-full">
        <h3>Welcome to Signup Page </h3>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="w-[100px] mx-auto">
              {" "}
              <Link className="links" to="/">
                {" "}
                <img src={Logo} alt="Home" />{" "}
              </Link>
            </div>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create New Account
            </h2>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              User Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
                className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Mobile
            </label>
            <div className="mt-2">
              <input
                id="mobile"
                name="mobile"
                type="text"
                autoComplete="mobile"
                required
                value={mobile}
                onChange={(e) => {
                  setmobile(e.target.value);
                }}
                className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2 relative">
    <input
        id="password"
        name="password"
        type={changePassword ? "password" : "text"}
        placeholder="Password"
        autoComplete="current-password"
        required=""
        value={password}
        onChange={(e) => {
            setpassword(e.target.value);
        }}
        className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-blue-400" onClick={() => {
        setChangePassword(changeIcon);
    }}>
        {changeIcon ? <FaRegEye size={27} /> : <FaRegEyeSlash size={27}/>}
    </span>
</div>

          </div>
          <div>
            <p className="text-red-500">{error}</p> {/* Display error message in red color */}
          </div>
          <br></br>
          <button className="btn btn-primary mr-3" onClick={handleApi}>
            {" "}
            <Link className="m-3"> SignUp</Link>{" "}
          </button>
          <p className="mt-10 text-center text-sm text-gray-500">
            already a member?
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              <Link className="m-3" to="/login">
                {" "}
                SIGN IN{" "}
              </Link>
            </a>
          </p>{" "}
        </div>
      </div>
    </div>
  );
}

export default Signup;