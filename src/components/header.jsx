import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4">
      <Link to="/" className="">
        <img src="/logo.png" alt="Ascend logo" className="h-8" />
      </Link>
      <div className="flex items-center">
        <SignedOut>
          <Button variant="outline">
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Header;
