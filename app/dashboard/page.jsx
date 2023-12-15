"use client";
import ListStudent from "../components/ListStudent";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Nav from "../components/Nav";
import Classes from "../components/Classes";
import {
  createClientComponentClient,

} from "@supabase/auth-helpers-nextjs";
import User from "../components/User";
/* BsFillDatabaseFill kan class wye,  BsFillGridFill kan wa timatable,
BsBarChart kan rate wye*/

const Dashboard = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const user = supabase.auth.getUser();
/*   const sessions = user?.auth?.getSession();
console.log(user);
*/  
  // Check if the user is logged in
  useEffect(() => {
    if (!user) {
      // The user is not logged in, redirect them to the login page
      router.push("/Auth");
     // console.log(user);
    }
  }, [router, user]);
  /* if (sessions) {
    router.push('/dashboard')
  } */

    return (
      <>
        <Nav/>
        <div className="dashDIsplay">
        <Classes />
        </div>
      </>
    );
};

export default Dashboard;