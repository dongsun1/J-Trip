import styled from "@emotion/styled";
import { useEffect } from "react";

declare global {
  interface Window {
    naver: any;
  }
}
const Input = styled.input``;

export default function Home() {
  useEffect(() => {
    const mapDiv = document.getElementById("map");
    const mapOptions = {
      center: new window.naver.maps.LatLng(36, 127),
      zoom: 9,
    };

    const map = new window.naver.maps.Map(mapDiv, mapOptions);
  }, []);

  return (
    <div>
      <div id="map" style={{ height: "100vh" }} />
      <Input />
    </div>
  );
}
