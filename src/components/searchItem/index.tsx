import { IDocument } from "@/interfaces/search.interface";
import { useMapStore } from "@/store/map";
import { useState } from "react";

import {
  SubText,
  CategoryName,
  PlaceName,
  StyledSearchItem,
  SubContainer,
  TitleContainer,
  StyledBookmarkIcon,
  StyledBookmarkBorderIcon,
  StyledTrendingFlatIcon,
} from "./style";

export default function SearchItem({ data }: { data: IDocument }) {
  const { markers, setCenter, setLevel, setMarkers, popMarker, setCurId } =
    useMapStore();
  const [isBookmarked, setIsBookmarked] = useState(
    Boolean(markers.filter(({ id }) => id === data.id).length)
  );

  const categoryNameArr = data.category_name.split(" ");
  const categoryName = categoryNameArr[categoryNameArr.length - 1];

  const onClickBookmark = (ck: boolean) => {
    if (ck) {
      setMarkers([data]);
      setCenter({ lng: Number(data.x), lat: Number(data.y) });
      setLevel(9);
      setIsBookmarked(true);
      setCurId(data.id);
    } else {
      popMarker(data.id);
      setIsBookmarked(false);
      setCurId("");
    }
  };

  const onClickMove = () => {
    setCenter({ lng: Number(data.x), lat: Number(data.y) });
    setLevel(9);
  };

  return (
    <StyledSearchItem>
      <TitleContainer>
        <div>
          <PlaceName href={data.place_url} target="_blank">
            {data.place_name}
          </PlaceName>
          <CategoryName>{categoryName}</CategoryName>
        </div>
        <div>
          <StyledTrendingFlatIcon onClick={() => onClickMove()} />
          {isBookmarked ? (
            <StyledBookmarkIcon onClick={() => onClickBookmark(false)} />
          ) : (
            <StyledBookmarkBorderIcon onClick={() => onClickBookmark(true)} />
          )}
        </div>
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
