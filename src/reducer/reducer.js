import React from "react";

const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_DATA":
      return {
        ...state,
        isLoading: false,
        results: action.payload.results,
      };
  }

  return state;
};

export default reducer;
