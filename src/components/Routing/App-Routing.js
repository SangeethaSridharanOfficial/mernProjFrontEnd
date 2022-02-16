import { Route, Routes } from "react-router-dom";
import Auth from "../Auth/Auth";
import Orders from "../Orders/Orders";
import Products from "../Products/Products";
import NotFound from "../404/E404";
import Profile from "../Profile/Profile";


function Routing() {
    return (
        <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<Products />} />
            <Route path="my-orders" element={<Orders />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Routing;