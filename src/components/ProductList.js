import React from 'react';
import ProductItem from './ProductItem';
import { getProducts } from '../repository';
import { Link } from 'react-router-dom';

export default class ProductList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        getProducts().then((products) => this.setState({ products }))
    }

    render(){
        const { products } = this.state;
        const { marginRight10 } = styles;
        return (
            <div className='container'>
                <h3 className='card-title'>List of avaible products</h3><hr/>
                {products.map((product, index) => <ProductItem product={product} key={index}/>)}
                <hr/>
                <Link to='/cart'>
                    <button className='btn btn-primary float-right' style={ marginRight10 }>View Cart</button>
                </Link><br></br><br/>
            </div>
        )
    }
}

const styles ={
    marginRight10:{
        marginRight: '10px'
    }
}