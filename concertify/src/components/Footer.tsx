import React from "react";
import Logo from "../assets/logo.svg";
import Phone from "../assets/phone.svg";
import Mail from "../assets/mail.svg";
import Location from "../assets/location.svg";

const Footer = () => {
  return (
    <>
      <footer className="border-t-2 border-purple-800 font-light">
        <div className="grid grid-cols-2">
          <img src={Logo} className="py-5" alt="logo" />
          <p className="col-start-1 col-span-1 text-left pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            eos soluta exercitationem accusantium nostrum cum voluptates, harum
            fugiat sed commodi ducimus deserunt aliquid iure sequi vel quos odio
            explicabo excepturi?
          </p>
        </div>
        <div className="flex justify-between pb-6 ">
          <div className="text-purple-800 flex ">
            <img
              src={Phone}
              className="phone_icon stroke-purple-800 pr-2"
              alt="phone_icon"
            />
            <a href="tel:004528513171">310-437-2766</a>
          </div>
          <div className="text-purple-800 flex">
            <img
              src={Mail}
              className="phone_icon stroke-purple-800 pr-2"
              alt="phone_icon"
            />
            <a href="tel:004528513171">help@concertify.com</a>
          </div>
          <div className="text-purple-800 flex">
            <img
              src={Location}
              className="phone_icon stroke-purple-800 pr-2"
              alt="phone_icon"
            />
            <a href="tel:004528513171">
              Meinungsgade 29, Nørrebro, Copenhagen Denmark
            </a>
          </div>
        </div>
        <section className="flex border-t-2 border-gray-300 justify-between pt-4">
          <div className="flex gap-4">
            <a href="#">About us</a>
            <a href="#">Contact</a>
            <a href="#">Account</a>
            <a href="#">Privacy policy</a>
            <a href="#">Terms of use</a>
          </div>
          <div>
            <p>@ 2023, All Rights Reserved</p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
