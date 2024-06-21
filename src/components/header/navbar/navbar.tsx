import NavMenu from "./nav-menu";



export default function Navbar() {
  return (
    <div className="flex justify-between">
      <div>
      <nav>
      <NavMenu />

    </nav>
      </div>
      <div>Login menu</div>
    </div>
  );
}
