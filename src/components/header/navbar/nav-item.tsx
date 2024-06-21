import Link from 'next/link'

type NavItemProps = {
  item: {
    name: string;
    path: string;
  };
};


const NavItem = ( { item }: NavItemProps) => {
  return (
    <li>
      <Link href={item.path}>
        <p className="hover:underline">{item.name}</p>
      </Link>
    </li>
  );
};

export default NavItem;