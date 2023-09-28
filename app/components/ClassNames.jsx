'use client'
import React from "react";
import Link from "next/link";
import { BiCoinStack } from "react-icons/bi";

const ClassNames = ({ classesData }) => {
  return (
    <>
      {classesData.map((classesyada) => (
        <div className="Classes">
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
        </div>
      ))}
    </>
  );
};

export default ClassNames;
