import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound'
import ProductsLayout from './pages/products/ProductsLayout';
import ProductDetail from './pages/products/ProductsDetail';
import ProductList from './pages/products/ProductsList';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="*" element={<NotFound />} />

          <Route path="products" element={<ProductsLayout />}>
            <Route index element={<ProductList />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
