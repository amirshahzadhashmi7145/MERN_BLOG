import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import Navbar from "./components/Navbar"
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoutes from "./PrivateRoutes";

function App() {
  return (
      <div>
        {/*<nav>*/}
        {/*  <ul>*/}
        {/*    <li><Link to='/'>Home</Link></li>*/}
        {/*    <li><Link to='/add'>Add Post</Link></li>*/}
        {/*  </ul>*/}
        {/*</nav>*/}
          <Navbar />

          <Routes>
              <Route element={<PrivateRoutes />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/post/:postId" element={<Post />} />
                  <Route path="/add" element={<AddPost />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
          </Routes>
      </div>
  );
}
export default App;
