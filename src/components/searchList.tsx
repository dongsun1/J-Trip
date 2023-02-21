import { IDocument } from "@/interfaces/search.interface";
import styled from "@emotion/styled";
import Link from "next/link";

const StyledSearchItem = styled.div`
  height: 65px;
  padding: 5px;
  border-bottom: 1px solid #e2e2e2;
  &:first-of-type {
    border-top: 1px solid #e2e2e2;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PlaceName = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  margin-right: 5px;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CategoryName = styled.span`
  font-size: 14px;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

const AddressName = styled.span`
  font-size: 12px;
  margin-top: 5px;
`;

export default function SearchItem({ data }: { data: IDocument }) {
  const categoryNameArr = data.category_name.split(" ");
  const categoryName = categoryNameArr[categoryNameArr.length - 1];

  return (
    <StyledSearchItem>
      <TitleContainer>
        <PlaceName href={data.place_url} target="_blank">
          {data.place_name}
        </PlaceName>
        <CategoryName>{categoryName}</CategoryName>
      </TitleContainer>
      <SubContainer>
        <AddressName>
          <span style={{ fontWeight: "bold" }}>주소</span> {data.address_name}
        </AddressName>
        <AddressName>
          <span style={{ fontWeight: "bold" }}>전화번호</span>{" "}
          {data.phone ? data.phone : "없음"}
        </AddressName>
      </SubContainer>
    </StyledSearchItem>
  );
}
