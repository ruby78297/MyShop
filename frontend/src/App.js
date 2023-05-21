import "./index.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Home from "./Components/Home";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />

        <Route path="/Footer" element={<Footer />} />
        <Route path="/homeScreen" element={<HomeScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/cart/:id" element={<CartScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        {/* <Route path="/navbar" element={<NavBar />} /> */}
        {/* <Route
          path="/cart/:id?"
          render={(props) => <CartScreen {...props} />}
        /> */}
      </Routes>
    </Router>
  );
};

export default App;
