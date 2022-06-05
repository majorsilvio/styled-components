type HEX = `#${string}`;
type cssUnit = 'cm' | 'mm' | 'in' | 'px' | 'pt' | 'pc' | 'em' | 'ex' | 'ch' | 'rem' | 'vw' | 'vh' | 'vmin' | 'vmax' | '%';

type cssUnitValue = `${number}${cssUnit}` | undefined;



export type ProgressProps  = { progress: number,showProgress?: boolean ,clr?:string ,mode?: null, width?: cssUnitValue,  height?: cssUnitValue} | { progress: number,showProgress?: boolean,clr?:HEX,mode: 'left' | 'right' | 'middle', width?: cssUnitValue,  height?: cssUnitValue}
