import React from "react";
import Link from "next/link";
import { BiCoinStack } from "react-icons/bi";
import User from "./User";
import DashBtns from "./DashBtns";

const ClassNames = ({ classesData }) => {
  const currentDate = new Date().toISOString().slice(0, 10);

  //in the && operator we are making sure that classesdata
  //is not null before rendering

  return (
    <>
    <DashBtns/>
      <div className="dashClass">
        <div className="date">
          <h1 className="dashText">Dashboard</h1>
          <div className="current">
            <h3>CurrentDate</h3>
            <input
              type="date"
              className="currentDate"
              value={currentDate}
              disabled
            />
          </div>
        </div>
        <div className="Classes">
          {classesData.map((classesyada) => (
            <Link className="link" href={classesyada.class}>
              <div className="class" key={classesyada.class}>
                <h1>{classesyada.day}</h1>
                <p>{classesyada.subject}</p>
                <h2>
                  <BiCoinStack className="dashIconsDash" />
                  {classesyada.class}
                </h2>
                <br />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClassNames;
