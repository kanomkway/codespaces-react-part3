import './Shop.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Item(props){
    return (<div key={props.id} onClick={()=>props.callback(props)}>
        <img src={props.img} width={200} height={200} /><br/>
        id: {props.id} <br/>
        name: {props.name}<br/>
        price: {props.price}<br/>
    </div>)
}

// function calCart(total){
//     console.log(total)
//     return (<h2>Total: {total}</h2>)
// }

export default function Shop(){
    const [products, setProducts] = useState([])
    const URL = "https://miniature-space-trout-pjj4vjjpwv76h599-5000.app.github.dev";

    useEffect(()=>{
        axios.get(URL+'/api/products')
        .then(response=>{
            setProducts(response.data)
        })
        .catch(error=>{
            console.log("error")
        })
    },[]);

    const [cart, setCart] = useState([])
    function addCart(item){
        setCart([...cart,{id:item.id,name:item.name,price:item.price,img:item.img}])
    }
    
    const productsList = products.map(item=><Item {...item} callback={addCart} />)
    const cartList = cart.map((item,index)=><li>{item.id} {item.name} {item.price}
    <button onClick={()=>{setCart(cart.filter((i,_index)=>index!=_index))}}>Delete</button> </li>)
    
    let total = 0
    
    for (let i=0;i<cart.length;i++){
        total += cart[i].price
    }
    

    return (<>
    <div className="grid-container">{productsList}</div>
    <h1>Cart</h1>
    <button onClick={()=>setCart([])}>Clear</button>
    <ol>{cartList}</ol>
    <h2>Total {total} baht</h2>
    </>) 
}