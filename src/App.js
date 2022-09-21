import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home' 
import NasaPhoto from './components/NasaPhoto'


function App() {
  return (
    
    <BrowserRouter>
      <div className='app'>
        <Routes>
        <Route exact path="/" element={<Home/>}  />
        <Route element={<NasaPhoto/>} path="/nasaphoto" />
        </Routes>
      </div>
    </BrowserRouter>
    
    
  );
}

export default App;
