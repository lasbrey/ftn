// components/tabs/Referrals.js
export default function Referrals() {
  return (
    <div>
      <h4>Referrals</h4>
      <div
        className="content-inner referrals"
      >
        <h6>Total rewards</h6>
        <h4>
          $1,056.00 <span>USD</span>
        </h4>
        <p>
          You're earning 10% of the trading fees your referrals pay. Learn more
        </p>
        <div className="main">
          <h6>Invite friends to earn 20%</h6>
          <div className="refe">
            <div>
              <p>Referral link</p>
              <input
                className="form-control"
                type="text"
                defaultValue="https://financialtradenetwork.com/login"
              />
            </div>
            <div>
              <p>Referral code</p>
              <input
                className="form-control"
                type="text"
                defaultValue="N84CRDKK"
              />
              <span className="btn-action">Copied</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
