import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import appReducer from "../reducer/AppReducer";
import { formatDate } from "../backend/utils/authUtils";

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

  const handleIsLikedFlag = (id, isLiked, likeCount) => {
    dispatch({ type: "UPDATE_POST_DATA_LIKE", payload: { id, isLiked, likeCount } });
  }

  const deletePost = (id) => {
    dispatch({ type: "DELETE_POST", payload: { id } });
  }

  const editPost = (id, caption) => {
    dispatch({ type: "EDIT_POST", payload: { id, caption } });
  }

  const createPost = (user, caption, imageUrl, postId) => {
    console.log();
    const post = {
      id: postId,
      caption: caption,
      image: imageUrl,
      likes: {
        likeCount: 0,
        likedBy: []
      },
      name: user.name,
      createdAt: formatDate(),
      updatedAt: formatDate(),
      userImage: user.picture,
      email: user.email,
      isBookmarked: false,
      isFollowed: true,
      isTrending: false,
      isLiked: false,
      latestCount: 0
    }
    dispatch({ type: "CREATE_POST", payload: { post } });
  }

  useEffect(() => {
    getPosts(POSTS_API);
    getUsers(USERS_API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateisFollowedFlag, handleIsbookmarkedFlag, handleIsLikedFlag, deletePost, createPost, editPost }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useAppContext };
