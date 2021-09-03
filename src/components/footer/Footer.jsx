import React from "react";
import "./footer.scss";
import {Link} from 'react-router-dom'


export default function Footer() {
  return (
    <div className="footer">
      <h1>Savolingiz bormi?Bizga aloqaga chiqing.</h1>
      <div className="break">
        <div className="row">
          <div className="column">
              <Link style={{textDecoration:"none"}}><span>FAQ</span></Link>
              <Link style={{textDecoration:"none"}} ><span>Investor Relationship</span> </Link>
              <Link style={{textDecoration:"none"}}><span>Ways to Watch</span></Link>
              <Link style={{textDecoration:"none"}}><span>Corporate Information</span></Link>
              </div>
              <div className="column">
              <Link style={{textDecoration:"none"}}><span>Help Centre</span></Link>
              <Link style={{textDecoration:"none"}}><span>Jobs</span> </Link>
              <Link style={{textDecoration:"none"}}><span>Terms of Use</span></Link>
              <Link style={{textDecoration:"none"}}><span>Contact Us</span></Link>
              </div>
       
        </div>
      </div>
      <p>&copy; 2021 Premyera.uz, Tashkent.Barcha huquqlar himoya qilingan</p>
    </div>
  );
}
