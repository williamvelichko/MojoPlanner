import React, { useState, useEffect } from "react";
import styled from "styled-components";
import image from "../../images/webDevelopmentBackground.ed90dd85.png";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../Loading";
import ClipLoader from "react-spinners/ClipLoader";
import { LandingContainer, Container1, Container2 } from "./LandingPageCSS";

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
    </LandingContainer>
  );
}

export default LandingPage;
