import React from "react"
import { FaBirthdayCake } from "react-icons/fa";
import { FaSearchDollar } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
export default function Navbar() {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-3">
          <div className="py-3 px-6 rounded-xl border w-full bg-gradient-to-r from-black to-yellow-800">
            <div className="flex justify-between items-center">
              <div className="flex justify-items-center items-center gap-2">
                {/*logo*/}
                <FaBirthdayCake className="w-6 h-6 text-yellow-400 hover:text-cyan-300" />
                {/*search bar*/}
                <div style={{ position: 'relative' }}>
                  <input className="rounded-3xl py-2 px-32 outline-black text-xs w-{200px} pr-32 hidden lg:block md:block"
                    placeholder="select your favourite cake" />
                  <FaSearchDollar className="w-6 h-6 text-line-300 absolute right-2 top-2 transform-translate-y-1/4 hidden text-cyan-800 lg:block md:block" />
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <FaBolt className="w-8 h-8 text-yellow-500 hidden lg-block md-block" />
                <p className="text-sm text-white hidden lg:block md:block" >
                  {" "}
                  You can order your favourite chocolate cake
                  <span className="text-yellow-200"> 20 minutes</span>
                </p>


                <FaCartShopping className="w-8 h-8 text-yellow-400 rounded-full ring-2 ring-yellow-200 p-1 relative hover:text-cyan-500" />
                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-yellow-200 hover:text-amber-400"
                  src="https://media.licdn.com/dms/image/v2/D4D03AQGhLekDwkSSjw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718299417396?e=2147483647&v=beta&t=jMW9xW9mXvVLALaXEmfbGf4s0zTe7sCIXmpjQFFaj7o"
                  alt="user avtar"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}














