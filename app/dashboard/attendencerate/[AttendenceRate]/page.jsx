import React from "react";
import Nav from "@/app/components/Nav";

const AttendenceRate = () => {
  return (
    <>
      <Nav />
      <div className="attendenceweek">
        <h1>Studdent AttendenceRate</h1>
        <div className="attendenceHaye">
            <h2>Course</h2>
            <h2>Class</h2>
            <h2>Date</h2>
        </div>
        <div className="attendenceInfo">
            <div className="infos">
                <select name="" id="">
                    <option value="">xisaab</option>
                </select>
            </div>
            <div className="infos">
                <select name="" id="">
                    <option value="">F4</option>
                    <option value="">F3</option>
                    <option value="">F2</option>
                </select>
            </div>
            <div className="infos">
                <input type="date" />
            </div>
        </div>
        <button className="generate">Generate</button>
      </div>

      <div className="ratingHaye">
        <h1>Students attendence Rate</h1>
        <div className="rateInfo">
            <p>Id</p>
            <p>Name</p>
            <p>Period</p>
            <p>Present</p>
            <p>Absent</p>
            <p>Percentage</p>
        </div>
        <div className="rateList">
            <p>C1220520</p>
            <p>Cabdimalik Yuusuf Maxmuud</p>
            <p>3</p>
            <p>4</p>
            <p>1</p>
            <p>78%</p>
        </div>
      </div>
    </>
  );
};

export default AttendenceRate;
