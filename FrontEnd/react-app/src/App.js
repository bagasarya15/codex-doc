import './App.css'
import Layout from './components/shared/layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import ListProduct from './components/pages/listProduct';
import ParentCalculator from './components/pages/ParentCalc';
import Latihan from './components/pages/latihan';
import DataObject from './components/pages/dataObject';
import ParentFunct from './components/pages/parent';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/home' element={<Home/>}/>
            <Route path='/calculator' element={<ParentCalculator/>}/>
            <Route path='/product' element={<ListProduct/>}/>
            <Route path='/latihan' element={<Latihan/>}/>
            <Route path='/data-object' element={<DataObject/>}/>
            <Route path='/parent' element={<ParentFunct/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
