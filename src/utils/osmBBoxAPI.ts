import { OsmBBox } from "../types";

export type OSMBBoxResponse = {
  data?: string;
  error?: string | unknown;
};

function urlGenerator({ left, bottom, right, top }: OsmBBox): string {
  return `https://www.openstreetmap.org/api/0.6/map?bbox=${left},${bottom},${right},${top}`;
}

async function callOSMMapBBox(params: OsmBBox): Promise<OSMBBoxResponse> {
  try {
    const response = await fetch(urlGenerator(params));
    const text = await response.text();
    if (!response.ok) {
      return {
        error: text,
      };
    } else {
      return {
        data: text,
      };
    }
  } catch (error) {
    console.log("An error occured while calling osm map bbox api", error);
    return {
      error: error,
    };
  }
}

export default callOSMMapBBox;
