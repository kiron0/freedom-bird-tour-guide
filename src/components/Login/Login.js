import "./Login.css";
import React, { useRef, useState } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { auth } from "../../Firebase/Firebase.init";
import Loading from "../Shared/Loading/Loading";

const Login = () => {
  const [user] = useAuthState(auth);
  const [signInWithEmailAndPassword, user1, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const location = useLocation();

  const [forEmail, setForEmail] = useState(false);

  let from = location.state?.from?.pathname || "/";

  let errorElement;
  if (loading || sending) {
    return <Loading />;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    if (email !== "") {
      setForEmail(email);
    }
  };

  if (error) {
    errorElement = <p className="text-danger my-3">Error: {error?.message}</p>;
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="form-body">
      <div className="container-main-form " id="container">
        <div className="form-container-section log-in-container">
          <form onSubmit={handleSubmit} className="form">
            <h1>Login</h1>
            <SocialLogin />
            <span>or use your account</span>
            <input required ref={emailRef} type="email" placeholder="Email" />
            <input
              required
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
            <p>
              Forgot Password ?{" "}
              <Link
                className="text-primary text-decoration-none pe-auto"
                to="/login"
                onClick={resetPassword}
              >
                Reset
              </Link>
            </p>
            {errorElement}
            <button className="login-btn" type="submit">
              Log In
            </button>
            <p>
              New Here ?{" "}
              <span>
                <Link className="text-primary" to="/signup">
                  Signup
                </Link>
              </span>
            </p>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
