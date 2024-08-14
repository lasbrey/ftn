import React, { useState, useEffect } from "react";
import { UserAuth } from "@/context/authContext";
import { db } from "@/config/firebase";
import { useRouter } from "next/navigation";
import {
  addDoc,
  collection,
  query,
  where,
  updateDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import Swal from "sweetalert2";
import { nanoid } from "nanoid";

export default function Withdraw() {
  const [flatTabs, setFlatTabs] = useState(1);
  const handleFlatTabs = (index) => {
    setFlatTabs(index);
  };
  const { user } = UserAuth();
  const [amount, setAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [balance, setBalance] = useState(null);
  const router = useRouter();
  const withdrawId = nanoid();
  const [selectedWallet, setSelectedWallet] = useState("");
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  useEffect(() => {
    const fetchBalance = async () => {
      const balanceRef = collection(db, "Balance");
      const balanceQuery = query(balanceRef, where("userId", "==", user.uid));
      const balanceSnapshot = await getDocs(balanceQuery);
      const balanceDoc = balanceSnapshot.docs[0];

      if (balanceDoc.exists()) {
        const currentBalance = balanceDoc.data().balance;
        setBalance(currentBalance);
      }
    };

    if (user) {
      fetchBalance();
    }
  }, [user]);

  const handleWithdraw = async () => {
    if (parseFloat(amount) < 100) {
      Swal.fire(
        "Withdrawal Error",
        "Minimum withdrawal amount is $100.",
        "error"
      );
      return;
    }
    const balanceRef = collection(db, "Balance");
    const balanceQuery = query(balanceRef, where("userId", "==", user.uid));
    const balanceSnapshot = await getDocs(balanceQuery);
    const balanceDoc = balanceSnapshot.docs[0];

    if (balanceDoc.exists()) {
      const currentBalance = balanceDoc.data().balance;

      if (currentBalance >= parseFloat(amount)) {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });

        // Add the document to Firestore
        await addDoc(collection(db, "Withdraw"), {
          withdrawId,
          amount: parseFloat(amount),
          name: user ? user.displayName : "",
          userId: user ? user.uid : "",
          status: "Processing",
          walletAddress,
          walletAddressName: selectedWallet,
          date: formattedDate,
        });

        Swal.fire(
          "Withdrawal Successful",
          "Your withdrawal has been successfully placed.",
          "success"
        );

        setAmount("");
        setWalletAddress("");
        router.push("/dashboard/transactions");
      } else {
        Swal.fire("Withdrawal Error", "Insufficient balance", "error");
      }
    } else {
      alert("Balance not found");
    }
  };
  return (
    <div>
      <h4>Withdraw</h4>
      <div
        className="content-inner buy-crypto__main"
        style={{ display: `${flatTabs === 1 ? "block" : "none"}` }}
      >
        <div className="main">
          <h6>Withdraw into your account</h6>
          <form onSubmit={(e) => e.preventDefault()} className="form">
            <div className="form-field">
              <label>Amount</label>
              <input
                type="number"
                className="dollar"
                placeholder="US$"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Withdrawal Method</label>
              <select
                className="dollar selecttext"
                placeholder="Select an option"
                value={selectedWallet}
                onChange={(e) => {
                  setSelectedWallet(e.target.value);
                  changeTextColor();
                }}
              >
                <option value="BTC">BTC</option>
                <option value="USDT">USDT</option>
              </select>
            </div>
            <div className="form-field">
              <label>Wallet Address</label>
              <input
                type="text"
                className="wallet address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                placeholder="Enter Wallet Addresss"
              />
            </div>
            <button className="btn-action" onClick={handleWithdraw}>
              Withdraw
            </button>
          </form>
          <div className="button" />
        </div>
      </div>
    </div>
  );
}
