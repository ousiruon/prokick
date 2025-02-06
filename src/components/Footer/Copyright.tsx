import { FaHeart } from "react-icons/fa";
const Copyright = () => {
  return (
    <div className="w-full bg-main text-bg flex items-center justify-between py-4 px-2">
      <div className="flex flex-row gap-2 items-center">
        Crafted by Ousi
        <div className="text-sec">
          <FaHeart size={10} />
        </div>
      </div>
      <div>ProKick © 2025</div>
    </div>
  );
};

export default Copyright;
