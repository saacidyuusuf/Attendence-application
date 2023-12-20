"use-client";
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
import { useState } from "react";
import { useContext } from "react";
import { ContextHaye } from "../context/context";
import Classeslist from "@/utills/classeslist";
import Attendencelist from "@/utills/attendencelist";
/* XMLHttpRequestEventTarget
 */
const DashBtns = () => {
  const [classes, setclasses] = useState(false);
  const [attendence, setattendence] = useState(false);
  const { dataClass } = useContext(ContextHaye);
  return (
    <div className="dash">
      <div className="btnsDash">
        <Link className="link" href="/dashboard">
          <BiHomeAlt className="classesicon" />
          <p>Dashboard</p>
        </Link>
        <div className="Container" onClick={() => setclasses(!classes)}>
          <div className="classesContainer">
            <BiCoinStack className="d " />
            <p>Classes</p>
            <span className="classesLength">
              {dataClass ? dataClass.length : 0}
            </span>
          </div>
          {classes && <Classeslist />}
        </div>

        <div
          className="attendenceContainer"
          onClick={() => setattendence(!attendence)} >
          <BiBookOpen className={`dashIcons att`} />
          <p>Student Attendence</p>
          <span className="attendenceLength">
            {dataClass ? dataClass.length : 0}
          </span>
          {attendence && <Attendencelist />}
        </div>

        <Link className="link" href="/dashboard/timetable/TimeTable">
          <BiSolidDashboard className="dashIcons" />
          <p>TimeTable Period</p>
        </Link>
        <Link className="link" href="/dashboard/attendenceweek/AttendenceWeek">
          <BiCalendarWeek className="dashIcons" />
          <p>Attendence Week</p>
        </Link>
        <Link className="link" href="/dashboard/attendencerate/AttendenceRate">
          <BiBarChart className="dashIcons" />
          <p>Attendence Rate</p>
        </Link>
      </div>
    </div>
  )
};

export default DashBtns;
