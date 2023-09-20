import React from "react";
import Link from "next/link";
import { BiCoinStack } from "react-icons/bi";

const Classes = () => {
  return (
    <div className="Classes">
      <Link href="/F4">
        <div className="class">
          <h1>Saturday</h1>
          <p>Xisaab</p>
          <h2>
            <BiCoinStack className="dashIconsDash" />
            Class F4
          </h2>
          <br />
        </div>
      </Link>
      <Link href="/F3">
        <div className="class">
          <h1>Sunday</h1>
          <p>Xisaab</p>
          <h2>
            <BiCoinStack className="dashIconsDash" />
            Class F3
          </h2>
          <br />
        </div>
      </Link>
      <Link href="/F2">
        <div className="class">
          <h1>Monday</h1>
          <p>Xisaab</p>
          <h2>
            <BiCoinStack className="dashIconsDash" />
            Class F2
          </h2>
          <br />
        </div>
      </Link>
    </div>
  );
};

export default Classes;
