import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import AppLayout from "@/Layout/AppLayout";
import AppLayoutLoading from "@/Layout/AppLayoutLoading";

const HomeLazy = lazy(() => import("@/pages/home/Home"));
const AboutLazy = lazy(() => import("@/pages/about/About"));
const SkillsLazy = lazy(() => import("@/pages/skills/Skills"));
const ProjectsLazy = lazy(() => import("@/pages/projects/Projects"));
const ContactLazy = lazy(() => import("@/pages/contact/Contact"));

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<AppLayoutLoading />}>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route path="home" element={<HomeLazy />} />
              <Route path="about" element={<AboutLazy />} />
              <Route path="skills/:skill" element={<SkillsLazy />} />
              <Route path="projects" element={<ProjectsLazy />} />
              <Route path="contact" element={<ContactLazy />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
