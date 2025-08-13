import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg"
import Instagram from "@/assets/social-insta.svg"
import Linkedin from "@/assets/social-linkedin.svg"
import Pins from "@/assets/social-pin.svg"
import Youtube from "@/assets/social-youtube.svg"
export const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative">
        <Image src={logo} alt="Saas Logo" width={40} height={40} />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6"> 
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Updates</a>
          <a href="#">Help</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <Instagram />
          <Linkedin />
          <Pins />
          <Youtube />
        </div>
        <p className="mt-6">&copy; 2024 Your Company, Inc. All rights reserved M's.</p>
      </div>
    </footer>
  );
};
