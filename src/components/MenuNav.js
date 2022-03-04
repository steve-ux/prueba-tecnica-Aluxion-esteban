import React from "react";
import MenuNavItem from "./MenuNavItem";
import styled from "styled-components";

const Li = styled.li`
.menu-nav-2 {
  flex-direction: column; 
  margin-bottom: 30px;    
}

.menu-nav-2 h3 {
  font-family: sans-serif;
  font-size: 15px;
  color: #666666;
  margin-bottom: 10px;
  cursor: pointer;
}

.menu-nav-2 h3:hover {
  color: #fff;
  font-weight: bold;
}`

function MenuNav({ title, openMenuNav, closeMenuNav, isMenuNavOpen, Items }) {
  return (
    <Li className="menu-nav-2-list" onMouseEnter={openMenuNav} onMouseLeave={closeMenuNav}>
      <h2>{title}</h2>
      <ul
        className="menu-nav-2"
        style={{ display: `${isMenuNavOpen.display}` }}
      >
        {Items.map((item) => (
          <MenuNavItem key={item.name} name={item.name} img={item.img}/>
        ))}
      </ul>
    </Li>
  );
}

export default MenuNav;