import { Children } from "react";
import App from "./components/App";
import AppLayout from "./components/AppLayout";
import ProductsPage from "./components/ProductsPage";
import { Navigate } from "react-router-dom";
const routes = [
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {index: true, element: <Navigate to="title" />},
            {path: "title", element: <App />},
            {path: "products", element: <ProductsPage />},
        ]
    },
];
export default routes