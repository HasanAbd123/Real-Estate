import Navbar from "./components/navbar/Navbar";

import Homepage from "./routes/homepage/Homepage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createHashRouter,
} from "react-router-dom";
import ListPage from "./routes/listPage/ListPage";
import Layout from "./routes/layout/Layout";
import SinglePage from "./routes/singlePage/SinglePage";
import Profilepage from "./routes/profilePage/Profilepage";
function App() {
  const router = createHashRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Homepage />,
          },
          {
            path: "/list",
            element: <ListPage />,
          },
          {
            path: "/:id",
            element: <SinglePage />,
          },
          {
            path: "/profile",
            element: <Profilepage />,
          },
        ],
      },
    ],
    { basename: "/Real-Estate/" }
  );
  return <RouterProvider router={router} />;
}

export default App;
