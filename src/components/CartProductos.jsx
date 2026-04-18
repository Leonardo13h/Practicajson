import React from 'react'

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
                <button type="button" class="btn btn-outline-info mx-3">Info</button>
                <button type="button" class="btn btn-outline-danger">Danger</button>
            </div>
          </div>
          </div>
  )
}

export default CartProductos