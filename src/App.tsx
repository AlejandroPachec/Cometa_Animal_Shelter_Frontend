import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home-page/HomePage.tsx'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Routes>
                <Route path='/' element={<HomePage/>} />
                {/* <Route path='/*' element={<NotFoundPage/>} /> */}
            </Routes>

        </>
    )
}

export default App
