import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRegister from "../pages/auth/UserRegister";
import Dashboard from "../pages/Dashboard";
import UserLogin from "../pages/auth/UserLogin";

const UserRouting = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/"></Route>

      <Route path="/register" element={<UserRegister/>}></Route>
      <Route path="/login" element={<UserLogin/>}></Route>

      <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default UserRouting