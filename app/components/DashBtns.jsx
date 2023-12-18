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
/* XMLHttpRequestEventTarget
 */
const DashBtns = () => {
  const [clicked, setclicked] = useState(false);

  return (
    <div className="dash">
      <div className="btnsDash">
        <Link className="link" href="/dashboard">
          <BiHomeAlt className="d" />
          <p>Dashboard</p>
        </Link>
        <div className={`classesWrapper ${clicked ? 'clicked' : ''}`} onClick={() => setclicked(!clicked)}>
            <BiCoinStack className="d classesicon" />
            <p>Classes</p>
          {clicked && (
            <div className="showclasses">
              <Link href="/F4">
                <span>Class F4</span>
              </Link>
              <span>Class F3</span>
              <span>Class F2</span>
            </div>
          )}
        </div>
        <Link
          className="link"
          href="/dashboard/StudentAttendence/studentAttendence"
        >
          <BiBookOpen className="dashIcons att" />
          <p>Student Attendence</p>
        </Link>
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
  );
};

export default DashBtns;
