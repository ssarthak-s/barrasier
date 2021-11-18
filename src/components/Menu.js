import React from 'react';

const Menu = ({menuOptions, selectedOption})=>{
    const selectedStyles = {
        background: '#808080',
    }
    return (
        <div className='menuContainer'>
        {menuOptions.map((item, index)=>{
            const {label, onClick}  = item;
            return(
            <div className='menuItem' key={`${index}-${label}`} style={selectedOption===index?selectedStyles:{}} onClick={onClick}>{label}</div>
        )})}
        </div>
    )
}

export default Menu;