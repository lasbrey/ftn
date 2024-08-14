import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Swal from "sweetalert2";
import { db } from "@/config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { UserAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";

export default function Deposit() {
  const { user } = UserAuth();
  const router = useRouter();

  const [flatTabs, setFlatTabs] = useState(1);
  const handleFlatTabs = (index) => {
    setFlatTabs(index);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [walletAddressName, setWalletAddressName] = useState("");
  const [proofImage, setProofImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);

    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    setProofImage(file || null);
  };

  const uploadImageToFirebaseStorage = async (image) => {
    return "";
  };
  const handleDeposit = async () => {
    try {
      const imageUrl = await uploadImageToFirebaseStorage(proofImage);
      const depositId = nanoid(); // Generate a unique alphanumeric ID for the deposit

      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });

      // Add the document to Firestore with the depositId
      await addDoc(collection(db, "Deposit"), {
        depositId,
        amount,
        userId: user ? user.uid : "",
        name: user ? user.displayName : "",
        status: "Pending",
        imageUrl,
        walletAddressName,
        walletAddress,
        date: formattedDate,
      });

      closeModal();
      Swal.fire(
        "Deposit Successful",
        "Your deposit has been successfully placed.",
        "success"
      );

      router.push("/dashboard");
    } catch (error) {
      console.error("Error handling deposit:", error);
    }
  };

  return (
    <div>
      <h4>Deposit</h4>
      <div
        className="content-inner buy-crypto__main"
        style={{ display: `${flatTabs === 1 ? "block" : "none"}` }}
      >
        <div className="main">
          <h6>Deposit into your account</h6>
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-field">
              <label>Amount</label>
              <input
                type="number"
                className="dollar"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="US$"
              />
            </div>
            <div className="form-field">
              <label>Deposit Gateway</label>
              <select
                className="dollar selecttext"
                placeholder="Select an option"
                value={selectedOption}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                  setWalletAddressName(
                    e.target.value === "BTC" ? "BTC" : "USDT"
                  );
                  setWalletAddress(
                    e.target.value === "BTC"
                      ? "1NbQ5cXE2onih4mKQVVBEo8usT6Hguhytc"
                      : "0x37c2d4a2011510e4b9a502ac1338b716a61d913b"
                  );
                }}
              >
                <option value="BTC">BTC</option>
                <option value="USDT">USDT</option>
              </select>
            </div>
            <button className="btn-action" onClick={openModal}>
              Continue
            </button>
          </form>
          <div className="button" />
        </div>
      </div>

      <Transition show={isOpen} as={React.Fragment}>
        <Dialog
          onClose={closeModal}
          className="fixed inset-0 z-10 overflow-y-auto"
          open={isOpen}
        >
          <div className="min-h-screen flex justify-center items-center sm:pt-4 px-4">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" />
            </Transition.Child>
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
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                  <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                    <h3 className="font-bold text-black">
                      Payment Details{" "}
                      <span className="text-blue-900 font-bold">
                        {" "}
                        ${amount}
                      </span>
                    </h3>
                  </div>
                  <form action="#" onSubmit={(e) => e.preventDefault()}>
                    <div className="p-6.5">
                      <div className="mb-4.5">
                        <label className="mb-3 block text-sm font-medium text-black">
                          MAKE PAYMENT TO THE {walletAddressName} WALLET ADDRESS
                          BELOW:
                          <p className="font-bold flex justify-between">
                            {walletAddress}
                            <span
                              className={`text-white text-sm font-extralight bg-blue-500 px-1 rounded cursor-pointer ${
                                isCopied ? "opacity-50" : ""
                              }`}
                              onClick={handleCopy}
                            >
                              {isCopied ? "Copied" : "Copy"}
                            </span>
                          </p>
                        </label>

                        <div className="flex flex-col py-4">
                          <div>
                            <label className="mb-3 block text-sm font-medium text-black">
                              Attach proof of payment
                            </label>
                            <input
                              type="file"
                              onChange={handleImageChange}
                              className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={handleDeposit}
                        className="flex w-full justify-center rounded bg-blue-600 p-3 font-medium text-gray hover:bg-opacity-90 cursor-pointer"
                      >
                        Deposit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
