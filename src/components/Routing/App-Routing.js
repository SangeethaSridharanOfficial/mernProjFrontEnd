import { Route, Routes } from "react-router-dom";
import Orders from "../Orders/Orders";
import Products from "../Products/Products";
import NotFound from "../404/E404";


function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="my-orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Routing;