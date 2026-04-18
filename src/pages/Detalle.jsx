import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CartProductos from "../components/CartProductos";

const Detalle = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [datos, setDatos] = useState([]); //datos: Almacena los productos recibidos de la API.
  const [loading, setLoading] = useState(true); //loading: Indica si la carga está en progreso (para mostrar un spinner).
  const [error, setError] = useState(null); //error: Guarda el mensaje de error si la petición falla.

  const API = `https://dummyjson.com/products/${params.id}`;
  const getDatos = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("HTTP error! status: " + response.status);
      }
      const data = await response.json();
      console.log(data);
      setDatos(data); //cuando no tiene nombre de arreglo se borra PRODUCT
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDatos();
  }, []);

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
      <div className="text-end py-4 my-3">
        <button onClick={() => navigate(-1)} className="btn btn-secondary">
          ← Volver
        </button>
      </div>
      <h4 className="text-center py-4">
        Detalle {params.id} {params.title}
      </h4>
      <div className="row">
        <div className="col-md-4 card">
          <img src={datos.thumbnail} alt="" />
        </div>
        <div className="col-md-8 card">
          <h4>{datos.description}</h4>
          <h2>{datos.category}</h2>
          <h2>{datos.price}</h2>
          <h4>{datos.discountPercentage}</h4>
          <h4>{datos.rating}</h4>
          <h4>{datos.stock}</h4>
          <h4>{datos.tags}</h4>
        </div>
        <div>
          {datos.reviews.map((item) => (
            
            <div className="border p-3 my-3">
              <b>Comentarios:</b> {item.comment}<br/>
              <b>Calificacion:</b> {item.rating}<br/>
              <b>Fecha:</b> {item.date}<br/>
              <b>Usuario:</b> {item.reviewerName}<br/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detalle;
