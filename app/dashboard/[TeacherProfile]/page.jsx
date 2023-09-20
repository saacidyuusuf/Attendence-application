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
        <div className="TeacherRoleContact">
          <div className="Teacherinfo1">
            {user && (
              <Image
                src={user.photoURL}
                width={200}
                height={200}
                className="teacherImg"
              />
            )}
            <h1>Name:<span>Cabduqaadir</span></h1>
          </div>
          <div className="teacherinfo2">
            <h1>
             Subject: <span>Xisaab</span>
            </h1>
            <h1>
              Number: <span>615422035</span>
            </h1>
            <h1>
              Gmail: <span>Saacidyuusuf871@gmail.com</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherProfile;


