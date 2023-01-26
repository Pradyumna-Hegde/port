import { FaBars } from "react-icons/fa";
import { useState } from "react";

const MenuBar = ({ links }) => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="landscape:hidden">
      <FaBars onClick={handleMenu} />
      {menu && (
        <div className="w-40 h-60 absolute top-24 right-9 bg-blue-900 text-neutral-50">
          <ul className="p-2 text-center">
            {links.map((link) => (
              <li
                key={link}
                className="border-b-2 border-blue-900 hover:border-b-2 hover:border-neutral-50 p-2"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuBar;
