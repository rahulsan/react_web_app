import Dropdown from "./Dropdown";
import OrderLine from "./OrderLine";
import accounts from "./accounts.json";
import { Instruments } from "./constants";

function InputForm() {
  return (
    <div className="input-form bg-body-tertiary">
      <h3 className="text-primary">Welcome to algo trading</h3>
      {createAccountSelector()}
      {createInstrumentSelector()}
      <OrderLine />
      {createExecuteButton()}
    </div>
  );
}

function createAccountSelector() {
  return (
    <Dropdown
      id="account_selector"
      label="Select an account"
      options={getAccountNames()}
    />
  );
}

function createInstrumentSelector() {
  return (
    <Dropdown
      id="instrument_selector"
      label="Select an instrument"
      options={getInstrumentNames()}
    />
  );
}

function createExecuteButton() {
  console.log("executeButton");
  return (
    <button
      type="button"
      className="btn btn-primary disabled btn-sm button-width"
      onClick={handleExecute}
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

const handleExecute = () => {
  const selectedAccount = (
    document.getElementById("accounts_selector") as HTMLSelectElement
  ).value;
  console.log("selected account", selectedAccount);
};

export default InputForm;
