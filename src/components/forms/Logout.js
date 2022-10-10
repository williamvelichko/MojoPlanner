import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Logout() {
  const { push } = useHistory();
  useEffect(() => {
    localStorage.removeItem("token");
    push("/LandingPage");
    window.location.reload();
  }, []);
  return <div></div>;
}

export default Logout;
