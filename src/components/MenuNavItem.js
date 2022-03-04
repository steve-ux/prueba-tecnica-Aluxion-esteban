import React from "react";
import styled from 'styled-components';

const Img = styled.img`
position: absolute;
left: 50%; `;

function MenuNavItem({ name, img }) {
  return (
    <li className="menu-nav-subitem">
      <h3>{name}</h3>
      <div className="img">
        {img ? <Img src={img} alt=""/> : ''}        
      </div>
    </li>
  );
}

export default MenuNavItem;