import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Show from "./components/Show";
import ProductDetails from "./components/ProductDetails";
import AddCart from "./components/AddCart";

// import Add from "./components/Add";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Show />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/addcart" element={<AddCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
