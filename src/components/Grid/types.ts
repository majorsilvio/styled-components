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

export interface GridProps {
  cols?: number;
  rows?: number;
  xs?: "lg" | "md" | "sm" | cssUnitValue;
  width?: cssUnitValue;
  height?: cssUnitValue;
}

export interface GridItemProps {
  rgap?: cssUnitValue;
  cgap?: cssUnitValue;
  rspan?: number;
  cspan?: number;
  align?: "center" | "start" | "end";
  justify?: "center" | "start" | "end";
}
