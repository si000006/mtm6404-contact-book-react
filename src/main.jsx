import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import ContactDetails from "./routes/ContactDetails";
import NewContact from "./routes/NewContact";
import EditContact from "./routes/EditContact";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contacts/:id", element: <ContactDetails /> },
      { path: "/new", element: <NewContact /> },
      { path: "/edit/:id", element: <EditContact /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);