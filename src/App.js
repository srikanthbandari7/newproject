import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reactbootstrap from './components/reactbootstrap';
import Header from './components/header'
import Mytable from './components/mytable'

function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/reactbootstrap' element={<Reactbootstrap/>}/>
    <Route path='/mytable' element={<Mytable/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
