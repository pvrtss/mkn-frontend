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
  return <RouterProvider router={router} />;
}

const Root = () => {
  return <Outlet />;
};

export default App;
