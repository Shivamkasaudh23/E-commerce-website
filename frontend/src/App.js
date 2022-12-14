import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Components/screens/HomeScreen";
import ProductScreen from "./Components/screens/ProductScreen";
import CartScreen from "./Components/screens/CartScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' element={<ProductScreen  />} />
            <Route path='/cart/:id' element={<CartScreen  />} />
          </Routes>
        </Container>
      </main>    
      <Footer />
    </Router>
  );
};

export default App;
