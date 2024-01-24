import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";

const Post = () => {
    const {postId} = useParams();
    const [post,setPost] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/post/${postId}`).then(response => {
            console.log(response.data);
            setPost(response.data)
    });
    }, []);

    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}

export default Post;