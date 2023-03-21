import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reactbootstrap from './components/reactbootstrap';
import Header from './components/header'
// import Mytable from './components/mytable'
import MyForm from './components/myform'

function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/reactbootstrap' element={<Reactbootstrap/>}/>
    <Route path='/myform' element={<MyForm/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
