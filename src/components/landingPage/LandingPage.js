import React, { useState, useEffect } from "react";
import {
  LandingContainer,
  Container1,
  Container2,
  VidContainer,
} from "./LandingPageCSS";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

function LandingPage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);
  return (
    <LandingContainer>
      <Container1>
        <img
          className="image1"
          src="https://blog.planview.com/wp-content/uploads/2020/02/Project-Planning-and-Delivery.jpg"
          alt="Image1"
        ></img>
        <div className="par1">
          <h2>Making planning easier and more desirable</h2>
        </div>
      </Container1>
      <Container2>
        <img
          className="image2"
          src="https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-1317983109_471583_iaol1a.jpg"
          alt="manimage"
        ></img>
        <div className="par2">
          <h2>Organize and keep track</h2>
        </div>
      </Container2>
      <VidContainer>
        <div className="container_title">
          <h3>How MojoPlanner Works</h3>
        </div>
        <div className="video">
          <video
            controls
            autostart="true"
            autoPlay={true}
            src={require("../../Videos/Screen-Recording-1.mov")}
          />
          <p>Start Creating Projects Of Any Kind</p>
        </div>
        <div className="video">
          <video
            controls
            autostart="true"
            autoPlay={true}
            src={require("../../Videos/Screen-Recording-2.mov")}
          />
          <p>Create Tasks Asigned To Projects</p>
        </div>
        <div className="container_subTitle">
          <Link
            className="link"
            to={localStorage.getItem("token") ? "/projectListings" : "/signup"}
          >
            <h4>Get Started</h4>
          </Link>
        </div>
      </VidContainer>
      <Footer />
    </LandingContainer>
  );
}

export default LandingPage;
