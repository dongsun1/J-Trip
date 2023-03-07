// import RightContainer from "@/components/rightContainer";
import LeftContainer from "@/components/leftContainer";
import styled from "@emotion/styled";
import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useMapStore } from "@/store/map";

const MapContainer = styled.div`
  position: relative;
`;

export default function Home() {
  const [map, setMap] = useState();
  const { center, level, markers } = useMapStore();

  return (
    <>
      <MapContainer>
        <Map
          center={center}
          style={{
            width: "100%",
            height: "100vh",
          }}
          level={level}
          onCreate={() => setMap}
        >
          {markers.map((marker, i) => (
            <MapMarker
              key={`marker-${i}-${marker.x},${marker.y}`}
              position={{ lng: Number(marker.x), lat: Number(marker.y) }}
            >
              <div style={{ color: "#000" }}>{i}</div>
            </MapMarker>
          ))}
        </Map>
        {/* <RightContainer></RightContainer> */}
      </MapContainer>
      <LeftContainer />
    </>
  );
}
