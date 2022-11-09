import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
function Loading(props) {
  return <ClipLoader color={"#FFFFFF"} loading={props.loading} size={150} />;
}

export default Loading;
