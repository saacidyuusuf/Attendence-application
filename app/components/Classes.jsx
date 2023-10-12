'use client'
import React, { useEffect, useState } from "react";
import ClassNames from "./ClassNames";
import { useUser } from "@supabase/auth-helpers-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import ListStudent from "./ListStudent";

const Classes = () => {
  const [dataClass, setDataClass] = useState(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();
  const user = useUser();
  console.log(user)

  useEffect(() => {
    async function fetchClasses() {
      try {
/*         const isAdmin = user?.role === "admin";
 */        let query = supabase.from("classes").select("*");
/* 
        if (!isAdmin) {
          query = query.in("id", [2, 3]); // Restrict to rows with IDs 2 and 3
        }
 */
        const { data, error } = await query;
        if (error) {
          console.error("Error fetching classes:", error.message);
          setDataClass(null);
        } else {
          setDataClass(data);
          setLoading(false);
        }
      } catch (err) {
        console.log("Error:", err.message);
      }
    }
    fetchClasses();
  }, [user]);
  return (
    <div className="centerLoading">
      {loading ? (
        <span className="loader"></span>
      ) : dataClass && dataClass.length > 0 ? (
        <>
        <ClassNames classesData={dataClass} />
{/*        <ListStudent  classesData={dataClass}/>
 */}        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Classes;