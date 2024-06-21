import NavItem from "./nav-item";
const menuItems = [
  { name: "Zaproszenia", path: "/products/zaproszenia-slublne" },
  { name: "Karty menu", path: "/products/menu" },
  { name: "Karty imienne ", path: "/products/place-cards" },

];

const NavMenu = () => {
  return (
    <ul className="flex gap-4 list-none m-0 p-0">
      {menuItems.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default NavMenu;
