import { useState } from "react";
// import { bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Thi
import frame from "../../assets/Component 67.png";
import arrow from "../../assets/con (1).png";
import con from "../../assets/coon.png";
import rope from "../../assets/group1.png";
import hope from "../../assets/group.png";
import info from "../../assets/info-circle.png";
import check from "../../assets/check-circle.png";
import iconn from "../../assets/iconn.png";

const boxs = [
  {
    head: "Overall Completion Rate",
    icon: con,
    icon1: con,
    no: "78%",
    color: " 4.6% from last week",
  },
  {
    head: "Average Response Time",
    icon: arrow,
    icon1: arrow,
    no: "1.4 days",
    color: " 0.3 days slower than average",
  },
  {
    head: "Active Projects",
    icon: hope,
    icon1: con,
    no: "24",
    color: "3 new this month",
  },
  {
    head: "Team Efficiency",
    icon: rope,
    icon1: con,
    no: "83%",
    color: " 5.2% increase",
  },
];

const cards = [
  {
    tittle: "Potential Bottleneck",
    text: " Dev team tasks are taking 30% longer than expected.",
    icon: info,
  },
  {
    tittle: "Performance Improvement",
    text: "Dev team response time improved by 22% this week",
    icon: check,
  },
  {
    tittle: "Resource Recommendation",
    text: "Consider allocating more resources to the Marketing team",
    icon: iconn,
  },
];

const Board = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden w-full">

      {/* Hamburger button for mobile */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 left-4 z-50 text-white bg-[#8635FC] transform rotate-90 origin-center p-2 rounded block"
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-[#2B2B3C] text-white p-4  fixed lg:static z-40 w-64 py-10 transition-all duration-300 ${
          isSidebarOpen ? "block " : "hidden"
        }`}
      >
        <img
          src={frame}
          alt="ream icon"
          className="mt-4   mx-auto py-2.5 px-4"
        />
        <ul className="space-y-4 text-start mt-5">
          <li className="rounded-[12px] py-2.5 px-2 font-semibold bg-[#8635FC] w-full">
            Dashboard
          </li>
          <li className="rounded-[12px] py-2.5 px-2 font-semibold bg-[#46465E] w-full">
            Projects
          </li>
          <li className="rounded-[12px] py-2.5 px-2 font-semibold bg-[#46465E] w-full">
            Team Performance
          </li>
          <li className="rounded-[12px] py-2.5 px-2 font-semibold bg-[#46465E] w-full">
            Analytics
          </li>
          <li className="rounded-[12px] py-2.5 px-2 font-semibold bg-[#46465E] w-full">
            Training Hub
          </li>
          <li className="rounded-[12px] py-2.5 px-2 font-semibold bg-[#46465E] w-full">
            Reports
          </li>
          <li className="rounded-[12px] py-2.5 px-2 font-semibold bg-[#46465E] w-full">
            Settings
          </li>
        </ul>
        <div className=" mt-10 text-center">
          <p className="font-semibold text-[15px]">Unify. Analyze. Optimize.</p>
          <button className="text-[#8635FC] bg-[#FFFFFF] font-semibold rounded-[12px] py-2.5 px-2 w-full">
            Upgrade Plan
          </button>
        </div>
      </aside>

      {/* Main content area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "lg:ml-0 md:mx-auto" : "lg-items-center"
        }`}
      >
        {/* Navbar */}
        <nav className="bg-[#2B2B3C] shadow p-5">
          <h1
            className={`text-xl md:text-2xl font-semibold text-white pl-2 md:pl-5 transition-all duration-300 ${
              isSidebarOpen ? "lg:ml-0" : "ml-12"
            }`}
          >
            Project Manager Dashboard
          </h1>
        </nav>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 md:overflow-hidden">
        <div className="px-4 w-full max-w-screen-xl mx-auto">

            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Overview
            </h2>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <p className="text-[#6B7280] text-sm sm:text-base">
                Welcome back, Emily! Here's what's happening across your
                projects.
              </p>
              <button className="text-[#8635FC] rounded-[8px] px-3 py-1 border border-blue-500 text-sm">
                Need help?
              </button>
            </div>

            {/* Stats Boxes */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {boxs.map((box, index) => (
                <div
                  key={index}
                  className="w-full h-full px-3 py-2 text-start bg-white shadow-lg rounded-md"
                  style={{ boxShadow: "0 4px 14px #8635FC80" }}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm sm:text-base text-gray-500 font-semibold">
                      {box.head}
                    </h4>
                    <img
                      src={box.icon}
                      alt=""
                      className={`object-contain ${
                        index === 0
                          ? "w-6 h-6 py-1.5 lg:text-base bg-green-300 rounded-full"
                          : index === 1
                          ? "w-6 h-6 py-1.5 bg-red-300 rounded-full"
                          : index === 2
                          ? "w-7 h-7 py-2 bg-[#D3B4FF] rounded-full"
                          : "w-7 h-7 py-2 bg-[#9BAFC5] rounded-full"
                      }`}
                    />
                  </div>
                  <p className="text-3xl  text-black font-semibold">{box.no}</p>
                  <div className="flex items-center justify-between">
                    <p
                      className={`text-sm sm:text-base flex items-center gap-1 ${
                        index === 1 ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      <img
                        src={box.icon1}
                        alt=""
                        className="w-6 h-6 p-1.5 object-contain"
                      />
                      {box.color}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Section */}
            <div className="bg-[#C2DDFE] w-full mt-10 rounded-2xl py-4 px-4">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                AI-Powered Insights
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 overflow-x-auto whitespace-nowrap">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white min-w-[300px]  sm:w-[400px] h-[60px] flex items-center gap-4 px-2 shadow-md rounded-md shrink-0"
                  >
                    <img
                      src={card.icon}
                      alt=""
                      className="w-6 h-6 object-contain"
                    />
                    <div className="flex-1 overflow-hidden">
                      <h4 className="font-semibold text-sm sm:text-base truncate">
                        {card.tittle}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-gray-500 truncate">
                        {card.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Board;
