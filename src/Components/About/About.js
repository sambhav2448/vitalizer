import React from "react";
import DummyNavbar from "../DummyNavbar/DummyNavbar";

function About() {
  console.log("innnn");
  return (
    <div>
      <DummyNavbar />
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 700,
          //   paddingTop: "56.2500%",
          paddingBottom: 48,
          boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
          marginBottom: "0.9em",
          overflow: "hidden",
          borderRadius: 8,
          //   willChange: "transform",
        }}
      >
        <iframe
          style={{
            // position: "absolute",
            width: "100%",
            height: 700,
            top: 0,
            left: 0,
            border: "none",
            padding: 0,
            margin: 0,
          }}
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEKOh14oEM&#x2F;view?embed"
        ></iframe>
      </div>
    </div>
  );
}

export default About;
