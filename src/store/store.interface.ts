import { IDocument } from "@/interfaces/search.interface";

export interface IPosition {
  lat: number;
  lng: number;
}

export interface IUseMapStore {
  center: IPosition;
  setCenter: (center: IPosition) => void;
  level: number;
  setLevel: (level: number) => void;
  markers: IDocument[];
  setMarkers: (markers: IDocument[]) => void;
  popMarker: (id: string) => void;
  curId: string;
  setCurId: (curId: string) => void;
  startId: string;
  setStartId: (startId: string) => void;
  endId: string;
  setEndId: (endId: string) => void;
}
