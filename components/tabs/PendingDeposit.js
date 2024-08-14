import React, { useEffect, useState } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { UserAuth } from "../../context/authContext";
import DepositModal from "../DepositModal";

export default function PendingDeposits() {
  const { user } = UserAuth();
  const [deposits, setDeposits] = useState([]);
  const [selectedDeposit, setSelectedDeposit] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const depositQuery = query(
          collection(db, "Deposit"),
          where("status", "==", "Pending")
        );

        const pendingQuerySnapshot = await getDocs(depositQuery);
        const pendingDeposits = pendingQuerySnapshot.docs.map((doc) => doc.data());

        setDeposits(pendingDeposits);
      } catch (error) {
        console.error('Error fetching Deposits:', error);
      }
    };

    fetchData();
  }, []);

  const handleDepositClick = (deposit) => {
    setSelectedDeposit(deposit);
    setIsModalOpen(true);
  };

  return (
    <div className="transactions">
      <DepositModal
        selectedDeposit={selectedDeposit}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <h4>Pending Deposits</h4>
      {deposits.length === 0 ? (
        <p className="text-black dark:text-white">No pending deposit</p>
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
              {deposits.map((deposit, index) => (
                <tr key={index} onClick={() => handleDepositClick(deposit)}>
                  <td>{deposit.name}</td>
                  <td>{deposit.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}