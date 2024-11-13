import { useState } from "react";
import { loginUser } from "../services/UserService";
import { useNavigate } from "react-router-dom";

const RegisterUserComponent = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({
    password: "",
    username: "",
  });
  const [loginError, setLoginError] = useState(""); // Giriş hatası için state

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const employeeData = {
        password,
        username,
      };

      loginUser(employeeData)
        .then((response) => {
          const token = response.data.token;
          console.log("Token:", token); // Token'ı konsola yazdırıyoruz
          if (token) {
            localStorage.setItem("token", token);
            localStorage.setItem("username", employeeData.username); // Token'ı localStorage'a kaydediyoruz
          }
          setPassword("");
          setUsername("");
          navigate("/dashboard"); // Token kaydedildikten sonra yönlendirme
        })
        .catch((error) => {
          if (error.response && error.response.status === 403) {
            setLoginError("Invalid username or password"); // Kullanıcıya hata mesajı göster
          } else {
            console.error("Error logging in:", error);
          }
        });
    }
  };

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };
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
          Log In
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <input
              type="text"
              placeholder="Username"
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
            <input
              type="password"
              placeholder="Password"
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
          {/* Kullanıcı adı veya şifre hatasını gösterme */}
          {loginError && (
            <div className="text-red-500 text-center mt-2">{loginError}</div>
          )}
          <div>
            <p className="text-gray-600 text-center">
              If you don't have an account, <a href="/register">Register</a>
            </p>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 py-2 text-white bg-gray-800 rounded hover:bg-black transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterUserComponent;
