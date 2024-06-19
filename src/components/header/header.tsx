import Logo from "./logo";
import Navbar from "./navbar";
import Searchbar from "./searchbar";

export default function Header() {
  return (
    <div className="max-w-7xl m-auto border">
      <div className="">
        <div className="flex justify-between">
          <Logo />
          <Searchbar />
          <p>currency</p>
        </div>
        <Navbar />
      </div>
    </div>
  );
}
