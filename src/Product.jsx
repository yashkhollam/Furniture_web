import React,{Component} from "react";

//'React': is a default import.Default imports are exported with 'export default <classname>' .There is only one default export.
//  {} :is used for a named import. Member imports that are exported with 'export <function/props/class>'.
//        There can be multiple member exports
                    //ref to the json.json data file


import JSON from './db.json';
import ProductList from './ProductList';

class Product extends Component{
    constructor(){
        super();
        this.state={                                  //state
                               //props
            product:JSON,                                //asign the json.json file to the n prop
        }
    }


    render(){
        return(
            <div>
                
                <ProductList prodlist={this.state.product}/>  {/* pass data from .json file to ProductList component prop*/ }
            </div>
        )
    }
}

export default Product;