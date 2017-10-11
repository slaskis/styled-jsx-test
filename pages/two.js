import Link from "next/link";

import { orange, blue, green } from "../lib/styles";
import * as Colors from "../lib/colors";
import { blue as b } from "../lib/colors";

export default () => (
  <div>
    PAGE 2{" "}
    <Link href="/">
      <a>Back to 1</a>
    </Link>
    <Orange />
    <Blue />
    <Green />
    <Green />
    <Green />
    <Green />
    <GreenColors />
    <BlueColors />
    <DoubleColors />
    <Color color="gray" />
    <Color color={Colors.red} />
    <Color color={b} />
    {["teal", "gold"].map(c => <Color key={c} color={c} />)}
  </div>
);

const Orange = () => (
  <div className="orange">
    Hello (i should be orange)
    <style jsx>{orange}</style>
  </div>
);

const Blue = () => (
  <div className="blue">
    Hello (i should be blue)
    <style jsx>{blue}</style>
  </div>
);

const Green = () => (
  <div className="green">
    Hello (i should be green)
    <style jsx>{green}</style>
  </div>
);

const GreenColors = () => (
  <div className="green">
    Hello (i should be green too)
    <style jsx>{`
      .green {
        color: ${Colors.green};
      }
    `}</style>
  </div>
);

const BlueColors = () => (
  <div className="blue">
    Hello (i should be blue too)
    <style jsx>{`
      .blue {
        color: ${b};
      }
    `}</style>
  </div>
);

const DoubleColors = () => (
  <div className="orange z-blue">
    Hello (i should be orange too but will be blue because of insertion order of
    the &lt;style> tags)
    <style jsx>{`
      .z-blue {
        color: ${b};
      }
    `}</style>
    <style jsx>{orange}</style>
  </div>
);

const Color = ({ color }) => (
  <div className="color">
    Hello (i should be the color: {color})
    <style jsx>{`
      .color {
        color: ${color};
      }
    `}</style>
  </div>
);
