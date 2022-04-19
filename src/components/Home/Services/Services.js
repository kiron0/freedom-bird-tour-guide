import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";
import "./Services.css";
import travel1 from "../../../Assets/Image/01.jpg";
import travel2 from "../../../Assets/Image/02.jpg";
import travel3 from "../../../Assets/Image/04.jpg";

const Services = () => {
  const navigate = useNavigate();
  return (
    <Container id="explore">
      <h2 className="fs-1 text-center">Services</h2>
      <hr />
      <div className="services">
        <div className="text-center">
          <div className="services-box">
            <img src={travel1} alt="" />
            <h3>Half Day Tour</h3>
            <h2>$199</h2>
            <p className="service-info">
              <IoIosCheckmarkCircleOutline className="me-1 text-success fs-5" />{" "}
              Two Places
            </p>
            <p className="service-info">
              <IoIosCloseCircleOutline className="me-1 text-danger fs-5" />{" "}
              Hotel Services
            </p>
            <p className="service-info">
              <IoIosCloseCircleOutline className="me-1 text-danger fs-5" /> Free
              Lunch
            </p>
            <p className="service-info">
              <IoIosCloseCircleOutline className="me-1 text-danger fs-5" /> Free
              Dinner
            </p>
            <div>
              <button
                onClick={() => navigate("/checkout")}
                className=" my-2 book-btn px-3"
              >
                Book
              </button>
            </div>
          </div>
        </div>
        <div className="text-center standard">
          <div className="services-box">
            <img src={travel2} alt="" />
            <h3>One Day Tour</h3>
            <h2>$299</h2>
            <p className="service-info">
              <IoIosCheckmarkCircleOutline className="me-1 text-success fs-5" />{" "}
              Three Places
            </p>
            <p className="service-info">
              <IoIosCloseCircleOutline className="me-1 text-danger fs-5" />{" "}
              Hotel Services
            </p>
            <p className="service-info">
              <IoIosCheckmarkCircleOutline className="me-1 text-success fs-5" />{" "}
              Free Lunch
            </p>
            <p className="service-info">
              <IoIosCloseCircleOutline className="me-1 text-danger fs-5" /> Free
              Dinner
            </p>
            <div>
              <button
                onClick={() => navigate("/checkout")}
                className=" my-2 book-btn px-3"
              >
                Book
              </button>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="services-box">
            <img src={travel3} alt="" />
            <h3>Seven Days Tour</h3>
            <h2>$599</h2>
            <p className="service-info">
              <IoIosCheckmarkCircleOutline className="me-1 text-success fs-5" />{" "}
              Four Places
            </p>
            <p className="service-info">
              <IoIosCheckmarkCircleOutline className="me-1 text-success fs-5" />{" "}
              Hotel Services
            </p>
            <p className="service-info">
              <IoIosCheckmarkCircleOutline className="me-1 text-success fs-5" />{" "}
              Free Lunch
            </p>
            <p className="service-info">
              <IoIosCheckmarkCircleOutline className="me-1 text-success fs-5" />{" "}
              Free Dinner
            </p>
            <div>
              <button
                onClick={() => navigate("/checkout")}
                className=" my-2 book-btn px-3"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;
