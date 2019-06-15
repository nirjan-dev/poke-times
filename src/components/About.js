import React from "react";
import Rainbow from "../HOC/Rainbow";

function About() {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus id
        corrupti provident quo blanditiis cupiditate quibusdam maxime tenetur
        dignissimos nam aperiam, explicabo, molestias maiores adipisci
        perferendis saepe facere? Possimus, dolores.
      </p>
    </div>
  );
}

export default Rainbow(About);
