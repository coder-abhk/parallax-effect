import img03 from "./images/03.jpg";
import img02 from "./images/02.jpg";
import img01 from "./images/01.jpg";
import { useEffect, useState } from "react";

export default function ImageSection() {
  const [pageYoffset, setPageYoffset] = useState(0);
  // get pageYoffset
  const scrollEffectHandler = () => setPageYoffset(window.scrollY);
  useEffect(() => {
    // event cycle
    window.addEventListener("scroll", scrollEffectHandler);
    // cleanup cycle
    return () => window.removeEventListener("scroll", scrollEffectHandler);
  }, []);
  return (
    <div className="parallax__container">
      <img
        className="img01"
        src={img01}
        alt="img01"
        style={{
          opacity: 1,
          transform: `translateY(-${pageYoffset * 2}px)`,
        }}
      />
      <img
        className="img02"
        src={img02}
        alt="img02"
        style={{
          opacity: 1,
          transform: `translateY(-${pageYoffset * 1.25}px)`,
        }}
      />

      <img
        className="img03"
        src={img03}
        alt="img03"
        style={{
          opacity: 1,
          transform: `translateY(-${pageYoffset * 0.75}px)`,
        }}
      />
      <p className="parallax__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut, sed
        quo dolorum aspernatur deleniti doloremque? Minus voluptates, numquam
        praesentium non, distinctio sapiente suscipit ullam quia eligendi libero
        fugit harum?
      </p>
    </div>
  );
}
