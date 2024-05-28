import "./App.css";
import CanvasHome from "./pages/CanvasHome.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CanvasHome />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
