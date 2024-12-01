import React, { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex  items-center justify-between px-6 py-4 bg-lightgray   fixed top-0  z-20 w-full ">
      <div className="flex items-center ml-2  z-20  ">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg
              className="w-6 h-6 md:hidden z-10 relative"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 md:hidden z-10 relative
            "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>

      <div className="flex space-x-6">
        <Link
          to="/"
          className=" hover:bg-lightgreen rounded-md  hover:text-black transition-colors duration-300 hidden sm:block px-4 py-1  "
        >
          Home
        </Link>
        <Link
          to="/faqs"
          className="hover:bg-black rounded-md  hover:text-white transition-colors duration-300
         hidden sm:block px-4 py-1
        
        cursor-pointer"
        >
          FAQs
        </Link>
        <Link
          to="/belief"
          className="hover:bg-black rounded-md  hover:text-white transition-colors duration-300  cursor-pointer px-4 py-1  
        hidden sm:block
        "
        >
          READ BELIEFS
        </Link>

        <Link
          to="/contact"
          className="hover:bg-black rounded-md  hover:text-white transition-colors duration-300 cursor-pointer px-4 py-1  hidden sm:block"
        >
          CONTACT
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Button className="bg-lightgreen text-black hover:bg-darkgreen">
          Login
        </Button>
        <Button>Register</Button>
      </div>
      {/* <div className="hidden sm:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-gray text-white"></NavigationMenuTrigger>
              <NavigationMenuContent className="p-2">
                <NavigationMenuLink className="text-sm text-black cursor-pointer">
                  Español
                </NavigationMenuLink>
                <NavigationMenuLink className="text-sm text-black cursor-pointer">
                  English
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div> */}

      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }        rounded-sm w-full  md:w-auto fixed top-0  left-0 h-full
        transition-transform duration-500
        ease-in-out bg-slate-800 w-64 p-4

        `}
        style={{ width: "250px" }}
      >
        <div className=" mt-8 flex flex-col space-y-4 p-2 ">
          <a
            href="#"
            className="block text-white hover:text-blue-500 transform transition-transform duration-500 ease-in-out"
            style={{
              transform: isOpen ? "translateX(0)" : "translateX(-200px)",
            }}
          >
            <Link
              to="/faqs"
              className="hover:text-white cursor-pointer text-white"
            >
              FAQ's
            </Link>
          </a>
          <a
            href="#"
            className="block text-white hover:text-blue-500 
            transform transition-transform duration-700 ease-in-out"
            style={{
              transform: isOpen ? "translateX(0)" : "translateX(-200px)",
            }}
          >
            <Link to="/belief" className="hover:text-white cursor-pointer">
              READ BELIEFS
            </Link>
          </a>
          <a
            href="#"
            className="block text-white hover:text-blue-500 
            transform transition-transform duration-700 ease-in-out"
            style={{
              transform: isOpen ? "translateX(0)" : "translateX(-200px)",
            }}
          >
            <Link to="/belief" className="hover:text-white cursor-pointer">
              CONTACT
            </Link>
          </a>
          <a
            href="#"
            className="block text-white hover:text-blue-500 
            transform transition-transform duration-700 ease-in-out"
            style={{
              transform: isOpen ? "translateX(0)" : "translateX(-200px)",
            }}
          >
            <Link to="/belief" className="hover:text-white cursor-pointer">
              DONATIONS
            </Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
