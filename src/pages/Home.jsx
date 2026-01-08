import React from 'react'
import { Link } from 'react-router'

function Home() {
  return (
    <div className='container'>
        <header>
        <h1>🧠 Memory Master!!</h1>
        <p>Test your memory skills!</p>
        </header>
        <div className='levels'>

        <Link to='/Memory-game/easy' style={{ textDecoration: "none", color: "inherit" }}>
            <div className='easy'>
                <h3>Easy 🙂</h3>
                <p style={{fontSize : "14px"}}>For people who wants to win and feel good about themselves...</p>
            </div>
        </Link>
        <Link to='/Memory-game/medium' style={{ textDecoration: "none", color: "inherit" }}>
            <div className='medium'>
                <h3>Medium 😐</h3>
                <p style={{fontSize : "14px"}}>For people who trust their neurons...</p>
            </div>
        </Link>
        <Link to='/Memory-game/hard' style={{ textDecoration: "none", color: "inherit" }}>
            <div className='hard'>
                <h3>Hard 😵</h3>
                <p style={{fontSize : "14px"}}>For people who apparently enjoy suffering...</p>
            </div>
        </Link>
        </div>

        <footer>
            <p>Choose your difficulty level!</p>

        </footer>
    </div>
  )
}

export default Home