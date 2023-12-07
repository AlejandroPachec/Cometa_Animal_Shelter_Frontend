import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage.tsx';
import './App.css'

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<HomePage/>} />
    {/* <Route path='/*' element={<NotFoundPage/>} /> */}
    </Routes>
  
    </>
  )
}

export default App
