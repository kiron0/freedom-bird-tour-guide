import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../../Firebase/Firebase.init";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating] = useUpdateProfile(auth);

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate(from, { replace: true });
    toast("Send Verification!");
  };
  let errorElem;
  if (error) {
    return (errorElem = error?.message);
  }
  if (loading || updating) {
    return <Loading />;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="form-body">
      <PageTitle title="Sign Up"></PageTitle>
      <div className="container-main-form " id="container">
        <div className="form-container-section log-in-container">
          <form onSubmit={handleRegister} className="form">
            <h1>Sign Up</h1>
            <SocialLogin />
            {errorElem}
            <span>or create your account</span>
            <input
              ref={nameRef}
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              ref={emailRef}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              ref={passwordRef}
              type="password"
              name="password"
              placeholder="Password"
              required
            />{" "}
            <Form.Group className="checkbox mb-3" controlId="formBasicCheckbox">
              <Form.Check
                onClick={() => setAgree(!agree)}
                className={agree ? " text-primary" : " text-secondary"}
                type="checkbox"
                label="I agree to the terms and conditions"
              />
            </Form.Group>
            <button disabled={!agree} className="login-btn" type="submit">
              Sign up
            </button>
            <p>
              Already have an account ?{" "}
              <span>
                <Link className="text-primary" to="/login">
                  Login
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

export default Register;
