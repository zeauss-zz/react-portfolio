import home1 from "../../img/home1.png";
import { About, Image, Description } from "../../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span>
            </h2>
          </div>
          <div className="hide">
            <h2>come true.</h2>
          </div>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
