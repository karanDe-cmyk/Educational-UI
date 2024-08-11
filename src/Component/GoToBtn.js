import React, { useState, useEffect } from "react";
import "./Style.css";

function GoToBtn() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="header_wrapper">
      {showButton && (<button onClick={scrollToTop} id="scroll-to-top-btn">
        <i className="fa fa-arrow-up"></i>
      </button>)}
    </div>
  );
}

export default GoToBtn;
