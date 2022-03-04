import React from "react";
import styled from "styled-components";

const Div = styled.div`
.show-product h3 {
  font-size: 10px;
  margin-top: 30%; 
  color: #ccc;   
}

.show-product h2 {
  font-family: sans-serif;
  font-size: 10px;
  line-height: 1.3em;
  color: #ccc;
  margin-top: 0;    
}

.show-product-mark {    
  width: 100%;
  height: 3px;  
  transition-duration: 0.5s;
}`;

function MainProductNavItem({ showTable, showChair, number, title, color, fontColor, fontWeight }) {
  return (
    <Div className="show-product" onClick={number === "01" ? showTable : showChair}>
      <div className="show-product-mark" style={{background: `${color}`}}></div>
      <h3>{number}</h3>
      <h2 style={{fontWeight: `${fontWeight}`, color: `${fontColor}`}}>{title}</h2>
    </Div>
  );
}

export default MainProductNavItem;