import { FaBed, FaHeadphones, FaLaptop, FaMobileScreen, FaPhone, FaSwatchbook } from "react-icons/fa6";
import DeviceItems from "./components/DeviceItems";

function App() {
  const size = 65;
  const strokeWidth = 6;
  var deviceList = [
    {
      percentage: 95,
      size: size,
      strokeWidth: strokeWidth,
      iconData: <FaMobileScreen size={23} />,
      hasDevice: true
    },
    {
      percentage: 54,
      size: size,
      strokeWidth: strokeWidth,
      iconData: <FaLaptop size={23} />,
      hasDevice: true
    },
    {
      percentage: 87,
      size: size,
      strokeWidth: strokeWidth,
      iconData: <FaHeadphones size={23} />,
      hasDevice: true
    },
    {
      percentage: 0,
      size: size,
      strokeWidth: strokeWidth,
      iconData: <div></div>,
      hasDevice: false
    },
  ]
  return (
    <div className="h-screen w-screen p-7 text-white">
      <div className="bg-[#22292f] opacity-95 w-full h-auto rounded-3xl px-8 py-6 grid grid-cols-4 gap-12">
        {
          deviceList.map((item, index) =>
            <DeviceItems key={index} percentage={item.percentage} size={item.size} strokeWidth={item.strokeWidth} iconData={item.iconData} hasDevice={item.hasDevice} />)
        }
      </div>
    </div>
  );
}
export default App;
