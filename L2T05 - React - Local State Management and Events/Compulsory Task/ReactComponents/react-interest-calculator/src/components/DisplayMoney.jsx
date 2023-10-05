import { useState } from "react";
import DepositMoney from "./DepositMoney";
import WithdrawMoney from "./WithdrawMoney";
import InterestRate from "./InterestRate";

export default function DisplayMoney() {
  let [balance, setBalance] = useState(100);

  const [deposit, setDeposit] = useState(0);
  const interest = 0.05;
  const [withdrawal, setWithdrawal] = useState(0);

  // Deposit money
  function addMoney() {
    setDeposit(
      deposit + parseInt(document.getElementById("depositAmount").value)
    );

    setBalance((balance += deposit));
  }

  // Add interest
  function addInterest() {
    setBalance((balance += balance * interest));
  }

  // Withdraw money
  function removeMoney() {
    setWithdrawal(
      withdrawal + parseInt(document.getElementById("withdrawAmount").value)
    );

    if (balance < 1) {
      alert("You have run out of money!");
    }

    setBalance((balance -= withdrawal));
  }

  return (
    <div>
      <h2>Current Balance £{parseFloat(balance.toFixed(2))}</h2>
      <hr />
      <DepositMoney balance={balance} addMoney={addMoney} />
      <hr />
      <InterestRate balance={balance} addInterest={addInterest} />
      <hr />
      <WithdrawMoney balance={balance} removeMoney={removeMoney} />
    </div>
  );
}
