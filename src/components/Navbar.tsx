import Logo from "../components/Logo.tsx";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-center py-6">
      <h1 className="text-2xl">&lt;</h1>
      <div className="m-8 flex flex-shrink-0 items-center">
        <Logo />
      </div>
      <div className="ml-0 m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://instagram.com/samuuool" target="blank">
          <FaInstagram />
        </a>
        <a href="https://github.com/soocc" target="blank">
          <FaGithub />
        </a>
        <a href="youtube.com/sooccc" target="blank">
          <FaYoutube />
        </a>
        <a href="https://twitter.com/samoocc" target="blank">
          <FaSquareXTwitter />
        </a>
      </div>
      <h1 className="text-2xl">/ &gt;</h1>
    </nav>
  );
};

export default Navbar;
