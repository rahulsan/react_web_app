import { useState } from "react";
import InputForm from "./InputForm";
import OrderCard from "./OrderCard";
import { AppContext } from "./AppContext";
import { Order } from "./AppContext";
function App() {
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
