"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

// Import tab components
import Dashboard from "@/components/tabs/Dashboard";
import Deposit from "@/components/tabs/Deposit";
import Invest from "@/components/tabs/Invest";
import Withdraw from "@/components/tabs/Withdraw";
import Profile from "@/components/tabs/Profile";
import Referrals from "@/components/tabs/Referrals";
import ChangePassword from "@/components/tabs/ChangePassword";
import Transactions from "@/components/tabs/Transactions";
import { UserAuth } from "@/context/authContext";

export default function UserProfile() {
  const { user, logOut } = UserAuth();

  const [flatTabs, setFlatTabs] = useState(1);
  const handleFlatTabs = (index) => {
    setFlatTabs(index);
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={2}>
        <div>
          <section className="user-profile flat-tabs">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-md-12">
                  <div className="user-info center">
                    <div className="avt">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="imgInp"
                        required
                      />
                      <img
                        id="blah"
                        src="/assets/images/avt/avt.png"
                        alt="no file"
                      />
                    </div>
                    <h6 className="name">{user.displayName}</h6>
                    <p>{user.email}</p>
                  </div>
                  <ul className="menu-tab">
                    <li
                      className={flatTabs === 1 ? "active" : ""}
                      onClick={() => handleFlatTabs(1)}
                    >
                      <h6 className="fs-16">Dashboard</h6>
                    </li>
                    <li
                      className={flatTabs === 2 ? "active" : ""}
                      onClick={() => handleFlatTabs(2)}
                    >
                      <h6 className="fs-16">Deposit</h6>
                    </li>
                    <li
                      className={flatTabs === 3 ? "active" : ""}
                      onClick={() => handleFlatTabs(3)}
                    >
                      <h6 className="fs-16">Invest</h6>
                    </li>
                    <li
                      className={flatTabs === 4 ? "active" : ""}
                      onClick={() => handleFlatTabs(4)}
                    >
                      <h6 className="fs-16">Withdraw</h6>
                    </li>
                    <li
                      className={flatTabs === 5 ? "active" : ""}
                      onClick={() => handleFlatTabs(5)}
                    >
                      <h6 className="fs-16">Profile</h6>
                    </li>
                    <li
                      className={flatTabs === 6 ? "active" : ""}
                      onClick={() => handleFlatTabs(6)}
                    >
                      <h6 className="fs-16">Referrals</h6>
                    </li>
                    <li
                      className={flatTabs === 7 ? "active" : ""}
                      onClick={() => handleFlatTabs(7)}
                    >
                      <h6 className="fs-16">Change password</h6>
                    </li>
                    <li
                      className={flatTabs === 8 ? "active" : ""}
                      onClick={() => handleFlatTabs(8)}
                    >
                      <h6 className="fs-16">Transactions</h6>
                    </li>
                    <li onClick={() => logOut()}>
                      <h6 className="fs-16">Logout</h6>
                    </li>
                  </ul>
                </div>

                <div className="col-xl-9 col-md-12">
                  <div className="content-tab">
                    {flatTabs === 1 && <Dashboard />}
                    {flatTabs === 2 && <Deposit />}
                    {flatTabs === 3 && <Invest />}
                    {flatTabs === 4 && <Withdraw />}
                    {flatTabs === 5 && <Profile />}
                    {flatTabs === 6 && <Referrals />}
                    {flatTabs === 7 && <ChangePassword />}
                    {flatTabs === 8 && <Transactions />}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-sale">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="block-text">
                    <h4 className="heading">Earn up to $25 worth of crypto</h4>
                    <p className="desc">
                      Discover how specific cryptocurrencies work — and get a
                      bit of each crypto to try out for yourself.
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="button">
                    <Link href="#">Create Account</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
