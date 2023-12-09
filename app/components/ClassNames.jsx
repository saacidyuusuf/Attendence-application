"use client";
import React from "react";
import Link from "next/link";
import { BiCoinStack } from "react-icons/bi";

const ClassNames = ({ classesData }) => {
  if (!classesData) {
    return <p>No data available</p>;
  }
  
  return (
    <>
      <div className="dashClass">
      <h1 className="dashText">Dashboard</h1>
        <div className="Classes">
          {classesData.map((classesyada) => (
            <Link href={classesyada.class}>
              <div className="class">
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
