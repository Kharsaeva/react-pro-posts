import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Post from "./Post";
import {loadPosts, loadUsers} from "../redux/actoins";

function Posts() {
    const posts = useSelector(state => state.posts);
    const loading = useSelector(state => state.loading);
    const users = useSelector(state => state.users);
    const usersLoading = useSelector(state => state.usersLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPosts());
        dispatch(loadUsers());
    }, []);

    if (loading || usersLoading) {
        return (
            <div>
                Please wait...
            </div>
        );
    }

    return (
        <div className="posts">
            {posts.map(post => {
                return <Post post={post} key={post.id} users={users}/>
            })}
        </div>
    );
}

export default Posts;