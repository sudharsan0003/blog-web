import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Detail from './pages/Detail';
import EditPage from './pages/EditPage';
import About from './pages/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Login from './pages/Login';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import Registration from './pages/Registration';
import Profile from './pages/Profile';
import ProfileUpdation from './pages/ProfileUpdation';

const App = () => {
  const [active, setActive] = useState('home');
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setActive('login');
      setTimeout(() => {
        navigate('/');
      }, 1500);
      toast.success('Logout Successfully');
    });
  };

  return (
    <div>
      <Header
        setActive={setActive}
        active={active}
        user={user}
        handleLogout={handleLogout}
      />
      <ToastContainer
        position='top-right'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        Draggable
        pauseOnHovertheme='colored'
      />
      <Routes>
        <Route path='/' element={<Login setActive={setActive} />} />
        <Route
          path='/home'
          element={
            user && user.uid ? (
              <Home setActive={setActive} user={user} />
            ) : (
              <Navigate to='/' />
            )
          }
        />
        <Route
          path='/search'
          element={<Home setActive={setActive} user={user} />}
        />

        <Route path='/detail/:id' element={<Detail setActive={setActive} />} />
        <Route
          path='/create'
          element={
            user && user.uid ? <EditPage user={user} /> : <Navigate to='/' />
          }
        />
        <Route
          path='/update/:id'
          element={
            user && user.uid ? (
              <EditPage user={user} setActive={setActive} />
            ) : (
              <Navigate to='/home' />
            )
          }
        />
        <Route
          path='/registration'
          element={<Registration user={user} setActive={setActive} />}
        />
        <Route
          path='/updation/:id'
          element={<ProfileUpdation user={user} setActive={setActive} />}
        />
        <Route path='/profile' element={<Profile />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
