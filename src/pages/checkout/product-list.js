import React, { Component } from "react";
import Cart from './components/cart'


class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      name: "Sally",
      age: 13,
      products: [
        { id: 1, price: 100, heading: 'Product 1' },
        { id: 2, price: 200, heading: 'Product 2' },
        // Add more products as needed
      ]
    };
  }

  removeItem = (id) => {
    this.setState((prevState) => ({
      products: prevState.products.filter(product => product.id !== id)
    }));
  };

  addToCart = () => {
    const newProduct = { id: Date.now(), price: 150, heading: 'New Product' };
    this.setState((prevState) => ({
      products: [...prevState.products, newProduct]
    }));
  };

  render() {
    const cartItems = this.state.products.map(product => ({
      id: product.id,
      price: product.price,
      item: product.heading,
      quantity: 1
    }));
    return (
      <>
      <div className='underline'>
        <a href='/' > {'<'}Back to Home  </a>
      </div>
        <div className="flex items-center flex-col">
          <div>
            <h1>Products List</h1>
            <button className="ml-1 mt- 2 px-2  text-md font-medium text-white bg-gray-500 rounded-md hover:bg-gray-700" onClick={this.addToCart}> ADD TO CART </button>
          </div>
          <Cart items={cartItems} removeItem={this.removeItem} />
        </div>
      </>
    );
  }
}

export default ProductList;