import React from "react";

const Footer = () => {
  return (
    <nav className=" mt-20  flex items-center justify-between ">
      <div className="flex items-center justify-center gap-2 text-sm  font-jetbrains ">
        <a
          href="https://linkedin.com/in/naufal-yasir"
          className="hover:underline"
        >
          lets connect on linkedin
        </a>{" "}
        /
        <a href="https://github.com/efilonaru" className="hover:underline">
          collab with me on github
        </a>
      </div>
    </nav>
  );
};

export default Footer;
