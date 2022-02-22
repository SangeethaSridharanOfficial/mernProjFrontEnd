import { Route, Routes, Navigate } from "react-router-dom";
import Auth from "../Auth/Auth";
import Orders from "../Orders/Orders";
import NotFound from "../404/E404";
import Profile from "../Profile/Profile";
import Catalogue from "../Catalogue/Catalogue";
import Products from "../Catalogue/Products/Products";

function Routing() {
    /**Routing pattern will be changed after Authentication */
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="browse" />} />
            <Route path="browse">
                <Route index={true} element={<Catalogue />} />
                <Route path="category/:id" element={<Products />} />
            </Route>
            <Route path="my-orders" element={<Orders />} />
            <Route path="profile" element={<Profile />} />
            <Route path="auth" element={<Auth />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Routing;