import Link from 'next/link'

const NavItem = ({ item }) => {
  return (
    <li>
      <Link href={item.path}>
        <p className="hover:underline">{item.name}</p>
      </Link>
    </li>
  );
};

export default NavItem;