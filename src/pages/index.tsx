// import RightContainer from "@/components/rightContainer";
import LeftContainer from "@/components/leftContainer";
import styled from "@emotion/styled";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useMapStore } from "@/store/map";
import InfoWindow from "@/components/infoWindow";

const MapContainer = styled.div`
  position: relative;
`;

export default function Home() {
  const { center, level, markers, curId, setCurId, startId, endId } =
    useMapStore();
  console.info(markers);
  console.info(startId);
  return (
    <>
      <MapContainer style={{ marginLeft: "350px" }}>
        <Map
          center={center}
          style={{
            width: "100%",
            height: "100vh",
          }}
          level={level}
        >
          {markers.map((marker, i) => (
            <MapMarker
              key={`marker-${i}-${marker.x},${marker.y}`}
              position={{ lng: Number(marker.x), lat: Number(marker.y) }}
              onClick={() => setCurId(marker.id)}
              image={
                marker.id === startId
                  ? {
                      src: "https://t1.daumcdn.net/localimg/localimages/07/2018/pc/flagImg/blue_b.png",
                      size: {
                        width: 37,
                        height: 42,
                      },
                    }
                  : marker.id === endId
                  ? {
                      src: "https://t1.daumcdn.net/localimg/localimages/07/2018/pc/flagImg/red_b.png",
                      size: {
                        width: 37,
                        height: 42,
                      },
                    }
                  : {
                      src: "https://t1.daumcdn.net/mapjsapi/images/marker.png",
                      size: {
                        width: 29,
                        height: 42,
                      },
                    }
              }
            >
              {curId === marker.id ? <InfoWindow marker={marker} /> : ""}
            </MapMarker>
          ))}
        </Map>
        {/* <RightContainer></RightContainer> */}
      </MapContainer>
      <LeftContainer />
    </>
  );
}
