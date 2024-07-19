"use client";
import { useEffect, useState } from "react";
import { getDocs, collection, where, query } from "firebase/firestore";
import { db } from "@/config/firebase";
import { UserAuth } from "@/context/authContext";

export default function Transactions() {
  const { user } = UserAuth();
  const [transactionData, setTransactionData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user) {
          return;
        }

        const userId = user.uid;

        const withdrawDocs = await getDocs(
          query(collection(db, "Withdraw"), where("userId", "==", userId))
        );
        const depositDocs = await getDocs(
          query(collection(db, "Deposit"), where("userId", "==", userId))
        );
        const investmentDocs = await getDocs(
          query(collection(db, "Investment"), where("userId", "==", userId))
        );

        const withdrawData = withdrawDocs.docs.map((doc) => ({
          ...doc.data(),
          name: "Withdraw",
        }));
        const depositData = depositDocs.docs.map((doc) => ({
          ...doc.data(),
          name: "Deposit",
        }));
        const investmentData = investmentDocs.docs.map((doc) => ({
          ...doc.data(),
          name: "Investment",
        }));

        const combinedData = [
          ...withdrawData,
          ...depositData,
          ...investmentData,
        ];

        setTransactionData(combinedData);
      } catch (error) {
        console.error("Error fetching transaction data:", error);
      }
    };

    fetchData();
  }, [user]);

  return (
    <div className="transactions">
      <h4>Transactions</h4>
      {transactionData.length === 0 ? (
        <p className="text-black dark:text-white">No transactions</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Transaction Name</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {transactionData.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.name}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.status}</td>
                  <td>{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
