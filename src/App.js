import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './component/Login';
import Home from './component/Home'
import { useAuth0 } from "@auth0/auth0-react";
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  const { loginWithRedirect, isAuthenticated, logout, user, isLoading } = useAuth0();
  console.log("isAuthenticated: ", isAuthenticated)
  const element = isAuthenticated ? <Home /> : <Login loginWithRedirect={loginWithRedirect} />
  return (
    <div className="App">
      <Header isAuthenticated={isAuthenticated} user={user} logout={logout} />
      <div className='container'>
        <Routes>
          <Route path="/" element={element} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
