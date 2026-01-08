import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Game from './pages/Game';
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/Memory-game' element={<Home />}/>
            <Route path='/Memory-game/:level' element={<Game />}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>    
    </>
  )
}

export default App
