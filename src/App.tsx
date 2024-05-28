import "./App.css";
import CanvasHome from "./pages/CanvasHome/index.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/index.tsx";
import CanvasMirror from "./pages/CanvasMirror/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CanvasHome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/mirror",
    element: <CanvasMirror />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
