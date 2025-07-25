
import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import SkillsSection from "../Pages/SkillsSection";
import EducationSection from "../Pages/EducationSection";
import ProjectShowSection from "../Pages/ProjectShowSection";
import ContactSection from "../Pages/ContactSection";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <p>404 Error</p>,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
            path: "/skills",
            Component: SkillsSection
        },
        {
            path: "/education",
            Component: EducationSection
        },
        {
            path: "/projects",
            Component: ProjectShowSection
        },
        {
            path: "/contact",
            Component: ContactSection
        }
    ]
  },
]);

export default router;