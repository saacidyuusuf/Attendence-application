"use client";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/utills/firebase";
import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import DashBtns from "./DashBtns";

export default function Nav() {
  const [user, loading] = useAuthState(auth);
  const [profile, setprofile] = useState(false);

  if(loading){
    <span class="loader"></span>
  }
 
  return (
    <header className="header">
      <nav>
        <Link href="/" className="logo">
          Logo
        </Link>
        <DashBtns />
        <ul>
          {!user && (
            <Link href="/Auths" className="auth">
              Join now
            </Link>
          )}
          <FiMenu
            onClick={() => setprofile(!profile)}
            className={profile !== true ? "menu" : "MenuOpen"}
          />
          {user && (
            <div>
              <Link href='' className="LinkProfile">
                <Image
                  src={user.photoURL}
                  alt="avator"
                  width={80}
                  height={80}
                  referrerPolicy="no-referrer"
                  className="img"
                  onClick={() => setprofile(!profile)}
                />
              </Link>
              {profile && (
                <>
                  <div className="signoutDisplay">
                  <Link
                    href="/dashboard"
                    className={profile === true ? "displayBlock" : "LinkProfile"}
                  >
                    <Image
                      src={user.photoURL}
                      alt="avator"
                      width={50}
                      height={50}
                      referrerPolicy="no-referrer"
                      className="img"
                      onClick={() => setprofile(!profile)}
                    />
                  </Link>
                    <button onClick={() => {}} className="profilePerson">
                      Profile
                    </button>
{/*                     <DashBtns/>
 */}                    <button onClick={() => auth.signOut()}>Sign out</button>
                  </div>
                </>
              )}
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
}
