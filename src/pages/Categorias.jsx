import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CartProductos from "../components/CartProductos";

const Categorias = () => {

  const params = useParams();
  const cat = params.cat;
  const nombre = params.nombre;

  const API = `https://dummyjson.com/products/category/${cat}`;

  const [datos, setDatos] = useState([]); //datos: Almacena los productos recibidos de la API.
  const [loading, setLoading] = useState(true); //loading: Indica si la carga está en progreso (para mostrar un spinner).
  const [error, setError] = useState(null); //error: Guarda el mensaje de error si la petición falla.

  const getDatos = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("HTTP error! status: " + response.status);
      }
      const data = await response.json();
      console.log(data);
      setDatos(data.products);//cuando no tiene nombre de arreglo se borra PRODUCT
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDatos();
  }, [cat]);//los parentesis refrescan el useffect

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Cargando Productos...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center py-5 text-danger">
        <h4>Error al cargar los Moviles</h4>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h4 className="text-center py-4">
        {datos.length} {nombre}
      </h4>
      <div className="row justify-content-center">
        {datos.map((item) => (
          <CartProductos item={item} />
        ))}
      </div>
    </div>
  );
};

export default Categorias;
