import React from "react";

const Footer = () => {
  const productList = ["Hi ", "Hello", "Namaste"];
  const contactList = [
    "9930255087",
    "anupamsinghdurgvanshi@gmail.com",
    "Contact us",
  ];
  const usefullLink = ["Home", "About Us", "Login"];
  return (
    <footer className="text-center text-white backgroundMain lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Final Year Project: Computer Branch
            </h6>
            <p>
              This is blockchain based crowdfunding project from the final year of the Computer branch of Datta Meghe College of Engineering, guided by Prof. Jyoti Gaikwad.
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            {productList.map((el, i) => (
              <p className="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            {usefullLink.map((el, i) => (
              <p className="mb-4" key={i + 1}>
                <a href="#">{el}</a>
              </p>
            ))}
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            {contactList.map((el, i) => (
              <p className="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="backgroundMain p-6 text-center">
        <span>© {new Date().getFullYear()} Copyright:</span>
        <a className="font-semibold " href="https://tailwind-elements.com/">
            CrowdFunding               
        </a>
      </div>
    </footer>
  );
};

export default Footer;
