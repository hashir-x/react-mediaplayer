import './App.css';
import Landingpage from './Pages/Landingpage';
import WatchHistory from './Pages/WatchHistory';
import Home from './Pages/Home';
import { Routes,Route } from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/watch-history' element={<WatchHistory/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
