import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Root from "./roots/roots";
import { LoadingHelper } from "./lib/LoadingHelper";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WaitlistForm from "./WaitlistForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingHelper />}>
              <WaitlistForm />
            </Suspense>
          ),
        },
        {
          path: "/email",
          element: (
            <Suspense fallback={<LoadingHelper />}>
              <WaitlistForm />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: (
            <Suspense fallback={<LoadingHelper />}>
              <NotFound />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
