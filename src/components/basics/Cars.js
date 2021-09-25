import React, { useState } from 'react';
import "./style.css";
import Menu from "./Api";
import Menucard from './Menucard';
import Heading from "./Heading";


const Cars = () => {

    const [menuData,setMenuData] = React.useState(Menu);
    const filterItem=(category)=>{
        const updatedList=Menu.filter((curElem)=>{
            return curElem.category===category;
        });
        setMenuData(updatedList);
    };

    return (
        <>
        <Heading/>
        <div className="navbar">
            <div className="btn-group">
                <button className="btn-group__item" onClick={()=> filterItem("sedan")}>Sedan</button>
                <button className="btn-group__item" onClick={()=> filterItem("hatchback")}>Hatchbacks</button>
                <button className="btn-group__item" onClick={()=> filterItem("suv")}>Suv</button>
                <button className="btn-group__item" onClick={()=> filterItem("luxury")}>Luxury</button>
                <button className="btn-group__item" onClick={()=> setMenuData(Menu)}>All cars</button>

            </div>
        </div>
        <Menucard menuData={menuData}/>
        </>
    )
}

export default Cars
