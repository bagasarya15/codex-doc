import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './component/shared/layout';
import Home from './component/pages/dashboard';

import Users from './component/pages/users';
import CreateUser from './component/pages/users/createUser';
import EditUser from './component/pages/users/updateUser';

import Product from './component/pages/product';
import CreateProduct from './component/pages/product/createProduct';
import Category from './component/pages/category';
import Customer from './component/pages/customer';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/create-users" element={<CreateUser />} />
            <Route path="/edit-users/:id" element={<EditUser />} />
            <Route path="/category" element={<Category />} />
            <Route path="/product" element={<Product />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/customer" element={<Customer />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
