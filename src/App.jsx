import "./App.css";
import { Route, Routes, redirect } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleAuthLogin from "./auth/GoogleLogin";
import GoogleAuthRegister from "./auth/GoogleRegister";
import GoogleAuthSync from "./auth/GoogleSync";
import FacebookAuthLogin from "./auth/FacebookLogin";
import FacebookAuthRegister from "./auth/FacebookRegister";
import FacebookAuthSync from "./auth/FacebookSync";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/google" element={<GoogleAuthLogin />} />
        <Route path="/auth/google/register" element={<GoogleAuthRegister />} />
        <Route path="/auth/google/sync" element={<GoogleAuthSync />} />
        <Route path="/auth/facebook" element={<FacebookAuthLogin />} />
        <Route
          path="/auth/facebook/register"
          element={<FacebookAuthRegister />}
        />
        <Route path="/auth/facebook/sync" element={<FacebookAuthSync />} />
      </Routes>
    </>
  );
}

export default App;
