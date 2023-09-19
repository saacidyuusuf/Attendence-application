"use client";

import Nav from "@/app/components/Nav";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/utills/firebase";

const TeacherProfile = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <>
      <Nav />
      <div className="Teacher">
        <div className="Teacherinfo1">
          {user && (
            <Image
              src={user.photoURL}
              width={200}
              height={200}
              className="teacherImg"
            />
          )}
          <h1>Cabduqaadir</h1>
        </div>
        <div className="TeacherRoleContact">
          <h1>
            Subject He teaches: <span>Xisaab</span>
          </h1>
          <h1>
            Number: <span>615422035</span>
          </h1>
          <h1>
            Gmail: <span>Saacidyuusuf871@gmail.com</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default TeacherProfile;
