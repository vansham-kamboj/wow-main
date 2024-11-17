import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Testimonial = () => {
  useEffect(() => {
    // Dynamically load the script after the component mounts
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div
        className="elfsight-app-4faad2cb-6f93-4621-a09a-c7e924263c53"
        data-elfsight-app-lazy
      ></div>
    </>
  );
};

export default Testimonial;
