import { useContext, useState } from "react";
import { AppContext, AppContextType } from "./AppContext";
import { Order } from "./AppContext";

function OrderLine() {
  const { addOrder } = useContext(AppContext) as AppContextType;
  const [enableAddOrderButton, setEnableAddOrderButton] = useState(false);

  return (
    <div className="order-line">
      {createCallPutRadioSelector(setEnableAddOrderButton)}
      {createBuySellRadioSelector(setEnableAddOrderButton)}
      {createStrikePriceInput(setEnableAddOrderButton)}
      {createNumberOfLotsInput(setEnableAddOrderButton)}
      {createAddOrderButton(addOrder, enableAddOrderButton)}
    </div>
  );
}

function createCallPutRadioSelector(
  setEnableAddOrderButton: (enable: boolean) => void
) {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="callput_radio"
          id="call"
          value="call"
          onChange={() => checkAndEnableAddOrderButton(setEnableAddOrderButton)}
        />
        <label className="form-check-label" htmlFor="call">
          Call
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="callput_radio"
          id="put"
          value="put"
          onChange={() => checkAndEnableAddOrderButton(setEnableAddOrderButton)}
        />
        <label className="form-check-label" htmlFor="put">
          Put
        </label>
      </div>
    </div>
  );
}

function createBuySellRadioSelector(
  setEnableAddOrderButton: (enable: boolean) => void
) {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="buysell_radio"
          id="buy"
          value="buy"
          onChange={() => checkAndEnableAddOrderButton(setEnableAddOrderButton)}
        />
        <label className="form-check-label" htmlFor="buy">
          Buy
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="buysell_radio"
          id="sell"
          value="sell"
          onChange={() => checkAndEnableAddOrderButton(setEnableAddOrderButton)}
        />
        <label className="form-check-label" htmlFor="sell">
          Sell
        </label>
      </div>
    </div>
  );
}

function createStrikePriceInput(
  setEnableAddOrderButton: (enable: boolean) => void
) {
  return (
    <div>
      <label htmlFor="strike_price_input" className="form-label">
        Strike Price
      </label>
      <input
        type="number"
        className="form-control custom_input"
        id="strike_price_input"
        step="50"
        onChange={() => checkAndEnableAddOrderButton(setEnableAddOrderButton)}
      />
    </div>
  );
}

function createNumberOfLotsInput(
  setEnableAddOrderButton: (enable: boolean) => void
) {
  return (
    <div>
      <label htmlFor="number_of_lots" className="form-label">
        Number of lots
      </label>
      <input
        type="number"
        className="form-control custom_input"
        id="number_of_lots"
        onChange={() => checkAndEnableAddOrderButton(setEnableAddOrderButton)}
      />
    </div>
  );
}

function createAddOrderButton(
  addOrder: (order: Order) => void,
  enableAddOrderButton: boolean
) {
  return (
    <button
      id="add_order_button"
      type="button"
      className="btn btn-primary btn-sm"
      onClick={() => handleAddOrder(addOrder)}
      disabled={!enableAddOrderButton}
    >
      Add Order
    </button>
  );
}

function checkAndEnableAddOrderButton(
  setEnableAddOrderButton: (enable: boolean) => void
) {
  const optionType = (
    document.querySelector(
      'input[name="callput_radio"]:checked'
    ) as HTMLOptionElement
  )?.value;

  const transactionType = (
    document.querySelector(
      'input[name="buysell_radio"]:checked'
    ) as HTMLOptionElement
  )?.value;

  const strikePrice = (
    document.getElementById("strike_price_input") as HTMLInputElement
  )?.value;
  const numberOfLots = (
    document.getElementById("number_of_lots") as HTMLInputElement
  )?.value;

  console.log(optionType, transactionType, strikePrice, numberOfLots);
  if (
    optionType != undefined &&
    transactionType != undefined &&
    strikePrice &&
    numberOfLots
  ) {
    setEnableAddOrderButton(true);
  } else {
    setEnableAddOrderButton(false);
  }
}

function handleAddOrder(addOrder: (order: Order) => void) {
  console.log("adding order ");

  const instrumentType = (
    document.getElementById("instrument_selector") as HTMLSelectElement
  ).value;

  const optionType = (
    document.querySelector(
      'input[name="callput_radio"]:checked'
    ) as HTMLOptionElement
  ).value;

  const transactionType = (
    document.querySelector(
      'input[name="buysell_radio"]:checked'
    ) as HTMLOptionElement
  ).value;

  const strikePrice = (
    document.getElementById("strike_price_input") as HTMLInputElement
  ).value;
  const numberOfLots = (
    document.getElementById("number_of_lots") as HTMLInputElement
  ).value;

  console.log(optionType, transactionType, strikePrice, numberOfLots);

  const order: Order = {
    optionType: optionType,
    transactionType: transactionType,
    strikePrice: strikePrice,
    numberOfLots: numberOfLots,
    instrumentType: instrumentType,
  };
  addOrder(order);
  return;
}
export default OrderLine;
