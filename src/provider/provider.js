import React, { useEffect, useReducer } from "react";
import reducer from "../reducer/reducer";

// api url
let API = "https://randomuser.me/api/?page=1&results=1&seed=abc";

const initialState = {
  isLoading: true,
  results: [],
};

// create context
const AppContext = React.createContext();

// create provider function
const AppProvider = ({ children }) => {
  // implementing useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // calling api
  const fetchApiData = async (url) => {
    // showing loader while fetching data and then showing data
    dispatch({ type: "SET_LOADING" });

    try {
      const data = await fetch(url);
      const apiData = await data.json();
      console.log(apiData);

      dispatch({
        type: "GET_DATA",
        payload: {
          results: apiData.results,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // fetching data from API
    fetchApiData(`${API}`);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
