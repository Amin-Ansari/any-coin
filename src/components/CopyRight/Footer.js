import React, { memo } from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="copy-right">
        این پروژه توسط
        <a href="https://www.linkedin.com/in/ansariii-amin/">امین انصاری</a>
        ساخته شده است.
      </p>
    </footer>
  );
};

export default memo(Footer);
