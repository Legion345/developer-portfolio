import { Routes, Route } from "react-router-dom";
import App from "./App";
import { ProjectDetail } from "./pages/ProjectDetail";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
    </Routes>
  );
}
