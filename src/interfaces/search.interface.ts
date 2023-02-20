export interface IDocuments {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}

export interface IMeta {
  is_end: boolean;
  pageable_count: number;
  same_name: {
    keyword: string;
    region: [];
    selected_region: string;
  };
  total_count: number;
}

export interface searchData {
  documents: IDocuments[];
  meta: IMeta;
}
