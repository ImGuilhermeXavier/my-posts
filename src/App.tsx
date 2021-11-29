import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Albums from './pages/Albums/Albums'
import Posts from './pages/Posts/Posts'
import Todos from './pages/Todos/Todos'

function App() {
    return (
        <BrowserRouter>
            <main className="container">
                <Routes>
                    <Route path="/*" element={<Posts />} />
                    <Route path="/albums" element={<Albums />} />
                    <Route path="/todos" element={<Todos />} />
                </Routes>
            </main>
            <Nav />
        </BrowserRouter>
    )
}

export default App
