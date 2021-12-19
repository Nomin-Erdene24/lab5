import React from "react";
import "./Medee.css";
import {Link} from "react-router-dom";
// const m=11;
const Medee = (props)=>{
    let link = `/${props.medeelel1.type}/${props.medeelel1.id}`;
return (
<Link to={link}>
    <div className="container">
    <img src={props.medeelel1.zurag} alt="zurag" className="zurag"/>
    <div className="hoverR">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
    </div>
    <div className="ner">{props.medeelel1.ner}</div>
    <h2 className="type">{props.medeelel1.type}</h2>
    <div className="delgerengvi">{props.medeelel1.delgerengvi}</div>
    <div className="icon">
        <div>
        <span><img src="https://www.yolo.mn/stat/app/img/redheart.png" alt="heart" className="heart"/></span>
        <span className="space">11</span>
        <span><img src="https://www.yolo.mn/stat/app/img/eye.png" alt="eye" className="eye"/></span>
        <span>15</span>
        </div>
        <div>Угжигдар</div>
    </div>
    </div>
</Link>
)
}
export default Medee;