import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="flex items-center justify-center  border boder-lightgray border-t-2  bg-gray  ">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl text-white">
          <div className="p-4 w-full  ">
            <h2 className="text-xl font-bold mb-4 ">Product</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="block  hover:text-lightgreen transition duration-300 "
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block  hover:text-lightgreen transition duration-300 "
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block  hover:text-lightgreen transition duration-300 "
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block  hover:text-lightgreen transition duration-300 "
                >
                  Status
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block  hover:text-lightgreen transition duration-300 "
                >
                  Release Notes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block  hover:text-lightgreen transition duration-300 "
                >
                  Feature Request
                </a>
              </li>
            </ul>
          </div>
          {/* OFFICE */}
          <div className="p-4 w-full ">
            <h2 className="text-xl font-bold mb-4 ">For English</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="block  hover:text-lightgreen transition duration-300 "
                >
                  3693 NW 8th Ave, Okeechobee, FL 34972
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block  hover:text-lightgreen transition duration-300 "
                >
                  (863) 623-4220 (Main Office)
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block  hover:text-lightgreen transition duration-300 "
                >
                  contact@openingdoorstolife.org
                </a>
              </li>
            </ul>
            <h2 className="text-xl font-bold mb-4 ">PARA </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="block  hover:text-lightgreen transition duration-300 "
                >
                  (863) 623-4220 (Main Office)
                </a>
              </li>{" "}
              <li>
                <a
                  href="#"
                  className="block  hover:text-lightgreen transition duration-300 "
                >
                  contact@openingdoorstolife.org
                </a>
              </li>
            </ul>
          </div>
          {/* Language */}
          <div className="p-4 w-full ">
            <h2 className="text-xl font-bold mb-4 ">Office</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="block  hover:text-lightgreen transition duration-300 "
                >
                  3693 NW 8th Ave, Okeechobee, FL 34972
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block  hover:text-lightgreen transition duration-300 "
                >
                  (863) 623-4220 (Main Office)
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block  hover:text-lightgreen transition duration-300 "
                >
                  contact@openingdoorstolife.org
                </a>
              </li>
            </ul>
            <h2 className="text-xl font-bold mb-4 ">LINKS</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="block  hover:text-lightgreen transition duration-300 "
                >
                  POLICES
                </a>
              </li>
            </ul>
          </div>

          {/* Legal section */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
