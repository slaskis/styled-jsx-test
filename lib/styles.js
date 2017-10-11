import css from "styled-jsx/css";

import { blue as b } from "./colors";
import * as Colors from "./colors";

export const orange = css`
  .orange {
    color: orange;
  }
`;

export const blue = css`
  .blue {
    color: ${b};
  }
`;

export const green = css`
  .green {
    color: ${Colors.green};
  }
`;
