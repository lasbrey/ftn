// components/tabs/Invest.js
import React, { useState } from "react";

const investmentPlans = [
  {
    level: "Level One",
    minInvestment: 300,
    maxInvestment: 5999,
    roiModel: "8% Weekly",
    referralCommission: "10% on referral users first deposit only",
  },
  {
    level: "Level Two",
    minInvestment: 6000,
    maxInvestment: 19000,
    roiModel: "18% Bi-weekly",
    referralCommission: "10% on referral users first deposit only",
  },
  {
    level: "Level Three",
    minInvestment: 20000,
    maxInvestment: 50000,
    roiModel: "21% Bi-weekly",
    referralCommission: "10% on referral users first deposit only",
  },
  {
    level: "Level Four",
    minInvestment: 70000,
    maxInvestment: Number.POSITIVE_INFINITY,
    roiModel: "45% Monthly",
    referralCommission: "10% on referral users first deposit only",
  },
];

export default function Invest() {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleShow = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };
  
  const handleClose = () => {
    setShowModal(false);
    setSelectedPlan(null);
  };

  const handleInvest = () => {
    // Handle the investment logic here
    console.log(`Investing ${amount} in ${selectedPlan.level}`);
    handleClose();
  };

  return (
    <div className="">
      <h4>Invest</h4>
      <div className="row">
        {investmentPlans.map((plan, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">{plan.level}</h6>
                <p className="card-text mb-2">
                  Min Investment: ${plan.minInvestment}
                </p>
                <p className="card-text mb-2">
                  Max Investment:{" "}
                  {plan.maxInvestment === Number.POSITIVE_INFINITY
                    ? "∞"
                    : `$${plan.maxInvestment}`}
                </p>
                <p className="card-text mb-2">ROI Model: {plan.roiModel}</p>
                <p className="card-text mb-2">
                  Referral Commission: {plan.referralCommission}
                </p>
                <button className="btn btn-primary" onClick={() => handleShow(plan)}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Investment Modal */}
      {showModal && selectedPlan && (
        <div className="modal-overlay">
          <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Invest in {selectedPlan.level}</h5>
                  <button
                    type="button"
                    className="close"
                    onClick={handleClose}
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="formInvestAmount">Amount</label>
                      <input
                        type="number"
                        className="form-control"
                        id="formInvestAmount"
                        placeholder="Enter amount to invest"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary text-white"
                    onClick={handleInvest}
                  >
                    Invest
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
