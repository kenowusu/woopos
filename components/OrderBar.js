
import {useState} from 'react';
import {v4 as uuid} from 'uuid';
import Image from 'next/image';
import Moment from 'react-moment';

export const OrderBar = ()=>{
    

    const [orders,setOrders] = useState([
        {name:'waakye food', location:'fufu.png',price:'45'},
        {name:'omo tuo with ab3nkwae', location:'waakye.png',price:'30'},
        {name:'rice with stew and grilled chickedn with some toppings and extra cheese and a lot of shito', location:'waakye.png',price:'45'},
    ])
    return(
        <div className="order">

            <div className="order-current">
                <div className="order-head">Current Order</div>
                <div className="order-date"><Moment format='dddd, Do MMMM, YYYY'>{new Date()}</Moment></div>
            </div>
            
           

           <div className="order-items">


              {orders.map((order)=>{



            
              return(<div className="order-item" key={uuid()}>
                   <div className="order-img">
                       <img src={'/images/'+order.location} />
                   </div>

                   <div className="order-text">
                       <p className="order-name">{order.name}</p>
                       <p className="order-price">GHS {order.price  }</p>
                   </div>

                   <div className="order-controls">
                       <div className="order-quantity">
                           <button className="order-quantity-minus">-</button>
                           <div className="order-quanity-quantity">3</div>
                           <button className="order-quantity-plus">+</button>
                       </div>
                       <button className="order-remove">Remove</button>
                   </div>
               </div>)

             })}
           
           
           

           </div>



        <div className="paysum">

            <div className="paysum-subtotal flex">
                <p className="first">Subtotal</p>
                <p className="second">GHS 50</p>
            </div>
            <div className="paysum-vat flex">
                <p className="first">GHS 0</p>
                <p className="second">GHS 0</p>

            </div>
            <div className="paysum-total flex">
             <p className="first">Total</p>
             <p className="second">GHS 55</p>
            </div>

        
        </div>  


        <div className="orderbtn">
            <button className="orderbtn-btn">Place Order</button>
        </div>



        </div>

    )
}

