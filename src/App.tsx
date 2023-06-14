import { useState } from "react";
import InputForm from "./InputForm";
import OrderCard from "./OrderCard";
import { AppContext } from "./AppContext";
import { Order } from "./AppContext";

function App() {
  // fetch("http://127.0.0.1:5000/get_symbol", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ option_type: "put" }),
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (order: Order) => {
    setOrders([...orders, order]);
  };

  const removeOrder = (index: number) => {
    orders.splice(index, 1);
    setOrders([...orders]);
  };

  return (
    <div className="main-container">
      <AppContext.Provider value={{ orders, addOrder, removeOrder }}>
        <InputForm />
        <OrderCard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
