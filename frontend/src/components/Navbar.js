import React from "react";
import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/actions/authActions";

const Navbar = () => {
    let dispatch = useDispatch();
    let isAuthenticated = useSelector(state => state.auth.isAuthenticated);


    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        //will be redirected to /login automatically due to protected routes
    }

    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
            {/*left section*/}
            {isAuthenticated ?
                <div className="flex items-center space-x-4">
                    <div className="text-white text-xl font-bold"><Link to="/">Blogs</Link></div>
                </div>
                :
                <div className="flex items-center space-x-4">
                    <div className="text-white text-xl font-bold">Blogs</div>
                </div>
            }

            {/*Center Section*/}
            <div className="flex-grow text-center">
                <input
                type="text"
                placeholder="Search..."
                className="w-2/3 sm:w-64 md:w-96 lg:w-2/3 rounded-full text-center bg-gray-600 px-4 py-1.5 text-white focus:outline-none"
                />
            </div>

            {/*Right Section*/}
            <div className="flex items-center space-x-4">
                {isAuthenticated ? (<>
                        <button className="text-white" onClick={handleLogout}>Logout</button>
                        <button className="text-white"><Link to="/add">Add Post</Link></button>
                    </>)
                    :
                    (<>
                        <button className="text-white"><Link to="/login">Login</Link></button>
                        <button className="text-white"><Link to="/signup">Signup</Link></button>
                    </>)
                }

            </div>
        </nav>
    )
}

export default Navbar;