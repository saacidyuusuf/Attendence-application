"use client";

import Nav from "@/app/components/Nav";
import Image from "next/image";
import { useUser } from "@supabase/auth-helpers-react";

const TeacherProfile = () => {
  const user = useUser();
  return (
    <>
      <Nav />
      <div className="Teacher">
        <div className="TeacherRoleContact">
          <div className="Teacherinfo1">
            {user && (
              <Image
                src={user.identities}
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


