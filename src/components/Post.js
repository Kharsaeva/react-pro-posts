import React from 'react';
import {useDispatch} from "react-redux";
import {removeOnePost} from "../redux/actoins";

function Post(props) {
    const dispatch = useDispatch();

    //const user = props.users.find(item => item.id === props.post.userId);

    const handleDelete = (id) => {
        dispatch(removeOnePost(id))
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
            <button className="btn btn-outline-success">
                ✔
            </button>
            <button
                className="btn btn-outline-danger"
                onClick={() => handleDelete(props.post.id)}>
                ❌
            </button>
        </div>
    );
}

export default Post;