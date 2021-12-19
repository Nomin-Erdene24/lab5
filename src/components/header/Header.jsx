import React from 'react';
import "./Header.css";
import Category from "../category/Category";
import Uni from "../uni/Uni";
import {Link} from "react-router-dom"
const Header = (props) => {
    let types = props.prop.map((el) => el.type);
    types = Uni(types); 
    return (
        <div className="Header">
        <div>
        <Link to ="/"><img className="Yolo" src="https://www.yolo.mn/img/61aedf5397b76.png" alt=""/></Link>
        <p className="UswurNas">Өсвөр үе, залууст ...</p>
        </div>
        <div className="Shiljih">
        {types.map((el) => (
          <Category prop={el}/>
        ))}
        <span className="yellow"><i onClick = {props.fn} class="fas fa-search search fa-sm"></i></span>
        <span className="blue"><i class="fas fa-sign-out-alt log-out fa-lg"></i></span>
        </div>
        </div>
    )
}
export default Header;