import React from 'react';
import MainProductNavItem from './MainProductNavItem';
import '../App.css';

function MainProductNav({ showChair, showTable, colorTable, colorChair, fontWeightTable, fontColorTable, fontWeightChair, fontColorChair }) {    
    return (
        <section className="botton-nav">
            <div className="botton-nav-container">             
                <MainProductNavItem showTable={showTable} showChair={showChair} number="01" title="Dunes Anthrazite Black" color={colorTable} fontWeight={fontWeightTable} fontColor={fontColorTable}/>                           
                <MainProductNavItem showTable={showTable} showChair={showChair} number="02" title="Shell Dining Chair" color={colorChair} fontWeight={fontWeightChair} fontColor={fontColorChair}/>              
            </div>            
        </section>
    )
}

export default MainProductNav