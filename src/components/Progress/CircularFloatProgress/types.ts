type HEX = `#${string}`;
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

export type CircularFloatProgressProps = {size?: cssUnitValue,progress: number, clr?: string , bclr?: string}