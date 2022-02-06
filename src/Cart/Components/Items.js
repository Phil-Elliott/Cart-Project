import React, { useState } from "react"

const Items = ({
  id,
  image,
  name,
  description,
  price,
  quantity,
  updateQuantity,
}) => {
  const [inputNumber, setInputNumber] = useState()

  const change = (e) => {
    if (e >= 0) {
      setInputNumber(e)
      updateQuantity(id, e)
    }
  }

  return (
    <div>
      <div className="row">
        <div className="col-xs-2">
          <img className="img-responsive" src={image} alt="cart-item" />
        </div>
        <div className="col-xs-4">
          <h4 className="product-name">
            <strong>{name}</strong>
          </h4>
          <h4>
            <small>{description}</small>
          </h4>
        </div>
        <div className="col-xs-6">
          <div className="col-xs-6 text-right">
            <h6>
              <strong>
                {price}
                <span className="text-muted"> x</span>
              </strong>
            </h6>
          </div>
          <div className="col-xs-4">
            <input
              type="number"
              className="form-control input-sm"
              value={inputNumber ? inputNumber : quantity}
              min="0"
              onChange={(e) => change(e.target.value)}
            />
          </div>
          <div className="col-xs-2">
            <button type="button" className="btn btn-link btn-xs">
              <span className="glyphicon glyphicon-trash"> </span>
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Items
