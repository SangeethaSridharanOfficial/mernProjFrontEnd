import '../Orders/Orders.css'
import iphone from '../../assets/orders/iphone.jpeg'
const Orders = () => {
    return (
        <div className="orders-container">
            <h1>My Orders</h1>
            <div className="orders-filterSearch">
                <div className="orders-search">
                    <input type="text" placeholder="Search orders" />
                    <button>Search</button>
                </div>
                <fieldset className="orders-filter">
                    <select name="filter-orders" id="filter-orders">
                        <option value="1">This month</option>
                        <option value="2">Last month</option>
                        <option value="3">last 3 months</option>
                        <option value="6">last 6 months</option>
                        <option value="all">all orders</option>
                    </select>
                </fieldset>
            </div>
            <Order/>
            <Order/>
            <Order/>
            <Order/>
            <Order/>
        </div>
    );
};
const Order = () => {
    return(
        <table className="orders-table">
            <tr className="orders-tr">
                <td className="orders-td1">
                    <img src={iphone} alt="order1" width="280" height="200"/>
                </td>
                <td className="orders-td2">
                    <div className='order-item-delivery'>
                        <h4>Delivered on Feb 14</h4>
                    </div>
                    <div className='order-item-address'>
                        <a href="#" >Shipped to user</a><br/>
                    </div>
                    <div className='order-item-name'>
                        <a href="#" className='order-item-name'>iPhone 13 Pro Max(256 Gb, Sierra Blue)</a>
                    </div>

                    <div className='order-item-options'>
                        <button>Buy it again</button>
                        <button>Rate Item</button>
                        <button>Get Product support</button>
                        <button>Return or replace Item</button>
                    </div>
                    
                </td>
            </tr>
        </table>
    );
};

export default Orders;
