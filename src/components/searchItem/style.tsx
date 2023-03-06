import styled from "@emotion/styled";
import Link from "next/link";

export const StyledSearchItem = styled.div`
  width: 95%;
  height: 65px;
  padding: 5px;
  border-bottom: 1px solid #e2e2e2;
  &:first-of-type {
    border-top: 1px solid #e2e2e2;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PlaceName = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  margin-right: 5px;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const CategoryName = styled.span`
  font-size: 14px;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

export const SubText = styled.span`
  font-size: 12px;
  margin-top: 5px;
`;
