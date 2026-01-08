import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Game from './pages/Game';
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <BrowserRouter basename="/memory-game-react">
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/game/:level' element={<Game />}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>    
    </>
  )
}

export default App
