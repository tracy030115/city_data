////////////////////////////////////////////////////////////////////////////////
// 🛑 Nothing in here has anything to do with Remix, it's just a fake database
////////////////////////////////////////////////////////////////////////////////

import { matchSorter } from "match-sorter";

const DATASET: DataOptionType[] = [{
  id: '1',
  label: 'SF tree data',
  description: "List of dpw maintained street trees including: Planting date, species, and location",
  referenceUrl: "https://data.sfgov.org/City-Infrastructure/Street-Tree-List/tkzw-k3nq/about_data",
  initialViewState: {
    longitude: -122.41669,
    latitude: 37.7853,
    zoom: 13,
   // pitch: 0,
   // bearing: 0,
  },
  dataURL:
  "https://data.sfgov.org/resource/tkzw-k3nq.json?$limit=1000"
}, 
{
  id: '2',
  label: 'SF crime data',
  description: "Police Department Incident Reports: 2018 to Present",
  referenceUrl: "https://data.sfgov.org/Public-Safety/Police-Department-Incident-Reports-2018-to-Present/wg3w-h783/about_data",
  initialViewState: {
    longitude: -122.41669,
    latitude: 37.7853,
    zoom: 13,
   // pitch: 0,
   // bearing: 0,
  },
  dataURL:
  "https://data.sfgov.org/resource/wg3w-h783.json?$limit=1000"
}]

export function getAllData(query?: string | null): DataOptionType[] {
  if (query) {
    return matchSorter(DATASET, query, {
      keys: ["label"],
    });
  }
  return DATASET;
}

export function getData(dataId: string): DataOptionType | undefined {
  return DATASET.find((data) => data.id === dataId);
}

export interface DataOptionType {
id: string;
label: string;
description: string;
referenceUrl: string;
initialViewState: {
  longitude: number;
  latitude: number;
  zoom: number;
 // pitch: number;
 // bearing: number;
};
dataURL: string;
}
