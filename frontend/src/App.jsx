import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import BookingCar from "./pages/BookingCar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "antd/dist/antd.css";

function App() {
  const user = localStorage.getItem("user");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {user ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
          {user ? (
            <Route path="/booking/:id" element={<BookingCar />} />
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
