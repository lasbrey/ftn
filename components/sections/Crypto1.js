'use client'
import { useEffect, useState } from 'react';
import Link from "next/link";
import { fetchCryptoData } from './fetchCryptoData.js';

export default function Crypto1() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchCryptoData();
      setCryptoData(data);
    }
    getData();
  }, []);

  return (
    <>
      <section className="crypto px-5" data-aos="fade-up" data-aos-duration={1000}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="crypto__main">
                <div className="flat-tabs">
                  <div className="content-tab">
                    <div className="content-inner flex">
                      {cryptoData.map(crypto => (
                        <div key={crypto.id} className={`crypto-box ${crypto.id === 'ethereum' ? 'active' : ''}`}>
                          <div className="top">
                            <Link href="#">
                              <span className={`icon-${crypto.symbol}`}>
                                <span className="path1" />
                                <span className="path2" />
                              </span>
                              <span>{crypto.name}</span>
                              <span className="unit">{crypto.symbol.toUpperCase()}/USD</span>
                            </Link>
                          </div>
                          <h6 className="price">USD {crypto.current_price.toLocaleString()}</h6>
                          <div className="bottom">
                            <p>{crypto.market_cap.toLocaleString()}</p>
                            <p className={`sale ${crypto.price_change_percentage_24h < 0 ? 'critical' : 'success'}`}>
                              {crypto.price_change_percentage_24h.toFixed(2)}%
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
