import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "./routes";
import LoginPage from "./components/login/LoginPage";

const App = () => {
  const token = localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={token ? <MainLayout /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
