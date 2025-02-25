// Sidebar.js
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { LuUsersRound } from "react-icons/lu";
import { MdOutlinePayment, MdOutlineFileCopy, MdOutlinePolicy, MdOutlinePayments } from "react-icons/md";
import { PiCertificateDuotone } from "react-icons/pi";
import { LuFilePenLine, LuFileSearch2 } from "react-icons/lu";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const menuItems = [
        {
            name: "Admin Master",
            icon: <CgMenuLeft />,
            subItems: [""]
        },
        {
            name: "Customer Enrollment",
            icon: <LuUsersRound />,
            subItems: [""]
        },
        {
            name: "Payment & Accounts",
            icon: <MdOutlinePayment />,
            subItems: [""]
        },
        {
            name: "MIS Reports",
            icon: <MdOutlineFileCopy />,
            subItems: [""]
        },
        {
            name: "Certificates",
            icon: <PiCertificateDuotone />,
            subItems: [""]
        },
        {
            name: "Comprehensive Policy",
            icon: <LuFilePenLine />,
            subItems: [
                { name: "Fresh Policy", path: "/fresh-policy" },
                { name: "Renewal Policy", path: "/renewal-policy" },
                { name: "PI Photo Upload", path: "/fresh-policy" },
                { name: "Corporate Sale", path: "/fresh-policy" },
                { name: "Manual Renewal Policy", path: "/fresh-policy" },
            ]
        },
        {
            name: "Policy Endorsement",
            icon: <LuFileSearch2 />,
            subItems: [""]
        },
        {
            name: "Policy Claims",
            icon: <MdOutlinePolicy />,
            subItems: [""]
        },
        {
            name: "Payin Slip & Payment",
            icon: <MdOutlinePayments />,
            subItems: [""]
        },
    ];

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    }

    return (
        <aside className="w-48 bg-gray-800 text-white">
            {/* <h1 className="text-xl font-bold mb-6">MOTORRANTY</h1> */}
            <img src="images/logo.png" alt="logo" className="pt-3 pl-3 w-[110px]" />
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index} className="py-2 px-3 text-xs hover:bg-gray-700 cursor-pointer">
                        <div className="flex items-center justify-between" onClick={() => item.subItems && toggleDropdown(index)}>
                            <span className="flex items-center">
                                {item.icon} <span className="ml-2">{item.name}</span>
                            </span>
                            {item.subItems && <span>{openDropdown === index ? <FaChevronUp /> : <FaChevronDown />}</span>}
                        </div>
                        {item.subItems && openDropdown === index && (
                            <ul className="ml-6 mt-2 space-y-2">
                                {item.subItems.map((subItem, subIndex) => (
                                    <li key={subIndex} className="text-xs py-1 px-2 hover:bg-gray-600">
                                        <Link to={subItem.path}>{subItem.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
