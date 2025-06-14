import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import Protected from "./components/auth/Protected";
import MainLayout from "./layouts/MainLayout";
import AppLayout from "./layouts/AppLayout";

//Pages
import Dashboard from "./pages/Dashboard";
import Recipes from "./pages/Recipes";
import Inventory from "./pages/Inventory";
import Orders from "./pages/Orders";
import Analytics from "./pages/Analytics";
import Suppliers from "./pages/Suppliers";
import Learn from "./pages/Learn";
import Settings from "./pages/Settings";

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
          <Route
            path="/recipes"
            element={
              <Protected>
                <Recipes />
              </Protected>
            }
          />
          <Route
            path="/inventory"
            element={
              <Protected>
                <Inventory />
              </Protected>
            }
          />
          <Route
            path="/orders"
            element={
              <Protected>
                <Orders />
              </Protected>
            }
          />
          <Route
            path="/analytics"
            element={
              <Protected>
                <Analytics />
              </Protected>
            }
          />
          <Route
            path="/suppliers"
            element={
              <Protected>
                <Suppliers />
              </Protected>
            }
          />
          <Route
            path="/learn"
            element={
              <Protected>
                <Learn />
              </Protected>
            }
          />
          <Route
            path="/settings"
            element={
              <Protected>
                <Settings />
              </Protected>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
