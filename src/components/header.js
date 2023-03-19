import React from 'react';
import {NavLink} from 'react-router-dom'

export default function Header(){
   
    const mainMenu = ['Reactbootstrap','Mytable']

    return(
        <div>
        <nav>
            <div>
                <ul>
                    {
                        mainMenu.map((data, i)=>(
                            <li key={i} style={{display:'inline', margin:'7px'}} >
                             <NavLink to={`/${data.toLowerCase()}`}
                             style={{fontWeight:'bold', textDecoration:'none'}} >{data}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
        </div>
    )
}