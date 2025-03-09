import React, { useEffect, useState } from "react";
import { ExploreImg } from "../assets/images";
import { CaretDown, CaretUp } from "../assets/svg";

const featuredContent = [
  {
    id: 1,
    image: ExploreImg,
    heading: "Explore Fly Fishing",
    para: "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
  },
  {
    id: 2,
    image: ExploreImg,
    heading: "Explore Fly Fishing",
    para: "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
  },
  {
    id: 3,
    image: ExploreImg,
    heading: "Explore Fly Fishing",
    para: "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
  },
];

function FeaturedOptions() {
  const [toggleAccordion, setToggleAccordion] = useState({
    1: true,
    2: false,
    3: false,
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setToggleAccordion({
        1: true,
        2: true,
        3: true,
      });
    } else {
      setToggleAccordion({
        1: true,
        2: false,
        3: false,
      });
    }
  }, [isMobile]);

  return (
    <section className="explore">
      <div className="exploreInner container">
        <h2>Featured options</h2>

        {featuredContent.map((content) => {
          return (
            <div
              key={content.id}
              className={`accordionMain ${
                toggleAccordion[content.id] ? "open" : ""
              }`}
            >
              {!isMobile && (
                <div
                  className="accordionBtn"
                  onClick={() =>
                    setToggleAccordion({
                      ...toggleAccordion,
                      [content.id]: !toggleAccordion[content.id],
                    })
                  }
                >
                  <h5>{content.heading}</h5>{" "}
                  <span>
                    <img
                      src={toggleAccordion[content.id] ? CaretUp : CaretDown}
                      alt="Chevron Down"
                    />
                  </span>
                </div>
              )}

              {toggleAccordion[content.id] && (
                <div className="accordionContent">
                  <div className="accordionImg">
                    <img src={content.image} alt="Explore Image" />
                  </div>
                  <div className="accordionText">
                    <h3>{content.heading}</h3>
                    <p>{content.para}</p>
                    <button className="grayBtn">Learn More</button>
                  </div>
                  <div></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* Add other featured options */}
    </section>
  );
}

export default FeaturedOptions;
