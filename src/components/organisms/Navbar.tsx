import MobSearchIcon from "../atoms/MobSearchIcon";
import NavLink from "../molecules/NavLink";
import { NavLinks } from "../../db/navLinks";
import Logo from "../atoms/Logo";
import BasicBtn from "../atoms/BasicBtn";

import webImg from "../../assets/images/web.svg";
import burgerImg from "../../assets/images/burger.svg";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:px-14 md:pt-3 md: justify-between ">
        <MobSearchIcon />
        <Logo />
        <div className="flex justify-between w-3/4 md:w-2/6">
          {NavLinks.map((link, index) => (
            <NavLink
              key={index}
              title={link.title}
              image={link.image}
              newLink={link.new}
            />
          ))}
        </div>
        <div className=" hidden md:flex items-center gap-2">
          <BasicBtn title="Become a host" />
          <BasicBtn logo={webImg} />
          <BasicBtn logo={burgerImg} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
