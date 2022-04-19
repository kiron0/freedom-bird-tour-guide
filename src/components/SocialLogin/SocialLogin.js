import React from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/Firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, loading1, error1] = useSignInWithGoogle(auth);
  const [signInWithGithub, loading2, error2] = useSignInWithGithub(auth);
  const [signInWithFacebook, loading3, error3] =
    useSignInWithFacebook(auth);
  let errorElem;
  const handleGoogle = () => {
    signInWithGoogle();
  };

  const handleFacebook = () => {
    signInWithFacebook();
  };
  
  const handleGithub = () => {
    signInWithGithub();
    
  };
  if (error1 || error2 || error3) {
    errorElem = (
      <div>
        <p>{error3?.message} {error2?.message} {error1?.message}</p>
      </div>
    );
  }
  if(loading1 || loading2 || loading3){

  }

  return (
    <>
      <div className="social-container">
        <RiFacebookCircleLine
          className="social"
          onClick={handleFacebook}
        ></RiFacebookCircleLine>
        <BsGithub className="social" onClick={handleGithub}></BsGithub>
        <FcGoogle className="social" onClick={handleGoogle}></FcGoogle>
      </div>
      {errorElem}
    </>
  );
};

export default SocialLogin;
