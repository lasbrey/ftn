// components/tabs/Dashboard.js
import React from 'react';

const stats = [
  { title: 'Balance', value: '$10,000' },
  { title: 'Total Deposits', value: '$5,000' },
  { title: 'Total Withdrawal', value: '$2,000' },
  { title: 'Pending Withdrawal', value: '$1,000' },
  { title: 'Pending Deposits', value: '$500' },
  { title: 'Total Earnings', value: '$12,500' },
  { title: 'Total Withdraw', value: '$12,500' },
];

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h4>Dashboard</h4>
      <div className="row">
        {stats.map((stat, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card card-color">
              <div className="card-body">
                <h6 className="card-title text-white">{stat.title}</h6>
                <p className="card-text text-white">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
