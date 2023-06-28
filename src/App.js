import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './component/Login';
import { useAuth0 } from "@auth0/auth0-react";
import Header from './component/Header';
import Footer from './component/Footer';
import SideNav from './component/SideNav';
import UserBar from './component/UserBar';
import Feed from './component/Feed';
import Profile from './component/Profile';
import Bookmark from './component/Bookmark';
import Explore from './component/Explore';
import Loader from './component/Loader';

function App() {
  const { loginWithRedirect, isAuthenticated, logout, user, isLoading } = useAuth0();
  console.log("isAuthenticated: ", isAuthenticated)
  const element = isAuthenticated ? <Feed /> : <Login loginWithRedirect={loginWithRedirect} />
  return (
    <div className="App">
      <Header isAuthenticated={isAuthenticated} user={user} logout={logout} />
      <div className='container'>
        <div className='row'>
          {isAuthenticated && <SideNav />}

          <Routes>
            <Route path="/" element={element} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>

          {isAuthenticated && <UserBar />}
        </div>
      </div>
      <Footer />

      {isLoading && <Loader />}
    </div>
  );
}

export default App;
