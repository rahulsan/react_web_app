import { useContext } from "react";
import { AppContext, AppContextType } from "./AppContext";

function OrderCard() {
  const { orders, removeOrder } = useContext(AppContext) as AppContextType;

  return (
    <div className="order-card bg-body-tertiary">
      <h4 className="text-primary">Pending orders</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Instrument</th>
            <th scope="col">Option type</th>
            <th scope="col">Transaction type</th>
            <th scope="col">Strike Price</th>
            <th scope="col">Number of lots</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{order.instrumentType}</td>
              <td>{order.optionType}</td>
              <td>{order.transactionType}</td>
              <td>{order.strikePrice}</td>
              <td>{order.numberOfLots}</td>
              <td onClick={() => removeOrder(index)}>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderCard;
