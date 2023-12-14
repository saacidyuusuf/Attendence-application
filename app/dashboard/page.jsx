"use client";
import ListStudent from "../components/ListStudent";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Classes from "../components/Classes";
import {
  createClientComponentClient,
  useSession,
} from "@supabase/auth-helpers-nextjs";
import User from "../components/User";
import { useUser } from "@supabase/auth-helpers-react";


const Dashboard = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  /*   const user = supabase.auth.getUser();
   */
  const user = useUser();

  /* useEffect(() => {
    async function fetchClasses() {
      try {
        let query = supabase.from("classes").select("*");

        const { data, error } = await query;
        console.log("Data:", data);
        console.log("Error:", error);
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
  }, [user]); */

  // Checking if the user is logged in
/*   useEffect(() => {
    if (!user) {
      // The user is not logged in,
      //redirect them to the login page
      router.push("/Auth");
      // console.log(user);
    }
  }, [user]); */

  return (
    <>
      <Nav />
      <div className="dashDIsplay">
        <Classes />
      </div>
    </>
  );
};

export default Dashboard;

/* 



 /*   const sessions = user?.auth?.getSession();
console.log(user);
*/
/* if (sessions) {
    router.push('/dashboard')
  }  */
/*   const handleClassesFetched = () => {
    setIsClassesFetched(true);
  }; */
