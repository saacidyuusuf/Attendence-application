import React from "react";
import Nav from "@/app/components/Nav";

const TimeTable = () => {
  return (
    <>
      <Nav />
      <div className="TimeTable">
        <h1 className="one">TimeTable</h1>
        <div className="infoTimeTable">
          <h1>
            Class
          </h1>
          <h1>
            Subject
          </h1>
          <h1>
            Time
          </h1>
          <h1>
            Type
          </h1>
        </div>
        <div className="tableHaye">
          <div className="TimetableTop">
            <h1>Saturday</h1>
          </div>
            <div className="bodyTable">
                <p>F4</p>
                <p>Xisaab</p>
                <p>10:15 AM-11:15 Am</p>
                <p>Theory</p>
            </div>
          <div className="TimetableTop">
            <h1>Sunday</h1>
          </div>
            <div className="bodyTable">
                <p>F3</p>
                <p>Xisaab</p>
                <p>9:15 AM-10:15 Am</p>
                <p>Theory</p>
            </div>
          <div className="TimetableTop">
            <h1>Monday</h1>
          </div>
            <div className="bodyTable">
                <p>F2</p>
                <p>Xisaab</p>
                <p>11:15 AM-12:15 Am</p>
                <p>Theory</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default TimeTable;
