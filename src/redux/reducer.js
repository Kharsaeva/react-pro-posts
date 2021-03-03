const initialState = {
    posts: [],
    loading: false,
    users: [],
    usersLoading: false,
};

export default (state = initialState, action) => {
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

        case 'posts/remove/success':
            return {
                ...state,
                posts: state.posts.filter((item) => item.id !== action.payload)
            };

        default:
            return state;
    }
}
