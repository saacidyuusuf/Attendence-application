"use client";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/utills/firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const googleProvider = new GoogleAuthProvider();

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  //sign with facebook
  const fbprovider = new FacebookAuthProvider();
  const facebookProvider = async () => {
    try {
      const result = await signInWithPopup(auth, fbprovider);
      console.log(result);
      router.push("/dashboard");
    } catch (err) {
      console.log("Error", err);
    }
  };
  //hdiba aad sign in samaysay inaad router
  //lagu laabto  oo markle la sign in la sameyo
  //buu diidi useefft
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    } else {
      console.log("login");
    }
  }, [user]);

  return (
    <div className="login">
      <h1>Attendence App</h1>
      <span>Sign in With the providers</span>
      <div className="icons">
        <button onClick={GoogleLogin}>
          <FcGoogle className="icon" /> Sign in with Google
        </button>
        <button onClick={facebookProvider}>
          <AiFillFacebook className="icon" />Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
