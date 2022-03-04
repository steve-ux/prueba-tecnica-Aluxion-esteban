import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: fixed;
  z-index: -1;
  max-width: 1000px;
  height: 70%;
  transition-duration: 1s;

  display: grid;
  grid-template-columns: 1fr 1fr;

  .main-product-description p {
    position: relative;
    margin-top: 10%;
    font-size: 12px;
    font-family: sans-serif;    
    color: #919191; 
    margin-bottom: 15px;    
}

.main-product-description h2 {
    font-size: 20px;
    font-weight: bolder;
    margin-bottom: 10px;
}

.main-product-description-p {
    width: 70%;    
}

.main-product-description p:last-child {
    font-size: 12px;
    line-height: 1.2em;  
    color: #919191;  
}

.main-product-description button {    
    height: 40px;    
    background: black;
    border: none;
    color: #ffffff;
    padding: 0 10px;

    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.5s;
}

.main-product-description button:hover {
    color: #666666;
}

.main-product-pic {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 10%;
}

.main-product-pic img {    
    max-width: 300px;    
}

@media (max-width: 600px) {
    .main-product {
        grid-template-columns: 1fr;
    } 
}
`;

function product({ img, title, designer, translateProd }) {
  return (
    <Section
      className="main-product"
      style={{
        transform: `translate(0, ${translateProd}%)`,
      }}
    >
      <div className="main-product-description">
        <p>{designer}</p>
        <h2>{title}</h2>
        <div className="main-product-description-p">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
        </div>
        <button>Product Details</button>
      </div>
      <div className="main-product-pic">
        <img src={img} alt="Beautiful black table" />
      </div>
    </Section>
  );
}

export default product;