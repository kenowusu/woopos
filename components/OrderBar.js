
import {useState} from 'react';
import Image from 'next/image';
const OrderBar = ()=>{

    const [orders,setOrders] = useState([
        {name:'waakye food', location:'fufu.jpeg',price:'45'},
        {name:'omo tuo with ab3nkwae', location:'tuo.jpg',price:'30'},
        {name:'rice with stew and grilled chickedn', location:'waakye.jpg',price:'45'},
    ])
    return(
        <div className="order">

            <div className="order-current">
                <div className="order-head">Current Order</div>
                <div className="order-date">Sunday, 28 Oct, 2021</div>
            </div>
            
           

           <div className="order-items">


              {orders.map((order)=>{



            
              return(<div className="order-item">
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

export default OrderBar;