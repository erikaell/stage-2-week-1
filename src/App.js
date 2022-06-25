import './styles/styles.css'


import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Product from './pages/Product'
import Profile from './pages/Profile'
import DetailProduct from './pages/DetailProduct'
import LayoutUser from './components/LayoutUser'
import LayoutAdmin from './components/LayoutAdmin'
import ComplainUser from './pages/ComplainUser'
import ListCategory from './pages/ListCategory'
import ListProduct from './pages/ListProduct'
import EditCategory from './pages/EditCategory'
import EditProduct from './pages/EditProduct'
import EditProfile from './pages/EditProfile'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<LayoutUser />}>
            <Route index element={<Product />}></Route>
            <Route path="/user/profile" element={<Profile />}></Route>
            <Route path="/user/product/detail/:id" element={<DetailProduct />}></Route>
            <Route path="/user/profile/edit" element={<EditProfile />}></Route>
            <Route path="/user/complain" element={<ComplainUser />}></Route>
          </Route>
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route index element={<ListCategory />}></Route>
            <Route path="/admin/product" element={<ListProduct />}></Route>
            <Route path="/admin/category/edit" element={<EditCategory />}></Route>
            <Route path="/admin/product/edit" element={<EditProduct />}></Route>
            <Route path="/admin/complain" element={<ComplainUser />}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

