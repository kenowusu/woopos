import { useContext } from "react";
import Image from "next/image"
import { FoodContext } from "./contexts/foodContext"

export const ReceiptPreview = ()=>{
    const {orders} = useContext(FoodContext);

    const date = new Date();
	const current_date =   date.getDate()  +"-" +(date.getMonth()+1) + "-" + date.getFullYear();
    const  current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
    return(
        <div>
            <div className="receipt" id="receipt">
                
                <div className="receipt-datetime">
                    <div>{current_date}</div>
                    <div>{current_time}</div>
                </div>
              
                <div className="receipt-header">
                    <div className="receipt-img-cont dotted">
                        <div className="receipt-img">
                            <Image src="/images/basilic_logo.jpg" width={263} height={133}/>
                        </div>
                        
                    </div>

                    <div className="receipt-receipt dotted">RECEIPT</div>
                </div>

                <div>
                    <table className=""style={{width:'100%'}}>
                        <thead className="receipt-head">

                        <tr className="">
                            <th>Qty</th>
                            <th>Item Description</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        
                        <tbody className="receipt-body">
                          
                            {orders && orders.map(order=>{
                              return(
<tr>
                                <td>{order.quantity}x</td>
                                <td>{order.name}</td>
                                <td className="receipt-price">GHS {order.price}</td>
                                </tr>

                              )  

                            })}
               
                         </tbody>  
                       </table>
                        
                      <div className="dot-up  dotted receipt-total-cont">

                      <div className="flex-divide">
                                    <div className="receipt-total">Total</div>
                                    <div className="receipt-total">GHS 50.00</div>
                                </div>
                                <div className="flex-divide">
                                    <div className="receipt-cash">Cash</div>
                                    <div className="receipt-cash">GHS 100.00</div>
                                </div>
                                <div className="flex-divide">
                                    <div className="receipt-change">Change</div>
                                    <div className="receipt-change"> GHS 50.00</div>
                                </div>
               
                      </div>
                      <div className="receipt-thankyou">
                        Thank You
                      </div>
                        
                    
                </div>

            </div>
        </div>
    )
}



