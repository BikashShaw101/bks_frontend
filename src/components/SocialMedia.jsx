import React from "react";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube, AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://www.linkedin.com/in/bikash-shaw?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        <div>
          <AiFillLinkedin />
        </div>
      </a>
      <a href="https://youtube.com/@EnbikCognition?si=K9jNIAFE-GfrMVCo">
        <div>
          <AiFillYoutube />
        </div>
      </a>
      <a href="https://x.com/BikashXD?t=LIpD_SQqTYmCXXKHj68gYA&s=08">
        <div>
          <RiTwitterXFill />
        </div>
      </a>
      <a href="https://instagram.com/bikashshaw246?utm_source=qr&igshid=MThlNWY1MzQwNA==">
        <div>
          <BsInstagram />
        </div>
      </a>
      <a href="https://www.facebook.com/vicky.shaw.376258">
        <div>
          <FaFacebookF />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
