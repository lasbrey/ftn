import React, { useEffect, useState } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "@/config/firebase";
import { UserAuth } from "@/context/authContext";

export default function PendingWithdraw() {
  const { user } = UserAuth();
  const [withdraws, setWithdraws] = useState([]);
  const [selectedWithdraw, setSelectedWithdraw] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const withdrawQuery = query(
          collection(db, "Withdraw"),
          where("status", "==", "Processing")
        );

        const pendingQuerySnapshot = await getDocs(withdrawQuery);
        const pendingWithdraws = pendingQuerySnapshot.docs.map((doc) =>
          doc.data()
        );

        setWithdraws(pendingWithdraws);
      } catch (error) {
        console.error("Error fetching Withdraws:", error);
      }
    };

    fetchData();
  }, []);

  const handleWithdrawClick = (withdraw) => {
    setSelectedWithdraw(withdraw);
    setIsModalOpen(true);
  };

  return (
    <div className="transactions">
      
      <h4>Pending Withdrawals</h4>
      {withdraws.length === 0 ? (
        <p className="text-black dark:text-white">No pending withdrawals</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {withdraws.map((withdraw, index) => (
                <tr key={index} onClick={() => handleWithdrawClick(withdraw)}>
                  <td>{withdraw.name}</td>
                  <td>{withdraw.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
