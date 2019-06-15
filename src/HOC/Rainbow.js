import React from "react";

function Rainbow(WrappedComponent) {
  const colors = ["red", "pink", "orange", "blue", "pink"];
  const randomColor = colors[Math.floor(Math.random() * 4)];
  const className = randomColor + "-text";

  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default Rainbow;
