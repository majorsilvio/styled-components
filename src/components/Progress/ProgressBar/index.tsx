import styled, { css, keyframes } from "styled-components";
import { ProgressProps } from "./types";


const getRGBcolor = ({ clr, progress, mode }: ProgressProps) => {
    if(!clr) return "red"
    if (!mode) return clr;
  
    let r = NaN;
    let g = NaN;
    let b = NaN;
  
    if (clr?.length === 7) {
      r = parseInt(clr?.slice(1, 3), 16);
      g = parseInt(clr?.slice(3, 5), 16);
      b = parseInt(clr?.slice(5, 7), 16);
    }
    if (clr?.length === 4) {
      r = parseInt(clr?.slice(1, 2) + clr?.slice(1, 2), 16);
      g = parseInt(clr?.slice(2, 3) + clr?.slice(2, 3), 16);
      b = parseInt(clr?.slice(3, 4) + clr?.slice(2, 3), 16);
    }
    if (isNaN(r) || isNaN(g) || isNaN(b)) {
      return "red";
    }
    return `linear-gradient(${
      mode === "left" ? "to left" : "to right"
    },rgb(${r} ${g} ${b} / 0.3) 0% ,${
      mode === "middle"
        ? `rgb(${r} ${g} ${b} / ${
            progress / 100 + 0.3
          }) 50%,rgb(${r} ${g} ${b} / 0.3) 100%)`
        : `rgb(${r} ${g} ${b} / ${progress / 100 + 0.3}) 100%)`
    }`;
  };
  
  const borderHelper = css`
    border-radius: 15px;
  `;
  
  const before_and_after = ({ progress, showProgress }: ProgressProps) => css`
    &:before {
      content: "";
      text-align: center;
      align-content: center;
      position: absolute;
      width: ${progress}%;
      height: 100%;
      background: ${getRGBcolor};
      transition: width 1s;
      ${borderHelper}
    }
    ${showProgress
      ? `&:after{
          content: '${
            progress < 100 ? progress.toFixed(2) : progress?.toFixed(0)
          }%';
          position: absolute;
          width: 100%;
          height: 100%;
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 700;
          font-size: 10px;
      }`
      : ""}
  `;
  
  export const ProgressBar = styled.div<ProgressProps>`
    position: relative;
    width: ${({ width }) => (width ? width : "100%")};
    height: ${({ height }) => (height ? height : "100%")};
    overflow: hidden;
    background: white;
    transform-origin: left top bottom;
    ${({up}) => up ? 'transform: rotate(-90deg)' : ''};
    ${before_and_after}
    ${borderHelper}
  `;