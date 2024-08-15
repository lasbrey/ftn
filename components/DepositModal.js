import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { db } from "../config/firebase";
import {
  collection,
  getDocs,
  where,
  query,
  updateDoc,
  doc,
} from "firebase/firestore";
import Swal from "sweetalert2";

const DepositModal = ({ selectedDeposit, isModalOpen, setIsModalOpen }) => {
  const handleApprove = async () => {
    try {
      const balanceRef = collection(db, "Balance");
      const balanceQuery = query(
        balanceRef,
        where("userId", "==", selectedDeposit?.userId)
      );
      const balanceSnapshot = await getDocs(balanceQuery);
      const balanceDoc = balanceSnapshot.docs[0];

      const depositRef = collection(db, "Deposit");
      const DepositQuery = query(
        depositRef,
        where("depositId", "==", selectedDeposit?.depositId)
      );
      const DepositSnapshot = await getDocs(DepositQuery);
      const DepositDoc = DepositSnapshot.docs[0];

      if (balanceDoc && balanceDoc.exists()) {
        const currentBalance = balanceDoc.data().balance;
        const depositAmount = parseFloat(selectedDeposit?.amount || "0");

        const updatedBalance = currentBalance + depositAmount;

        await updateDoc(doc(db, "Balance", balanceDoc.id), {
          balance: updatedBalance,
        });

        if (DepositDoc && DepositDoc.exists()) {
          await updateDoc(doc(db, "Deposit", DepositDoc.id), {
            status: "Success",
          });

          setIsModalOpen(false);
          Swal.fire("Success", "Deposit approved successfully", "success");

          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else {
          console.error("Deposit document not found");
        }
      } else {
        console.error("Balance document not found");
      }
    } catch (error) {
      console.error("Error processing deposit: ", error);
    }
  };

  return (
    <Transition show={isModalOpen} as={React.Fragment}>
      <Dialog
        onClose={() => setIsModalOpen(false)}
        className="fixed inset-0 z-10 overflow-y-auto"
        open={isModalOpen}
      >
        <div className="min-h-screen flex justify-center items-center sm:pt-4 px-4">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              <div className="border-b border-stroke py-4">
                <h3 className="font-medium text-black px-6.5 py-2 text-xl border-b border-stroke">
                  Pending deposit from:{" "}
                  <span className="font-bold">{selectedDeposit?.name}</span>
                </h3>
                <div>
                  <p className="font-medium text-black px-6.5 py-2">
                    Amount: ${selectedDeposit?.amount}
                  </p>
                  <p className="font-medium text-black px-6.5 py-2">
                    Wallet Name: {selectedDeposit?.walletAddressName}
                  </p>
                  <p className="font-medium text-black px-6.5 py-2">
                    Wallet Address: {selectedDeposit?.walletAddress}
                  </p>
                  <p className="font-medium text-black px-6.5 py-2">
                    Date: {selectedDeposit?.date}
                  </p>
                </div>
              </div>
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="mr-2 px-4 py-2 bg-rose-900 text-white hover:bg-rose-700 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faTimes} className="mr-1" />
                  Decline
                </button>
                <button
                  onClick={handleApprove}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faCheck} className="mr-1" />
                  Approve
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DepositModal;
