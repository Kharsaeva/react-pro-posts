const initialState = {
    posts: [],
    loading: false,
    users: [],
    usersLoading: false,
    favorite: false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'posts/load/start':
            return {
                ...state,
                loading: true
            };

        case 'posts/load/success':
            return {
                posts: action.payload
            };

        case 'posts/check/start':
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload) {
                        return {
                            ...post,
                            checking: true,
                        }
                    }

                    return post;
                })
            };

        case 'posts/check/success':
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post.id === action.payload) {
                        return {
                            ...post,
                            favorite: !post.favorite,
                            checking: false,
                        }
                    }

                    return post;
                })
            };

        case 'posts/remove/success':
            return {
                ...state,
                posts: state.posts.filter((item) => item.id !== action.payload)
            };

        case 'users/load/start':
            return {
                ...state,
                usersLoading: true,
            };

        case 'users/load/success':
            return {
                ...state,
                users: action.payload,
                usersLoading: false,
            };

        default:
            return state;
    }
}

export default reducer;