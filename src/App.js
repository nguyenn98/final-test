import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './pages/HomePage';
import About from './pages/About';

function App() {
  return (
<>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/cart' element={<h1>Cart</h1>} />
      </Route>
    </Routes>
</>
  );
}

export default App;
