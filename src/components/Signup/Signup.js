import React from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../Firebase/Firebase.init";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [createUserWithEmailAndPassword, user1, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast("Send Verification!");
  };
  let errorElem;
  if (error) {
    return (errorElem = error?.message);
  }
  if (loading) {
    return <Loading />;
  }
  if (user) {
    navigate("/");
  }
  return (
    <div className="form-body">
      <div className="container-main-form " id="container">
        <div className="form-container-section log-in-container">
          <form onSubmit={handleRegister} className="form">
            <h1>Sign Up</h1>
            <SocialLogin />
            <span>or create your account</span>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />{" "}
            <br />
            <button className="login-btn" type="submit">
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
            <span>{errorElem}</span>
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
