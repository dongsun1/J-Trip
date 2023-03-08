import styled from "@emotion/styled";
import Link from "next/link";

export const Container = styled.div`
  width: 400px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PlaceName = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-right: 5px;
  color: black;
  text-decoration: none;
`;

export const CategoryName = styled.span`
  font-size: 12px;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;

export const SubText = styled.span`
  font-size: 12px;
  margin-top: 5px;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Detail = styled(Link)`
  text-decoration: none;
  color: black;
  width: 46%;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px;
  text-align: center;
`;

export const Direction = styled.div`
  width: 46%;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px;
  text-align: center;
`;

export const DirectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;
