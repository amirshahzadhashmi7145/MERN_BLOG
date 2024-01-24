import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PostCard from "./PostCard";

const Home = () => {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        const posts = axios.get("http://localhost:8000/allPosts").then(response => {
            console.log(response.data);
            setPosts(response.data);
        })
    }, []);

    return (
        <div className="min-h-screen bg-gray-300">
            <div className="px-4">
                <h2 className="text-center font-bold text-2xl text-gray-800 pb-8 pt-2">Blog Posts</h2>
                    <div className="justify-center grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {posts.length !== 0 ? posts.map(post => (
                            <div key={post.id}>
                                <Link to={`/post/${post._id}`}><PostCard post={post}/></Link>
                            </div>
                        )) : "No Post Found!"}
                    </div>

            </div>
        </div>

    )
}

export default Home;