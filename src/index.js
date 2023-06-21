import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/landing";
import Salary from "./pages/salary";
import Overtime from "./pages/overtime";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    //loader:
  },
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
