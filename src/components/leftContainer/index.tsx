import { IDocument } from "@/interfaces/search.interface";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import SearchItem from "@/components/searchItem";
import { CustomPagination, SearchItemList, StyledLeftContainer } from "./style";

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
                setData(data);
                setTotal(Math.ceil(_pagination.totalCount / 15));
              } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
                alert("검색된 장소가 없습니다.");
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
