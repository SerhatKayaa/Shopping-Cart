import React from 'react';

export default class ProductItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quantity: 1
        }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    addToCart = () => {
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
        let id = this.props.product.id.toString();
        cart[id] = (cart[id] ? cart[id]: 0);
        let qty = cart[id] + parseInt(this.state.quantity);
        if(this.props.product.avaible_quantity < qty){
            cart[id] = this.props.product.avaible_quantity;
        } else {
            cart[id] = qty
        }
        localStorage.setItem('cart',JSON.stringify(cart));
    }
    render(){
        const { product } = this.props;
        const { marginBottom10, inputForm } = styles;
        return (
            <div className='card' style={ marginBottom10 }>
                <div className='card-body'>
                    <h4 className='cart-title'>{product.name}</h4>
                    <p className='card-text'>{product.description}</p>
                    <h5 className='card-text'><small>price: </small>${product.price}</h5>
                    <span className='card-text'>
                        <smal>Avaible Quantity: </smal>{product.avaible_quantity}
                    </span>
                    { product.avaible_quantity > 0 ?
                        <div>
                            <button className='btn btn-sm btn-warning float-right'
                            onClick={this.addToCart}>Add to cart</button>
                            <input type='number' value={this.state.quantity} name='quantity'
                            onChange ={this.handleInputChange} className='float-right' style={inputForm}/>
                        </div> :
                        <p className='text-danger'> product is out of stock </p>
                    }
                </div>
            </div>
        )
    }
}

const styles = {
   marginBottom10: {
    marginBottom: '10px'
   },
   inputForm: {
    width: '60px',
    marginRight: '10px',
    borderRadius: '3px'
   }
};