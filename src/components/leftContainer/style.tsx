import styled from "@emotion/styled";
import { Pagination } from "@mui/material";

export const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  width: 450px;
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

export const SearchItemList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`;

export const CustomPagination = styled(Pagination)`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
