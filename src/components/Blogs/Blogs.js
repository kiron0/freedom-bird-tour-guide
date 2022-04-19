import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs" id="home">
      <div className="blogs-info">
        <h2>Frequently Asked Questions</h2>
        <h4>
          * What is the difference between authorization and authentication ?
        </h4>{" "}
        <br />
        <h5 className="ms-3">1. What is Authentication?</h5>
        <br />
        <p className="ms-3">
          <strong>Authentication</strong> is the of validating that user are
          whom they claim to be.This is the first step in any security process
        </p>
        <br />
        <h5 className="ms-3">2. What is Authorization?</h5>
        <br />
        <p className="ms-3">
          <strong>Authorization</strong> in a system security is the process of
          giving the user permission to access a specific resource of function
        </p>
        <p>
          Difference Authorization determines the access of the resource that
          users can use. On the other hand, Authentication determine who the
          users is. Furthermore, Authorization parameter set, implement and
          maintain by the organization, however Authentication can be worked
          through password, one time pins and biometrics information which
          provided by the users. Hence, Authentication is the first and foremost
          steps for identity. But Authorization always take place after
          Authentication. In addition, Authorization isn't visible or changeable
          by the users, but Authentication is visible or partially changeable by
          user. Authentication checks credential besides Authorization checks
          permission. Moreover, both are means of access control of user.
        </p>
        <br />
        <h4>
          * Why are you using firebase? What other options do you have to
          implement authentication?
        </h4>
        <br />
        <p>
          Firebase by Google can be used for the following: Firebase manages all
          data real-time in the database. So, the exchange of data to and fro
          from the database is easy and quick. so that's reason for using
          firebase.
        </p>
        <h5 className="ms-2">
          A lots of option implement to authentication some Example:
        </h5>
        <p className="m-1">
          <span className="fw-bold">Parse:</span>{" "}
          <span>
            {" "}
            Parse is a complete open-source application stack and backend
            framework
          </span>
        </p>
        <p className="m-1">
          <span className="fw-bold">Back4App</span>{" "}
          <span>
            Back4App is an open source, low code, backend alternative to
            Firebase
          </span>{" "}
        </p>
        <p className="m-1">
          <span className="fw-bold">AWS Amplify.</span>{" "}
          <span>
            AWS is a cloud platform by Amazon that provides a set of tools and
            services,
          </span>
        </p>
        <p className="m-1">
          <span className="fw-bold">Kuzzle:</span>{" "}
          <span>
            Kuzzle is another open source alternative to Firebase that helps you
            solve several digital needs such as single sign-on, collaboration,
            messaging, secondary screens, and more.
          </span>
        </p>
        <p className="m-1">
          <span className="fw-bold">NativeScript:</span>{" "}
          <span>
            NativeScript is another open-source platform that you can use to
            create native mobile apps
          </span>
        </p>
        <p className="m-1">
          <span className="fw-bold"> RxDB:</span>{" "}
          <span>
            Reactive Database or RxDB is a real-time NoSQL database for
            JavaScript apps such as progressive web apps,
          </span>
        </p>
        <p className="m-1">
          <span className="fw-bold"> Flutter:</span>{" "}
          <span>
            Flutter is another open-source app development framework but it's
            part of the Google family of software just like Firebase
          </span>{" "}
        </p>
        <br />
        <h4>
          * What other services does firebase provide other than authentication?
        </h4>
        <br />
        <h5 className="ms-3">
          There are many services which Firebase provides, Most useful of them
          are:
        </h5>
        <p>
          <ul>
            <li>Cloud Fire Store</li>
            <li>Cloud Functions</li>
            <li>Hosting</li>
            <li>Cloud Storage</li>
            <li>Google Analytics</li>
            <li>Predictions</li>
            <li>Cloud Messaging</li>
            <li>Dynamic Links</li>
            <li>Remote Config</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
