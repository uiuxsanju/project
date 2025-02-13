import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;