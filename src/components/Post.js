import React from 'react';
import {useDispatch} from "react-redux";
import {checkPost, removeOnePost} from "../redux/actoins";

function Post(props) {
    const dispatch = useDispatch();

    //const user = props.users.find(item => item.id === props.post.userId);

    const handleDelete = (id) => {
        dispatch(removeOnePost(id))
    };

    const handleCheck = (id, completed) => {
        dispatch(checkPost(id, completed))
    };

    return (
        <div className="post">
            <p className="post-title">
                "{props.post.title}"
            </p>
            <span className="user-email">user.email</span>
            <p className="post-body">
                {props.post.body}
            </p>
            <input
                type="checkbox"
                className="check"
                checked={props.post.completed}
                onChange={() => handleCheck(props.post.id, props.post.completed)}
            />
            <button
                className="btn"
                onClick={() => handleDelete(props.post.id)}>
                ❌
            </button>
        </div>
    );
}

export default Post;