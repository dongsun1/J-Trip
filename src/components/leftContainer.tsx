import styled from "@emotion/styled";
import { ReactNode } from "react";

const StyledLeftContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  width: 400px;
  height: 100%;
  background-color: white;
  padding: 5px;
`;

export default function LeftContainer({ children }: { children: ReactNode }) {
  return <StyledLeftContainer>{children}</StyledLeftContainer>;
}
