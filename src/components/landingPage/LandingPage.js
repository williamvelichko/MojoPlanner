import React from "react";
import styled from "styled-components";

function LandingPage() {
  return (
    <LandingContainer>
      {/* <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwcUf_mIfhnF8j2V46V-VQNcbCLu55im5bDf_EkEZ_NpTyTB4SVFm--RuyCgWk6se_Xi8&usqp=CAU"
        alt="manimage"
      ></img> */}
      <h2>Keep Projects/Events Organized</h2>
      <h4>Plan Organize </h4>
    </LandingContainer>
  );
}

export default LandingPage;

const LandingContainer = styled.div`
  margin: 0;
  img {
    filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg)
      brightness(95%) contrast(80%);
  }
`;
