import React from 'react';
import {useDispatch} from "react-redux";
import {checkPost, removeOnePost} from "../redux/actoins";

function Post(props) {
    const dispatch = useDispatch();

    //const user = props.users.find(item => item.id === props.post.userId);

    const handleDelete = (id) => {
        dispatch(removeOnePost(id))
    };

    const handleCheck = (id, favorite) => {
        dispatch(checkPost(id, favorite));
    };

    return (
        <div className={`post ${props.post.favorite ? 'selected' : ''}`}>
            <p className="post-title">
                "{props.post.title}"
            </p>
            <p className="user-email">
                user.email
            </p>
            <p className="post-body">
                {props.post.body}
            </p>
            <input
                type="checkbox"
                className="check"
                checked={props.post.favorite}
                onChange={() => handleCheck(props.post.id, props.post.favorite)}
            />
            <div
                className="btn"
                onClick={() => handleDelete(props.post.id)}>
                ❌
            </div>
        </div>
    );
}

export default Post;