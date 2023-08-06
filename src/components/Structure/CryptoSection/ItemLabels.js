import React from "react";
import "./AllCoins.css";

const ItemLabels = (props) => {
  return (
    <div className="name-section">
      <div className="item-name d-none d-md-block">ظرفیت بازار</div>
      <div className="item-name">تغییرات</div>
      <div className="item-name">قیمت</div>
      <div className="item-name">نام توکن</div>
    </div>
  );
};

export default ItemLabels;
