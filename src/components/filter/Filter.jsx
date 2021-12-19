import React from "react";
import Yurunhii from "../yurunhii/Yurunhii";
const Filter = (property) => {
  let temp = window.location.hash;
  let type = "";
  for (let i = 2; i < temp.length; i++) type += temp[i];
  let filteredNews = [];
  filteredNews = property.prop.filter((el) => {
    if (el.type === type) {
      console.log(el);
      return el;
    }
  });
  //yg 5 shirheg ijil type-iig barij awaad filteredNews-d hadgalaw.
  return (
    <div>
      <Yurunhii medeelel={filteredNews} />
    </div>
  );
};
export default Filter;
