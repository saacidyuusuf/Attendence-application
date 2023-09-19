"use client";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/utills/firebase";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [user, loading] = useAuthState(auth);
  const [profile, setprofile] = useState(false);

  return (
    <header className="header">
      <nav>
        <Link href="/" className="logo">
          Logo
        </Link>
        <ul>
          {!user && (
            <Link href="/Auths" className="auth">
              Join now
            </Link>
          )}
          {user && (
            <div>
              <Link href="/dashboard" className="LinkProfile">
                <Image
                  src={user.photoURL}
                  alt="avator"
                  width={50}
                  height={50}
                  referrerPolicy="no-referrer"
                  className={profile !== true ? "img" : "profileVisible"}
                  onClick={() => setprofile(!profile)}
                />
              </Link>
              {profile && (
                <div className="signoutDisplay">
                  <button onClick={() => {}} className="profilePerson">
                    Profile
                  </button>
                  <button onClick={() => auth.signOut()}>Sign out</button>
                </div>
              )}
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
}
