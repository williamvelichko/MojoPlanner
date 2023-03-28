import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Box } from "./EssentialsCSS/LoadingCSS";

function Loading(props) {
  return (
    <Box>
      <ClipLoader color={"#FFFFFF"} loading={props.loading} size={200} />
    </Box>
  );
}

export default Loading;
