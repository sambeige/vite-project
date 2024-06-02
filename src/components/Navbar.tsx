import logo from "../assets/soocc3.png";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10 rounded" src={logo} alt="logo"></img>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaInstagram />
        <FaGithub />
        <FaYoutube />
        <FaSquareXTwitter />
      </div>
    </nav>
  );
};

export default Navbar;
