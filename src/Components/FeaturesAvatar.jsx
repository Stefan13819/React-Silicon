import avatarPhone from "../assets/images/avatarphone.svg";

const FeaturesAvatar = () => {
  return (
    <section aria-label="Features avatar" className="features-avatar">
      <div className="container space-y-3">
        <div className="left-content">
          <h2 className="h2">
            Make your money
            <br />
            transfer simple and clean.
          </h2>
          <ul>
            <li>Banking transactions are free for you</li>
            <li>No monthly cash commission</li>
            <li>Manage payments and transactions online</li>
          </ul>
          <a href="" className="button">
            Learn more
          </a>
        </div>
        <div className="right-content">
          <img src={avatarPhone} alt="Avatar phone" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesAvatar;
