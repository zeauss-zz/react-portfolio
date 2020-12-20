import styled from "styled-components";
import { About } from "../../styles";
import Toggle from "../Toggle.js";
import { AnimateSharedLayout } from "framer-motion";
const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
              sit.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
              sit.
            </p>
          </div>
        </Toggle>
        <Toggle title="Payments Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
              sit.
            </p>
          </div>
        </Toggle>
        <Toggle title="What products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
              sit.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

// const Faq = styled(About)(({background}) => ({
//     display: 'block',
//     background: background || false,
// }))

const Faq = styled(About)({
  display: "block",

  span: {
    display: "block",
  },

  h2: {
    paddingBottom: "2rem",
    fontWeight: "lighter",
  },

  ".faq-line": {
    background: "#ccc",
    height: "0.2rem",
    margin: " 2rem 0rem",
    width: "100%",
  },

  ".question": {
    padding: "3rem 0rem",
    cursor: "pointer",
  },

  ".answer": {
    padding: "2rem 0rem",
    p: {
      padding: "1rem 0rem",
    },
  },
});

export default FaqSection;
