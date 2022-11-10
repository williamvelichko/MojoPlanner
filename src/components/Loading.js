import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";
function Loading(props) {
  return (
    <Box>
      <ClipLoader color={"#FFFFFF"} loading={props.loading} size={200} />
    </Box>
  );
}

export default Loading;

const Box = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform: -webkit-translate(-50%, -50%);
  transform: -moz-translate(-50%, -50%);
  transform: -ms-translate(-50%, -50%);
`;
