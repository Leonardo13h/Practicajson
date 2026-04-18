import React from 'react'
import { Link } from 'react-router-dom'

const CartProductos = ({item}) => {
  return (
    <div className="col-md-3 mb-5">
            <div className="card h-100" key={item.id}>

            
            <div className="card-header">
              <img src={item.thumbnail} alt="" className="img-fluid" />
            </div>
            <div className="card-body text-center">
              <p>{item.title}</p>
              <h3 className="text-success text-center">{item.price}$</h3>
            </div>
            <div className="card-footer text-center">
                <button type="button" class="btn btn-outline-info mx-3" data-bs-toggle="modal" data-bs-target={`#${item.id}`}>Modal</button>
                <Link to={`/detalle/${item.id}/${item.title}`} type="button" class="btn btn-outline-danger">Detalle</Link>
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