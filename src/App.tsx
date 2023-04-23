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

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path={"/" + getBasename(window.location.pathname)}
        element={<Root />}
      >
        <Route index element={<HomePage />} />
        <Route path="login" element={<AuthPage login />} />
        <Route path="signup" element={<AuthPage login={false} />} />
      </Route>
    )
  );
  return (
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

const Root = () => {
  return <Outlet />;
};

export default App;
