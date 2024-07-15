export default function ChangePassword() {
  return (
    <div>
      <h4>Change Password</h4>
      <div className="content-inner profile change-pass">
        <h6>New Password</h6>
        <form>
          <div className="form-group">
            <div>
              <label>
                Old Passworld<span>*</span>:
              </label>
              <input type="text" className="form-control" value={123456789} />
            </div>
            
          </div>
          <div className="form-group">
            <div>
              <label>
                New Passworld<span>*</span>:
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="New Passworld"
              />
            </div>
            <div>
              <label>
                Confirm Passworld<span>*</span>:
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Passworld"
              />
            </div>
          </div>
        </form>
        <button type="submit" className="btn-action">
          Change Passworld
        </button>
      </div>
    </div>
  );
}
