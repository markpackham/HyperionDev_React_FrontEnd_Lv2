import { useState } from "react";
import DepositMoney from "./balanceChangers/DepositMoney";
import WithdrawMoney from "./balanceChangers/WithdrawMoney";
import InterestRate from "./balanceChangers/InterestRate";
import BankFees from "./balanceChangers/BankFees";
import ChangeBalance from "./balanceChangers/ChangeBalance";

// Parent component
export default function DisplayMoney() {
  // Balance is shared by child components
  let [balance, setBalance] = useState(10000);

  let deposit = 0;
  let withdrawal = 0;
  // Use fixed values for bank fees and interest rates
  const interest = 0.05;
  const bankFees = 10;

  // Use of Intl.NumberFormat learned from
  // How to format numbers as currency strings (1955) Stack Overflow.
  // Available at: https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
  // (Accessed: 05 October 2023).
  const currencyFormatter = new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP",
  });

  // Deposit money
  function addMoney() {
    deposit = parseFloat(document.getElementById("depositAmount").value);
    setBalance((balance += deposit));
  }

  // Add interest
  function addInterest() {
    setBalance((balance += balance * interest));
  }

  // Withdraw money
  function removeMoney() {
    withdrawal = parseFloat(document.getElementById("withdrawAmount").value);

    if (balance < 1) {
      alert("You have run out of money!");
    } else {
      setBalance((balance -= withdrawal));
    }
  }

  // Charge bank fees
  function chargeBankFees() {
    if (balance < 1) {
      alert("You have run out of money!");
    } else {
      setBalance((balance -= bankFees));
    }
  }

  // Allow user to change balance
  function changeBalance() {
    if (document.getElementById("changeBalanceAmount").value < 0) {
      alert("You cannot change to a negative number!");
    } else {
      setBalance(
        (balance = parseFloat(
          document.getElementById("changeBalanceAmount").value
        ))
      );
    }
  }

  return (
    <div>
      <h2>Current Balance {currencyFormatter.format(balance)}</h2>
      <hr />
      <DepositMoney balance={balance} addMoney={addMoney} />
      <hr />
      <InterestRate balance={balance} addInterest={addInterest} />
      <hr />
      <WithdrawMoney balance={balance} removeMoney={removeMoney} />
      <hr />
      <BankFees balance={balance} chargeBankFees={chargeBankFees} />
      <hr />
      <ChangeBalance balance={balance} changeBalance={changeBalance} />
    </div>
  );
}
