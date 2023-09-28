"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import DashBtns from "./DashBtns";
import { useUser } from "@supabase/auth-helpers-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function Nav() {
  const supabase = createClientComponentClient()
  const user = supabase.auth.getUser()
  const [profile, setProfile] = useState(false);
  const router = useRouter()
  
  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }
  
  return (
    <header className="header">
      <nav>
        <Link href="/" className="logo">
          Logo
        </Link>
        <DashBtns />
        <ul>
          {user && (
            <div>
              {profile && (
                <>
                  <div className="signoutDisplay">
                    <button onClick={() => {}} className="profilePerson">
                      Profile
                    </button>
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
      </nav>
    </header>
  );
}
