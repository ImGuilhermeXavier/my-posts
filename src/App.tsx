import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Albuns from './pages/Albuns/Albuns'
import Posts from './pages/Posts/Posts'
import Todos from './pages/Todos/Todos'

function App() {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/*" element={<Posts />} />
                    <Route path="/albuns" element={<Albuns />} />
                    <Route path="/todos" element={<Todos />} />
                </Routes>
            </main>
            <Nav />
        </BrowserRouter>
    )
}

export default App
