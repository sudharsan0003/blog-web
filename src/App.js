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
      navigate('/login');
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
      <ToastContainer position='top-center' />
      <Routes>
        <Route path='/' element={<Home setActive={setActive} user={user} />} />
        <Route path='/detail/:id' element={<Detail setActive={setActive} />} />
        <Route
          path='/create'
          element={
            user && user.uid ? (
              <EditPage user={user} />
            ) : (
              <Navigate to='/login' />
            )
          }
        />
        <Route
          path='/update/:id'
          element={
            user && user.uid ? (
              <EditPage user={user} setActive={setActive} />
            ) : (
              <Navigate to='/' />
            )
          }
        />
        <Route path='/login' element={<Login setActive={setActive} />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
