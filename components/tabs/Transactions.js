// components/tabs/Transactions.js
import React from "react";

const transactions = [
  { name: "Investment in Level One", status: "Completed", date: "2024-01-15" },
  { name: "Withdrawal from Level Two", status: "Pending", date: "2024-01-18" },
  { name: "Investment in Level Three", status: "Failed", date: "2024-02-01" },
  { name: "Investment in Level Four", status: "Completed", date: "2024-02-10" },
];

export default function Transactions() {
  return (
    <div className="transactions">
      <h4>Transactions</h4>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Transaction Name</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.name}</td>
                <td>{transaction.status}</td>
                <td>{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
