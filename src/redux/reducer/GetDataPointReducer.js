const initialState = {
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_DATA_POINT":
      return { ...state, data: [...state.data, ...action.payload] };
    default:
      return state;
  }
}
