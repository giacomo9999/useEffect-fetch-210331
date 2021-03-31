import React, { useState } from "react";

export default function Character(props) {
  const [panelOpen, setPanelOpen] = useState(false);

  const toggleDetails = () => {
    setPanelOpen(!panelOpen);
    console.log("toggling details", panelOpen);
  };

  return (
    <div className="container-inner">
      <h2>{props.name}</h2>
      <button onClick={toggleDetails}>Toggle Details</button>
      {panelOpen ? <h2>{props.gender}</h2> : null}
    </div>
  );
}
