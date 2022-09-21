import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import ROUTES from '../../utils/routes';
import './Header.css';
import { VscMenu } from "react-icons/vsc";

function Header() {
  const [isOpen , setIsOpen ] = useState(false);

  return (
   
      <div className={`header ${isOpen ? "active": ''}`}>
        <button className='header-winkel__btn' onClick={() => setIsOpen( !isOpen )}>
        <VscMenu />
        </button>
        <ul className={isOpen? '': "header-menu"}>
          {
           Object.keys(ROUTES).map(route => (
            <li  key={route}>
               <NavLink className="header-menu__link"
               
              
               to={ROUTES[route]}>
                  {route}
              </NavLink>
            </li>
            ))}
       </ul>
      </div>
       
  );
};

export {Header} ;