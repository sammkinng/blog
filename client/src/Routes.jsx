import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "pages/NotFound";
const Form = React.lazy(() => import("pages/Form"));
const LoginPage = React.lazy(() => import("pages/Login"));
const Blog = React.lazy(() => import("pages/Blog"));
const Home = React.lazy(() => import("pages/Home"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/post-:id" element={<Blog />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<LoginPage register={true} />} />
          <Route path="/create" element={<Form create={true} />} />
          <Route path="/edit-:id" element={<Form />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
