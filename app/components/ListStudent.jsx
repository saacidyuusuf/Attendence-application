import React from "react";
import { useState } from "react";

const ListStudent = ({ students, classesData }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [allChecked, setAllChecked] = useState([]);

  const handleAllCheckboxChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    if (checked) {
      const allStudentNames = students.map((student) => student.name);
      setAllChecked(allStudentNames);
    } else {
      setAllChecked([]);
    }
  };
  const handleCheckboxChange = (event) => {
    const checkboxName = event.target.name;
    const checked = event.target.checked;
    if (checked) {
      setAllChecked((prevState) => [...prevState, checkboxName]);
    } else {
      setAllChecked((prevState) =>
        prevState.filter((name) => name !== checkboxName)
      );
    }
  };
  return (
    <div className="listStudents">
      <h1 className="one">Student Attendence</h1>
      <div className="infoClass">
{/*         {classesData.map((classyada) => {
 */}          <>
            <h1>
              Class: <span>{classesData}</span>
            </h1>
            <h1>
              Subject: <span>{classesData}</span>
            </h1>
            <h1>
              Date:
              <span>
                <input type="date" />
              </span>
            </h1>
          </>;
{/*         })}
 */}      </div>

      <h2 className="total">
        Total Students: <span>{students.length}</span>
      </h2>
      <div className="tableHaye">
        <div className="tableTop">
          <h1>Id</h1>
          <h1>Name</h1>
          <h2>Check Them all</h2>
          <input
            checked={isChecked}
            onChange={handleAllCheckboxChange}
            type="checkbox"
            className="radio"
          />
        </div>
        <div className="tableNames">
          {students.map((student) => (
            <>
              <div className="radiotablenameHaye">
                <div className="tablename">
                  <p>{student.id}:</p>
                  <p className="studentNames">{student.name}</p>
                </div>
                <div className="divRadio">
                  <input
                    type="checkbox"
                    checked={allChecked.includes(student.name)}
                    onChange={handleCheckboxChange}
                    name={student.name}
                    className="radio"
                  />
                </div>
              </div>
            </>
          ))}
          <button type="submit" className="submitStudents">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListStudent;
