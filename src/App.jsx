import "./App.css";
import { Route, Routes, redirect } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleAuthLogin from "./auth/google";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/google" element={<GoogleAuthLogin />} />
      </Routes>
    </>
  );
}

export default App;
