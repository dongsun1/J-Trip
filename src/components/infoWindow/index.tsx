import { IDocument } from "@/interfaces/search.interface";
import { useMapStore } from "@/store/map";
import { useState } from "react";
import {
  BottomContainer,
  CategoryName,
  Container,
  Detail,
  Direction,
  DirectionContainer,
  PlaceName,
  SubContainer,
  SubText,
  TitleContainer,
} from "./style";

export default function InfoWindow({ marker }: { marker: IDocument }) {
  const [showModal, setShowModal] = useState(false);
  const { setCurId, startId, endId, setStartId, setEndId } = useMapStore();

  const categoryNameArr = marker.category_name.split(" ");
  const categoryName = categoryNameArr[categoryNameArr.length - 1];

  const onClickStart = (id: string) => {
    setStartId(id);
    setCurId("");
    if (endId === id) setEndId("");
    else if (endId) {
      window.open(
        `https://map.kakao.com/link/from/${id}/to/${endId}`,
        "_blank"
      );
    }
  };

  const onClickEnd = (id: string) => {
    setEndId(id);
    setCurId("");
    if (startId === id) setStartId("");
    else if (startId) {
      window.open(
        `https://map.kakao.com/link/from/${startId}/to/${id}`,
        "_blank"
      );
    }
  };

  return (
    <Container>
      <TitleContainer>
        <div>
          <PlaceName>{marker.place_name}</PlaceName>
          <CategoryName>{categoryName}</CategoryName>
        </div>
      </TitleContainer>
      <SubContainer>
        <SubText>
          <span style={{ fontWeight: "bold" }}>주소</span> {marker.address_name}
        </SubText>
        <SubText>
          <span style={{ fontWeight: "bold" }}>전화번호</span>{" "}
          {marker.phone ? marker.phone : "없음"}
        </SubText>
      </SubContainer>
      <BottomContainer>
        <Detail href={marker.place_url} target="_blank">
          상세보기
        </Detail>
        {showModal ? (
          <DirectionContainer>
            <Direction onClick={() => onClickStart(marker.id)}>출발</Direction>
            <Direction onClick={() => onClickEnd(marker.id)}>도착</Direction>
          </DirectionContainer>
        ) : (
          <Direction onClick={() => setShowModal(true)}>길찾기</Direction>
        )}
      </BottomContainer>
    </Container>
  );
}
