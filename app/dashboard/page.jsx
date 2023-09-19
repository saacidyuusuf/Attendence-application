"use client";
import { auth } from "@/utills/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import Nav from "../components/Nav";
import Classes from "../components/Classes";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();
  if (loading) return <h1>laoding...</h1>;
  if (!user) route.push("/Auths");

  if (user)
    return (
      <>
        <Nav />
        <div className="dash">
          <h1>Welcome to dashboard {user.displayName}</h1>
        </div>
        <Classes/>
      </>
    );
};

export default Dashboard;
