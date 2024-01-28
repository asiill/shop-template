import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import ItemInfo from "./pages/ItemInfo.jsx";
import Cart from "./pages/Cart.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/shop-template/",
            element: <Home />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/shop-template/shop",
            element: <Shop />,
        },
        {
            path: "/shop-template/shop/:itemId",
            element: <ItemInfo />,
        },
        {
            path: "/shop-template/cart",
            element: <Cart />
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;