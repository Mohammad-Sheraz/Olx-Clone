import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Dashboard from "../../Dashboard";


function Router() {
    return <RouterProvider router={router} />
}

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
    },
  ]);

  export default Router;