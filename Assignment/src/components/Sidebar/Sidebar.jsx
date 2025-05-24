import { FaCalendarAlt } from 'react-icons/fa';
import { RiArrowUpDownFill } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { FaSquarePlus } from "react-icons/fa6";
import { MdDashboardCustomize } from "react-icons/md";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div class="general">
                <h3>General</h3>
                <ul>
                    <li className="dashboard"> <MdDashboardCustomize /> <a href='' style={{ color: "#3734A9" }}>Dashboard</a> </li>
                    <li> <RiArrowUpDownFill /> <a href=''>History</a> </li>
                    <li> <FaCalendarAlt /> <a href=''>Calendar</a> </li>
                    <li> <FaSquarePlus /> <a href=''>Appointments</a> </li>
                    <li> <GoGraph /> <a href=''>Statatics</a> </li>
                </ul>
            </div>
            <div className="Tools">
                <h3>Tools</h3>
                <ul>
                    <li> <IoChatbubbleEllipsesSharp /> <a href=''>Chat</a> </li>
                    <li> <IoIosCall /> <a href=''>Support</a> </li>
                </ul>
            </div>
            <div className="settings">
                <ul>
                    <li> <IoSettingsOutline /> <a href=''>Settings</a> </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;