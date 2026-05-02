import React from 'react'
import { useCarrito } from "../context/CarritoContext";
import { Link } from 'react-router-dom'

const CartProductos = ({item}) => {

  const { agregarAlCarrito, restarUno, carrito } = useCarrito();
   const enCarrito = carrito.find(producto => producto.id === item.id);

  return (
    <div className="col-md-3 mb-5">
            <div className="card h-100" key={item.id}>

            
            <div className="card-header">
               {enCarrito && (
                        <span className="position-absolute top-0 end-0 badge rounded-pill text-bg-warning fs-6 m-2">
                            {enCarrito.cantidad}
                        </span>
                    )}
              <img src={item.thumbnail} alt="" className="img-fluid" />
            </div>
            <div className="card-body text-center">
              <p>{item.title}</p>
              <h3 className="text-success text-center">{item.price}$</h3>
            </div>
            <div className="card-footer text-center">
                <button type="button" class="btn btn-outline-info mx-3" data-bs-toggle="modal" data-bs-target={`#${item.id}`}>Modal</button>
                <Link to={`/detalle/${item.id}/${item.title}`} type="button" class="btn btn-outline-warning">Detalle</Link>
                <div className="mt-2 pt-2 btn-outline-info border-top">
                        <button 
                        className="btn btn-success btn-sm py-2 " 
                         onClick={() => agregarAlCarrito(item)}>
                            Agregar al carrito
                        </button>
                         {enCarrito && (
                        <button 
                        className="btn btn-danger btn-sm ms-2 py-2" 
                         onClick={() => restarUno(item)}>
                            Eliminar del Carrito
                        </button> 
                         )}
                    </div>
                         
            </div>
              
          </div>


         
<div>
  
  <div className="modal fade" id={item.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">{item.title}</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className='row'>
            <div className='col-md-4 card'>
              <img src={item.thumbnail} alt="" />
            </div>
            <div className='col-md-8 card'>
              <h4>{item.description}</h4>
          <p>{item.category}</p>
          <p>{item.price}</p>
          <p>{item.stock}</p>
          <p>{item.tags}</p>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>

          </div>
  )
}

export default CartProductos