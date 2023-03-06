import { ReactNode } from "react";
import { StyledRightContainer } from "./style";

export default function RightContainer({ children }: { children: ReactNode }) {
  return <StyledRightContainer>{children}</StyledRightContainer>;
}
