import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home.jsx';
import About from './About.jsx';
import Posts from './Posts.jsx';
import Shop from './Shop.jsx';

function App() {
  return (
    <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/posts?fname=Yatika&lname=Phosricharoen">Posts</Link></li>
        <li><Link to="/posts/1">Posts1</Link></li>
        <li><Link to="/posts/2">Posts2</Link></li>
        <li><Link to="/shop">Shop</Link></li>
      </ul>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/posts" element={<Posts/>}></Route>
      <Route path="/posts/:id" element={<Posts/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
