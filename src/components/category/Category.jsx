import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
const Category = (props) => { 
  let str = `/${props.prop}`; 
  return (
    <div className="cate">
      <Link to={str}>{props.prop}</Link>
    </div>
  );
};
export default Category;