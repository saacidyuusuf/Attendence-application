import React from "react";
import Link from "next/link";

const Classes = () => {
  return (
    <div className="Classes">
      <div className="class">
        <Link href='/students'>
        <h1>Class F4</h1>
        <br />
        <p>Lorem ipsum dolor sit amet 
        consectetur adipisicing elit.</p>
        </Link>
      </div>
      <div className="class">
        <h1>Class F3</h1>
        <br />
        <p>Lorem ipsum dolor sit amet 
        consectetur adipisicing elit.</p>
      </div>
      <div className="class">
        <h1>Class F2</h1>
        <br />
        <p>Lorem ipsum dolor sit amet 
        consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default Classes;
