const AppReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        case "SET_POSTS_DATA":
            const posts = action.payload.posts;

            return {
                ...state,
                isLoading: false,
                posts: posts
            };

        case "SET_USERS_DATA":
            const users = action.payload.users;

            return {
                ...state,
                isLoading: false,
                users: users
            };

        case "UPDATE_USER_DATA":
            const id = action.payload.id;
            const isFollowed = action.payload.isFollowed;
            const email = action.payload.email;

            const updatedUsers = state.users.map((user) => {
                if (user.id === id) {
                    user.isFollowed = isFollowed;
                }
                return user;
            });

            const updatedposts = state.posts.map((post) => {
                if (post.email === email) {
                    post.isFollowed = isFollowed;
                    post.latestCount = state.latestCount + 1;
                }
                return post;
            });

            return {
                ...state,
                isLoading: false,
                users: updatedUsers,
                posts: updatedposts,
                latestCount: state.latestCount + 1
            };

        case "UPDATE_POST_DATA":
            const postId = action.payload.id;
            const isBookmarked = action.payload.isBookmarked;
            const bookmarkedPosts = state.posts.map((post) => {
                if (post.id === postId) {
                    post.isBookmarked = isBookmarked;
                }
                return post;
            });

            return {
                ...state,
                isLoading: false,
                posts: bookmarkedPosts
            };

        case "UPDATE_POST_DATA_LIKE":
            const likePostId = action.payload.id;
            const isLiked = action.payload.isLiked;
            const likeCount = action.payload.likeCount;

            const likePosts = state.posts.map((post) => {
                if (post.id === likePostId) {
                    post.isLiked = isLiked;
                    post.likes.likeCount = likeCount;
                }
                return post;
            });

            return {
                ...state,
                isLoading: false,
                posts: likePosts
            };

        case "DELETE_POST":
            const deletePostId = action.payload.id;

            const postsAfterDelete = state.posts.filter((post) => post.id !== deletePostId);

            return {
                ...state,
                isLoading: false,
                posts: postsAfterDelete
            };

        case "CREATE_POST":
            const createPost = action.payload.post;

            const postsAfterCreate = state.posts;

            if (state.posts.filter(post => post.id === createPost.id).length === 0) {
                createPost.latestCount = state.latestCount + 1;
                postsAfterCreate.push(createPost);
            }

            return {
                ...state,
                isLoading: false,
                posts: postsAfterCreate,
                latestCount: state.latestCount + 1
            };


        default:
            return state;
    }
};

export default AppReducer;
