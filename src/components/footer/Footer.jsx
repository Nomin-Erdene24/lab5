import React from 'react';
import "./Footer.css";
import Uni from "../uni/Uni";
import { Link , withRouter} from 'react-router-dom';

const Footer = (props) => {
    let types = props.prop.map((el) => el.type);
    console.log(props);
    types = Uni(types); 
    let str = "Sonin";
    console.log(props.prop)
    return (
      <div>
       <div className="Footer1">
        <div className="Ontsloh">СҮҮЛД НЭМЭГДСЭН МЭДЭЭ</div>
        <div>
        <div className="buttt">
      <button><Link to="Sonin">Шинэ</Link></button>
      <button><Link to="Sport">Их like тай</Link></button>
      <button><Link to ="News">Их уншсан (хамгийн их)</Link></button>
      </div>
        </div>
        </div>
        <div className="Footer2">
          <div className="eee"><img src="https://www.yolo.mn/img/images/ck/2021/12/13/67L2L6L7MNCXDELVQOEAMUFWSQ-100821-1045892018.jpeg"></img></div>
          <div><p>1.WOLFIZM | - ХӨГЖИЛТЭЙ 21 АСУУЛТ | S2 EP1 <i class="fas fa-share"></i></p>
          <p>1.WOLFIZM | - ХӨГЖИЛТЭЙ 21 АСУУЛТ | S2 EP1 <i class="fas fa-share"></i></p>
          <p>1.WOLFIZM | - ХӨГЖИЛТЭЙ 21 АСУУЛТ | S2 EP1 <i class="fas fa-share"></i></p>
          <p>1.WOLFIZM | - ХӨГЖИЛТЭЙ 21 АСУУЛТ | S2 EP1 <i class="fas fa-share"></i></p>
          <p>1.WOLFIZM | - ХӨГЖИЛТЭЙ 21 АСУУЛТ | S2 EP1 <i class="fas fa-share"></i></p></div>
        </div>
      </div>
    )
}
export default Footer;