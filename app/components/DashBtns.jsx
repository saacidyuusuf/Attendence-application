import React from "react";
import {
  BiSolidDashboard,
  BiCalendarWeek,
  BiHomeAlt,
  BiBookOpen,
  BiBarChart,
  BiCoinStack,
} from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import Link from "next/link";

const DashBtns = () => {
  return (
    <div className="dash">
      <div className="btnsDash">
        <Link href="/dashboard">
          <button className="buttonDash ">
            <BiHomeAlt className="dashIcons dashIcon" />
            Dashboard
          </button>
        </Link>
        <button className="buttonDash class">
          <BiCoinStack className="dashIcons" />
          Classes
        </button>
        <button className="buttonDash">
          <BiBookOpen className="dashIcons" />
          Student Attendence
        </button>
        <button className="buttonDash">
          <BiSolidDashboard className="dashIcons" />
          TimeTable Period
        </button>
        <button className="buttonDash">
          <BiCalendarWeek className="dashIcons" />
          Attendence Week
        </button>
        <button className="buttonDash">
          <BiBarChart className="dashIcons" />
          Attendence Rate
        </button>
        <Link href='/dashboard/TeacherProfile'>
        <button className="buttonDash">
          <BsFillPersonFill className="dashIcons" />
          Teacher Profile
        </button>
        </Link>
      </div>
    </div>
  );
};

export default DashBtns;
