import MobSearchIcon from "../atoms/MobSearchIcon";
import NavLink from "../molecules/NavLink";
import { NavLinks } from "../../db/data";


const Navbar = () => {


  return (
    <>
      <div className="flex flex-col items-center">
        <MobSearchIcon />
        <div className="flex justify-between w-3/4">
          {NavLinks.map((link, index) => (
            <NavLink
              key={index}
              title={link.title}
              image={link.image}
              newLink={link.new}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar