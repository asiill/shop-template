import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import ItemInfo from "./pages/ItemInfo.jsx";
import Cart from "./pages/Cart.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/shop",
            element: <Shop />,
        },
        {
            path: "/shop/:itemId",
            element: <ItemInfo />,
        },
        {
            path: "/cart",
            element: <Cart />
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;