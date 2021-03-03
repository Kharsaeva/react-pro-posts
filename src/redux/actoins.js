export const loadPosts = () => {
    return (dispatch) => {
        dispatch({ type: 'posts/load/start'})

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'posts/load/success',
                    payload: json
                })
            })
    }
};

export const removeOnePost = (id) => {
    return (dispatch) => {

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type:'posts/remove/success',
                    payload: id,
                })
            })
    }
};

export const loadUsers = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'users/load/start',
        });
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'users/load/success',
                    payload: json
                })
            })
    }
};
