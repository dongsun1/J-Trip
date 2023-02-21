// import RightContainer from "@/components/rightContainer";
import LeftContainer from "@/components/leftContainer";
import styled from "@emotion/styled";
import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { IDocument } from "@/interfaces/search.interface";

const MapContainer = styled.div`
  position: relative;
`;

interface IMarker {
  position: {
    lat: number;
    lng: number;
  };
  document: IDocument;
}

export default function Home() {
  const [map, setMap] = useState();
  const [markers, setMarkers] = useState<IMarker[]>([]);

  return (
    <>
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
          onCreate={() => setMap}
        >
          {markers.map((marker) => (
            <MapMarker
              key={`marker-${marker.document.address_name}-${marker.position.lat},${marker.position.lng}`}
              position={marker.position}
            >
              <div style={{ color: "#000" }}>
                {marker.document.address_name}
              </div>
            </MapMarker>
          ))}
        </Map>
        {/* <RightContainer></RightContainer> */}
      </MapContainer>
      <LeftContainer />
    </>
  );
}
