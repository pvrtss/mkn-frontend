import "./App.css";
import { AuthPage } from "./pages/AuthPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { getBasename } from "./utils/getBasename";
import { createTheme, ThemeProvider } from "@mui/material";
import { Dashboard } from "./pages/Dashboard";
import { ProjectsPage } from "./pages/ProjectsPage";
import { PageNotFound } from "./pages/PageNotFound";
import { FavouritesPage } from "./pages/FavouritesPage";
import { ProfilePage } from "./pages/ProfilePage";
import { ProjectPage } from "./pages/ProjectPage";
import { ProjectSettingsPage } from "./pages/ProjectSettingsPage";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ru";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        // path={"/" + getBasename(window.location.pathname)}
        path="/"
        element={<Root />}
      >
        <Route index element={<HomePage />} />
        <Route path="login" element={<AuthPage login />} />
        <Route path="signup" element={<AuthPage login={false} />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:uuid" element={<ProjectPage />} />
        <Route
          path="projects/:uuid/settings"
          element={<ProjectSettingsPage />}
        />
        <Route path="favourites" element={<FavouritesPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <ThemeProvider theme={darkTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
        <RouterProvider router={router} />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

const Root = () => {
  return <Outlet />;
};

export default App;
