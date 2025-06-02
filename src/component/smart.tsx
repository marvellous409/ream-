import React, { useRef, useState, useEffect } from "react";
import Arrow from "../assets/arrow_forward_ios_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 (1).svg"; // Replace with your path
import Arrowback from "../assets/arrow_back_ios_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 (1).svg"; // Replace with your path
import icons1 from "../assets/hook.png";
import pictures from "../assets/hook.png";
import icons2 from "../assets/Screenshot (2).png";
import icons3 from "../assets/icon (3).png";
import pictures1 from "../assets/icon (3).png";
import Rocket from "../assets/Frame 1171277215.png";
import Analysis from "../assets/rotate.png";
import pictures3 from "../assets/rotate.png";
import Dashboard from "../assets/icon.png";
import pictures5 from "../assets/icon.png";
import Safety from "../assets/icon (2).png";
import pictures4 from "../assets/icon (2).png";
import Monitor from "../assets/tv.png";
import pictures2 from "../assets/tv.png";
import Tele from "../assets/icon (1).png";
import pictures6 from "../assets/icon (1).png";
import Vector1 from "../assets/Vector (1).png";

// Data for the cards, using the placeholder image URLs for icons
const cards = [
  {
    title: "Unified Project\nData Aggregation",
    shortText: "Unified Project\nData Aggregation",
    color: "#9747FF",
    pictures: pictures, // Use the imported image
    icon: icons1,
    description:
      "Say goodbye to app-hopping. Pulls data from multiple platforms like Asana, Jira, Trello, and Monday.com into a single dashboard.",
  },
  {
    title: "AI-Powered\nPerformance Insights",
    shortText: "Smart Alerts\n& Recommendation",
    color: "#4EDEFF",
    pictures: pictures1,
    icon: icons3,
    description:
      "Detect bottlenecks, predict delays, and receive suggestions to improve efficiency — all automatically.",
  },
  {
    title: "Visual Dashboards\n& Custom Reports",
    shortText: "Smart Risk &\nDelay Monitoring",
    color: "#00FFA3",
    pictures: pictures2,
    icon: Monitor,
    description:
      "Easily share insights with stakeholders or upper management, and make informed decisions faster.",
  },
  {
    title: "Cross-Platform\nSync & Updates",
    shortText: "Real-Time Analytics\n& Reporting",
    color: "#FF6B8B",
    pictures: pictures3,
    icon: Analysis,
    description:
      "All integrated instruments are synchronized in real time, assuring the freshness of the data. Avoid manual refreshes or outdated charts.",
  },
  {
    title: "Smart Alerts &\n Recommendations",
    shortText: "Advanced Data Security\n& Compliance",
    color: "#FFC857",
    pictures: pictures4,
    icon: Safety,
    description:
      "Stay on top of tasks, work overloads, and project drift with proactive, intelligent notifications.",
  },
  {
    title: "Team Performance &\n Productivity Metrics",
    shortText: "Intelligent\nResource Allocation",
    color: "#5E9EFF",
    pictures: pictures5,
    icon: Dashboard,
    description:
      "Drill into team-specific analytics—task completion rates, collaboration scores. Optimize workload and team engagement.",
  },
  {
    title: "Secure Role-Based\nAccess & Permissions",
    shortText: "Smart Alerts\n& Recommendation",
    color: "#1CD4C2",
    pictures: pictures6,
    icon: Tele,
    description:
      "Admin, editor, and viewer roles.Control visibility with ease.Share data safely.",
  },
];

// Main Smart component

const Smart = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4;
  const cardWidth = 280 + 16; // Card width + gap
  const totalPages = cards.length - cardsPerPage + 2;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "right" ? cardWidth : -cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const index = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <div className="bg-[#F3F7FE] overflow-hidden">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start px-4 py-10">
        {/* Left Side: Text & Rocket Image */}
        <div className="flex flex-col items-start  mt-6  md:mt-0">
          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold capitalize text-start"
            style={{
              width: "fit-content",
              backgroundImage: "linear-gradient(90deg, #8635FC, #4EDEFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Your AI Project Analyst. All
            <br /> Your Insights, One Smart <br />
            Assistant
          </h3>

          <p
            className="text-sm sm:text-base capitalize mt-5 text-start"
            style={{
              width: "fit-content",
              backgroundImage: "linear-gradient(90deg, #8635FC, #4EDEFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Connect Asana, Jira, Trello, and more. Let our AI bot
            <br />
            show you what’s slowing you down - and how to fix it.
          </p>

          <button className="border font-semibold border-purple-500 bg-white hover:bg-gray-300 cursor-pointer px-10 py-2 rounded-sm mt-4">
            Watch Demo
          </button>

          <img
            src={Rocket}
            alt="Rocket"
            className="w-[220px] sm:w-[300px] md:w-[220px] lg:w-[350px] mt-5"
          />
        </div>

        {/* Right Side: icons2 Image */}
        <div className="mt-10 md:mt-0 md:ml-8">
          <img
            src={icons2}
            alt="Icons"
            className="w-[200px] sm:w-[250px] md:w-[180px] lg:w-[320px]"
          />
        </div>
      </div>
      <div className="text-center  ">
        <h3 className="text-center text-[70px]  text-gray-400  font-[500px]">
          Features{" "}
          <span
            style={{
              width: "fit-content",
              backgroundImage: "linear-gradient(90deg, #8635FC, #4EDEFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            &
          </span>{" "}
          Benefits
        </h3>
      <div className="flex flex-col items-center justify-center  space-y-4">
        <p
          className="mt-10 text-[40px] text-center font-[500px]"
          style={{
            width: "fit-content",
            backgroundImage: "linear-gradient(90deg, #8635FC, #4EDEFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Unify. Analyze. Optimize.
        </p>
        <p
          className="text-40px font-[400px] text-center"
          style={{
            width: "fit-content",
            backgroundImage: "linear-gradient(90deg, #8635FC, #4EDEFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          AI-driven features that simplify project tracking and boost team
          performance.
        </p>
      </div>
      </div>
      <div className="bg-gray-100 flex items-center mt-10 mx-auto w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl py-4 px-4 font-inter  rounded-2xl border-gray-200">
        <section className="relative w-full mx-auto rounded-2xl">
          {/* Scroll Left */}
          {currentIndex > 0 && (
            <button
              onClick={() => scroll("left")}
              className="absolute -left-5 top-1/2 transform -translate-y-1/2 z-30 bg-black rounded-full shadow-lg p-3 hover:bg-gray-500 transition"
            >
              <img src={Arrowback} alt="Left" className="w-6 h-6" />
            </button>
          )}

          {/* Scroll Right */}
          {currentIndex < totalPages - 0 && (
            <button
              onClick={() => scroll("right")}
              className="absolute -right-5 top-1/2 transform -translate-y-1/2 z-30 bg-black rounded-full shadow-lg p-3 hover:bg-gray-500 transition"
            >
              <img src={Arrow} alt="Right" className="w-6 h-6" />
            </button>
          )}

          {/* Cards */}
          <div className="relative w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto px-2 sm:px-4">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: card.color }}
                  className="group relative flex-shrink-0 snap-start overflow-hidden 
              w-[90%] sm:w-[45%] md:w-[30%] lg:w-[280px]
              h-[300px] sm:h-[320px] md:h-[340px]
              rounded-2xl shadow-xl transition-transform duration-300 transform hover:-translate-y-2"
                >
                  {/* Icon Always Visible */}
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
                    <img
                      src={card.icon}
                      alt=""
                      className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 border-2 border-white p-2 rounded-lg bg-opacity-10 backdrop-blur-md"
                    />
                    <h4 className="text-white text-lg sm:text-xl md:text-2xl mt-6 font-medium">
                      {card.title.split("\n").map((line, idx) => (
                        <React.Fragment key={idx}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </h4>
                  </div>

                  {/* Floating Text on Hover */}
                  <div
                    style={{ backgroundColor: card.color }}
                    className="absolute inset-0 z-20 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex flex-col items-center justify-center text-center"
                  >
                    <img
                      src={card.pictures}
                      alt=""
                      className="absolute top-4 left-4 w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-md p-1 bg-opacity-10 backdrop-blur-md"
                    />

                    <div className="mt-20 w-full text-start">
                      <h4 className="text-base sm:text-lg md:text-xl font-bold text-white">
                        {card.title.split("\n").map((line, idx) => (
                          <React.Fragment key={idx}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-white mt-2">
                        {card.description}
                      </p>
                    </div>

                    <img
                      src={Vector1}
                      alt=""
                      className="mt-10 sm:mt-12 self-start w-6 h-6 sm:w-8 sm:h-8 p-1"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  currentIndex === index
                    ? "bg-purple-600 scale-110"
                    : "bg-gray-300"
                } transition-all duration-300`}
                onClick={() => {
                  if (scrollRef.current) {
                    const scrollTo = index * cardWidth;
                    scrollRef.current.scrollTo({
                      left: scrollTo,
                      behavior: "smooth",
                    });
                  }
                }}
              />
            ))}
          </div>
        </section>

        {/* Custom Styles */}
        <style>{`
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .font-inter {
      font-family: 'Inter', sans-serif;
    }
  `}</style>
      </div>
      <div className="flex justify-center items-center mt-10 mb-10">
        <button className="px-12 py-3 bg-[#8635FC] hover:bg-purple-800 cursor-pointer text-white rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Smart;
