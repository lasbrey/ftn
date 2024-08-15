import React, { useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, where, query, updateDoc, doc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { db } from '../config/firebase';

const UpdateBalanceModal = ({ isModalOpen, setIsModalOpen, userId }) => {
    const [newBalance, setNewBalance] = useState('');
    const [currentBalance, setCurrentBalance] = useState(0);
    const [isAdding, setIsAdding] = useState(true); // Track adding or subtracting

    useEffect(() => {
        const fetchBalance = async () => {
            if (userId) {
                const balanceRef = collection(db, "Balance");
                const balanceQuery = query(balanceRef, where("userId", "==", userId));
                const balanceSnapshot = await getDocs(balanceQuery);

                if (balanceSnapshot.empty) {
                    console.error("No balance documents found");
                    return;
                }

                const balanceDoc = balanceSnapshot.docs[0];
                const balanceData = balanceDoc.data();
                const balance = parseFloat(balanceData.balance) || 0; // Ensure it's a number
                setCurrentBalance(balance);
                setNewBalance(balance.toString()); // Set newBalance as string for input
            }
        };

        if (isModalOpen) {
            fetchBalance();
        }
    }, [isModalOpen, userId]);

    const handleUpdateBalance = async () => {
        try {
            const balanceRef = collection(db, "Balance");
            const balanceQuery = query(balanceRef, where("userId", "==", userId));
            const balanceSnapshot = await getDocs(balanceQuery);
            const balanceDoc = balanceSnapshot.docs[0];

            if (balanceDoc && balanceDoc.exists()) {
                const changeAmount = parseFloat(newBalance) || 0; // Ensure it's a number
                const updatedBalance = isAdding ? currentBalance + changeAmount : currentBalance - changeAmount;

                await updateDoc(doc(db, "Balance", balanceDoc.id), {
                    balance: updatedBalance
                });

                setIsModalOpen(false);
                Swal.fire('Success', 'Balance updated successfully', 'success');

                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                console.error("Balance document not found");
            }
        } catch (error) {
            console.error("Error updating balance: ", error);
        }
    };

    return (
        <Transition show={isModalOpen} as={React.Fragment}>
            <Dialog onClose={() => setIsModalOpen(false)} className="fixed inset-0 z-10 overflow-y-auto" open={isModalOpen}>
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
                            <div className="border-b border-stroke py-4 px-4">
                                <h3 className="font-medium text-black px-6 py-2 text-xl border-b border-stroke">
                                    Update Balance
                                </h3>
                                <div>
                                    <label className="font-medium text-black px-6 py-4">
                                        Current Balance: ${currentBalance.toFixed(2)}
                                    </label>
                                    <label className="font-medium text-black px-6 py-4">
                                        Enter amount to {isAdding ? 'Add' : 'Subtract'}:
                                    </label>
                                    <input
                                        type="text"
                                        value={newBalance}
                                        onChange={(e) => setNewBalance(e.target.value)}
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                    <button
                                        onClick={() => setIsAdding(!isAdding)}
                                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-gray-700 focus:outline-none"
                                    >
                                        Switch to {isAdding ? 'Subtract' : 'Add'}
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-end p-4">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="mr-2 px-4 py-2 bg-rose-900 text-black hover:bg-rose-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                                >
                                    <FontAwesomeIcon icon={faTimes} className="mr-1" />
                                    Cancel
                                </button>
                                <button
                                    onClick={handleUpdateBalance}
                                    className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <FontAwesomeIcon icon={faCheck} className="mr-1" />
                                    Update
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default UpdateBalanceModal;