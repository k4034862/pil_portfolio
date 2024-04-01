import React from "react";
import "./HtmlCss.css"; // CSS 파일을 import

function HtmlCss() {
  return (
    <div className="container">
      <div className="topbar">Topbar</div>
      <div className="sidebar">Sidebar</div>
      <div className="content">Content</div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default HtmlCss;
