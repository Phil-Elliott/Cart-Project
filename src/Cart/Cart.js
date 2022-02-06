import React from "react"
import { Link } from "react-router-dom"
import Items from "./Components/Items"

const Cart = ({ items, total, updateQuantity }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-8">
          <div className="panel panel-info">
            <div className="panel-heading">
              <div className="panel-title">
                <div className="row">
                  <div className="col-xs-6">
                    <h5>
                      <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
                      Shopping Cart
                    </h5>
                  </div>
                  <div className="col-xs-6">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm btn-block"
                    >
                      <span className="glyphicon glyphicon-share-alt"></span>{" "}
                      Continue shopping
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-body">
              {items.map((item, i) => {
                return (
                  <Items
                    key={item.key}
                    id={i}
                    image={item.img}
                    name={item.name}
                    description={item.description}
                    price={item.price.toFixed(2)}
                    quantity={item.quantity}
                    updateQuantity={updateQuantity}
                  />
                )
              })}
              <div className="row">
                <div className="text-center">
                  <div className="col-xs-9">
                    <h6 className="text-right">Added items?</h6>
                  </div>
                  <div className="col-xs-3">
                    <button
                      type="button"
                      className="btn btn-default btn-sm btn-block"
                    >
                      Update cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-footer">
              <div className="row text-center">
                <div className="col-xs-9">
                  <h4 className="text-right">
                    Total <strong>${total.toFixed(2)}</strong>
                  </h4>
                </div>
                <div className="col-xs-3">
                  <Link to="/checkout" style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-success btn-block">
                      Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

/*

  Map through items 
  Add 2 items from array of objects (would be passed from a state from site)
  Have buttons work 
  Get quantity working


  add the value to each to the total 
  set the quantity


{ total, cartTotal }

*/
