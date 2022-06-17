type cssUnit =
  | "cm"
  | "mm"
  | "in"
  | "px"
  | "pt"
  | "pc"
  | "em"
  | "ex"
  | "ch"
  | "rem"
  | "vw"
  | "vh"
  | "vmin"
  | "vmax"
  | "%";

type cssUnitValue = `${number}${cssUnit}` | undefined;

export type Grid = {
  cols?: number;
  rows?: number;
  xs?: "lg" | "md" | "sm" | cssUnitValue;
  width?: cssUnitValue;
  height?: cssUnitValue;
  item?: undefined | null | false;
}

export type GridItem = {
  item: true;
  rgap?: cssUnitValue;
  cgap?: cssUnitValue;
  rspan?: number;
  cspan?: number;
  align?: "center" | "start" | "end";
  justify?: "center" | "start" | "end";
  cols?: number;
  rows?: number;
  xs?: "lg" | "md" | "sm" | cssUnitValue;
  width?: cssUnitValue;
  height?: cssUnitValue;
}

export type GridProps = Grid | GridItem;
