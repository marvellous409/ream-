import { useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
import "chart.js/auto";

import frame from "../../assets/Component 67.png";
import arrow from "../../assets/con (1).png";
import con from "../../assets/coon.png";
import rope from "../../assets/group1.png";
import hope from "../../assets/group.png";
import info from "../../assets/info-circle.png";
import check from "../../assets/check-circle.png";
import iconn from "../../assets/iconn.png";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip as ChartTooltip,
  Legend as ChartLegend,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartTooltip,
  ChartLegend
);

// Stats box data
const boxs = [
  {
    head: "Overall Completion Rate",
    icon: con,
    no: "78%",
    change: "4.6% from last week",
    changeColor: "text-green-500",
  },
  {
    head: "Average Response Time",
    icon: arrow,
    no: "1.4 days",
    change: "0.3 days slower than average",
    changeColor: "text-red-500",
  },
  {
    head: "Active Projects",
    icon: hope,
    no: "24",
    change: "3 new this month",
    changeColor: "text-green-500",
  },
  {
    head: "Team Efficiency",
    icon: rope,
    no: "83%",
    change: "5.2% increase",
    changeColor: "text-green-500",
  },
];

// AI cards data
const cards = [
  {
    title: "Potential Bottleneck",
    text: "Dev team tasks are taking 30% longer than expected.",
    icon: info,
  },
  {
    title: "Performance Improvement",
    text: "Dev team response time improved by 22% this week.",
    icon: check,
  },
  {
    title: "Resource Recommendation",
    text: "Consider allocating more resources to the Marketing team.",
    icon: iconn,
  },
];

// Projects data
const projects = [
  {
    name: "Website Redesign",
    platform: "Asana",
    status: "On Track",
    statusColor: "bg-green-100 text-green-700",
    progress: "w-3/4 bg-green-500",
  },
  {
    name: "Mobile App Development",
    platform: "Jira",
    status: "At Risk",
    statusColor: "bg-yellow-100 text-yellow-700",
    progress: "w-1/2 bg-yellow-400",
  },
  {
    name: "Marketing Campaign",
    platform: "Monday.com",
    status: "Overdue",
    statusColor: "bg-red-100 text-red-700",
    progress: "w-1/4 bg-red-500",
  },
];

const Board = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Bar chart data
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Tasks Completed",
        data: [12, 19, 3, 5, 2, 3, 9],
        backgroundColor: "#8635FC",
        borderRadius: 6,
      },
    ],
  };

  const chartOptions: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Tasks Completed", font: { size: 16 } },
    },
  };

  // Line chart data
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "AI Performance",
        data: [59, 55, 60, 65, 66, 65, 70],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.3,
        fill: false,
      },
    ],
  };

  const lineChartOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "AI Performance Over Time",
        font: { size: 16 },
      },
    },
  };

  // Pie chart data

  const pieOptions: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right", // 👈 moves legend text to the left
        labels: {
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
        bodyFont: {
          size: 20,
          weight: "bold",
        },
      },
    },
  };

  const pieData = {
    datasets: [
      {
        data: [26.9, 20, 34, 20],
        backgroundColor: ["#8884d8", "#82ca9d", "#FF8042", "#FFBB28"],
        borderWidth: 1,
      },
    ],
    labels: ["Design Team", "Dev Team", "Marketing", "Product Road Mapping"],
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden w-full">
      {/* Hamburger button */}
      <button
        className="absolute top-4 left-4 z-50 text-white bg-[#8635FC] transform rotate-90 origin-center p-2 rounded block lg:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-[#2B2B3C] text-white p-4 py-10 fixed top-0 left-0 h-screen w-[80%] max-w-[300px] z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-auto lg:w-80 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <img src={frame} alt="ream icon" className="mt-4 mx-auto py-2.5 px-4" />

        <ul className="space-y-4 mt-5">
          {[
            "Dashboard",
            "Projects",
            "Performance",
            "Analytics",
            "Training Hub",
            "Reports",
            "Settings",
          ].map((item, idx) => (
            <li
              key={idx}
              className={`rounded-[12px] py-2.5 px-2 font-semibold w-full ${
                idx === 0 ? "bg-[#8635FC]" : "bg-[#46465E]"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <p className="font-semibold text-[15px]">Unify. Analyze. Optimize.</p>
          <button className="text-[#8635FC] bg-white font-semibold rounded-[12px] py-2.5 px-2 w-full">
            Upgrade Plan
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col w-full">
        {/* Navbar */}
        <nav className="bg-[#2B2B3C] shadow p-5 w-full">
          <h1 className="text-xl md:text-2xl font-semibold text-white">
            Project Manager Dashboard
          </h1>
        </nav>

        <main className="flex-1 bg-gray-100 border overflow-y-auto md:overflow-x-auto">
          <div className="w-full px-4 max-w-[1400px] mx-auto">
            {/* Overview */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Overview
            </h2>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <p className="text-[#6B7280] text-sm sm:text-base">
                Welcome back, Emily! Here's what's happening across your
                projects.
              </p>
              <button className="w-[150px] text-[#8635FC] rounded-[8px] px-3 py-1 border border-blue-500 text-sm">
                Need help?
              </button>
            </div>

            {/* Stats Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {boxs.map((box, index) => (
                <div
                  key={index}
                  className="w-full px-4 py-4 text-start bg-white shadow-lg rounded-md"
                  style={{ boxShadow: "0 4px 14px #8635FC80" }}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm text-gray-500 font-semibold">
                      {box.head}
                    </h4>
                    <img
                      src={box.icon}
                      alt=""
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <p className="text-3xl text-black font-semibold">{box.no}</p>
                  <p
                    className={`text-sm flex items-center gap-1 ${box.changeColor}`}
                  >
                    {box.change}
                  </p>
                </div>
              ))}
            </div>

            {/* AI Section */}
            <div className="bg-[#C2DDFE] w-full px-4 mt-10 rounded-2xl py-4">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                AI-Powered Insights
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 overflow-x-auto">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white min-w-[300px] sm:w-[400px] h-[60px] flex items-center gap-4 px-2 shadow-md rounded-md"
                  >
                    <img
                      src={card.icon}
                      alt=""
                      className="w-6 h-6 object-contain"
                    />
                    <div className="flex-1 overflow-hidden">
                      <h4 className="font-semibold text-sm sm:text-base truncate">
                        {card.title}
                      </h4>
                      <p className="text-xs text-gray-500 truncate">
                        {card.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Charts Section */}
            <div className="flex flex-col lg:flex-row gap-6 mt-10">
              {/* Bar Chart */}
              <div className="bg-white h-96 flex-1 rounded-2xl py-6 px-4 shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Cross-Platform Performance
                </h3>
                <div className="h-[300px]">
                  <Bar data={chartData} options={chartOptions} />
                </div>
              </div>

              {/* Line Chart */}
              <div className="bg-white h-96 flex-1 rounded-2xl py-6 px-4 shadow-md">
                <h4 className="text-xl font-semibold mb-4">
                  AI Performance Chart
                </h4>
                <div className="h-[300px]">
                  <Line data={lineChartData} options={lineChartOptions} />
                </div>
              </div>
            </div>

            {/* Project Status */}
            <div className="flex flex-col lg:flex-row justify-center gap-10 mt-10">
              {/* Project Status Summary */}
              <div className="w-[700px] h-[280px] bg-white shadow rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4">
                  Project Status Summary
                </h2>
                <div className="space-y-4 overflow-y-auto max-h-[220px] pr-2">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between "
                    >
                      <div className="flex flex-col">
                        <span className="font-medium text-base">
                          {project.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {project.platform}
                        </span>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <span
                          className={`px-2 py-0.5 text-xs font-medium rounded-full ${project.statusColor}`}
                        >
                          {project.status}
                        </span>
                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-2 rounded-full ${project.progress}`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pie Chart */}
              <div className="w-full lg:w-[700px] h-[300px] bg-white shadow rounded-lg flex flex-col p-4">
                {/* Heading */}
                <h4 className="w-full text-left text-xl font-semibold mb-2">
                  Workflow Bottlenecks
                </h4>

                {/* Chart wrapper */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-full h-full max-w-[400px] max-h-[400px]">
                    <Pie
                      options={{ ...pieOptions, maintainAspectRatio: false }}
                      data={pieData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Board;
