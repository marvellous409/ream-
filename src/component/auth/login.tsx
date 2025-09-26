import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Eye from "../../assets/eye-solid-full.svg";
import Close from "../../assets/eye-slash-solid-full (1).svg";

interface FormData {
  firstName: string;
  password: string;
}

const Login = () => {
  const [data, setData] = useState<FormData>({
    firstName: "",
    password: "",
  });

  // 👁 toggle state
  const [showPassword, setShowPassword] = useState(false);

  // feedback message
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // get saved user from signup
    const storedUser = localStorage.getItem("userData");
    if (!storedUser) {
      setMessage("❌ No account found. Please sign up first.");
      return;
    }

    const parsedUser = JSON.parse(storedUser);

    // check credentials
    if (
      parsedUser.firstName === data.firstName &&
      parsedUser.password === data.password
    ) {
      // login success
      localStorage.setItem("loggedInUser", JSON.stringify(parsedUser));
      setMessage("✅ Login successful!");
      navigate("/main board"); // 👈 redirect to dashboard
    } else {
      setMessage("❌ Invalid name or password");
    }
  };

  return (
    <div className="bg-[#19004E] w-screen h-screen">
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-[#725f9d3a] shadow-md rounded-xl p-8 w-full max-w-md border-white"
        >
          <div className="mb-10">
            <h2 className="text-2xl text-white capitalize font-semibold text-start">
              welcome back
            </h2>
            <p className="text-gray-600 text-xl text-start">
              New to ream track?{" "}
              <span className="text-purple-600 underline">
                <Link to="/sign">Create Account</Link>
              </span>
            </p>
          </div>

          {/* firstName */}
          <div className="mb-4">
            <p className="text-white">First Name</p>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={data.firstName}
              onChange={handleChange}
              className="w-full bg-gray-200 rounded-lg px-4 py-2"
              required
            />
          </div>

          {/* password */}
          <div className="mb-6">
            <p className="text-white mb-1">Password</p>
            <div className="flex items-center bg-gray-200 rounded-lg px-4">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={handleChange}
                className="w-full bg-transparent outline-none py-2"
                required
              />

              {/* Toggle Icon */}
              {showPassword ? (
                <img
                  src={Close}
                  alt="hide password"
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <img
                  src={Eye}
                  alt="show password"
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
          </div>

          {/* feedback message */}
          {message && (
            <p
              className={`text-center font-semibold mb-4 ${
                message.includes("✅") ? "text-green-400" : "text-red-400"
              }`}
            >
              {message}
            </p>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold text-lg py-1 rounded-lg hover:bg-purple-950 transition"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;