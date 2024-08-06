import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      couponCode: '',
      discount: 0,
      subTotal: 0,
      total: 0
    };
  }

  componentDidMount() {
    const subTotal = this.props.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const total = subTotal - 0;
    this.setState(
        { total, subTotal }
      );
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (JSON.stringify(nextProps.items) !== JSON.stringify(prevState.items)) {
      const subTotal = nextProps.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      const total = subTotal - prevState.discount;
      return {
        items: nextProps.items,
        subTotal,
        total
      };
    }
    return null; // No state update necessary
  }

  handleCouponSelect = (event) => {
    const couponCode = event.target.value;
    let discount = 0;

    if (couponCode === '100OFF') {
      discount = 100;
    } else if (couponCode === '200OFF') {
      discount = 200;
    }

    this.setState(
      { couponCode, discount },
      this.calculateTotal
    );
  };

  calculateTotal = () => {
    this.setState((state) => {
      const total = state.subTotal - state.discount;
      if(total <= 0) {
        return { total : 0 }
      }
      return { total };
    });
  };

  render() {
    const { items, subTotal, total, couponCode } = this.state;

    return (
      <div className='mt-3 border rounded-md p-5'>
        <h2>Your Cart</h2>
        <ul className=''>
          {items.map((item, index) => (
            <li key={index} className='mt-2 border-dotted border-2 rounded-md p-4'>
              {item.item} - ${item.price} x {item.quantity}
              <button className='ml-1  px-2  text-md font-medium text-white bg-gray-500 rounded-md hover:bg-gray-700' onClick={() => this.props.removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <div className='mt-2'>
          <label>
            Select Coupon Code:
            <select value={couponCode} disabled={!this.props.items.length } onChange={this.handleCouponSelect} className='ml-2 border rounded-md bg-gray-100'>
              <option value="">None</option>
              <option value="100OFF">100OFF</option>
              <option value="200OFF">200OFF</option>
            </select>
          </label>
        </div>
        <div>
          <p>Subtotal: ${subTotal}</p>
          <p>Discount: ${this.state.discount}</p>
          <p>Total: ${total}</p>
        </div>
      </div>
    );
  }
}

export default Cart;
