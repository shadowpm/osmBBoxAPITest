import osmtogeojson from "osmtogeojson";

const stringToXMLDom = (x: string): Document => {
  let xmlDoc = null;
  let parser = new DOMParser();
  xmlDoc = parser.parseFromString(x, "text/xml");

  return xmlDoc;
};

const convertOSMtoGeojsonString = (osm: string): string => {
  return JSON.stringify(osmtogeojson(stringToXMLDom(osm)));
};

export default convertOSMtoGeojsonString;
