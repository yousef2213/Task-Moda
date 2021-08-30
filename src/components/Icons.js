import React, { useContext } from "react";
import { BsList } from "react-icons/bs";
import { TemplateContext } from "../context/context.js";
function Icons() {
  const { OpenSidebar } = useContext(TemplateContext);

  return (
    <div className="icon-div">
      <BsList className="icon-nav" onClick={OpenSidebar} />
    </div>
  );
}

export default Icons;
