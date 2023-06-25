import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import appReducer from "../reducer/AppReducer";

const AppContext = createContext();

const POSTS_API = "api/posts";
const USERS_API = "api/users";

const initialState = {
  posts: [],
  users: [],
  isLoading: false,
  latestCount: 0
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const getPosts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const posts = await res.data;
      dispatch({ type: "SET_POSTS_DATA", payload: posts });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getUsers = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const users = await res.data;
      dispatch({ type: "SET_USERS_DATA", payload: users });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const updateisFollowedFlag = (id, isFollowed, email) => {
    dispatch({ type: "UPDATE_USER_DATA", payload: { id, isFollowed, email } });
  }

  const handleIsbookmarkedFlag = (id, isBookmarked) => {
    dispatch({ type: "UPDATE_POST_DATA", payload: { id, isBookmarked } });
  }

  useEffect(() => {
    getPosts(POSTS_API);
    getUsers(USERS_API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateisFollowedFlag, handleIsbookmarkedFlag }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useAppContext };
