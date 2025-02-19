import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Home = () => {

    return (
        <div>
            <div className="flex justify-between items-center bg-white p-3 mb-3">
                {/* Left Section - Search Icon */}
                <div className="flex items-center space-x-2">
                    <FaSearch className="text-gray-600" />
                    {/* <input
                            type="text"
                            placeholder="Search..."
                            className="border border-gray-300 p-2 rounded-lg"
                        /> */}
                </div>

                {/* Right Section - User Image, Name, and Dropdown */}
                <div className="flex items-center space-x-2">
                    <img
                        src="images/download.jpg"
                        alt="User"
                        className="rounded-full w-10 h-10"
                    />
                    <div className="flex items-end">
                        <span className="font-semibold px-2">HARSHIT</span>
                        <FaChevronDown className="text-gray-600" />
                    </div>
                </div>
            </div>

            {/* Cards Section */}
            <div className="p-3 grid grid-cols-3 gap-3">
                {[
                    { title: "Total Running Balance", amount: "₹0/-", icon: <FaPlus /> },
                    { title: "Total Points Balance", amount: "0", icon: <FaPlus /> },
                    { title: "Total Points Redeemed", amount: "0", icon: <FaMinus /> },
                    { title: "Dealer Business", amount: "₹0", icon: <FaPlus /> },
                    { title: "Dealer Redeemable", amount: "0", icon: <FaPlus /> },
                    { title: "Sub-Dealer Business", amount: "₹0", icon: <FaPlus /> },
                    { title: "Sub-Dealer Redeemable", amount: "0", icon: <FaPlus /> },
                ].map((card, index) => (
                    <div key={index} className="bg-white p-2 rounded-lg shadow-md flex justify-between items-center">
                        <div>
                            <h3 className="text-xs font-semibold">{card.title}</h3>
                            <p className="text-base font-bold text-green-600">{card.amount}</p>
                        </div>
                        <div className="text-gray-500 text-base">{card.icon}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
