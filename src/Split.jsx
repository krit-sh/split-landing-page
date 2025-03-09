import { useEffect, useState } from "react";
import "./App.css";

function Split() {
  const [active, setActive] = useState(""); // State to handle click on mobile

  useEffect(() => {
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
    const container = document.querySelector(".container");

    if (left && right && container) {
      left.addEventListener("mouseenter", () => container.classList.add("hover-left"));
      left.addEventListener("mouseleave", () => container.classList.remove("hover-left"));

      right.addEventListener("mouseenter", () => container.classList.add("hover-right"));
      right.addEventListener("mouseleave", () => container.classList.remove("hover-right"));
    }

    return () => {
      if (left && right) {
        left.removeEventListener("mouseenter", () => container.classList.add("hover-left"));
        left.removeEventListener("mouseleave", () => container.classList.remove("hover-left"));

        right.removeEventListener("mouseenter", () => container.classList.add("hover-right"));
        right.removeEventListener("mouseleave", () => container.classList.remove("hover-right"));
      }
    };
  }, []);

  return (
    <div className={`container ${active}`}>
      <div className="split left" onClick={() => setActive("active-left")}>
        <h1>PlayStation 5</h1>
        <p>Experience the next-gen gaming with ultra-fast SSD & stunning visuals.</p>
        <a href="#" className="btn">Buy Now</a>
      </div>
      <div className="split right" onClick={() => setActive("active-right")}>
        <h1>Xbox Series X</h1>
        <p>Unleash the power of true 4K gaming with the fastest console ever.</p>
        <a href="#" className="btn">Buy Now</a>
      </div>
    </div>
  );
}

export default Split;
