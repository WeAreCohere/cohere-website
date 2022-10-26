import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsTwitter, BsLinkedin, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>CONTACT US</h3>
      <p>info@wearecohere.org</p>
      <div className="footer__row">
        <div className="footer__row--items">
          <h3>Kenya Office</h3>
          <p className="paragraph--black">Wamagata Court</p>
          <p className="paragraph--black">Woodley, Nairobi</p>
          <p className="paragraph--black">P.O Box 61716-00200</p>
        </div>
        <div className="footer__row--items">
          <h3>Uganda ffice</h3>
          <p className="paragraph--black">Hanlon Road</p>
          <p className="paragraph--black">Nsambya, Kampala</p>
        </div>
        <div className="footer__row--items">
          <h3>UK Office</h3>
          <p className="paragraph--black">Dean Farm, Oaksey,</p>
          <p className="paragraph--black">Malmesbury, Wilts,</p>
          <p className="paragraph--black">SN16 9SB, UK</p>
        </div>
        <div className="footer__row--socials">
          <h3 className="paragraph--capital">Stay in touch</h3>
          <a
            href="https://wearecohere.us6.list-manage.com/subscribe?u=3e8c7c706f&id=5e20537c9d"
            className="btn btn--white"
          >
            mailing list
          </a>
        </div>
        <div className="footer__row--socials">
          <h3 className="paragraph--capital">Follow Us</h3>
          <div className="footer__icons">
            <BsInstagram className="footer__icons--item" />
            <BsTwitter className="footer__icons--item" />
            <BsLinkedin className="footer__icons--item" />
            <BsFacebook className="footer__icons--item" />
          </div>
        </div>
      </div>

      <div className="footer__registry">
        <p className="paragraph--small">
          Cohere, Registered in. England and Wales, Registered Address: Dean
          Farm, Oaksey, Malmesbury, Wilts, SN16 9SB. UK Charity No: 1153638 /
          Uganda NGO cert. S5914/10385 / Kenya NGO cert.
          OP.218/051/12-0511/8654.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
