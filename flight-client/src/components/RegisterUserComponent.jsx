import { useState } from "react";
import { createUser } from "../services/UserService";
import { useNavigate } from "react-router-dom";

const RegisterUserComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const employeeData = {
        firstName,
        lastName,
        email,
        password,
        role: 2,
        username,
      };

      createUser(employeeData)
        .then((response) => {
          const token = response.data.token;
          console.log("Token:", token); // Token'ı konsola yazdırıyoruz
          if (token) {
            localStorage.setItem("token", token);
            localStorage.setItem('username', employeeData.username); // Token'ı localStorage'a kaydediyoruz
          }
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setUsername("");
          navigate("/dashboard"); // Token kaydedildikten sonra yönlendirme
        })
        .catch((error) => console.error("Error creating user:", error));
    }
  };

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };
    if (!firstName.trim()) {
      errorsCopy.firstName = "First name is required";
      valid = false;
    } else {
      errorsCopy.firstName = "";
    }
    if (!lastName.trim()) {
      errorsCopy.lastName = "Last name is required";
      valid = false;
    } else {
      errorsCopy.lastName = "";
    }
    if (!email.trim()) {
      errorsCopy.email = "Email is required";
      valid = false;
    } else {
      errorsCopy.email = "";
    }
    if (!password.trim()) {
      errorsCopy.password = "Password is required";
      valid = false;
    } else {
      errorsCopy.password = "";
    }
    if (!username.trim()) {
      errorsCopy.username = "Username is required";
      valid = false;
    } else {
      errorsCopy.username = "";
    }
    setErrors(errorsCopy);
    return valid;
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('./flightlogin.jpg')" }}
    >
      <div className="absolute left-20 w-2/5 md:max-w-md p-8 rounded-lg shadow-lg backdrop-blur-md">
        <h2 className="text-2xl text-center font-semibold text-white mb-4">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label htmlFor="firstName" className="text-white">
              First Name
            </label>
            <input
              type="text"
              className={`w-full px-3 py-2 rounded border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && (
              <div className="text-red-500 text-sm mt-1">
                {errors.firstName}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="text-white">
              Last Name
            </label>
            <input
              type="text"
              className={`w-full px-3 py-2 rounded border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && (
              <div className="text-red-500 text-sm mt-1">{errors.lastName}</div>
            )}
          </div>
          <div>
            <label htmlFor="username" className="text-white">
              Username
            </label>
            <input
              type="text"
              className={`w-full px-3 py-2 rounded border ${
                errors.username ? "border-red-500" : "border-gray-300"
              }`}
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <div className="text-red-500 text-sm mt-1">{errors.username}</div>
            )}
          </div>

          <div>
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              type="email"
              className={`w-full px-3 py-2 rounded border ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div className="text-red-500 text-sm mt-1">{errors.email}</div>
            )}
          </div>
          <div>
            <label htmlFor="password" className="text-white">
              Password
            </label>
            <input
              type="password"
              className={`w-full px-3 py-2 rounded border ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <div className="text-red-500 text-sm mt-1">{errors.password}</div>
            )}
          </div>
          <div>
            <p className="text-gray-600 text-center">
              If you already have an account <a href="/login">Login</a>
            </p>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 py-2 text-white bg-gray-800 rounded hover:bg-black transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterUserComponent;
