import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const router = createHashRouter([
  //Change to createHashRouter if hosting on GitHub pages: otherwise use createBrowserRouter
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
