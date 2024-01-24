import React, {useState} from "react";
import axios from "axios";

const AddPost = () => {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');

    const handleAddPost = () => {
        try{
            axios.post('http://localhost:8000/addPost',{title:title,content:content});
            setTitle('');
            setContent('');
        }catch (e) {
            console.log(e.message);
        }
    }

    return (
        <div className="bg-gray-300 min-h-screen">
            <div
                className="px-3 relative top-10 bg-white max-w-md mx-auto py-5 space-y-4 shadow-md rounded-md text-center">
                <h2 className="text-2xl mb-4 font-bold">Add Post</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-md font-semibold mb-2 text-gray-600">Title:</label>
                        <input
                            className="py-2  w-full border border-gray-300 rounded-md text-center focus:outline-none focus:border-blue-500"
                            type="text"
                            placeholder="Enter Title Here"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-md font-semibold mb-2 text-gray-600">Content:</label>
                        <textarea
                            className="py-2 h-96 w-full border border-gray-300 rounded-md text-center focus:outline-none focus:border-blue-500"
                            type="text"
                            placeholder="Enter Content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>

                    <button className="w-full bg-blue-500 text-white py-2 rounded-md h" onClick={handleAddPost}>
                        Add
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddPost;