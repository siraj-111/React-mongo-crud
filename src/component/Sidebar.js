import React from 'react'
import { Menu } from './Menu'
import {NavLink} from 'react-router-dom'
import '../App.css'
export const Sidebar = () => {
  return (
    <div style={{marginTop:'18vh'}}>

        {
        Menu.map(item=>
          <div  key={item.id} className="mt-4 text-lg-start p-3 mx-4  active-link">
            <NavLink to={"/"+item.title} style={{textDecoration:'none'}}>
            <item.icon color="#fff" size="34"/><strong className="text-light mx-2">{item.title}</strong>
            </NavLink>
            </div>  

          )
          
        }
    </div>
  )
}
