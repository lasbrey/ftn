import { useState } from "react";

export default function Deposit() {
  const [flatTabs, setFlatTabs] = useState(1);
  const handleFlatTabs = (index) => {
    setFlatTabs(index);
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
          <form action="buy-crypto-confirm" className="form">
            <div className="form-field">
              <label>Amount</label>
              <input type="number" className="dollar" placeholder="US$" />
            </div>
            <div className="form-field">
              <label>Deposit Gateway</label>
              <input type="number" className="dollar" placeholder="US$" />
            </div>
            <button type="submit" className="btn-action">
              Continue
            </button>
          </form>
          <div className="button" />
        </div>
      </div>
    </div>
  );
}
