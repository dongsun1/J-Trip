import BottomContainer from "@/components/bottomContainer";
import InputBox from "@/components/inputBox";
import LeftContainer from "@/components/leftContainer";
import styled from "@emotion/styled";
import { useState } from "react";
import { Map } from "react-kakao-maps-sdk";

const MapContainer = styled.div`
  position: relative;
`;

export default function Home() {
  const [map, setMap] = useState();

  const getPlaces = async (e: any) => {
    try {
      const ps = new kakao.maps.services.Places();
      if (e.target.value) {
        ps.keywordSearch(e.target.value, (data, status, _pagination) => {
          if (status === kakao.maps.services.Status.OK) {
            console.info(data);
          }
        });
      }
    } catch (error) {
      console.info(error);
    }
  };

  return (
    <MapContainer>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 36.1,
          lng: 126,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "100vh",
        }}
        level={12} // 지도의 확대 레벨
        onCreate={setMap}
      />
      <LeftContainer>
        <InputBox onChange={getPlaces} />
      </LeftContainer>
      <BottomContainer></BottomContainer>
    </MapContainer>
  );
}
