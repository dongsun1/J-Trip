import { IDocument } from "@/interfaces/search.interface";
import styled from "@emotion/styled";
import { Pagination, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import SearchItem from "./searchItem";

const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  width: 400px;
  height: 100%;
  background-color: white;
  overflow: auto;

  > div {
    height: 100%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const SearchItemList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`;

const CustomPagination = styled(Pagination)`
  width: 100%;
  margin: 5px 0;
  display: flex;
  justify-content: center;
`;

export default function LeftContainer() {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState<IDocument[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [keyword, setKeyword] = useState("");

  const onChangeKeyword = (e: any) => {
    setKeyword(e.target.value);
  };

  const getPlaces = async (e: any) => {
    try {
      if (e.key === "Enter") {
        const ps = new kakao.maps.services.Places();
        if (keyword) {
          const options = { page };

          ps.keywordSearch(
            keyword,
            (data, status, _pagination) => {
              if (status === kakao.maps.services.Status.OK) {
                if (data.length) {
                  setData(data);
                  setTotal(Math.ceil(_pagination.totalCount / 15));
                  console.info(_pagination);
                }
              }
            },
            options
          );
        } else {
          alert("검색어를 입력해주세요.");
        }
      }
    } catch (error) {
      console.info(error);
    }
  };

  const onChange = (e: any, page: number) => {
    setPage(page);
  };

  useEffect(() => {
    if (mounted) {
      getPlaces({ key: "Enter" });
    } else {
      setMounted(true);
    }
  }, [page]);

  return (
    <StyledLeftContainer>
      <div>
        <TextField
          fullWidth
          onChange={onChangeKeyword}
          onKeyPress={getPlaces}
          placeholder="검색어를 입력해주세요."
        />
        {data.length ? (
          <>
            <SearchItemList>
              {data?.map((o) => {
                return <SearchItem data={o} key={o.id} />;
              })}
            </SearchItemList>
            <CustomPagination
              page={page}
              count={total}
              onChange={onChange}
              variant="outlined"
              shape="rounded"
            />
          </>
        ) : (
          "검색어를 입력해주세요."
        )}
      </div>
    </StyledLeftContainer>
  );
}
