import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import { Api } from "./components/Api";
import { useState } from "react";

function App() {

  const [products, setProducts] = useState(Api);

  return (
    <div className="App">
      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
