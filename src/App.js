import "./styles.css";

import {
  Stage,
  Container,
  Sprite,
  Text,
  Graphics,
  withFilters,
  useTick
} from "@pixi/react-pixi";
import { useState, useCallback } from "react";
import * as PIXI from "pixi.js";
const wizard =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png";

let i = 0;

const Wizard = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useTick((delta) => {
    i += 0.05 * delta;
    setX(Math.sin(i) * 100);
    setY(Math.sin(i / 1.5) * 100);
  });

  return <Sprite image={wizard} x={x} y={y} anchor={0.5} scale={1.3} />;
};
const App = () => (
  <Stage
    width={300}
    height={300}
    options={{
      backgroundColor: 0x012b30,
      antialias: true
    }}
  >
    <Wizard />
  </Stage>
);
export default App;
