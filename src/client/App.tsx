import "./style.css";
import IMAGE from "./react.png";
import { ClickCounter } from "./ClickCounter";

export const App = () => {
  return (
    <>
      <h1>The full stack template</h1>
      <img src={IMAGE} alt="react logo gif" height="100%" />
      <h2>Our mode: {process.env.NODE_ENV}</h2>

      <hr />

      <ClickCounter />
    </>
  );
};
