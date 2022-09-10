
import {useContext, useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid';
import Image from 'next/image';
import Moment from 'react-moment';
import { FoodContext } from './contexts/foodContext';
import api from './wc/config';

export const OrderBar = ()=>{
    
   
    const {orders,
            setOrders,
            orderChanged,
            setOrderChanged,
            orderTotal,
            setOrderTotal,
    } = useContext(FoodContext);
    

    const placesorder = ()=>{
        printJS({printable: 'receipt',
         type: 'html', 
         css:'./print.css'
         })
         console.log(orders)
    }

    const placeOrder = async()=>{
        let lineItems = [];

        orders.forEach(orderItem=>{
            lineItems.push({product_id:orderItem.id,quantity:orderItem.quantity})
        })

        const data = {
            line_items:lineItems,
            status:'completed'
        }
        console.log('order has been placed')
        try{
        const response = await api.post('orders',data);
        console.log(response)
        }catch(e){
            console.log(e)
        }
    }

    const removeOrder =(e)=> {
        const target = e.target;
        const orderId = target.getAttribute('order_id');

        setOrders(orders.filter(orderItem=> orderId != orderItem.id))
    }
    const changeQuantity = (e)=>{
        const target = e.target;
        const orderId = target.getAttribute('order_id')
        const targetClass = target.getAttribute('class');
        if(targetClass == "order-quantity-minus"){
            const getIndexInOrder = orders.findIndex(order=> orderId == order.id)
            if(getIndexInOrder == -1 ){return}
            const orderQuantity = orders[getIndexInOrder].quantity;
            if(orderQuantity == 1){

                setOrders(orders.filter(orderItem => orderId != orderItem.id))
                setOrderChanged(orderChanged+1)
                return
            }
            orders[getIndexInOrder].quantity -=1;
            
            setOrderChanged(orderChanged+1)

            
        }else{
            const getIndexInOrder = orders.findIndex(order=> orderId == order.id)
            if(getIndexInOrder == -1 ){return}
            orders[getIndexInOrder].quantity +=1;
            setOrderChanged(orderChanged-1)
        }
    }


    return(
        <div className="order">

            <div className="order-current">
                <div className="order-head">Current Order</div>
                {/* <div className="order-date"><Moment format='dddd, Do MMMM, YYYY' date={new Date().getUTCDate}/></div> */}
            </div>
            
           

           <div className="order-items">


              {orders && orders.map((order)=>{



            
              return(<div className="order-item" key={uuid()}>
                   <div className="order-img">
                       <img src={order.image} />
                   </div>

                   <div className="order-text">
                       <div className="order-name">{order.name}</div>
                       <div className="order-price">GHS {order.price}</div>
                   </div>

                   <div className="order-controls">
                       <div className="order-quantity">
                           <button className="order-quantity-minus" 
                           order_id={order.id}
                           onClick={changeQuantity}
                           >-</button>
                           <div className="order-quanity-quantity">{order.quantity}</div>
                           <button className="order-quantity-plus" 
                           order_id={order.id}
                           onClick={changeQuantity}
                           >+</button>
                       </div>
                       <button className="order-remove" order_id={order.id} onClick={removeOrder}>Remove</button>
                   </div>
               </div>)

             })}
           
           
           

           </div>



        <div className="paysum">

            <div className="paysum-subtotal flex">
                < div className="first">Subtotal</div>
                <div className="second">GHS {orderTotal}</div>
            </div>
           
            <div className="paysum-total flex">
             <div className="first">Total</div>
             <div className="second">GHS {orderTotal}</div>
            </div>

        
        </div>  


        <div className="orderbtn">
            <button className="orderbtn-btn" 
            onClick={placesorder}
            //onClick={placeOrder}
            >Place Order</button>
        </div>



        </div>

    )
}

