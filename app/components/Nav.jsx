"use client";
import {
  BiSolidDashboard,
  BiCalendarWeek,
  BiHomeAlt,
  BiBookOpen,
  BiBarChart,
  BiCoinStack,
} from "react-icons/bi";
import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import DashBtns from "./DashBtns";
import { useUser } from "@supabase/auth-helpers-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import DashBtn from "@/app/components/DashBtns";
import Link from "next/link";
import User from "./User";

export default function Nav() {
  const supabase = createClientComponentClient();
  const user = supabase.auth.getUser();
  const [profile, setProfile] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <header className="header">
      <Link href="/" className="logo">
        Baxar<span className="coder">Coder</span>
      </Link>
      <ul>
        {user && (
          <div>
            {profile && (
              <>
                <div className="signoutDisplay">
                  <button onClick={() => {}} className="profilePerson">
                    Profile
                  </button>
                  <Link href="/dashboard">
                    <button className="buttonDash ">Dashboard</button>
                  </Link>
                  <Link href="/dashboard/timetable/TimeTable">
                    <button className="buttonDash">TimeTable</button>
                  </Link>
                  <Link href="/dashboard/attendenceweek/AttendenceWeek">
                    <button className="buttonDash">Attendence Week</button>
                  </Link>
                  <button onClick={handleSignOut()}>Sign out</button>
                </div>
              </>
            )}
          </div>
        )}

        {!user && (
          <Link href="/dashboard" className="auth">
            join know
          </Link>
        )}
        <FiMenu
          onClick={() => setProfile(!profile)}
          className={profile !== true ? "menu" : "MenuOpen"}
        />
      </ul>
      <User/>
    </header>
  );
}
