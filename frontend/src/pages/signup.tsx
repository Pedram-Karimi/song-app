import { useState } from "react";
import { useUserAuth } from "../context/userAuthCtx";
import { Link } from "react-router-dom";
import axios from "axios";

// components

//
const Signup: React.FC = () => {
  // vaiables ---
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<null | Boolean>(null);

  // context ---

  const { user, changeUser } = useUserAuth();

  // login function ---

  const signup = async (e: any) => {
    e.preventDefault();
    try {
      // Send a POST request to the backend's /signup route using Axios
      const data = await axios.post("http://127.0.0.1:4000/user/signup", {
        email,
        password,
        username,
      });
      localStorage.setItem("user", JSON.stringify(data));
      changeUser(data.data);
      // ...
    } catch (err) {
      setError(err.response.data.error);

      console.log(err.response.data.error);
    }
  };
  //
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="bg-[var(--bg-2)] rounded-lg border border-[var(--border-color)] p-5 flex flex-col h-[70vh] pb-3 w-[95%] sm:w-[30%]">
        <h1 className="text-[var(--text-color)] text-2xl text-center pb-5 font-bold pt-0">
          Sign up
        </h1>
        <form
          className="flex-col flex gap-2 justify-between h-full "
          onSubmit={signup}
        >
          <div className="flex-col flex gap-2 pt-0">
            <input
              placeholder="username"
              className="bg-transparent p-2 border border-[var(--border-color)] rounded-lg outline-none text-[var(--text-color)] placeholder-[var(--placeholder-text)]"
              value={username}
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              placeholder="email"
              className="bg-transparent p-2 border border-[var(--border-color)] rounded-lg outline-none text-[var(--text-color)] placeholder-[var(--placeholder-text)]"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              placeholder="password"
              className="bg-transparent p-2 border border-[var(--border-color)] rounded-lg outline-none text-[var(--text-color)] placeholder-[var(--placeholder-text)]"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="flex-col flex gap-2 pt-0">
            <button className="border border-[var(--border-color)] text-[var(--text-color)] p-2 cursor-pointer rounded-lg hover:bg-[var(--light-hover)] transition ">
              Signup
            </button>
            <div className="border-[var(--border-color)] border-b"></div>
            <p className="text-[var(--dark-text)] w-full text-center">or</p>
            <div className="w-full p-2  border border-[#4c8bf5] cursor-pointer rounded-lg hover:bg-[#4c8af537] flex gap-2 items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
                className="w-[20px] h-[20px]"
              />
              <p className="text-[14px] ">Signup with google</p>
            </div>
          </div>
        </form>
        <p className="pt-2  mt-2 border-t border-[var(--border-color)] text-[16px] text-center text-[var(--dark-text)]">
          Do you have an account?{" "}
          <Link to="/user/login" className="text-[#5c5c9c]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
