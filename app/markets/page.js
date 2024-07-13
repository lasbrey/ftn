"use client";
import Layout from "@/components/layout/Layout";
import Coinlist2 from "@/components/sections/Coinlist2";
import { useState } from "react";
export default function Markets() {
  const [flatTabs, setFlatTabs] = useState(1);
  const [flatTabs1, setFlatTabs1] = useState(1);
  const [flatTabs2, setFlatTabs2] = useState(1);
  const [flatTabs3, setFlatTabs3] = useState(1);
  const handleFlatTabs = (index) => {
    setFlatTabs(index);
  };
  const handleFlatTabs1 = (index) => {
    setFlatTabs1(index);
  };
  const handleFlatTabs2 = (index) => {
    setFlatTabs2(index);
  };
  const handleFlatTabs3 = (index) => {
    setFlatTabs3(index);
  };
  return (
    <>
      <Layout headerStyle={1} footerStyle={2}>
        <div>
          <section className="banner">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-md-12">
                  <div className="banner__content">
                    <h2 className="title">Today’s Cryptocurrency prices</h2>
                    <p className="fs-24 desc">
                      The global crypto market cap is <span>$1.86T</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Coinlist2 />
        </div>
      </Layout>
    </>
  );
}
