import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Header from './components/Shared/Header/Header';
import Blogs from './components/Blogs/Blogs';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        {/* <Route path='/home' element={<Home></Home>}></Route> */}
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path='/courses' element={<Courses></Courses>}></Route>
      </Routes>

    </div>
  );
}

export default App;
