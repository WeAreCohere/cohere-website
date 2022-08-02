import React from "react";

const Footer = () => {
  // return <footer className="footer">Footer</footer>;
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-1-of-2" style={{ backgroundColor: "orangered" }}>
          <div className="row" style={{ backgroundColor: "blueviolet" }}>
            <div className="">Kenya Office</div>
            <div className="">Uganda Office</div>
            <div className="">UK Office</div>
          </div>
        </div>
        <div className="col-1-of-2" style={{ backgroundColor: "orangered" }}>
          <div className="row" style={{ backgroundColor: "bisque" }}>
            <div className="" style={{ backgroundColor: "aqua" }}>
              Stay in touch
            </div>
            <div className="" style={{ backgroundColor: "indigo" }}>
              Follow Us shshjkakajjsjs
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
