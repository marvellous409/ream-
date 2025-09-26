import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import Eye from "../../assets/eye-solid-full.svg";
import Close from "../../assets/eye-slash-solid-full (1).svg";

interface FormData {
  firstName: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const Sign = () => {
  const [data, setData] = useState<FormData>({
    firstName: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  // 👁 toggle states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // feedback message
  const [message, setMessage] = useState("");

  // handleChange
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handleSubmit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (data.password !== data.confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }
  
    // Save to localStorage
    localStorage.setItem("userData", JSON.stringify(data));
    localStorage.setItem("loggedInUser", JSON.stringify(data)); // 👈 store logged in user
  
    setMessage("✅ Account created successfully!");
    console.log("Saved to localStorage:", data);
  
    // Redirect to dashboard
    navigate("/main board");
  
    // Optionally clear form (you can keep or remove this)
    setData({
      firstName: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="bg-[#19004E] w-screen h-screen">
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-[#725f9d3a] shadow-md rounded-xl p-8 w-full max-w-md border-white"
        >
          <div>
            <h2 className="text-2xl text-white font-bold text-center">
              Create Account
            </h2>
            <p className="text-purple-600 text-xl text-center">
              Get started in 30 seconds
            </p>
          </div>

          <div className="flex gap-5 mt-5">
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

            {/* lastname */}
            <div className="mb-4">
              <p className="text-white">Last Name</p>
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={data.lastname}
                onChange={handleChange}
                className="w-full bg-gray-200 rounded-lg px-4 py-2"
                required
              />
            </div>
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

          {/* confirm password */}
          <div className="mb-6">
            <p className="text-white mb-1">Confirm Password</p>
            <div className="flex items-center bg-gray-200 rounded-lg px-4">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={data.confirmPassword}
                onChange={handleChange}
                className="w-full bg-transparent outline-none py-2"
                required
              />
              {showConfirmPassword ? (
                <img
                  src={Close}
                  alt="hide password"
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => setShowConfirmPassword(false)}
                />
              ) : (
                <img
                  src={Eye}
                  alt="show password"
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => setShowConfirmPassword(true)}
                />
              )}
            </div>
          </div>

          {/* feedback message */}
          {message && (
            <p
              className={`text-center font-semibold mb-4 ${
                message.includes("✅")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {message}
            </p>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-1 rounded-lg hover:bg-purple-950 transition"
          >
            Create account
          </button>

          <div className="mt-4 text-center">
            <p className="font-semibold text-gray-500">
              Already have an account?{" "}
              <span className="text-purple-600 underline">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign;
