'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import ChatList from "../../components/chart/ChatList";
import IconStar from "../elements/IconStar";
import { fetchCryptoData } from './fetchData';

export default function Coinlist2() {
  const [flatTabs, setFlatTabs] = useState(1);
  const [cryptoData, setCryptoData] = useState([]);

  const handleFlatTabs = (index) => {
    setFlatTabs(index);
  };

  useEffect(() => {
    async function getData() {
      const data = await fetchCryptoData();
      setCryptoData(data);
    }
    getData();
  }, []);

  return (
    <>
      <section className="coin-list px-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block-text">
                <h3 className="heading">Market Update</h3>
                <Link className="btn-action" href="#">See All Coins</Link>
              </div>
              <div className="coin-list__main">
                <div className="flat-tabs">
                  <div className="content-tab">
                    <div className="content-inner">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col" />
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Last Price</th>
                            <th scope="col">24h %</th>
                            <th scope="col">Market Cap</th>
                            <th scope="col">Last 7 Days</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cryptoData.map((crypto, index) => (
                            <tr key={crypto.id}>
                              <th scope="row"><IconStar /></th>
                              <td>{index + 1}</td>
                              <td>
                                <Link href="#">
                                  <span className={`icon-${crypto.symbol}`}><span className="path1" /><span className="path2" /></span>
                                  <span>{crypto.name}</span>
                                  <span className="unit">{crypto.symbol.toUpperCase()}</span>
                                </Link>
                              </td>
                              <td className="boild">${crypto.current_price.toLocaleString()}</td>
                              <td className={crypto.price_change_percentage_24h < 0 ? "down" : "up"}>
                                {crypto.price_change_percentage_24h.toFixed(2)}%
                              </td>
                              <td className="boild">${crypto.market_cap.toLocaleString()}</td>
                              <td>
                                <ChatList color={crypto.price_change_percentage_24h < 0 ? 0 : 1} />
                              </td>
                              
                            </tr>
                          ))}
                        </tbody>
                      </table>
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
