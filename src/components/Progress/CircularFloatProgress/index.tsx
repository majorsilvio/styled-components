import styled, { css, keyframes } from "styled-components";
import { CircularFloatProgressProps } from "./types";

const move = keyframes`
to { transform: rotate(0deg);}
  from { transform: rotate(360deg);}

`;
const circularPseudos = ({
  progress,
  clr,
  bclr,
}: CircularFloatProgressProps) => css`
  &:after {
    content: "";
    position: absolute;
    width: 200%;
    height: 120%;
    top: ${-parseInt(progress?.toFixed(1)) + 80}%;
    background: ${clr ? clr : "red"};
    transition: 1s;
  }

  &:before {
    content: "";
    width: 200%;
    height: 200%;
    position: absolute;
    top: ${-parseInt(progress?.toFixed(1))}%;
    left: 50%;
    margin-left: -100%;
    margin-top: -100%;
    border-radius: ${45}%;
    background: ${bclr ? bclr : "white"};
    animation: ${move} 15s infinite linear;
    z-index: 1;
    transition: 1s;
  }
`;

const Circular = styled.div<CircularFloatProgressProps>`
  width: ${({ size }) => (size ? size : "100%")};
  height: ${({ size }) => (size ? size : "100%")};
  border: 1px solid ${({ clr }) => (clr ? clr : "red")};
  overflow: hidden;
  border-radius: 50%;
  background: ${({ clr }) => (clr ? clr : "red")};
  position: relative;
  ${(props) => circularPseudos(props)}
  display: flex;
  justify-content: center;
  align-items: center;
  span{
    z-index: 1;
    font-weight: 700;
    position:absolute;
  }
  font-size: ${({ size }) => `calc(${size}  / 10)`}

`;

const CircularFloatProgress = ({
  size,
  progress,
  clr,
  bclr,
}: CircularFloatProgressProps) => {
  return (
    <Circular size={size} progress={progress} clr={clr} bclr={bclr}>
      <span>{progress + "%"}</span>
    </Circular>
  );
};


export default CircularFloatProgress;
