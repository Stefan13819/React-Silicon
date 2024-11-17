import iphone12Left from "../assets/images/iPhone 12 left.svg";
import iphone12Pro from "../assets/images/iPhone 12 Pro.svg";
import iphone12Right from "../assets/images/iPhone 12 right.svg";

const Carousel = () => {
  return (
    <section aria-label="How does it work" className="carousel-saction">
      <div className="container space-y-3">
        <h2 className="h1">How Does It Work?</h2>
        <div className="carousel">
          <div className="carousel-item">
            <img src={iphone12Left} alt="iPhone 12 left" />
          </div>
          <div className="carousel-item">
            <img src={iphone12Pro} alt="iPhone 12 Pro" />
          </div>
          <div className="carousel-item">
            <img src={iphone12Right} alt="iPhone 12 right" />
          </div>
        </div>

        <div className="text">
          <h3 className="h4">Latest transaction history</h3>
          <p>
            Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu
            sociis tristique quisque hac in consectetur condimentum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
