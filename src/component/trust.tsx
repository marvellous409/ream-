import star from "../assets/Frame 528 (6).png";
import video from "../assets/video-conversation-inspired-latin-female-260nw-1971115277 1.png";
import vector from "../assets/Vector.png";
import shirt from "../assets/Frame 532.png";
import design from "../assets/tshirt-design 1.png";
import frame1 from "../assets/Frame 1171277003 (1).png";
import frame2 from "../assets/Frame 1171277003 (2).png";
import frame3 from "../assets/Frame 1171277003 (3).png";
import frame4 from "../assets/Frame 1171277003 (4).png";
import frame5 from "../assets/Frame 1171277003 (5).png";
import frame6 from "../assets/Frame 1171277003.png";
import Number from "../assets/Frame 1171276834.png";
import stick from "../assets/Frame 1171277176.png";
import white from "../assets/frameweek.png";

const frames = [
  {
    Name: "Daniel A.",
    Profession: "Operations Lead, Logistics",
    description:
      "Raem Track helped us cut manual data entry by over 80%. Our operations team used to be buried in spreadsheets every week, just trying to gather and standardize metrics. Now, we get real-time reports without lifting a finger, and we can finally focus on improving processes rather than documenting them.",
    Image: frame2,
    Icon: star,
  },
  {
    Name: "Fatima K.",
    Profession: "Product Manager, SaaS startup",
    description:
      "From the moment we signed up, the experience has been smooth and intuitive. Raem Track’s onboarding flow is friendly and guided, and the platform itself is powerful without being overwhelming. Within the first week, we had automated reports running and insights we previously missed entirely.",
    Image: frame1,
    Icon: star,
  },
  {
    Name: "Joyce E.",
    Profession: "Marketing Analyst",
    description:
      "Before Raem Track, I was spending 5-6 hours per week gathering data across tools and compiling reports. Now I just click a button. I love how it transforms raw data into visually clean dashboards that actually tell a story. It has completely changed how we present marketing results to leadership.",
    Image: frame6,
    Icon: star,
  },
  {
    Name: "Freya Theodor ",
    Profession: "Engineering Lead",
    description:
      "I’ve tried a bunch of tools that promise ‘one dashboard to rule them all,’ and none lived up — until Raem Track. It’s refreshingly simple, genuinely useful, and doesn’t drown you in fluff. Every screen has a purpose. This is how product should be done.",
    Image: frame3,
    Icon: star,
  },
  {
    Name: "Maria Levi",
    Profession: "UX Designer",
    description:
      "Visually, it’s stunning — sleek, calm colors, intuitive layout, no clutter. Functionally, it’s even better. We can finally spot project slowdowns before they derail us. Raem Track turned our chaotic sprints into something manageable.",
    src: frame4,
    Icon: star,
  },
  {
    Name: "David Leo",
    Profession: "DevOps Specialist",
    description:
      "We used to track performance based on feelings and post-its. Now we have real metrics — velocity, load balancing, deadlines — all backed by data. We’re making sharper decisions and our delivery time has improved significantly.",
    src: frame5,
    Icon: star,
  },
];

const Trust = () => {
  return (
    <div className="bg-[#F3F7FE] overflow-hidden">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h3 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
          Trusted by Data-Driven Teams
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-2 text-sm sm:text-base font-semibold max-w-3xl mx-auto text-center">
          <span
            className="leading-relaxed"
            style={{
              backgroundImage:
                "linear-gradient(88deg, #8635FC 0%, #1C1B33 48%, #4EDEFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            See how 500+ teams optimize workflows with Raem Track 5-star rating
            badge
          </span><span><img src={star} alt="star" className="" />   </span>
          
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16 p-4 md:p-0">
        {/* Card 1 */}
        <div className="w-[400px] md:w-[450px] p-4 flex flex-col justify-center h-[340px] items-center  rounded-2xl bg-white mb-8 md:mb-0 shadow-2xl">
          <img src={design} alt="vector" className="w-15 ml-auto" />
          <img src={shirt} alt="video" width="350" className="mt-4 mb-5" />
          <p className="font-semibold text-base text-center">
            David Thomson CEO at (LLC)
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-[410px] md:w-[400px] p-4 flex flex-col justify-center h-[340px] items-center  rounded-2xl bg-white shadow-2xl">
          <img src={vector} alt="vector" className="w-20 ml-auto" />
          <img
            src={video}
            alt="video"
            width="330"
            height="200"
            className="mt-4 mb-5"
          />
          <p className="font-semibold text-base text-center">Margaret Morgan</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] w-full mt-10 px-4 mx-auto">
        {frames.map((item, index) => (
          <div
            key={index}
            className="bg-white   shadow-md p-4 flex flex-col  max-w-96 mx-auto"
          >
            {/* Top section: Image and name */}
            <div className="flex items-center gap-4">
              <img
                src={item.Image || item.src}
                alt={item.Name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-sm">{item.Name}</h3>
                <p className="text-sm text-gray-600">{item.Profession}</p>
                <div>
                  {/* Star rating */}
                  {[...Array(1)].map((_, i) => (
                    <img key={i} src={item.Icon} alt="star" />
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial description */}
            <p className="text-[12px] leading-[172%] font-[500] text-black align-middle font-inter tracking-normal">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mx-auto text-center">
        <h4 className="text-[38px] text-[#636468] mt-10">
          Choose a Plan that Works Best for your Team
        </h4>
        <div className="flex justify-center items-center text-base font-semibold gap-3">
          <span className="text-[#636468]">
            Simple pricing for team of any size
          </span>
          <img src={Number} alt="star" />
        </div>
        <div className="flex justify-center  bg-[#D9C0FE] w-fit mx-auto rounded-[8px] items-center mt-5">
          <button className="bg-blend-color  font-semibold py-2 px-10">
            Monthly
          </button>
          <button className="bg-[#FFFFFF] border-[1px] font-semibold border-gray-300 py-2 px-10 rounded-[8px]">
            Annual
          </button>
        </div>
        <div className="flex justify-center mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* {first pricing card} */}
            <div className="w-[288px] h-[586px] rounded-[14px] border border-gray-400">
              <h4 className="text-[20px] font-[350px]  leading-[100%] tracking-[0%] font-inter mt-14">
                Freebie
              </h4>
              <p className="font-semibold text-sm leading-[100%] capitalize tracking-[0%] font-inter mt-5 text-gray-400">
                For small teams just getting stated{" "}
              </p>
              <h1 className="font-bold text-[60px] leading-[100%] text-gray-600 text-start ml-4 mt-8 tracking-[0%] align-middle font-inter">
                $0
                <span className="font-normal text-[20px] leading-[100%] tracking-[0%] align-middle font-inter">
                  /mo
                </span>
              </h1>
              <button className="px-18 py-3  rounded-[8px] border border-purple-600 mt-5 text-[18px] hover:bg-purple-800 cursor-pointer font-semibold">
                Get Started
              </button>
              <div className="flex items-center gap-2 mt-2 ml-5">
                <img src={stick} alt="stick" className="w-[40px] h-[40px]" />
                <p className="font-normal text-[18px] leading-[100%] tracking-[0%] text-center align-middle font-inter">
                  Up to 2 integrations
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2 ml-5">
                <img src={stick} alt="stick" className="w-[40px] h-[40px]" />
                <p className="font-normal text-[18px] leading-[100%] tracking-[0%] text-center align-middle font-inter">
                  Basic dashboards{" "}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2 ml-5">
                <img src={stick} alt="stick" className="w-[40px] h-[40px]" />
                <p className="font-normal text-[18px] leading-[100%] tracking-[0%] text-center align-middle font-inter">
                  1 custom dashboards
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2 ml-5">
                <img src={stick} alt="stick" className="w-[40px] h-[40px]" />
                <p className="font-normal text-[18px] leading-[100%] tracking-[0%] text-center align-middle font-inter">
                  Limited email notifications
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2 ml-5">
                <img src={stick} alt="stick" className="w-[40px] h-[40px]" />
                <p className="font-normal text-[18px] leading-[100%] tracking-[0%] text-center align-middle font-inter">
                  7-day data history
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2 ml-5">
                <img src={stick} alt="stick" className="w-[40px] h-[40px]" />
                <p className="font-normal text-[18px] leading-[100%] tracking-[0%] text-center align-middle font-inter">
                  Community support
                </p>
              </div>
            </div>
            {/* {second pricing card} */}
            <div className="w-[288px] h-[656px] rounded-[14px]  bg-[#8635FC]">
              <h4 className="text-[20px] font-[350px]  leading-[100%]  text-white tracking-[0%] font-inter mt-15">
                Proffesional
              </h4>
              <p className="text-sm font-normal text-start ml-4 text-white mt-3 font-inter ">
                For growing teams who need deeper insights{" "}
              </p>
              <h1 className="font-bold text-[60px] leading-[100%] text-white text-start ml-4 mt-1 tracking-[0%] align-middle font-inter">
                $29
                <span className="font-normal text-[20px] leading-[100%] tracking-[0%] align-middle font-inter">
                  /month per user
                </span>
              </h1>
              <button className="px-18 py-3  rounded-[8px] border border-white bg-white mt-5 text-[18px] hover:bg-purple-800 cursor-pointer font-semibold">
                Start a free trial
              </button>
              <div className="flex items-center gap-2 mt-2 ml-5">
                <img src={white} alt="stick" className="w-[40px] h-[40px]" />
                <p className="font-normal text-[18px] leading-[100%] tracking-[0%] text-center text-white align-middle font-inter">
                  Unlimited integrations
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2 ml-5">
                <img src={white} alt="stick" className="w-[40px] h-[40px]" />
                <p className="font-normal text-[18px] leading-[100%] tracking-[0%] text-center text-white align-middle font-inter">
                  AI insights & alerts{" "}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2 ml-5">
                <img src={white} alt="stick" className="w-[40px] h-[40px]" />
                <p className="font-normal text-[18px] leading-[100%] tracking-[0%] text-center text-white align-middle font-inter">
                  Team performance metrics
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2 ml-5">
                <img src={white} alt="stick" className="w-[40px] h-[40px]" />
                <p className="font-normal text-[18px] leading-[100%] tracking-[0%] text-center text-white align-middle font-inter">
                  10 custom dashboards
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2 ml-5">
                <img src={white} alt="stick" className="w-[40px] h-[40px]" />
                <p className="font-normal text-[18px] leading-[100%] tracking-[0%] text-white text-center align-middle font-inter">
                  Exportable reports
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2 ml-5">
                <img src={white} alt="stick" className="w-[40px] h-[40px]" />
                <p className="font-normal text-[18px] leading-[100%] tracking-[0%] text-white text-center align-middle font-inter">
                  Priority support
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2 ml-5">
                <img src={white} alt="stick" className="w-[40px] h-[40px]" />
                <p className="font-normal text-[18px] leading-[100%] tracking-[0%] text-white text-center align-middle font-inter">
                  3-month data history
                </p>
              </div>
            </div>
            {/* {third pricing card} */}
            <div className="relative w-[325px] h-[600px] rounded-[14px] border border-purple-300 p-4 overflow-hidden ">
              {/* Top-right full background color fill (diagonal) */}
              <div className="absolute top-[-15px] right-[-110px] w-[150px] h-[150px] bg-purple-500 transform rotate-45 origin-top-right z-0" />

              {/* Card content */}
              <div className="relative z-10">
                <h4 className="text-[20px] font-semibold text-center text-gray-800 font-inter mt-6">
                  Enterprise
                </h4>
                <p className="text-sm font-normal text-start ml-4 text-gray-600 mt-3 font-inter">
                  For large organizations needing advanced control.
                </p>

                <h1 className="text-[22px] font-bold text-center text-gray-800 mt-6 font-inter">
                  Custom quote
                </h1>

                <button className="px-18 py-3  rounded-[8px] border border-purple-600 mt-5 text-[18px] font-semibold hover:bg-purple-800 transition cursor-pointer">
                  Get Started
                </button>

                {/* Features */}
                <div className="mt-6 space-y-4">
                  {[
                    "Unlimited users",
                    "Advanced roles & permissions",
                    "SAML SSO",
                    "Custom onboarding",
                    "Audit logs",
                    "SLA + 24/7 premium support",
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <img
                        src={stick}
                        alt="check"
                        className="w-[38px] h-[38px]"
                      />

                      <p className="font-medium text-[16px] leading-[100%] capitalize  font-inter  text-black">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
