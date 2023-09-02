import React, { useEffect, useState } from "react";

const Footer = () => {
  const [isFooterSticky, setIsFooterSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.offsetHeight;
      const scrollPosition = window.scrollY;

      setIsFooterSticky(fullHeight - scrollPosition < windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`py-4 border-t-4 border-black flex justify-center items-center ${
        isFooterSticky
          ? "fixed bottom-0 left-0 w-full"
          : "py-4 border-t-4 border-black flex justify-center items-center"
      }`}
    >
      <div className="container mx-auto">
        <p className="text-center">
          &copy; 2023 Adeet Tuladhar. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
