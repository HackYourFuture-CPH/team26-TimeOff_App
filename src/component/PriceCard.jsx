import "../styles/pricecard.css";

function PriceCard() {
  return (
    <div className="price-container">
      <h2>Get best price for your team</h2>
      <div className="price-row">
        <div className="price-col">
          <p>Basic</p>
          <h3> 199dkk <span>/ month</span></h3>
          <ul>
            <li>Max 5 Users</li>
            <li>Max 1 Department</li>
            <li>Max 5 Teams</li>
            <li>iPhone & Android App</li>
            <li>Customer support</li>
          </ul>
          <button>Start Free Trial</button>
        </div>
        <div className="price-col">
          <p>Advanced</p>
          <h3> 299dkk <span>/ month</span></h3>
          <ul>
            <li>Unlimited Employees</li>
            <li>Max 5 Department</li>
            <li>Unlimited Teams</li>
            <li>iPhone & Android App</li>
            <li>Customer support</li>
            <li>Time Tracking</li>
            <li>Shift Exchange</li>
          </ul>
          <button>Start Free Trial</button>
        </div>
        <div className="price-col">
          <p>Premium</p>
          <h3> 399dkk <span>/ month</span></h3>
          <ul>
            <li>Unlimited Employees</li>
            <li>Unlimited Department</li>
            <li>Unlimited Teams</li>
            <li>Budget Management</li>
            <li>Custom Absence Types</li>
            <li>iPhone & Android App</li>
            <li>Customer support</li>
            <li>Time Tracking</li>
            <li>Shift Exchange</li>
            <li>Skill Management</li>
          </ul>
          <button>Start Free Trial</button>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
