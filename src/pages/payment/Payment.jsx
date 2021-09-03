import React from 'react'
import "./payment.scss";
import Navbar from "../../components/navbar/Navbar";
import { Link } from 'react-router-dom';

export default function Payment() {
    return (
        <div>
        <Navbar/>
        <div className="payment">
          <div className="container">
          <h1>Filmni tomosha qilish uchun to'lov </h1>
        
          <p>Buyurtma raqami: 500000</p>
            <p>Summasi: 3000</p>
            <p>Ushbu to'lovni amalga oshirish uchun quyidagi to'lov turlaridan birini tanlang va Siz to'lov sahifasiga o'tasiz.</p>
              <button style={{backgroundColor:"white"}}>
                  Paynet orqali to'lash
              </button>
              <button style={{backgroundColor:"gray"}}>
                  PAYME orqali to'lash
              </button>
              <button style={{backgroundColor:"royalblue"}}>
                  CLICK orqali to'lash
              </button>
              <button style={{backgroundColor:"green"}}>
                  UPAY orqali to'lash
              </button>
              <button style={{backgroundColor:"orange"}}>
                  VISA orqali to'lash
              </button>
              <span>
                  Barcha savollar bo'yicha <strong>admin@premyera.uz </strong>
                  manziliga murojaat qiling.
                  </span>
        
      </div>
       
        </div>
        </div>
    )
}
