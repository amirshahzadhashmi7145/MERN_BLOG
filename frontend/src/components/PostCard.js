import React from "react";

const PostCard = ({post}) => {
    return (
        <div className="pt-4 max-w-sm overflow-hidden shadow-lg rounded-b-md">
            <img className="w-full" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"/>
            <div className="px-3 py-4">
                <div className="text-xl font-bold mb-3">
                    {post.title}
                </div>
                <p className="text-base text-gray-700">
                    {post.content}
                </p>
            </div>
            <p className="pr-2 text-right text-sm font-light text-gray-700">{post.createdAt}</p>

        </div>
    )
}

export default PostCard;