import React from "react";

const ListStudent = ({students}) => {
  return (
    <div className="listStudents">
      <h1 className="one">Student Attendence</h1>
      <div className="infoClass">
        <h1>
          Class: <span>{students.Class}</span>
        </h1>
        <h1>
          Subject: <span>Xisaab</span>
        </h1>
        <h1>
          Date:
          <span>
            <input type="date" />
          </span>
        </h1>
      </div>
      <h2 className="total">Total Students: <span>{students.length}</span></h2>
      <div className="tableHaye">
        <div className="tableTop">
          <h1>Id</h1>
          <h1>Name</h1>
        </div>
            {students.map((student) => (
                <div className="tableNames">
                <p>{student.id}:</p>
                <p>{student.name}</p>
                <input type="checkbox" className="check" />
                </div>
            ))}
        </div>
    </div>
  );
};

export default ListStudent;

