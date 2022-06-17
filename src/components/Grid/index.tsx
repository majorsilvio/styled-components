import styled, { css } from "styled-components";
import { GridItem, GridProps} from "./types";

function rowSize(rowSize: string = "1fr") {
  switch (rowSize) {
    case "lg":
      return "150px";
    case "md":
      return "100px";
    case "sm":
      return "50px";
    default:
      return rowSize;
  }
}

const Grid = styled.div<GridProps>`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
  display: grid;
  grid-template-columns: repeat(
    ${(props) => (props?.cols ? props.cols : 1)},
    1fr
  );
  grid-template-rows: ${(props) =>
    props?.rows ? `repeat( ${props.rows}, ${rowSize(props.xs)})` : ""};
  gap: 0.5%;

  ${(props) =>
    props.item
      ? gridItem(props)
      : ""}
`;

const gridItem = (props: GridItem) => css`
    grid-row: ${props.rspan ? "span " + props.rspan : ""};
        grid-column: span ${props.cspan ? props.cspan : 1};
        align-items: ${props.align ? props.align : ""};
        justify-items: ${props.justify ? props.justify : ""};
        grid-row-gap: ${props.rgap ? props.rgap : ""};
        grid-column-gap: ${props.cgap ? props.cgap : ""};`

export default Grid;
