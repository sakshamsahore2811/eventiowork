import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Documentation from './pages/Documentation'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/documentation" element={<Documentation/>}/>
        </Routes></BrowserRouter>
    </>
  )
}

export default App
