"use client";
import React, {useState, useEffect} from 'react';
import { getDocs, collection, where, query } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { UserAuth } from "@/context/authContext";


export default function Dashboard() {
  const { user } = UserAuth();

  const [pendingDepositCount, setPendingDepositCount] = useState(0);
  const [allDepositCount, setAllDepositCount] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
    const fetchDepositCounts = async () => {
      if (!user) {
        return;
      }

      const collectionRef = collection(db, "Deposit");
      const balanceRef = collection(db, "Balance");

      const alldepositQ = query(collectionRef, where("userId", "==", user.uid));
      const pendingQ = query(collectionRef, where("userId", "==", user.uid), where("status", "==", "Pending"));
      const balance = query(balanceRef, where("userId", "==", user.uid));


      try {
        const depositQuerySnapshot = await getDocs(alldepositQ);
        const pendingQuerySnapshot = await getDocs(pendingQ);
        const balanceQuerySnapshot = await getDocs(balance);

        const allDeposits = depositQuerySnapshot.docs.map((doc) => doc.data());
        const pendingDeposits = pendingQuerySnapshot.docs.map((doc) => doc.data());

        const balanceDoc = balanceQuerySnapshot.docs[0];

        if (balanceDoc) {
          const totalBalance = balanceDoc.data().balance;
          setTotalBalance(totalBalance);
        } else {
          console.error("Balance document not found for user:", user.uid);
        }

        setAllDepositCount(allDeposits.length);
        setPendingDepositCount(pendingDeposits.length);
      } catch (error) {
        console.error("Error fetching deposit counts:", error);
      }
    };

    fetchDepositCounts();
  }, [user]);

  const stats = [
    { title: 'Balance', value: totalBalance },
    { title: 'Total Deposits', value: allDepositCount.toString() },
    { title: 'Total Withdrawal', value: '0' },
    { title: 'Pending Withdrawal', value: '0' },
    { title: 'Pending Deposits', value: pendingDepositCount.toString() },
    { title: 'Total Earnings', value: '0' },
    { title: 'Total Withdraw', value: '0' },
  ];

  return (
    <div className="dashboard">
      <h4>Dashboard</h4>
      <div className="row">
        {stats.map((stat, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card card-color">
              <div className="card-body">
                <h6 className="card-title text-white">{stat.title}</h6>
                <p className="card-text text-white">${stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
