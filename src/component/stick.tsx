import { useState, useEffect } from "react";
import Icon from "../assets/icog.png";

const Stick = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phrases = ["QUESTIONS", "WHAT’S ON YOUR MIND", "WHAT YOU SHOULD KNOW"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row mx-auto justify-center items-center gap-2 mt-10 text-center">
        <h2 className="text-3xl font-bold">FREQUENTLY ASKED</h2>
        <div className="h-[40px] overflow-hidden md:text-start relative">
          <div
            className="transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateY(-${index * 40}px)`,
              backgroundImage: "linear-gradient(#8635FC)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {phrases.map((phrase, i) => (
              <div key={i} className="h-[40px] text-4xl font-semibold">
                {phrase}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex p-5 justify-center items-center mt-5 md:p-5 sm:p-5">
        <div className="w-full max-w-4xl text-center">
          <div className="border rounded-[10px] text-start px-5 py-4 mb-2">
            <div
              className="flex items-start justify-between cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <h5 className="text-[15px] font-bold mb-2">
                What is Raem Track?
              </h5>
              <img
                src={Icon}
                alt="toggle icon"
                className="bg-purple-500 rounded-[5px] p-1 w-5 h-5 transition-transform duration-300"
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </div>

            {isOpen && (
              <p className="text-base mt-2 transition-all duration-300 ease-in-out">
                Raem Track is an AI-driven project management analytics tool
                that aggregates tasks and analysis data from multiple project
                management tools like Asana, Trello, Jira, and Monday.com. It
                provides unified insights, performance trends, and actionable
                recommendations to help teams optimize workflow, improve
                efficiency, and make data-driven decisions.
              </p>
            )}
          </div>

          {[
            "Who can use Raem Track?",
            "What kind of insights does Raem Track provide?",
            "Is my data secure?",
            "What are your pricing plans?",
            "Do you offer customer support?",
          ].map((question, index) => (
            <div
              key={index}
              className="border rounded-[10px] text-start px-5 py-4 mt-2"
            >
              <h5 className="text-[15px] font-bold">{question}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stick;
