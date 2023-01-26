import MenuBar from "./menubar";
const NavBar = () => {
  const links = ["Home", "About", "Academics", "Projects", "Contact"];

  return (
    <div className="flex flex-row justify-between items-center bg-blue-900	h-16 text-neutral-50 px-16 portrait:px-4">
      <div className="logo font-semibold text-xl">
        <h1>Pradyumna Hegde</h1>
      </div>
      <div className="nav-links">
        <ul className="flex flex-row justify-between items-center gap-9 text-base portrait:hidden">
          {links.map((link) => (
            <li key={link} className="hover:border-b-2 p-1">
              {link}
            </li>
          ))}
        </ul>
      </div>
      <MenuBar links={links} />
    </div>
  );
};

export default NavBar;
