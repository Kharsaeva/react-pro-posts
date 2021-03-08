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

export const checkPost =(id, completed) => {
    return function (dispatch) {
        dispatch({
            type: 'posts/check/start',
            payload: id,
        });
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ completed: !completed}),
            headers: {
                "Content-type": 'application/json'
            }
        })
            .then((response) => response.json())
            .then(() => {
                dispatch({
                    type: 'posts/check/success',
                    payload: id
                })
            })
    }
};

export const loadUsers = () => {
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
