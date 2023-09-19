"use client";
import { auth } from "@/utills/firebase";
import ListStudent from "../components/ListStudent";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Nav from "../components/Nav";
import Classes from "../components/Classes";
/* BsFillDatabaseFill kan class wye,  BsFillGridFill kan wa timatable,
BsBarChart kan rate wye*/
const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [mobile, setmobile] = useState(false);
  const route = useRouter();
  if (loading) return <h1 className="center"><span class="loader"></span></h1>;
  if (!user) route.push("/Auths");

  if (user)
    return (
      <>
        <Nav />
        <Classes />
      </>
    );
};

export default Dashboard;
