import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
// 
import PWS from "../assets/PMS.svg";
import Control from "../assets/control-room.svg";
import Dashboard from "../assets/dashboard.svg";
import Elements from "../assets/elements.svg";
import Settings from "../assets/settings.svg";
import Notifications from "../assets/notifications.svg";
import { TemplateContext } from "../context/context";


export default function Navbar() {
  const { CloseSidebar } = useContext(TemplateContext)
  
  return (
    <div className="mt-5 p">
      <div className="div-iconss">
        <BiChevronLeft className="iconss" onClick={CloseSidebar}  />
      </div>
      <div className="text-center">
        <img src={PWS} className="react-logo" alt="react logo" />
      </div>

      <ul className="list-group list-group-flush mt-5">

        <li className="list-group-item bg-none text-white text-center border-0 pb-3">
          <Link to="/" className="link" >
            <img src={Control} className="imgLink" alt="Control Icon" />
          </Link>
        </li>

        <li className="list-group-item bg-none text-white text-center border-0 py-3">
          <Link to="/" className="link" >
            <img src={Dashboard} className="imgLink" alt="Control Icon" />
          </Link>
        </li>

        <li className="list-group-item bg-none text-white text-center border-0 py-3">
          <Link to="/" className="link" >
              <img src={Elements} className="imgLink" alt="Control Icon" />
          </Link>
        </li>

        <li className="list-group-item bg-none text-center border-0 py-3">
          <Link to="/" className=" link" >
              <img src={Settings} className="imgLink" alt="Control Icon" />
          </Link>
        </li>

        <li className="list-group-item bg-none text-center border-0 py-3">
          <Link to="/" className=" link" >
              <img src={Notifications} className="imgLink" alt="Control Icon" />
          </Link>
        </li>

      </ul>
    </div>
  );
}
