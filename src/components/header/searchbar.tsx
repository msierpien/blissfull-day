import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";


export default function Searchbar() {

  return(
    <div className="flex items-center bg-slate-50 rounded-full px-2 w-1/2">
      <Button variant="ghost" size="icon" className="text-accent-foreground">

      <Search size="24"  />
      </Button>
     <Input type="search" placeholder="Szukaj produktów, artykółów itp."  className=" border-none bg-transparent w-full focus:outline-none focus:ring-0"/>
        
      
    </div>
  )
}