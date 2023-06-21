import "./App.css";
import Landing from "./pages/landing";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import Salary from "./pages/salary";
import Overtime from "./pages/overtime";
import { Children } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    //loader:
    children: [
      {
        path: "/salary",
        element: <Salary />,
        //loader:
      },
      {
        path: "/overtime",
        element: <Overtime />,
        //loader:
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Link to="/" />
    </>
  );
}

export default App;
