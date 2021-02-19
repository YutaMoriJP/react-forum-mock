import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../util/Button";

const Sidebar = () => {
  const history = useHistory();
  console.log(history);
  return (
    <section>
      <h1>Sidebar</h1>
      <Button onClick={() => history.goBack()}>Go Back</Button>
    </section>
  );
};

export default Sidebar;
