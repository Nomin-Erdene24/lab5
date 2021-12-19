import React from 'react';
import "./Huudas.css";

const Huudas = (props) => {
    return (
    <div className="big">
        <div className="NewsTitle"><h2>{props.ner}</h2></div>
        <div className="line"></div>
        <div className="NewsTitle2">
        <div className="Setgvvlch">Сэтгүүлч: О.Номин-Эрдэнэ | YOLO.MN <span>Угжигдар</span></div>
        <div className="LikeShare"> 
            <p className="like">👍Like 111</p>
            <p className="share">Share</p>
        </div>
        </div>
        <div className="dl2">{props.delgerengvi}</div>
        <div className="zurag333"><img src={props.zurag}></img></div>
        <div className="dl">{props.delgerengvi}</div>
        <div className="NewsTitle2">
        <div className="SanalBolgoh">#Санал болгох мэдээ</div>
        <div className="LikeShare"> 
            <p className="like">👍Like 111</p>
            <p className="share">Share</p>
        </div>
        </div>
        <div className="line"></div>
    </div>
    )
}
export default Huudas;