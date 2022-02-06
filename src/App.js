import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Cart from "./Cart/Cart"
import Checkout from "./Checkout/Checkout"

const App = () => {
  const [total, setTotal] = useState(0)
  const [items, setItems] = useState([
    {
      img: "http://placehold.it/100x70",
      name: "item1",
      description: "Product One",
      price: 10,
      quantity: 1,
      key: 0,
    },
    {
      img: "http://placehold.it/100x70",
      name: "item2",
      description: "Product Two",
      price: 20,
      quantity: 2,
      key: 1,
    },
  ])

  let itemsArr = items

  const updateQuantity = (id, quantity) => {
    itemsArr[id].quantity = quantity
    setItems(itemsArr)
    updateTotal()
  }

  const updateTotal = () => {
    let amount = 0

    items.forEach((item) => {
      amount = amount + item.price * item.quantity
      setTotal(amount)
    })
  }

  useEffect(() => {
    updateTotal()
  }, [])

  return (
    <div className="body">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Cart
                items={items}
                total={total}
                updateQuantity={updateQuantity}
              />
            }
          />
          <Route path="/checkout" element={<Checkout total={total} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
