import iphoneCard from "../assets/images/iphonecard.svg";
import creditCard from "../assets/images/credit-card.png";
import shield from "../assets/images/shield.png";
import barsGraphic from "../assets/images/bars-graphic.png";
import communication from "../assets/images/communication.png";
import wallet from "../assets/images/wallet.png";

const AppFeatures = () => {
  return (
    <section aria-label="App features" className="features" id="AppFeatures">
      <div className="container">
        <div className="iphone">
          <img src={iphoneCard} alt="iphone with a credit card popping out" />
        </div>
        <div className="text space-y-1">
          <h2 className="h1">App Features</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
          </p>

          <div className="features-grid">
            <div className="feature-card flex">
              <div className="icon-container">
                <img src={creditCard} alt="Credit Card Icon" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Easy Payments</h3>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>
            <div className="feature-card flex">
              <div className="icon-container">
                <img src={shield} alt="Shield Icon" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Data Security</h3>
                <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
              </div>
            </div>
            <div className="feature-card flex">
              <div className="icon-container">
                <img src={barsGraphic} alt="Bars Graphic Icon" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Cost Statistics</h3>
                <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
              </div>
            </div>
            <div className="feature-card flex">
              <div className="icon-container">
                <img src={communication} alt="Communication Icon" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Support 24/7</h3>
                <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
              </div>
            </div>
            <div className="feature-card flex">
              <div className="icon-container">
                <img src={wallet} alt="Wallet Icon" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Regular Cashback</h3>
                <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
              </div>
            </div>
            <div className="feature-card flex">
              <div className="icon-container">
                <img src={creditCard} alt="Credit Card Icon" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Top Standards</h3>
                <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;

