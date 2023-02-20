import styled from "@emotion/styled";
import { ReactNode } from "react";

const StyledRightContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 1;
  /* width: 100%; */
  width: 400px;
  height: 100%;
  background-color: white;
  padding: 5px;
`;

export default function RightContainer({ children }: { children: ReactNode }) {
  return <StyledRightContainer>{children}</StyledRightContainer>;
}
