import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./pages/Error404";
import Laptop from "./pages/Laptop";
import Movil from "./pages/Movil";
import Tecno from "./pages/Tecno";
import Contactos from "./pages/Contactos";
import Categorias from "./pages/Categorias";
import Inicio from "./pages/Inicio";
import Motocycles from "./pages/Motocycles";
import Comida from "./pages/Comida";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
         <Route path="/" element={<Inicio />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/laptop" element={<Laptop />} />
                    <Route path="/movil" element={<Movil />} />
                    <Route path="/tecno" element={<Tecno />} />
                    <Route path="/categorias" element={<Categorias />} />
                    <Route path="/contactos" element={<Contactos />} />
                    <Route path="/motocycles" element={<Motocycles />} />
                    <Route path="/comida" element={<Comida />} />
                    <Route path="/error404" element={<Error404 />} />

        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
