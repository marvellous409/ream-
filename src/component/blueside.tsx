import light from "../assets/Frame 1171277211 (1).png";
import vector from "../assets/Vector 3.png";
import Vector1 from "../assets/Vector (12).png";
import Vector2 from "../assets/Vector 4.png";
import apps from "../assets/Frame 1171277211 (2).png";
import box from "../assets/image 8.png";

const BlueSide = () => {
  return (
    <div className="bg-[#16072c]">
      <div className="text-white px-30 py-14 font-sans">
        {/* Header Section with Lightbulb and Title */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <img src={light} alt="Light bulb" className="w-44 h-42 mt-1" />
          <div className="mr-56">
            <h1 className="text-5xl font-semibold leading-tight">
              Why Raem Track?
            </h1>
            <p className="text-xl  text-gray-300 mt-1">
              Let’s Break It Down – Unify. Analyze. Optimize.
            </p>
          </div>
        </div>

        {/* Connect Your Tools Block */}
        <div className="mb-12 mt-20 w-fit text-left ml-11">
          <div className="flex items-start space-x-3">
            <img src={Vector1} alt="star" className="w-5 mt-1" />
            <p className="text-base text-gray-300 font-semibold">
              <span className="text-cyan-400">Connect your tools</span>
              — No more silos. Raem Track <br />
              automatically pulls in all your active projects and <br />
              tasks — zero data migration heaches.da
            </p>
          </div>
        </div>

        {/* Images: Vector (Left) and App Graphic (Right) */}
        <div className="flex justify-center items-start space-x-8 relative">
          <img
            src={vector}
            alt="Vector design"
            className="w-[200px] z-0 ml-35"
          />
          <img
            src={apps}
            alt="Connected apps diagram"
            className="w-[350px] z-10 mt-25"
          />
        </div>
        <p className="mt-16 font-semibold">
          Plug in Asana, Jira, Trello, Monday.com (or all of them).
        </p>
      </div>
      <div className="flex justify-center items-start space-x-8 relative mr-96">
        <img src={Vector1} alt="star" className="w-5 mt-1 mr-1.5" />
        <img src={box} alt="stock" className="w-[353px]" />
        <img src={Vector2} alt="vector" className="w-[184px] mt-29" />
      </div>

      <div className="mt-5  mr-75 w-fit text-center mx-auto">
        <div className="flex items-start justify-center space-x-3">
          <p className="text-base text-gray-300 font-semibold text-left pl-6 text-indent--6">
            <span className="text-cyan-500">
              Visualize Everything in One Dashboard
            </span>
            – Watch as your project <br />
            data transforms into interactive <br />
            dashboards — task status, team workload, <br />
            velocity charts, and more.
          </p>
        </div>
      </div>
      <p className="font-semibold mt-16 text-white">You get a clean, unified view of everything happening — instantly. Less digging, more doing.</p>
    </div>
  );
};

export default BlueSide;
