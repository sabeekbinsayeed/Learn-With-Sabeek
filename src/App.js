import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Header from './components/Shared/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './components/Shared/Footer/Footer';
import About from './About/About';
import Notfound from './components/Notfound/Notfound';



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
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>

        } />
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>

      <Footer></Footer>


    </div>
  );
}

export default App;
