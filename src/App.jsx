// import LoginPage from "./pages/LoginPage"
// import SignUpPage from "./pages/SignUpPage"
// import ForgotPasswordPage from "./pages/ForgotPasswordPage"

// function App() {

//   return (
//     <div>
//       <LoginPage />
//       <SignUpPage />
//       <ForgotPasswordPage />
//     </div>
//   )
// }

// export default App

// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import Dashboard from "./pages/Dashboard";
import Protected from "./components/auth/Protected";
import MainLayout from "./layouts/MainLayout";
import AppLayout from "./layouts/AppLayout";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes with MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Route>

        {/* Protected routes with AppLayout */}
        <Route element={<AppLayout />}>
          <Route
            path="/dashboard"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
