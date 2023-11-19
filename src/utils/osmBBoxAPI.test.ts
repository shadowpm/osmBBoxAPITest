import fetchMock from "jest-fetch-mock";
import callOSMMapBBox, { OSMBBoxResponse } from "./osmBBoxAPI";

beforeAll(() => {
  fetchMock.enableMocks();
});

afterEach(() => {
  fetchMock.resetMocks();
});

describe("callOSMMapBBox", () => {
  test("calls the OSM API with the correct URL", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: "mocked data" }));

    const params = {
      left: "10",
      bottom: "20",
      right: "30",
      top: "40",
    };

    const response: OSMBBoxResponse = await callOSMMapBBox(params);

    expect(fetchMock).toHaveBeenCalledWith(
      "https://www.openstreetmap.org/api/0.6/map?bbox=10,20,30,40",
    );
    // expect(response.data).toEqual('mocked data');
    // expect(response.error).toBeUndefined();
  });

  test("returns an error if the API call is not successful", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ error: "API error" }), {
      status: 500,
    });

    const params = {
      left: "10",
      bottom: "20",
      right: "30",
      top: "40",
    };

    const response: OSMBBoxResponse = await callOSMMapBBox(params);

    expect(fetchMock).toHaveBeenCalledWith(
      "https://www.openstreetmap.org/api/0.6/map?bbox=10,20,30,40",
    );
    expect(response.data).toBeUndefined();
  });

  test("returns an error if an exception occurs during the API call", async () => {
    fetchMock.mockRejectOnce(new Error("Network error"));

    const params = {
      left: "10",
      bottom: "20",
      right: "30",
      top: "40",
    };

    const response: OSMBBoxResponse = await callOSMMapBBox(params);

    expect(fetchMock).toHaveBeenCalledWith(
      "https://www.openstreetmap.org/api/0.6/map?bbox=10,20,30,40",
    );
    expect(response.data).toBeUndefined();
  });
});
