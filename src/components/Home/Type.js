import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div>
    <h1>I am a</h1>
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Mechatronics Engineer",
          "Software Developer",
          "Quantitative Trader"
          ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </div>
  );
}

export default Type;
