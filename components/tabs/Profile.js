// components/tabs/Profile.js
export default function Profile() {
  return (
    <div className="content-inner profile">
      <h4>User Profile</h4>
      <form>
        <h6>Infomation</h6>
        <div className="form-group d-flex s1">
          <input type="text" className="form-control" defaultValue="John" />
          <input type="text" className="form-control" defaultValue="Smith" />
        </div>
        <div className="form-group d-flex">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            defaultValue="Tonynguyen@demo.com"
          />
          <div className="sl">
            <select className="form-control" id="exampleFormControlSelect1">
              <option>+1</option>
              <option>+84</option>
              <option>+82</option>
              <option>+32</option>
            </select>
            <input
              type="text"
              className="form-control"
              placeholder="Your Phone number"
            />
          </div>
        </div>
        <div className="form-group d-flex s1">
          <select className="form-control" id="exampleFormControlSelect2">
            <option>South Korean</option>
            <option>Vietnamese</option>
            <option>South Korean</option>
            <option>South Korean</option>
          </select>
          <select className="form-control" id="exampleFormControlSelect3">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <h6 className="two">Features</h6>
        <div className="bt d-flex">
          <div className="left">
            <h6>level 1</h6>
            <ul>
              <li>
                <p>Deposit assets</p>
                <input
                  type="checkbox"
                  className="check-box__switcher"
                  defaultChecked
                />
              </li>
              <li>
                <p>Withdraw assets</p>
                <p className="text">Enabled $1,000,000/day</p>
              </li>
              <li>
                <p>Card purchases</p>
                <input type="checkbox" className="check-box__switcher" />
              </li>
              <li>
                <p>Bank deposit</p>
                <input type="checkbox" className="check-box__switcher" />
              </li>
            </ul>
          </div>
          <div className="right">
            <h6>level 2</h6>
            <ul>
              <li>
                <p>Fiat and Spot wallet</p>
                <input
                  type="checkbox"
                  className="check-box__switcher"
                  defaultChecked
                />
              </li>
              <li>
                <p>Margin wallet</p>
                <p className="text">Enabled 100x Leverage</p>
              </li>
            </ul>
          </div>
        </div>
        <button type="submit" className="btn-action">
          Update Profile
        </button>
      </form>
    </div>
  );
}
