/* pacakge imports ***/
import {useContext, useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid';






/*** my imports */
import { FoodContext } from './contexts/foodContext';
import api from './wc/config';




/** order component */
export const Order = ()=>{
    
   /** use food context */
    const { 
            orders,
            setOrders,
            orderChanged,
            setOrderChanged,
            orderTotal,
            customerAmount,
            setCustomerAmount
    } = useContext(FoodContext);
    

//=================================functions=================================
    const placesorder = ()=>{
        printJS({printable: 'receipt',
         type: 'html', 
         css:'./print.css'
         })
        


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
         const request  =  api.post('orders',data);
               request.then((response)=>{
                setOrders([])
                setOrderChanged(orderChanged+1);
                setCustomerAmount('')
                

               })
        
         }catch(e){
             console.log(e)
         }
    }



    const removeOrder =(e)=> {
        //clicked order item
        const target = e.target;

        //get id of current clicked order
        const orderId = target.getAttribute('order_id');
        
        //return new orders without the recent removed one(the clicked one)
        const newOrders = orders.filter(orderItem=> orderItem.id != orderId)
        
       
        //set new orders 
        setOrders(newOrders)
        
        //let food context know orders ch
        setOrderChanged(orderChanged-1);
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
//======================================================end functions============
     


    /** Order Component */
    return(
        
        <div className="order h-full">
            

            {/* Current order text */}
          
            <div className="order-head">
                <span className='head'>Current Order</span>
                <span className='orderid'>#907653</span>
            </div>
               
         
            
           
            {/* Display orders */}
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


        
            {/* Display Subtotal and Total */}
            <div className="paysum">
                {/* subotal */}
                <div className="paysum-subtotal flex">
                    < div className="first">Subtotal</div>
                    <div className="second">GHS {orderTotal}</div>
                </div>

            {/* divider */}
            <div className='paysum-divider'></div>

                {/* Total */}
                <div className="paysum-total flex">
                    <div className="first">Total</div>
                    <div className="second">GHS {orderTotal}</div>
                </div>
            </div> 



            {/* Enter Amount Customer Paid to change */}
            <div className='order-customer-amount-cont'>
                <input className='order-customer-amount w-full' 
                value={customerAmount}
                type="number" placeholder='Enter Customer Amount'
                onChange={(e)=>setCustomerAmount(e.target.value)}
                />
            </div>



            {/* Print Receipt Button */}
            <div className="orderbtn">
                <button className="orderbtn-btn" 
                onClick={placesorder}
                //onClick={placeOrder}
                >Print Receipt</button>
            </div>



        </div>

    )
}

