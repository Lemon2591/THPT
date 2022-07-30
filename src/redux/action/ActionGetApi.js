export const GET_DATA_POINT = "GET_DATA_POINT";

export const getDataPoint = (data) => {
  return {
    type: GET_DATA_POINT,
    payload: data,
  };
};
