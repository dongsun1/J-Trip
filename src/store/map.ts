import { IDocument } from "@/interfaces/search.interface";
import create from "zustand";
import { IPosition, IUseMapStore } from "./store.interface";

export const useMapStore = create<IUseMapStore>((set) => ({
  center: { lat: 36.1, lng: 126 },
  setCenter: (center: IPosition) => set((state) => ({ ...state, center })),
  level: 12,
  setLevel: (level: number) => set(() => ({ level })),
  markers: [],
  setMarkers: (markers: IDocument[]) =>
    set((state) => ({ ...state, markers: [...state.markers, ...markers] })),
  popMarker: (id: string) =>
    set((state) => {
      const deleted = state.markers.filter(({ id: _id }) => _id !== id);
      return { ...state, markers: [...deleted] };
    }),
}));
