import React, { useState } from 'react';
import '../App.css';


import MainMenu from './MainMenu'
import Product from './Products'
import MainProductNav from './MainProductNav'

import table from '../assets/images/black_table.png'
import chair from '../assets/images/black_chair.png'

import openMenuIcon from '../assets/images/menuOpen.svg'

function MainPage() {
    const [isMenuOpen, setMenuOpen] = useState({
        status: false,
        translate: 100
    })      

    function openMenu() {
        setMenuOpen({
            status: true,
            translate: 0
        })        
    }

    function closeMenu() {
        setMenuOpen({
            status: false,
            translate: 100
        })
    }

    const [scrollTable, setScrollTable] = useState(0)
    const [colorTable, setColorTable] = useState('black')
    const [scrollChair, setScrollChair] = useState(100)
    const [colorChair, setColorChair] = useState('white')
    const [fontColorT, setFontColorT] = useState('black')
    const [fontWeightT, setFontWeightT] = useState(900)
    const [fontColorC, setFontColorC] = useState('#cccccc')
    const [fontWeightC, setFontWeightC] = useState(400)

    function showChair() {
        setScrollTable(-100)
        setScrollChair(0)
        setColorChair('black')
        setColorTable('white')
        setFontColorT('#cccccc')
        setFontWeightT(400)
        setFontColorC('black')
        setFontWeightC(900)
    }

    function showTable() {
        setScrollTable(0)
        setScrollChair(100)
        setColorChair('white')
        setColorTable('black')
        setFontColorT('black')
        setFontWeightT(900)
        setFontColorC('#cccccc')
        setFontWeightC(400)
    }

    return (
        <div className="main-page">
            <div className="main-page-content">
                <nav className="main-nav">
                    <p className="logo">mater</p>
                    <div className="menu-btn open" onClick={openMenu}><img src={openMenuIcon} alt=""/></div>
                </nav>
                <Product translateProd={scrollTable} img={table} designer="Jasper K.Thomas" title="Dunes Anthrazite Black"/>
                <Product translateProd={scrollChair} img={chair} designer="Michael W.Dreeben" title="Shell Dining Chair" />                 
                <MainProductNav 
                    showChair={showChair} 
                    showTable={showTable} 
                    colorTable={colorTable} 
                    colorChair={colorChair}
                    fontColorTable={fontColorT}
                    fontWeightTable={fontWeightT}
                    fontWeightChair={fontWeightC}
                    fontColorChair={fontColorC}
                />
            </div> 
            <MainMenu translateProp={isMenuOpen.translate} closeMenu={closeMenu}/>                       
        </div>
    )
}

export default MainPage