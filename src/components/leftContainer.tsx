import { IDocument } from "@/interfaces/search.interface";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { ReactNode, useState } from "react";
import SearchItem from "./searchList";

const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  width: 400px;
  height: 100vh;
  background-color: white;
`;

const SearchItemList = styled.div``;

export default function LeftContainer() {
  const [data, setData] = useState<IDocument[]>([]);
  const [page, setPage] = useState(1);

  const getPlaces = async (e: any) => {
    try {
      const ps = new kakao.maps.services.Places();
      if (e.target.value) {
        const options = { page };
        ps.keywordSearch(
          e.target.value,
          (data, status, _pagination) => {
            if (status === kakao.maps.services.Status.OK) {
              if (data.length) {
                setData(data);
              }
            }
          },
          options
        );
      } else {
        alert("검색어를 입력해주세요.");
      }
    } catch (error) {
      console.info(error);
    }
  };

  return (
    <StyledLeftContainer>
      <div style={{ height: "100%", padding: "5px" }}>
        <TextField
          fullWidth
          onKeyPress={getPlaces}
          placeholder="검색어를 입력해주세요."
        />
        {data.length ? (
          <SearchItemList style={{ margin: "20px 0 0 0" }}>
            {data?.map((o) => {
              return <SearchItem data={o} key={o.id} />;
            })}
          </SearchItemList>
        ) : (
          "검색어를 입력해주세요."
        )}
      </div>
    </StyledLeftContainer>
  );
}
