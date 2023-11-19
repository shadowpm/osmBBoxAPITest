export type OsmBBox = {
  left: string;
  bottom: string;
  right: string;
  top: string;
};

export type FormAction = { type: "UPDATE_INPUT"; field: string; value: string };
