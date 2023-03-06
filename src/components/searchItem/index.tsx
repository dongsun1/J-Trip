import { IDocument } from "@/interfaces/search.interface";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import {
  SubText,
  CategoryName,
  PlaceName,
  StyledSearchItem,
  SubContainer,
  TitleContainer,
} from "./style";

export default function SearchItem({ data }: { data: IDocument }) {
  const categoryNameArr = data.category_name.split(" ");
  const categoryName = categoryNameArr[categoryNameArr.length - 1];
  let isBookmarked = false;

  return (
    <StyledSearchItem>
      <TitleContainer>
        <div>
          <PlaceName href={data.place_url} target="_blank">
            {data.place_name}
          </PlaceName>
          <CategoryName>{categoryName}</CategoryName>
        </div>
        {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
      </TitleContainer>
      <SubContainer>
        <SubText>
          <span style={{ fontWeight: "bold" }}>주소</span> {data.address_name}
        </SubText>
        <SubText>
          <span style={{ fontWeight: "bold" }}>전화번호</span>{" "}
          {data.phone ? data.phone : "없음"}
        </SubText>
      </SubContainer>
    </StyledSearchItem>
  );
}
