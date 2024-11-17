import avatarCard from "../assets/images/avatarcard.svg";
import creditCard from "../assets/images/credit-card.svg";
import wallet from "../assets/images/wallet.svg";

const FeaturesPayments = () => {
  return (
    <section aria-label="Features Payments" className="features-paymants">
      <div className="container space-y-3">
        <div className="left-content">
          <img src={avatarCard} alt="Avatar card" />
        </div>
        <div className="right-content">
          <h2 className="h2">Receive payment from international bank details</h2>
          <div className="features-grid">
            <div className="feature-card flex">
              <div className="icon-container">
                <img src={creditCard} alt="Credit card icon" />
              </div>
              <div className="space-y-1">
                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
              </div>
            </div>
            <div className="feature-card flex">
              <div className="icon-container">
                <img src={wallet} alt="Wallet icon" />
              </div>
              <div className="space-y-1">
                <p>A elementum and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
              </div>
            </div>
          </div>
          <a href="#" className="button">Learn more</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesPayments;
