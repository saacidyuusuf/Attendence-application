import React from "react";
import Link from "next/link";

const Classes = () => {
  return (
    <div className="Classes">
        <Link href="/F4">
      <div className="class">
          <h1>Class F4</h1>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
        </Link>
        <Link href="/F3">
      <div className="class">
          <h1>Class F3</h1>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
        </Link>
        <Link href="/F2">
      <div className="class">
          <h1>Class F2</h1>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
        </Link>
    </div>
  );
};

export default Classes;
