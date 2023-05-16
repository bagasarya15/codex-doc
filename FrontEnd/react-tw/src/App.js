import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './shared/layout';
import Home from './pages/dashboard';
import Users from './pages/users';
import Category from './pages/category';
import Product from './pages/product';
import Customer from './pages/customer';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/category' element={<Category/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/customer' element={<Customer/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
