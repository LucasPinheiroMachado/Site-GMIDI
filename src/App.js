import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// firebase
import { onAuthStateChanged } from 'firebase/auth';

// Components
import NavBar from './components/NavBar/NavBar';
import Loading from './components/Loading/Loading';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Games from './pages/Games';
import SecretWord from './pages/SecretWord/SecretWord';
import Login from './pages/Login/Login';
import CreatePost from './pages/CreatePost/CreatePost';
import Blog from './pages/Blog/Blog';
import Search from './pages/Search/Search';
import Post from './pages/Post/Post';
import Dashboard from './pages/dashboard/Dashboard';
import Edit from './pages/Edit/Edit';

// hooks
import useVh from './hooks/useVh';
import { useAuthentication } from './hooks/useAuthentication';

// contexts
import { AuthProvider } from './contexts/AuthContext';

function App() {
  useVh();

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <Loading />;
  }
  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
          <div className="spaceNavBar"></div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/posts/:id" element={<Post />} />
            <Route path="/search" element={<Search />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/games" element={<Games />}></Route>
            <Route path="/secretword" element={<SecretWord />}></Route>
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/createpost"
              element={user ? <CreatePost /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/edit/:id"
              element={user ? <Edit /> : <Navigate to="/" />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
