import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "../pages/auth/UserLogin";
import Dashboard from "../pages/Dashboard";

const UserRouting = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<UserLogin/>}></Route>

      <Route path="/login" element={<UserLogin/>}></Route>

      <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default UserRouting