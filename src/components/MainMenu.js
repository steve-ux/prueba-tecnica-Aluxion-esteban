import React, { useState } from "react";
import MenuNav from './MenuNav';
import sofa from '../assets/images/white_sofa.png';
import closeMenuIcon from '../assets/images/menuClose.svg';
import '../App.css';

function MainMenu({ translateProp, closeMenu }) {
  const [isMenuNavOpen, setMenuNavOpen] = useState({
    display: "none",
  });    
  const [collectionItems] = useState({items: [{name: 'Furniture', img: `${sofa}`, display: 'none'}, {name: 'Lighting'}, {name: 'Accessories'}]})
  const [designItems] = useState({items: []})  
  const [craftmanshipItems] = useState({items: []})  
  const [ethicsItems] = useState({items: []})
  
  function openMenuNav() {
    setMenuNavOpen({
      display: "flex",
    });
  }

  function closeMenuNav() {
    setMenuNavOpen({
      display: "none",
    });
  }  

  return (
    <div
      className="container"
      style={{
        transform: `translate(${translateProp}%)`,
      }}
    >
      <div className="menu">
        <nav className="menu-nav">
          <p className="logo">mater</p>
          <div className="menu-btn close" onClick={closeMenu}><img src={closeMenuIcon} alt=""/></div>
        </nav>
        <div className="menu-options">
          <ul className="menu-nav-1">            
            <MenuNav 
                title="Collection" 
                openMenuNav={openMenuNav} 
                closeMenuNav={closeMenuNav} 
                isMenuNavOpen={isMenuNavOpen} 
                Items={collectionItems.items}
            /> 
            <MenuNav 
                title="Design"                  
                isMenuNavOpen={isMenuNavOpen} 
                Items={designItems.items}
            />
            <MenuNav 
                title="Craftmanship"                  
                isMenuNavOpen={isMenuNavOpen} 
                Items={craftmanshipItems.items}
            />
            <MenuNav 
                title="Ethics"                  
                isMenuNavOpen={isMenuNavOpen} 
                Items={ethicsItems.items}
            />                    
          </ul>          
        </div>        
      </div>
    </div>
  );
}

export default MainMenu;