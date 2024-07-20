import Link from "next/link";
import React from "react";


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

  return (
    <div className="">
      <h4>Investment Plan</h4>
      <div className="row">
        {investmentPlans.map((plan, index) => (
          <div className="col-md-3 mb-4" key={index}>
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
                <Link href="/login" className="btn btn-primary text-white">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
