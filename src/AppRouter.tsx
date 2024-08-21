import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import AuhCallbackPage from "./pages/AuhCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/user-profile"
        element={
          <Layout>
            <UserProfilePage />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/auth-callback" element={<AuhCallbackPage />} />
    </Routes>
  );
};

export default AppRouter;
