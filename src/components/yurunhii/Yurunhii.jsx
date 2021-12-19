import React from "react";
import "./Yurunhii.css";
import Medee from "../medee/medee";
import Footer from "../footer/Footer";
import { Carousel } from '@trendyol-js/react-carousel';
// function leftclick(){
    
// }
// funcioin rightclick(){
// }
const Yurunhii = (props) => {
return (
    <div>

    <div className="headdd">
        <div className="Ontsloh">ОНЦЛОХ МЭДЭЭ</div>
        <div><span className="less"><i class="fas fa-less-than fa-xs"></i></span><span className="greater"><i class="fas fa-greater-than fa-xs"></i></span></div>
    </div>``
    <div className="yurunhii">
    <Carousel show={5} slider={3} swiping={true} className="slider">
        {props.medeelel.map((el)=>(
        <Medee medeelel1={el}></Medee>
        ))}  
    </Carousel>
    </div>
    <div><Footer prop={props.medeelel}/></div>
    </div>
)
}
export default Yurunhii;