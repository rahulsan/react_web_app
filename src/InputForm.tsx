import { useContext, useState } from "react";
import Dropdown from "./Dropdown";
import OrderLine from "./OrderLine";
import accounts from "./accounts.json";
import { Instruments, Strategies } from "./constants";
import { AppContext, AppContextType, Order } from "./AppContext";

function InputForm() {
  const { orders } = useContext(AppContext) as AppContextType;

  const [strategy, setStrategy] = useState("");

  return (
    <div className="input-form bg-body-tertiary">
      <h3 className="text-primary">Welcome to algo trading</h3>
      {createAccountSelector()}
      {createInstrumentSelector()}
      {createStrategySelector(setStrategy)}
      {strategy === Strategies.CUSTOM && <OrderLine />}
      {createExecuteButton(orders)}
    </div>
  );
}

function createAccountSelector() {
  return (
    <Dropdown
      id="account_selector"
      label="Select an account"
      options={getAccountNames()}
      onChange={onAccountChange}
      disabled={false}
    />
  );
}

function onAccountChange() {
  console.log("onAccountChange");
  const instrumentSelector = document.getElementById(
    "instrument_selector"
  ) as HTMLSelectElement;
  instrumentSelector.disabled = false;
}

function createInstrumentSelector() {
  return (
    <Dropdown
      id="instrument_selector"
      label="Select an instrument"
      options={getInstrumentNames()}
      onChange={onInstrumentChange}
      disabled={true}
    />
  );
}

function onInstrumentChange() {
  console.log("onInstrumentChange");
  const strategySelector = document.getElementById(
    "strategy_selector"
  ) as HTMLSelectElement;
  strategySelector.disabled = false;
}

function createStrategySelector(setStrategy: (strategy: string) => void) {
  return (
    <Dropdown
      id="strategy_selector"
      label="Select a strategy"
      options={getStrategyNames()}
      onChange={() => onStrategyChange(setStrategy)}
      disabled={true}
    />
  );
}

function onStrategyChange(setStrategy: (strategy: string) => void) {
  console.log("on strategy selected");
  const strategySelector = document.getElementById(
    "strategy_selector"
  ) as HTMLSelectElement;
  setStrategy(strategySelector.value);
}

function createExecuteButton(orders: Order[]) {
  console.log("executeButton");
  return (
    <button
      type="button"
      className="btn btn-primary btn-sm button-width"
      onClick={() => handleExecute(orders)}
      disabled
    >
      Execute
    </button>
  );
}

const getInstrumentNames = () => {
  return Object.values(Instruments);
};

const getAccountNames = () => {
  const accountNames = accounts.accounts.map((account) => account.name);
  accountNames.push("All");
  return accountNames;
};

const getStrategyNames = () => {
  return Object.values(Strategies);
};

const handleExecute = (orders: Order[]) => {
  const selectedAccount = (
    document.getElementById("account_selector") as HTMLSelectElement
  ).value;
  console.log("selected account", selectedAccount);
  console.log("orders ", orders);
};

export default InputForm;
