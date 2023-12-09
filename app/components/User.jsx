"use client";
import Image from "next/image";
import Userimage from "@/public/user.png";
import { useUser } from "@supabase/auth-helpers-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";


const User = ({classes}) => {
  const supabase = createClientComponentClient();
  const user = supabase.auth.getUser();
  const router = useRouter();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };


  return (
    <>
    {classes ?  (
      <div className="userDisplay">
        <Image className="userImage" src={Userimage}></Image>
        <h1 className="username">UserName</h1>
        <h2>
          Subject: <span>Xisaab</span>
        </h2>
        <h2>
          Number: <span>615422035</span>
        </h2>
        <h2>
          Gmail: <span>Saacidyuusuf871@gmail.com</span>
        </h2>
        <div className="signoutUser">
        <button onClick={handleSignOut()}>Sign out</button>
        </div>
      </div>
    ):(
      <></>
    )}

    </>
  );
};

export default User;
