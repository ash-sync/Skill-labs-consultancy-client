import { Button } from "../ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link } from "react-router";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";

function Navbar() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/consultants", label: "Consultants" },
    { href: "/training", label: "Training" },
  ];

  return (
    <header className="border-b ">
      <div className="flex h-16 items-center justify-between gap-4 container mx-auto px-4">
        
        <div className="flex items-center gap-2">
          
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                size="icon"
                variant="ghost"
              >
                <svg
                  className="pointer-events-none"
                  fill="none"
                  height={16}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width={16}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="-translate-y-1.75 origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315"
                    d="M4 12L20 12"
                  />
                  <path
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    d="M4 12H20"
                  />
                  <path
                    className="origin-center translate-y-1.75 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135"
                    d="M4 12H20"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem className="w-full" key={index}>
                      <NavigationMenuLink
                        asChild
                        className="py-1.5 text-muted-foreground  hover:text-primary font-medium"
                      >
                        <Link to={link.href}>{link.label}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                  {user && user.role === "ADMIN" && (
                    <NavigationMenuItem className="w-full">
                      <NavigationMenuLink
                        asChild
                        className="py-1.5 text-muted-foreground hover:text-primary font-medium"
                      >
                        <Link to="/admin/dashboard">Dashboard</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          
          <div>
            <h3 className="text-xl text-brand">
              <span className=" font-black ">SKill</span> Labs
            </h3>
          </div>
        </div>
        <div className="sticky top-0 z-50  flex items-center justify-between ">
          
          <NavigationMenu className=" max-md:hidden ">
            <NavigationMenuList className=" gap-10  ">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem className="w-full" key={index}>
                  <NavigationMenuLink
                    asChild
                    className="h-full justify-center rounded-none border-transparent border-y-2 py-1.5 font-medium text-muted-foreground hover:border-b-primary hover:bg-transparent hover:text-primary data-[active]:border-b-primary data-[active]:bg-transparent! whitespace-nowrap"
                  >
                    <Link to={link.href} className="relative group">
                      {link.label}{" "}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex items-center gap-4">
          {user ? (
            <>
              {user.role === "ADMIN" && (
                <Link
                  to="/admin/dashboard"
                  className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                >
                  Dashboard
                </Link>
              )}
              <button
                onClick={() => dispatch(logout())}
                className="text-sm font-semibold text-slate-500 hover:text-rose-600 transition-colors cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : null}
          <Link to="/consultants">
            <button className="bg-btn-gradient text-white font-semibold px-6 py-2.5 rounded-full shadow-md hover:opacity-90 transition-opacity cursor-pointer">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
